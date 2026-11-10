# 路线地图：谁先学、谁依赖谁

> 这一页先给两张依赖图：**板块级概览**看谁先学、谁依赖谁，**课程级详图**把每个板块下的必修 / 选修课程逐门画出；最后是本 Wiki 独有的**硬件到软件分层架构图**（每个板块在系统中处于哪一层）。板块细节见各板块页面，这里只看全局关系。
>
> 这页回答「谁先学谁」。如果你还在决定要不要开始、从哪一段开始，先看 [如何使用本站](/guide)；想看四层结构（入门 / 共同基础 / 方向 / 实践）与五个方向的分叉，看 [课程体系](/curriculum) 与 [方向分流](/directions)。

## 一、课程依赖地图（前置关系）

### 1.1 板块级概览

先看全局：节点是八个板块，箭头表示**先修依赖**——箭头从先修板块指向后续板块；虚线代表「贯穿全程、不设先后阶段」的工具链板块。

```mermaid
flowchart TD
    classDef base fill:#fdeee6,stroke:#d47a5f,color:#1f2328;
    classDef circuit fill:#fdf3e6,stroke:#e0a05c,color:#1f2328;
    classDef digital fill:#eef1fc,stroke:#6c8ce0,color:#1f2328;
    classDef control fill:#e9f2fb,stroke:#4f94d4,color:#1f2328;
    classDef app fill:#eaf3ee,stroke:#3fa872,color:#1f2328;
    classDef tool fill:#f3f4f6,stroke:#9aa4af,color:#1f2328,stroke-dasharray: 5 4;

    B01["01 数理与编程基础"]:::base
    B02["02 电路与电子学"]:::circuit
    B06["06 信号与通信"]:::control
    B03["03 嵌入式与单片机"]:::digital
    B07["07 数字逻辑与 FPGA"]:::digital
    B04["04 电机与运动控制"]:::app
    B05["05 电力系统"]:::app
    B08["08 硬件工具链"]:::tool

    B01 --> B02
    B01 --> B06
    B01 --> B03
    B01 --> B05

    B02 --> B03
    B02 --> B07
    B02 --> B04
    B02 --> B05

    B03 --> B04
    B03 --> B07

    B06 --> B04

    B08 -.-> B02
    B08 -.-> B03
    B08 -.-> B04
    B08 -.-> B07
```

### 1.2 课程级依赖详图

下面这张图把每个板块下的**每一门课程**都画出来。圆圈分两类：**实心圆是必修主线**（本板块必须走完的核心课），**虚线圆是选修 / 拔高 / 对照补充**（按方向与精力选学）；板块标题矩形之间是板块级先修主线，课程之间的实线箭头是关键先修，虚线箭头是对照补充关系。08 工具链不设课程节点，贯穿全程随时回查。

