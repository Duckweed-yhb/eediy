# 07 数字逻辑与 FPGA

数字电路基础与可编程逻辑：组合 / 时序逻辑、状态机、Verilog / VHDL 描述、FPGA 工程流程与时序约束。

## 路线位置

- **前置**：[02 电路与电子学](../02-circuit-electronics/README.md)（数电部分）、[03 嵌入式与单片机](../03-embedded-mcu/README.md)（程序与硬件对应关系）。
- **通往**：高速并行处理、自定义硬件加速方向。
- **学习顺序建议**：先补数字逻辑与状态机，再写 RTL 例程，最后走通工程综合、布局布线与上板调试。

## 核心公开课与课程

> 卡片里的「难度」与「建议学时」是编辑估算，用于横向比较，不是课程官方数据。要报名或排时间，以课程页写明的周数与学分为准。

### 数字逻辑基础：从布尔代数到触发器与状态机

先把组合逻辑、时序逻辑、触发器、有限状态机这一套理论学扎实，后面写 Verilog 才不会变成「凭感觉抄代码」。

### 清华大学 数字电子技术基础

- **开课院校**：清华大学
- **先修要求**：电路原理
- **编程语言 / 工具**：无（理论课 + 实验）
- **难度**：🌟🌟🌟（核心）
- **建议学时**：约 80–100 小时
- **简介**：国家级一流课程，王红、任艳频、张涛主讲。系统覆盖逻辑代数、CMOS / TTL 门电路、组合逻辑电路（编码器 / 译码器 / 数据选择器 / 加法器）、触发器、时序逻辑电路、脉冲波形产生、半导体存储器、可编程逻辑器件、ADC / DAC。是中文世界最系统的数电入门课之一。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | 数字电子技术基础（国家高等教育智慧教育平台） | https://higher.smartedu.cn/course/62d8abface6ac77184c5ff6b | 中文；2026-11-11 访问确认链接可打开，但该页为动态渲染，未能确认页面内课程归属与开课状态，**待人工复核**；主讲人与教材信息以课程页为准 |
| 视频录像 | 同课程页 | https://higher.smartedu.cn/course/62d8abface6ac77184c5ff6b | 含课件、实验、测验 |
| 教材 | 《数字电子技术基础》（阎石主编，清华第五版） | 高等教育出版社 | 课程配套教材，经典数电教材 |
| 作业 / 实验 | 课程实验 | https://higher.smartedu.cn/course/62d8abface6ac77184c5ff6b | 与非门传输特性、触发器观测等 |
| 自学建议 | — | — | 重点吃透组合逻辑分析设计方法、触发器动作特性、同步 / 异步时序电路分析；为后面写 Verilog FSM 打基础 |

### 从与非门搭一台计算机：Nand2Tetris

用纯软件仿真，从一颗与非门开始，逐级搭出 ALU、寄存器、指令集、CPU，最后跑出自己写的程序。这门课是理解「硬件怎么变成软件」的好桥梁。

### Nand2Tetris（从与非门到计算机）

- **开课院校**：Hebrew University of Jerusalem（Shimon Schocken、Noam Nisan）
- **先修要求**：基本编程能力（会一门语言即可）
- **编程语言 / 工具**：HDL（硬件描述语言，课程自定义）、Java / Python / C（写汇编与虚拟机）
- **难度**：🌟🌟🌟🌟（进阶但极佳）
- **建议学时**：约 100–150 小时（Part I + Part II）
- **简介**：全球最流行的「从零搭计算机」公开课。Part I 从 Nand 门搭出逻辑门、ALU、寄存器、CPU；Part II 在硬件之上搭汇编器、虚拟机、编译器，最后跑一个俄罗斯方块。全程仿真，不需要买 FPGA 板，适合理解计算机体系结构与硬件描述语言的思维方式。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | Nand2Tetris | https://www.nand2tetris.org/ | 课程主页、工具下载、项目说明（英文） |
| 视频录像 | 课程项目页 | https://www.nand2tetris.org/course | 配套视频可在 Coursera / YouTube 找到，官网有索引 |
| 教材 | 《The Elements of Computing Systems》 | Shimon Schocken, Noam Nisan, MIT Press | 课程配套书，中译《计算机系统要素》 |
| 作业 / 实验 | 12 个 Project | https://www.nand2tetris.org/course | 每章一个 HDL / 编译器项目，官方提供测试脚本 |
| 自学建议 | — | — | 纯软件仿真即可完成；重点体会「逐层抽象」的思维，与本板块后面写真实 Verilog 形成对照 |

### Verilog HDL 与 FPGA 工程：写 RTL、跑仿真、上板调试

