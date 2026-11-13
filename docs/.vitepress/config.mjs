// EE自学指南（代号 EEDIY）· VitePress 站点配置
// 说明：当前目录先以 Markdown 骨架为主；待 Node 18+ 环境就绪后，
// 在仓库根执行 `npm install`，再用 `npm run docs:dev` 本地预览。
// 文档：https://vitepress.dev/zh/guide/getting-started

import { defineConfig } from 'vitepress'
import { mermaidMarkdown, mermaidPlugin } from 'vitepress-plugin-mermaid-viewer'

export default defineConfig({
  // 站点根路径：按 GitHub Pages 子路径 /eediy/ 占位；若改为根路径部署则置 '/'
  base: '/eediy/',
  title: 'EE自学指南',
  description: 'EE（电气电子工程）自学路线与笔记归档',
  lang: 'zh-CN',
  // 生成 sitemap。hostname 要带 Pages 子路径，而且**必须以 / 结尾**：
  // 生成器用 new URL(page, hostname)，结尾没有斜杠时最后一段会被当成文件名替换掉。
  sitemap: {
    hostname: 'https://duckweed-yhb.github.io/eediy/'
  },
  // 首屏就套上读者上次选的配色，避免先闪一下默认色
  transformHead() {
    return [
      [
        'script',
        {},
        "try{var t=localStorage.getItem('eediy-theme');document.documentElement.dataset.theme=['cyber','romance','ink','pixel','blueprint','terminal','bauhaus','brutal'].indexOf(t)>-1?t:'paper'}catch(e){document.documentElement.dataset.theme='paper'}"
      ]
    ]
  },
  markdown: {
    config(md) {
      mermaidMarkdown(md)
    }
  },
  vite: {
    plugins: [mermaidPlugin()]
  },
  themeConfig: {
    // 一级入口压到 6 个：其余收进侧栏，避免中等宽度顶栏拥挤
    nav: [
      { text: '板块索引', link: '/README' },
      { text: '同校指南', link: '/campus/hitsz-ee/' },
      { text: '附录', link: '/appendix/README' }
    ],
    // 侧栏只留查阅任务：先读前言，再按板块找内容
    sidebar: [
      {
        text: '开始阅读',
        items: [
          { text: '前言 · 为什么做这个站', link: '/preface' },
          { text: '共同基础（先修缺口）', link: '/foundation' },
          { text: '板块索引（八个板块）', link: '/README' },
          { text: '附录总览', link: '/appendix/README' }
        ]
      },
      {
        text: '课程页',
        collapsed: true,
        items: [
          { text: 'Harvard CS50x · C 语言部分', link: '/courses/cs50-c' },
          { text: '西安交通大学《电路》', link: '/courses/circuit-xjtu' },
          { text: '浙江大学 · STM32 嵌入式系统', link: '/courses/stm32-zju' },
          { text: '课程模板（写新课程页用）', link: '/templates/course-template' }
        ]
      },
      {
        text: '八大板块',
        items: [
          { text: '01 数理与编程基础', link: '/01-math-programming/README' },
          { text: '02 电路与电子学', link: '/02-circuit-electronics/README' },
          { text: '03 嵌入式与单片机', link: '/03-embedded-mcu/README' },
          { text: '04 电机与运动控制', link: '/04-motor-control/README' },
          { text: '05 电力系统', link: '/05-power-system/README' },
          { text: '06 信号与通信', link: '/06-signal-communication/README' },
          { text: '07 数字逻辑与 FPGA', link: '/07-digital-fpga/README' },
          { text: '08 硬件工具链', link: '/08-hardware-toolchain/README' }
        ]
      },
      {
        text: '个人笔记',
        collapsed: true,
        items: [
          { text: 'C 语言学习笔记', link: '/01-math-programming/c-language' },
          { text: '概率论与数理统计笔记', link: '/01-math-programming/probability-statistics' },
          { text: '大学物理笔记（热学 · 光学 · 量子）', link: '/01-math-programming/university-physics-thermal-optics-quantum' }
        ]
      },
      {
        text: '同校指南',
        items: [
          { text: '总览 · 哈工大（深圳）电气', link: '/campus/hitsz-ee/' },
          {
            text: '课内 · 按学期',
            collapsed: true,
            items: [
              { text: '课内总览（学分与对照）', link: '/campus/hitsz-ee/curriculum/README' },
              {
                text: '大一',
                collapsed: true,
                items: [
                  { text: '大一秋 · 换挡期', link: '/campus/hitsz-ee/curriculum/y1-autumn' },
                  { text: '大一春 · 数学与物理入场', link: '/campus/hitsz-ee/curriculum/y1-spring' },
                  { text: '大一夏 · 第一个自由窗口', link: '/campus/hitsz-ee/curriculum/y1-summer' }
                ]
              },
              {
                text: '大二',
                collapsed: true,
                items: [
                  { text: '大二秋 · 电路年上半', link: '/campus/hitsz-ee/curriculum/y2-autumn' },
                  { text: '大二春 · 电路年下半', link: '/campus/hitsz-ee/curriculum/y2-spring' },
                  { text: '大二夏 · 竞赛启动窗口', link: '/campus/hitsz-ee/curriculum/y2-summer' }
                ]
              },
              {
                text: '大三',
                collapsed: true,
                items: [
                  { text: '大三秋 · 分水岭上半', link: '/campus/hitsz-ee/curriculum/y3-autumn' },
                  { text: '大三春 · 电力电子与课设', link: '/campus/hitsz-ee/curriculum/y3-spring' },
                  { text: '大三夏 · 升学就业决策', link: '/campus/hitsz-ee/curriculum/y3-summer' }
                ]
              },
              {
                text: '大四',
                collapsed: true,
                items: [
                  { text: '大四秋 · 收口与秋招', link: '/campus/hitsz-ee/curriculum/y4-autumn' },
                  { text: '大四春 · 毕设', link: '/campus/hitsz-ee/curriculum/y4-spring' },
                  { text: '大四夏 · 毕业与交接', link: '/campus/hitsz-ee/curriculum/y4-summer' }
                ]
              }
            ]
          },
          {
            text: '课外 · 三条线',
            collapsed: true,
            items: [
              { text: '课外总览（三条线的关系）', link: '/campus/hitsz-ee/beyond/README' },
              { text: '竞赛', link: '/campus/hitsz-ee/beyond/competition' },
              { text: '项目', link: '/campus/hitsz-ee/beyond/project' },
              { text: '实习', link: '/campus/hitsz-ee/beyond/internship' }
            ]
          }
        ]
      },
      {
        text: '附录资源',
        items: [
          { text: '电子书与经典教材', link: '/appendix/books' },
          { text: '公开课与慕课平台', link: '/appendix/courses' },
          { text: '资源与参考网站', link: '/appendix/resources' },
          { text: '软件与工具清单', link: '/appendix/tools' }
        ]
      }
    ],
    outline: { level: [2, 3] },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Duckweed-yhb/eediy' }],
    // 站内搜索：默认分词按空格切，中文句子会被当成一个整词，搜「指针」搜不出来。
    // 这里改成中文按二元组切（相邻两字一个 token），英文与数字整体保留。
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: (text) => {
              const tokens = []
              const re = /[\u3400-\u9fff]+|[A-Za-z0-9_+#.-]+/g
              let m
              while ((m = re.exec(text)) !== null) {
                const seg = m[0]
                if (/^[\u3400-\u9fff]/.test(seg)) {
                  if (seg.length === 1) {
                    tokens.push(seg)
                  } else {
                    // 只切二元组：搜「指针」能命中「数组与指针」，且不会因为单字 token 让结果爆炸
                    for (let i = 0; i < seg.length - 1; i++) tokens.push(seg.slice(i, i + 2))
                  }
                } else {
                  tokens.push(seg.toLowerCase())
                }
              }
              return tokens
            }
          },
          searchOptions: {
            boost: { title: 4, text: 2, titles: 1 },
            fuzzy: 0.2,
            prefix: true
          }
        }
      }
    }
  }
})