```mermaid
flowchart TD
    classDef modhead fill:#eef1f5,stroke:#57606a,color:#1f2328,stroke-width:1.2px;
    classDef req fill:#dcefe4,stroke:#2f9e68,color:#1f2328,stroke-width:1.6px;
    classDef opt fill:#ffffff,stroke:#9aa4af,color:#57606a,stroke-dasharray:5 4,stroke-width:1.2px;
    classDef tool fill:#f3f4f6,stroke:#9aa4af,color:#57606a,stroke-dasharray:5 4;

    subgraph S01["01 数理与编程基础"]
        B01["01 数理与编程基础"]:::modhead
        n01a("浙大 · 微积分（一）"):::req
        n01b("MIT 18.06 线性代数"):::req
        n01c("电子科大 · 概率统计"):::req
        n01d("国防科大 · 电磁学"):::req
        n01e("CS50x · C 语言"):::req
        n01f("MIT 6.100L · Python"):::req
        n01g("MIT 18.01SC 微积分"):::opt
        n01h("MIT 6.041SC 概率"):::opt
        B01 --> n01a
        B01 --> n01e
        B01 --> n01f
        n01a --> n01b
        n01a --> n01c
        n01a --> n01d
        n01g -.-> n01a
        n01h -.-> n01c
    end

    subgraph S02["02 电路与电子学"]
        B02["02 电路与电子学"]:::modhead
        n02a("西交大 · 电路原理"):::req
        n02b("哈工大 · 模拟电子技术"):::req
        n02c("哈工大 · 数字电子技术"):::req
        n02d("MIT 6.071J 电子学测量"):::opt
        n02e("清华 · 模拟电子技术"):::opt
        n02f("中石大 · 电子技术基础"):::opt
        B02 --> n02a
        n02a --> n02b
        n02a --> n02c
        n02f -.-> n02b
        n02e -.-> n02b
        n02d -.-> n02a
    end

    subgraph S06["06 信号与通信"]
        B06["06 信号与通信"]:::modhead
        n06a("MIT RES.6.007 信号与系统"):::req
        n06b("西电 · 通信原理"):::req
        n06c("北交大 · 数字信号处理"):::req
        n06d("Berkeley EE120"):::opt
        n06e("MIT 6.341 离散时间 DSP"):::opt
        B06 --> n06a
        n06a --> n06b
        n06a --> n06c
        n06d -.-> n06a
        n06c -.-> n06e
    end

    subgraph S03["03 嵌入式与单片机"]
        B03["03 嵌入式与单片机"]:::modhead
        n03a("浙大 · STM32 嵌入式"):::req
        n03b("电子科大 · CubeMX HAL"):::req
        n03c("FreeRTOS 官方教程"):::req
        n03d("Arduino 官方 Learn"):::opt
        n03e("ARM Cortex-M 文档"):::opt
        B03 --> n03d
        n03d -.-> n03a
        n03a --> n03b
        n03a --> n03c
        n03e -.-> n03a
    end

    subgraph S07["07 数字逻辑与 FPGA"]
        B07["07 数字逻辑与 FPGA"]:::modhead
        n07a("清华 · 数字电子技术"):::req
        n07c("Nandland · Verilog"):::req
        n07b("Nand2Tetris 体系结构桥梁"):::opt
        n07d("MIT 6.111 数字系统实验"):::opt
        n07e("AMD Intel FPGA 文档"):::opt
        B07 --> n07a
        n07a --> n07c
        B07 -.-> n07b
        n07b -.-> n07c
        n07c --> n07d
        n07e -.-> n07c
    end

    subgraph S04["04 电机与运动控制"]
        B04["04 电机与运动控制"]:::modhead
        n04a("西工大 · 自动控制原理"):::req
        n04b("哈工程 · 现代控制理论"):::req
        n04c("华科 · 电机学"):::req
        n04d("MOOC · 电力电子学"):::req
        n04e("ST X-CUBE-MCSDK"):::req
        n04f("MIT 6.241J 动态系统控制"):::opt
        n04g("MIT 2.14 反馈控制"):::opt
        B04 --> n04a
        n04a --> n04b
        n04a -.-> n04f
        n04a -.-> n04g
        B04 --> n04c
        B04 --> n04d
        n04a --> n04e
        n04c --> n04e
        n04d --> n04e
    end

    subgraph S05["05 电力系统"]
        B05["05 电力系统"]:::modhead
        n05a("华科 · 电气工程基础"):::req
        n05b("MOOC · 电力系统分析"):::req
        n05c("NPTEL 电力系统动态"):::opt
        n05d("NPTEL 电力系统运行"):::opt
        n05e("广工 · 电分下经济运行"):::opt
        B05 --> n05a
        n05a --> n05b
        n05b -.-> n05c
        n05b -.-> n05d
        n05e -.-> n05d
    end

    B08["08 硬件工具链 · 贯穿全程\nEDA PCB · 仿真 · 仪器 · 调试 · 版本管理"]:::tool

    B01 --> B02
    B01 --> B06
    B01 --> B03
    B01 --> B05
    B02 --> B03
    B02 --> B07
    B02 --> B04
    B02 --> B05
    B03 --> B04
    B03 --> B07
    B06 --> B04

    n01e --> n03a
    n01b --> n04a
    n01c --> n06a
    n02a --> n03a
    n02c --> n07a
    n06a --> n04a
    n03a --> n04e

    B08 -.-> B02
    B08 -.-> B03
    B08 -.-> B04
    B08 -.-> B07
```

<div class="roadmap-legend">
  <span class="legend-item"><span class="legend-dot legend-dot--req"></span>必修主线：本板块必须走完的核心课程</span>
  <span class="legend-item"><span class="legend-dot legend-dot--opt"></span>选修 / 拔高 / 对照：按方向与精力选学</span>
  <span class="legend-item"><span class="legend-dot legend-dot--tool"></span>贯穿全程的工具链，不占固定学习阶段</span>
  <span class="legend-item legend-line">实线箭头 = 先修依赖；虚线箭头 = 对照 / 补充关系</span>
</div>

### 依赖关系说明

- **地基只有一个**：[01 数理与编程基础](./01-math-programming/README.md) 是所有后续板块的公共前置，C 语言、高数、概率、物理都在这里打牢；线代、概率、C 语言分别直通控制、信号与嵌入式。
- **硬件主线**：01 → 02 电路与电子学 → 03 嵌入式与单片机 → 04 电机与运动控制；02 的数电同时通向 07 数字逻辑与 FPGA。
- **信号主线**：01 → 06 信号与通信，信号与系统再为 04 的控制环与滤波提供频域基础。
- **系统方向**：05 电力系统建立在 01 的数学 / 优化基础与 02 的电路基础之上，与控制、算法结合做集成分析。
- **必修与选修**：每个板块的中文主流 MOOC / 官方核心教程为必修主线；英文 OCW、NPTEL、Berkeley 等拔高与对照课，以及厂商参考手册、零基础先导课标为选修，学完必修后按方向补充。
- **工具链**：[08 硬件工具链](./08-hardware-toolchain/README.md) 不安排固定阶段，做哪个板块的项目就随时回这里查对应工具。

## 二、硬件 → 软件分层架构图