理论和体系结构都有了，接下来要学一门真正的硬件描述语言，并走通「代码 → 综合 → 布局布线 → 上板」的完整 FPGA 流程。

### Nandland Learn Verilog

- **开课院校**：Nandland（社区免费教程）
- **先修要求**：数字逻辑基础
- **编程语言 / 工具**：Verilog、ModelSim / Vivado Simulator
- **难度**：🌟🌟🌟（核心）
- **建议学时**：约 30–50 小时
- **简介**：Nandland 是工程师 Gordon 写的免费 Verilog / FPGA 教程站，从「Verilog 是什么」讲起，覆盖 always 块、assign、case、模块例化、Testbench、ModelSim 仿真，并有 LED 闪烁、按键消抖、数码管、UART、FIFO、LFSR 等可运行模块例程。写法直白，适合作为第一本 Verilog 入门书。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | Learn Verilog – Nandland | https://nandland.com/learn-verilog/ | Verilog 教程索引页（英文） |
| 视频录像 | B 站搜索「Verilog 入门教程」 | https://search.bilibili.com/all?keyword=Verilog%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B | 中文讲解视频，自行挑选 |
| 教材 | 站内 Tutorials + Modules | https://nandland.com/learn-verilog/ | 免费在线，含代码示例 |
| 作业 / 实验 | 站内 Projects（LED Blink、Debounce、7-Seg、UART、Simulation） | https://nandland.com/ | Project 1–6 循序渐进，含 Verilog / VHDL 双版本 |
| 自学建议 | — | — | 每个模块都写 Testbench 在 ModelSim / 开源仿真器里跑波形；重点理解「组合逻辑用 assign / always @(*)」「时序逻辑用 always @(posedge clk)」两条规则 |

### MIT 6.111 Introductory Digital Systems Laboratory

- **开课院校**：MIT
- **先修要求**：数字逻辑、C 语言
- **编程语言 / 工具**：Verilog、Xilinx FPGA 开发板
- **难度**：🌟🌟🌟🌟🌟（高阶）
- **建议学时**：约 150–200 小时
- **简介**：MIT 最硬核的数字系统实验课之一。从组合逻辑、Verilog、FSM 讲起，逐步走到 SRAM 接口、音频 / 视频、高速接口，最后做一个大型期末项目。OCW 上有完整讲义、习题、实验指导与历年考题，是英文世界 FPGA / 数字设计教学的标杆。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | MIT 6.111 Introductory Digital Systems Laboratory | https://www.ocw.mit.edu/courses/6-111-introductory-digital-systems-laboratory-spring-2006/ | OCW 课程页（英文） |
| 视频录像 | OCW 讲义与习题 | https://www.ocw.mit.edu/courses/6-111-introductory-digital-systems-laboratory-spring-2006/ | 该学期 OCW 有讲义 / 习题 / 考试归档，无完整视频录像 |
| 教材 | 课程讲义 + Digital Design（Mano / Ciletti 类教材） | 见课程页 | 以课程讲义为主 |
| 作业 / 实验 | Labs + 期末项目 | https://www.ocw.mit.edu/courses/6-111-introductory-digital-systems-laboratory-spring-2006/pages/exams/ | 含历年 Quiz、Lab 指导 |
| 自学建议 | — | — | 不建议作为第一门 FPGA 课；先在 Nandland / 中文 MOOC 上跑通 LED 闪烁与 UART，再按 6.111 的 Lab 题目做扩展 |

### FPGA 工具链：AMD/Xilinx Vivado 与 Intel Quartus 官方文档

- **开课院校**：AMD（Xilinx）、Intel（Altera）官方
- **先修要求**：Verilog 基础
- **编程语言 / 工具**：Vivado、Quartus Prime、ModelSim / Vivado Simulator
- **难度**：🌟🌟🌟🌟（工具参考）
- **建议学时**：按需查阅 20–40 小时
- **简介**：做 FPGA 必须用厂商 EDA 工具。AMD/Xilinx 与 Intel 官方文档站提供了从工程创建、综合、布局布线、时序约束到上板调试的完整用户指南。不需要从头读，按项目遇到的问题查对应章节即可。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | AMD/Xilinx 官方文档（Vivado） | https://docs.amd.com/ | Vivado 设计套件用户指南、时序约束、IP 核文档（英文） |
| 视频录像 | B 站搜索「FPGA 开发入门」 | https://search.bilibili.com/all?keyword=FPGA%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8 | 中文 Vivado / Quartus 教学视频，自行挑选 |
| 教材 | Intel Quartus Prime 用户指南 | https://www.intel.com/content/www/us/en/products/programmable.html | Intel/Altera FPGA 与 Quartus 文档入口（英文） |
| 作业 / 实验 | 厂商官方 Tutorial | https://docs.amd.com/ | 从「Hello World」LED 闪烁到 PCIe / 高速接口示例 |
| 自学建议 | — | — | 选定一块开发板（Xilinx Artix-7 / Intel Cyclone IV 均可）后，跟着厂商 Getting Started 指南走通一遍「工程 → 编译 → 下载」流程 |

