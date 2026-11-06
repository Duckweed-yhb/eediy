# EE自学指南

> 代号 EEDIY（EE + DIY），对标 csdiy.wiki 的「CS自学指南」。

EE（电气电子工程）自学路线与笔记归档。参照 csdiy.wiki 的组织方式，把课程、教材、习题、项目和自己的笔记按成长路线分板块整理；站点基于 VitePress，内容全部以 Markdown 维护。

## 目录结构

```text
eediy_wiki/
├── docs/                          VitePress 站点根目录
│   ├── index.md                  站点首页（板块卡片导航）
│   ├── README.md                 EE 自学路线总览（板块关系与推荐顺序）
│   ├── roadmap.md                路线地图（课程前置依赖图 + 硬件→软件分层架构图）
│   ├── appendix/                 附录：电子书、公开课、资源网站、工具清单
│   │   ├── README.md
│   │   ├── books.md
│   │   ├── courses.md
│   │   ├── resources.md
│   │   └── tools.md
│   ├── .vitepress/config.mjs      站点配置（导航、侧边栏、base 路径）
│   ├── public/
│   │   └── assets/               笔记配图与 PDF（构建时原样拷贝到站点根）
│   │       ├── images/
│   │       └── pdf/
│   ├── templates/
│   │   └── course-template.md    单门课程 / 笔记模板
│   ├── 01-math-programming/      数理与编程基础
│   ├── 02-circuit-electronics/   电路与电子学
│   ├── 03-embedded-mcu/           嵌入式与单片机
│   ├── 04-motor-control/          电机与运动控制
│   ├── 05-power-system/          电力系统
│   ├── 06-signal-communication/  信号与通信
│   ├── 07-digital-fpga/          数字逻辑与 FPGA
│   ├── 08-hardware-toolchain/     硬件工具链
│   └── campus/                    同校指南（哈工大（深圳）电气工程及其自动化）
│       └── hitsz-ee/
│           ├── index.md           总览：课内 / 课外两条主线与学期导航
│           ├── curriculum/        课内：总览 + 12 个学期页（秋 / 春 / 夏 × 四学年）
│           └── beyond/            课外：总览 + 竞赛 / 项目 / 实习
├── .github/workflows/deploy.yml   GitHub Actions 自动构建并部署到 Pages
├── package.json                   VitePress 依赖与脚本
└── LICENSE                        MIT License
```

## 路线总览

- 图形化全局关系：[docs/roadmap.md](docs/roadmap.md) —— 课程前置依赖图与硬件→软件分层架构图。
- 板块关系、前置依赖与推荐学习顺序：[docs/README.md](docs/README.md)。
- 跨板块资源汇总（电子书、公开课、网站、工具）：[docs/appendix/README.md](docs/appendix/README.md)。

| 板块 | 页面 | 一句话定位 |
|---|---|---|
| 01 数理与编程基础 | [docs/01-math-programming/](docs/01-math-programming/README.md) | 高数、线代、概率、大学物理、C 语言 |
| 02 电路与电子学 | [docs/02-circuit-electronics/](docs/02-circuit-electronics/README.md) | 电路原理、模电、数电 |
| 03 嵌入式与单片机 | [docs/03-embedded-mcu/](docs/03-embedded-mcu/README.md) | MCU 外设驱动、裸机与 RTOS |
| 04 电机与运动控制 | [docs/04-motor-control/](docs/04-motor-control/README.md) | 电机模型、FOC、闭环控制 |
| 05 电力系统 | [docs/05-power-system/](docs/05-power-system/README.md) | 潮流、机组组合、经济调度 |
| 06 信号与通信 | [docs/06-signal-communication/](docs/06-signal-communication/README.md) | 信号与系统、通信原理、DSP |
| 07 数字逻辑与 FPGA | [docs/07-digital-fpga/](docs/07-digital-fpga/README.md) | 数字逻辑、状态机、Verilog |
| 08 硬件工具链 | [docs/08-hardware-toolchain/](docs/08-hardware-toolchain/README.md) | PCB、仿真、测量、版本管理 |
| 同校指南 | [docs/campus/hitsz-ee/](docs/campus/hitsz-ee/index.md) | 哈工大（深圳）电气工程及其自动化：课内 12 学期 + 课外竞赛 / 项目 / 实习 |

## 本地预览

> 需要 Node.js 18+（云端 CI 固定使用 20）；在仓库根目录执行。

```bash
npm install
npm run docs:dev       # 本地预览
npm run docs:build     # 构建静态站点到 docs/.vitepress/dist
npm run docs:preview   # 本地预览构建产物
```

## 部署到 GitHub Pages

站点通过 GitHub Actions 在云端构建，无需本地先打包。流程如下：

1. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**（只需设置一次）。
2. 工作流见 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)：推送到 `main` 后自动安装依赖、构建并发布。
3. 构建产物地址：<https://duckweed-yhb.github.io/eediy_wiki/>

`config.mjs` 中 `base` 设为 `/eediy_wiki/`，与仓库名子路径对应；若以后改为根域名部署，再把 `base` 改成 `/`。新增配图、PDF 一律放进 `docs/public/assets/`，Markdown 里用 `/assets/...` 根路径引用。

## 新增内容约定

- 新增课程或笔记：复制 [`docs/templates/course-template.md`](docs/templates/course-template.md)，放进对应板块目录，再回到该板块 README 的「我的笔记」补一行链接。
- 外部课程、教材、习题登记在板块 README 对应分区，写清名称、链接与一句话说明；自己写的笔记放在「我的笔记」。
- 跨板块的电子书、公开课平台、资源网站与通用工具统一登记在 [docs/appendix/](docs/appendix/README.md)，不与板块内专属资源重复维护。
- 尚未收集到的内容保留「（待补充）」占位，不凭印象填写课程名或链接。

## 许可证

代码与文档以 [MIT License](LICENSE) 发布。