课程依赖图回答「先学谁」；这张图回答「各板块处在系统的哪一层」。自下而上是**物理器件 → 电路 → 数字固件 → 控制算法 → 应用系统**，越往上越偏软件与抽象，越往下越贴近物理硬件。

<div class="arch-stack">

<div class="arch-layer" data-tone="app">
  <div class="arch-layer__head">
    <span class="arch-layer__level">L5 · 最偏软件</span>
    <span class="arch-layer__name">应用与系统层</span>
  </div>
  <div class="arch-layer__body">
    <p class="arch-layer__desc">把下层的驱动、算法组装成可运行的完整系统：闭环电机控制产品、电力系统分析与调度平台，面向具体工程目标。</p>
    <div class="arch-chips">
      <a class="arch-chip" href="/04-motor-control/README">04 电机与运动控制</a>
      <a class="arch-chip" href="/05-power-system/README">05 电力系统</a>
    </div>
  </div>
</div>

<div class="arch-layer" data-tone="control">
  <div class="arch-layer__head">
    <span class="arch-layer__level">L4</span>
    <span class="arch-layer__name">控制与信号算法层</span>
  </div>
  <div class="arch-layer__body">
    <p class="arch-layer__desc">在固件之上做信号处理、建模与闭环算法：时频域分析、滤波、变换、控制律，是连接底层硬件与上层系统的数学桥梁。</p>
    <div class="arch-chips">
      <a class="arch-chip" href="/06-signal-communication/README">06 信号与通信</a>
    </div>
  </div>
</div>

<div class="arch-layer" data-tone="digital">
  <div class="arch-layer__head">
    <span class="arch-layer__level">L3</span>
    <span class="arch-layer__name">数字 / 固件层</span>
  </div>
  <div class="arch-layer__body">
    <p class="arch-layer__desc">让数字硬件跑起程序：MCU 外设驱动与 RTOS、FPGA 上的并行逻辑，把电路层的器件组织成可编程、可配置的数字平台。</p>
    <div class="arch-chips">
      <a class="arch-chip" href="/03-embedded-mcu/README">03 嵌入式与单片机</a>
      <a class="arch-chip" href="/07-digital-fpga/README">07 数字逻辑与 FPGA</a>
    </div>
  </div>
</div>

<div class="arch-layer" data-tone="circuit">
  <div class="arch-layer__head">
    <span class="arch-layer__level">L2</span>
    <span class="arch-layer__name">电路与器件层</span>
  </div>
  <div class="arch-layer__body">
    <p class="arch-layer__desc">真实元器件与模拟 / 数字电路：电阻电容电感、放大器、运放、逻辑门，是所有数字设备赖以工作的物理载体。</p>
    <div class="arch-chips">
      <a class="arch-chip" href="/02-circuit-electronics/README">02 电路与电子学</a>
    </div>
  </div>
</div>

<div class="arch-layer" data-tone="physics">
  <div class="arch-layer__head">
    <span class="arch-layer__level">L1 · 最偏硬件</span>
    <span class="arch-layer__name">物理与数理基础层</span>
  </div>
  <div class="arch-layer__body">
    <p class="arch-layer__desc">描述电与运动的底层规律，以及计算所需的数学和第一门语言：大学物理、高数、线代、概率统计、C 语言。</p>
    <div class="arch-chips">
      <a class="arch-chip" href="/01-math-programming/README">01 数理与编程基础</a>
    </div>
  </div>
</div>

<div class="arch-toolchain">
  <span class="arch-toolchain__tag">贯穿全程</span>
  <span><a href="/08-hardware-toolchain/README">08 硬件工具链</a> —— EDA / PCB、仿真、测量仪器、调试与版本管理，支撑从 L1 到 L5 的每一层，不单独占一个学习阶段。</span>
</div>

</div>

## 三、推荐学习阶段

| 阶段 | 包含板块 | 目标 |
|---|---|---|
| **基础打底** | [01 数理与编程基础](./01-math-programming/README.md) | 语言、数学与物理过关，具备后续计算与建模能力 |
| **硬件入门** | [02 电路与电子学](./02-circuit-electronics/README.md)、[06 信号与通信](./06-signal-communication/README.md) | 看懂电路、掌握信号与频域分析 |
| **数字平台** | [03 嵌入式与单片机](./03-embedded-mcu/README.md)、[07 数字逻辑与 FPGA](./07-digital-fpga/README.md) | 在 MCU / FPGA 上驱动外设、组织并行逻辑 |
| **系统集成** | [04 电机与运动控制](./04-motor-control/README.md)、[05 电力系统](./05-power-system/README.md) | 完成闭环控制、电力分析与优化等完整工程 |
| **按需查阅** | [08 硬件工具链](./08-hardware-toolchain/README.md) | 做项目时回查对应工具与仪器用法 |

> 板块的完整索引、每门课程与笔记的位置，见 [路线总览](./README.md)；电子书、公开课、资源网站与工具清单见 [附录](./appendix/README.md)。为什么做这个站，见 [前言 · 为什么做这个站](/preface)。