## 教材与参考书

| 书名 | 作者 | 版本 | 用途章节 | 链接或书目说明 |
|---|---|---|---|---|
| 《数字电子技术基础》 | 阎石 主编 | 第五版，高等教育出版社 | 组合 / 时序逻辑、触发器、FSM | 清华数电 MOOC 配套教材 |
| 《The Elements of Computing Systems》 | Shimon Schocken, Noam Nisan | MIT Press，第 2 版 | Nand2Tetris 全程 | 中译《计算机系统要素：从零开始构建现代计算机》 |
| 《Verilog HDL 数字设计与综合》 | Samir Palnitkar | 电子工业出版社 | Verilog 语法、可综合风格 | 经典 Verilog 教材 |
| 《FPGA 设计实战指南——器件、工具、流程》 | 何宾 | 清华大学出版社 | Vivado 流程、约束、上板 | 中文 FPGA 工程实战参考 |
| Xilinx / AMD 官方文档集 | AMD | 在线版 | Vivado 综合、时序约束、ILA 调试 | https://docs.amd.com/ |
| Intel/Altera FPGA 文档集 | Intel | 在线版 | Quartus 流程、TimeQuest 时序分析 | https://www.intel.com/content/www/us/en/products/programmable.html |
| Nand2Tetris HDL 硬件手册 | Schocken & Nisan | 在线版 | 课程自定义 HDL 语法 | https://www.nand2tetris.org/ |

## 习题、实验与动手练习

- **组合逻辑实验**：用 Verilog 写与门 / 或门 / 非门、多路选择器、译码器、加法器，写 Testbench 在 ModelSim / Vivado Simulator 里跑波形。完成方式：纯仿真，不需开发板。
- **时序逻辑实验**：D 触发器、计数器、分频器、按键消抖（Nandland Project 4）。完成方式：仿真 + 上板观察 LED。
- **状态机实验**：摩尔 / 米利状态机设计——自动售卖机、序列检测器、交通灯控制器。完成方式：画出状态转移图 → 写三段式 FSM → 仿真验证。
- **Nand2Tetris 12 个 Project**：从 Nand 门到 ALU、CPU、汇编器、虚拟机、编译器，全程仿真。完成方式：官方提供测试脚本，全部 Pass 即通过。
- **Verilog 模块实验**：UART 收发、SPI 主从、I2C 主机、FIFO、LFSR、PWM 发生器。完成方式：Nandland Modules 页有参考代码，先读再自己重写。
- **FPGA 上板实验**：LED 闪烁、按键控制 LED、数码管静态 / 动态显示、VGA 显示彩条、串口回环。完成方式：选一块 Artix-7 / Cyclone IV 开发板，走通 Vivado / Quartus 全流程。
- **时序约束实验**：加时钟约束、IO 约束，看时序报告（Setup / Hold Slack），解决违例。完成方式：Vivado Timing Analyzer / Quartus TimeQuest。

## 项目实战

### 入门（1–2 周）

- **目标**：在 FPGA 板上做一个「呼吸灯 + 按键控制数码管」。
- **工具**：Xilinx Artix-7 / Intel Cyclone IV 开发板、Vivado / Quartus、Verilog。
- **参考方向**：PWM 模块驱动 LED 亮度、按键消抖、数码管动态扫描；综合走通全流程并下载到板上。

### 进阶（3–5 周）

- **目标**：做一个「FPGA 与 PC 串口通信模块」——FPGA 通过 UART 接收 PC 命令，控制板上 LED 并回传状态；或做一个 VGA 彩条 / 简单图形发生器。
- **工具**：FPGA 开发板、UART 模块（Nandland 参考）、VGA 时序模块、ModelSim 仿真。
- **参考方向**：练习同步 FIFO、跨时钟域处理、状态机控制通信时序。

### 综合（1–2 个月）

- **目标**：做一个「小型 NES / 贪吃蛇游戏机」——VGA 显示 + PS/2 键盘或按键控制 + 简单游戏逻辑，全部用 Verilog 实现。
- **工具**：FPGA 开发板、VGA 输出、PS/2 接口、Block RAM 存精灵图。
- **参考方向**：参考 Nand2Tetris Part II 的虚拟机思想或直接用 Verilog 写游戏状态机；重点练模块划分与时序收敛。

## 我的笔记

- （暂无笔记，后续整理后在此登记）
