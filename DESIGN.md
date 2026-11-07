# DESIGN.md — EE 自学指南的视觉世界

> 这份文件是本站视觉的**唯一依据**。改样式之前先读它；改完之后同步更新它。
> 代码实现全部落在 `docs/.vitepress/theme/custom.css`（单文件，无组件、无 layout 覆盖）。

## 0. 一句话

**工程讲义 × 器件数据手册**：一页纸、一支笔、一条铜线。没有卡片、没有圆角、没有投影、没有渐变色字。

判断新东西是否属于这个世界，问三个问题：

1. 它像教材内页，还是像产品官网？（后者不要）
2. 它能不能只用 1px 实线和留白撑起层级？（不能就不要）
3. 它是不是在为"读懂"服务，而不是在为"好看"服务？

## 1. 定位

| 项 | 值 |
|---|---|
| surface mode | **Read**（读者来理解东西，不是来做决定） |
| 面向 | 电气/电子方向自学者，主要是在校生 |
| 阅读场景 | 白天长时段、论文式阅读；也会在暗环境里翻 |
| 明暗 | **跟随系统**（`appearance: true`，不按品类选） |
| 字体 | 系统阅读字体栈（Segoe UI / PingFang SC / Microsoft YaHei）+ 等宽栈，不引入自有 display 字体 |

## 2. Token

亮色（`:root`）

| token | 值 | 用途 |
|---|---|---|
| `--ee-paper` | `#f5f5f2` | 页面底，微暖纸面 |
| `--ee-paper-raised` | `#fdfdfb` | 卡片面（现在只用于表格/浮层） |
| `--ee-paper-sunk` | `#ebeae5` | 行内代码、代码块底 |
| `--ee-ink` | `#16181a` | 正文 |
| `--ee-ink-2` | `#474d50` | 导语、次级文本 |
| `--ee-ink-3` | `#6b7175` | 元信息、序号、标签 |
| `--ee-rule` | `#cfd1cc` | 普通分隔线 |
| `--ee-rule-strong` | `#a8aba5` | 章节线、表头线 |
| `--ee-copper` | `#8a5113` | **唯一强调色**：链接、序号、active |
| `--ee-copper-soft` | `#efe1cd` | 选区底、hover 底 |
| `--ee-copper-line` | `#c68b47` | 链接下划线、细引线 |

暗色（`.dark`）：`#141312 / #1b1a18 / #222120 / #e9e6e1 / #b3aca3 / #8c857b / #302e2b / #46423d / #d99a4e / #2a2118 / #a06b32`。

排版尺度

| token | 值 |
|---|---|
| `--ee-measure` | `46rem`（正文版心，约 65–75ch） |
| 正文 | 16.5px / line-height 1.85 / letter-spacing .01em |
| 文档 h1 | `clamp(1.75rem, 1.35rem + 1.4vw, 2.35rem)`，700，-0.02em |
| 首页 h1 | `clamp(2rem, 1.35rem + 3.1vw, 3.3rem)`，700，-0.035em，`max-width: 16ch` |
| h2 | 1.42rem / 650，**上方 2.8rem、下方 0.75rem**，带 `border-top: 1px rule` |
| 外壳 | `--vp-sidebar-width 15.5rem`、`--vp-nav-height 56px`、`--vp-layout-max-width 1520px` |

动效

- 首页索引行：hover 时 1px 铜线从左画到右，`width 0.32s cubic-bezier(0.16, 1, 0.3, 1)`。
- 链接：`0.15s ease`，只点 `color` / `text-decoration-thickness`。
- 全部属性点名，不出现 `transition: all`；`prefers-reduced-motion` 下两种动效一起关掉。

## 3. 结构规则

1. **线就是层级**：章节靠 `border-top: 1px` 分隔，表格靠横线，绝不靠色块、圆角卡片、投影。
2. **色彩只有一个来源**：铜色，用于"可以点/当前在哪"。同一屏里彩色元素不超过链接与序号两类。
3. **禁止彩色左边框**（含 2px、3px、4px 色条）。提示块、active 导航、campus-hero 一律 1px。
4. **禁止 kicker / eyebrow**：标题上方不放小字标签。
5. **禁止等大卡片网格当页面骨架**：首页已改为"论点 + 索引列表"。
6. **标题上方的空白多于下方**，靠这条把段落切开。
7. 表格 = 数据手册 ruled 表：只有上下 1px 粗线 + 表头线 + 行线，无斑马纹，`tabular-nums`。
8. 窄屏（≤720px）宽表转横向滚动；≤640px 双列组件降单列。

## 4. 首页

`docs/index.md` 用 `layout: page` + `sidebar: false` + `aside: false`。

- note：`layout: page` 的内容**不会被 `.vp-doc` 包裹**，DOM 是 `.VPPage > div > div`，所有首页选择器必须绕开 `.vp-doc`。
- Markdown 会把整行包成 `<p>`，网格里要落两列必须 `.VPPage li > p { display: contents }`。
- 首屏就是论点（h1），不是站名，不是 slogan + CTA 按钮。
- 索引条目：`<span class="idx-no">01</span> **标题** <span class="idx-gist">一句说明</span>`。

## 5. 组件映射

| 站点组件 | 新形态 |
|---|---|
| `.arch-stack` / `.arch-layer` | 1px 缝隙分层，不再五色左条；`[data-tone]` 统一 ink-3 |
| `.campus-hero` | 双列：左专业画像、右参数表，1px 左线 |
| `.campus-meta` | 上方 1px 分隔，两列键值 |
| `.campus-ladder` | 2.2rem 序号列 + 1px 左线 + 台阶缩进 |
| `.campus-grid` | ruled 表；单元格内链接是铜色下划线文本，**不套框** |
| `.roadmap-legend` | 方角 1px 框，dot 三态（实心铜 / 虚线 / 方块） |

## 6. 明确不要

等大卡片网格当骨架 · kicker/eyebrow · 超过 1px 的彩色边框 · 硬偏移阴影 · 渐变文字 · emoji 冒充图标系统 · 用系统 display 字体当品牌声音 · 按"教育类要暖色"选明暗。

## 7. 验证记录（2026-11-07）

- `npm run docs:build` exit 0，连续多轮；死链检查通过，仅有 chunk >500kB 的非致命告警。
- 桌面 1265px 宽复核：首页亮/暗、同校指南总览、`01-math-programming` 板块页、路线地图暗色，均无横向溢出（`scrollWidth == clientWidth`）。
- **未取得真实移动端截图**：本机 Browser Use 的 CDP 设备模拟不可用（`-32001 Session with given id not found`），≤720px 只有 CSS 规则依据。若要补：用真机或 Chrome DevTools 设备模式手动看一次首页与两张宽表。
