#!/usr/bin/env node
/**
 * EEDIY 链接体检
 *
 * 用法：
 *   node scripts/check-links.mjs              只查站内链接与锚点（不需要网络）
 *   node scripts/check-links.mjs --external   追加外链探测（需要网络；走代理时设 HTTP_PROXY / HTTPS_PROXY）
 *
 * 站内检查覆盖：相对/绝对路径是否指向存在的文件、#锚点是否对得上标题。
 * 外链检查：HEAD 优先，被反爬或方法不支持时退 GET；403/405 记为「站点拒绝脚本」，不算死链。
 *
 * 退出码：0 无问题；1 有死链或坏锚点。
 */

import fs from 'node:fs'
import path from 'node:path'

const DOCS = 'docs'
const EXTERNAL = process.argv.includes('--external')

// Windows 检出的文件常带 CRLF；先统一，否则 (.*)$ 匹配不到 \r 结尾的行
const read = (p) => fs.readFileSync(p, 'utf8').replace(/\r\n?/g, '\n')

const files = []
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f)
    if (fs.statSync(p).isDirectory()) {
      if (!p.includes('node_modules') && !p.includes('.vitepress')) walk(p)
    } else if (f.endsWith('.md')) {
      files.push(p.replace(/\\/g, '/'))
    }
  }
}
walk(DOCS)

const slugify = (s) =>
  s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\p{L}\p{N}_-]+/gu, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

function headings(file) {
  const set = new Set()
  for (const line of read(file).split('\n')) {
    const m = line.match(/^#{1,6}\s+(.*)$/)
    if (m) set.add(slugify(m[1]))
  }
  return set
}

const anchorSets = new Map(files.map((f) => [f, headings(f)]))

// public/ 下的资源在构建时复制到站点根，源码里写成 /assets/...
// 链接里的括号等字符可能被写成 %28 这样的编码，比对磁盘文件前要先解码
function publicAsset(link) {
  let clean = link.split('#')[0].replace(/^\//, '')
  try {
    clean = decodeURIComponent(clean)
  } catch {
    /* 保持原样，交给存在性判断 */
  }
  return fs.existsSync(path.join(DOCS, 'public', clean))
}

function resolveTarget(from, clean) {
  let base
  if (clean.startsWith('/')) base = path.join(DOCS, clean.slice(1))
  else if (clean === '') return from
  else base = path.resolve(path.dirname(from), clean)

  const cands = [base, base + '.md', path.join(base, 'index.md'), base.replace(/\.html$/, '.md')]
  return cands.find((c) => fs.existsSync(c) && fs.statSync(c).isFile())
}

const broken = []
const badAnchor = []
const external = new Map()

for (const f of files) {
  const text = read(f)
  const re = /\]\(([^)\s]+)\)|https?:\/\/[^\s)\]"'<>，。、；：！？（）]+/g
  let m
  while ((m = re.exec(text))) {
    const link = m[1] || m[0]

    if (/^https?:/.test(link)) {
      const clean = link.replace(/[.,;:]+$/, '')
      if (!external.has(clean)) external.set(clean, f)
      continue
    }
    if (/^(mailto:|#)/.test(link)) {
      if (link.startsWith('#') && !anchorSets.get(f).has(link.slice(1))) {
        badAnchor.push(`${f} -> ${link}`)
      }
      continue
    }

    const [clean, frag] = link.split('#')

    if (clean.startsWith('/assets/')) {
      if (!publicAsset(clean)) broken.push(`${f} -> ${link}（public 下没有这个资源）`)
      continue
    }

    const hit = resolveTarget(f, clean)
    if (!hit) {
      broken.push(`${f} -> ${link}`)
      continue
    }
    if (frag) {
      const key = hit.replace(/\\/g, '/')
      const set = anchorSets.get(key)
      if (set && !set.has(frag)) badAnchor.push(`${f} -> ${link}`)
    }
  }
}

console.log(`站内检查：${files.length} 个 md，${external.size} 条唯一外链`)
console.log(`  死链 ${broken.length}`)
broken.forEach((b) => console.log('    ' + b))
console.log(`  坏锚点 ${badAnchor.length}`)
badAnchor.forEach((b) => console.log('    ' + b))

let externalFailed = 0
if (EXTERNAL) {
  const urls = [...external.keys()]
  const results = []
  let cursor = 0
  const CONCURRENCY = 10

  async function check(url) {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 20000)
    const ua = 'Mozilla/5.0 (compatible; EEDIY-link-check/1.0)'
    try {
      let res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: ctrl.signal, headers: { 'User-Agent': ua } })
      if (res.status === 405 || res.status === 501) {
        res = await fetch(url, { method: 'GET', redirect: 'follow', signal: ctrl.signal, headers: { 'User-Agent': ua } })
      }
      const softFail = res.status >= 400 && res.status < 500 && [401, 403, 429].includes(res.status)
      return { url, status: res.status, ok: res.status < 400 || softFail, soft: softFail }
    } catch (e) {
      return { url, status: 0, ok: false, soft: false, error: String(e?.message).slice(0, 60) }
    } finally {
      clearTimeout(timer)
    }
  }

  async function worker() {
    while (cursor < urls.length) {
      const i = cursor++
      results.push(await check(urls[i]))
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker))

  const hard = results.filter((r) => !r.ok)
  externalFailed = hard.length
  console.log(`\n外链检查：${results.length} 条，硬失败 ${hard.length}，软失败（反爬）${results.filter((r) => r.soft).length}`)
  hard.forEach((r) => console.log(`  [${r.status || 'ERR'}] ${r.url}  <- ${external.get(r.url)}`))
}

process.exit(broken.length + badAnchor.length + externalFailed > 0 ? 1 : 0)
