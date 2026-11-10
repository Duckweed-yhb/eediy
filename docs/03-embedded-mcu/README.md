# 03 嵌入式与单片机

单片机与嵌入式系统：GPIO、中断、定时器、串口、I2C、SPI、ADC、PWM 等外设驱动，裸机到 RTOS 的过渡，以及 C 语言在资源受限设备上的落地。

## 路线位置

- **前置**：[01 数理与编程基础](../01-math-programming/README.md)（C 语言）、[02 电路与电子学](../02-circuit-electronics/README.md)。
- **通往**：[04 电机与运动控制](../04-motor-control/README.md)、[07 数字逻辑与 FPGA](../07-digital-fpga/README.md)。
- **学习顺序建议**：先把一颗 MCU 的外设手册读通，再上 RTOS；驱动写法与电路配合着学。
- **方向路线**：[嵌入式与硬件系统（S0–S6 完整路线）](/directions/embedded) —— 从工具测量到 48 小时项目验收。
- **课程页**：[浙江大学 · STM32 嵌入式系统](/courses/stm32-zju) —— 主推荐与替代（电科大 HAL 课）的差异、完成标准、无板降级方案。

## 核心公开课与课程

> 卡片里的「难度」与「建议学时」是编辑估算，用于横向比较，不是课程官方数据。要报名或排时间，以课程页写明的周数与学分为准。

### Arduino 入门：零硬件基础快速点亮第一块板子

Arduino 把 MCU 的复杂细节封装成 `setup()` / `loop()` 与现成库，适合第一次接触单片机的人建立「写代码 → 板子上有反应」的直觉。

### Arduino Official Learn

- **开课院校**：Arduino 官方
- **先修要求**：无（会一点 C/C++ 基础即可）
- **编程语言 / 工具**：Arduino C++、Arduino IDE
- **难度**：🌟（入门）
- **建议学时**：约 20–30 小时
- **简介**：Arduino 官方 Learn 板块从「什么是 Arduino」讲起，逐步覆盖数字 / 模拟 I/O、串口、传感器读取、显示与通信协议。配套大量开源例程与硬件接线图，适合零基础建立嵌入式直觉；学完后再回头啃 STM32 寄存器会轻松很多。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | Arduino Learn | https://docs.arduino.cc/learn/ | 官方教程主页，含入门指南、例程、硬件文档（英文） |
| 视频录像 | B 站搜索「Arduino 入门教程」 | https://search.bilibili.com/all?keyword=Arduino%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B | 中文搬运 / 中文讲师，自行挑选播放量高的系列 |
| 教材 | Arduino 官方文档 | https://docs.arduino.cc/ | 函数参考、硬件板卡说明，免费在线 |
| 作业 / 实验 | Built-in Examples | https://docs.arduino.cc/built-in-examples/ | IDE 自带例程，从 Blink 到 Serial 全覆盖 |
| 自学建议 | — | — | 配合一块 Arduino Uno / Nano 或兼容板做；重点理解「引脚模式」「串口调试」「库的调用」三件事，不纠结寄存器细节 |

### STM32 外设驱动：从寄存器到 HAL 库，吃透一颗 MCU 的片上资源

STM32 是目前国内电赛、考研复试、工业界用得最广的 ARM Cortex-M MCU。下面两门中文 MOOC 一门走寄存器 + 库函数路线、一门走 CubeMX + HAL 路线，互为补充。

### 浙江大学 STM32嵌入式系统

- **开课院校**：浙江大学
- **先修要求**：C 语言、数字电路、模拟电路
- **编程语言 / 工具**：C、KEIL MDK、奋斗 STM32 开发板
- **难度**：🌟🌟🌟（核心）
- **建议学时**：约 80–100 小时（课程 48 学时 + 实验）
- **简介**：系统讲解 STM32 的 GPIO、中断、USART、定时器、看门狗、RTC、ADC / DAC、DMA、SPI、I2C，并在最后介绍 uC/OS 在 STM32 上的移植与多任务开发。课程同时讲寄存器与固件库函数，适合理解硬件底层；硬件平台用奋斗 STM32 开发板。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | STM32嵌入式系统（中国大学 MOOC） | https://www.icourse163.org/course/ZJU-1461550163 | 浙江大学，中文，10 周 48 学时；2026-11-11 访问确认页面可打开，标题为「STM32嵌入式系统_浙江大学_中国大学MOOC」，主讲人以课程页为准 |
| 视频录像 | 同课程页 | https://www.icourse163.org/course/ZJU-1461550163 | 含课件、测验、实验 |
| 教材 | 课程参考书目 | 见课程页「参考资料」 | 含《STM32 库开发实战指南》类教材，自行选购 |
| 作业 / 实验 | 课程实验 | https://www.icourse163.org/course/ZJU-1461550163 | 需配套奋斗 STM32 开发板或同型核心板 |
| 自学建议 | — | — | 先按课程顺序做外设实验；每个外设都先读参考手册对应章节再看代码，不要只抄库函数 |

### 电子科技大学 基于 STM32CubeMX 和 HAL 驱动库的嵌入式系统设计

- **开课院校**：电子科技大学
- **先修要求**：C 语言、电子线路基础
- **编程语言 / 工具**：C、STM32CubeMX、MDK-ARM、Nucleo-F411RE
- **难度**：🌟🌟🌟（核心）
- **建议学时**：约 60–80 小时（课程 48 学时）
- **简介**：以 STM32F4 + Nucleo-F411RE 为平台，用 CubeMX 图形化配置 + HAL 库快速上手嵌入式开发。覆盖 GPIO、外部中断、定时器（含 PWM、输入捕获）、串口通信，最后讲 FreeRTOS。适合工程实战导向、不想一开始就死磕寄存器的学习者。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | 基于 STM32CubeMX 和 HAL 驱动库的嵌入式系统设计 | https://www.icourse163.org/course/UESTC-1207429802 | 电子科大漆强主讲，中文，12 周 48 学时 |
| 视频录像 | 同课程页 | https://www.icourse163.org/course/UESTC-1207429802 | 含 CubeMX 操作演示、实验任务 |
| 教材 | 《嵌入式系统设计——基于 STM32CubeMX 与 HAL 库》 | 漆强，高等教育出版社，2022 | 课程配套教材，京东 / 淘宝可购 |
| 作业 / 实验 | Nucleo-F411RE 板级实验 | https://www.icourse163.org/course/UESTC-1207429802 | 官方开发板不足百元，淘宝 / ST 官方店可购 |
| 自学建议 | — | — | 与浙大课二选一开始，另一门对照看；重点掌握 CubeMX 配置流程 + HAL 库回调机制，寄存器层面靠 ST 官方参考手册补 |

### RTOS 与 Cortex-M 内核：从裸机轮询到多任务调度

裸机玩熟几个外设后，项目一复杂就会陷入 `while(1)` 里到处延时的困境。这一组用 FreeRTOS 官方文档 + ARM 官方手册把任务调度、中断同步、存储器模型讲透。

### FreeRTOS 官方文档与 Kernel 教程

- **开课院校**：FreeRTOS 官方（AWS 维护）
- **先修要求**：C 语言、基本 MCU 外设经验
- **编程语言 / 工具**：C、任意支持的 MCU（STM32 / ESP32 / ARM Cortex-M 等）
- **难度**：🌟🌟🌟🌟（进阶）
- **建议学时**：约 40–60 小时
- **简介**：FreeRTOS 是嵌入式领域用得最广的开源 RTOS 之一。官方文档从「什么是 RTOS」讲起，覆盖任务创建与调度、队列、信号量、互斥量、事件组、软件定时器、中断管理，并给出各端口（ARM Cortex-M / RISC-V 等）的移植说明。英文但写法清晰，配大量代码片段。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | FreeRTOS 官方文档 | https://www.freertos.org/ | 文档、下载、移植指南主页（英文） |
| 视频录像 | B 站搜索「FreeRTOS 入门教程」 | https://search.bilibili.com/all?keyword=FreeRTOS%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B | 中文讲解视频，自行挑选 |
| 教材 | FreeRTOS Kernel 介绍与官方教程 | https://www.freertos.org/Documentation/02-Kernel/01-About-the-FreeRTOS-kernel/01-FreeRTOS-kernel | 官方在线教程，免费 |
| 作业 / 实验 | 官方 Supported Demos | https://www.freertos.org/Documentation/02-Kernel/03-Supported-devices/04-Demos/02-Supported-demos | 各开发板移植例程，配合 STM32 开发板跑通 |
| 自学建议 | — | — | 先在裸机上把 GPIO / 串口 / 定时器玩熟，再上 RTOS；重点理解任务优先级、临界区、中断与任务间通信三种机制 |

### ARM Cortex-M 官方文档

- **开课院校**：ARM 官方
- **先修要求**：C 语言、数字逻辑
- **编程语言 / 工具**：C / 汇编、Keil / GCC ARM 工具链
- **难度**：🌟🌟🌟🌟（进阶参考）
- **建议学时**：按需查阅 20–40 小时
- **简介**：ARM Developer 文档站提供 Cortex-M0/M3/M4/M7/M33 等内核的技术参考手册（TRM）与架构参考手册（ARM Architecture Reference Manual）。这不是一门视频课，而是做 MCU 开发时必须随时翻阅的「字典」——中断向量表、NVIC、SysTick、存储器保护单元（MPU）、指令集都在这里。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | ARM Developer Documentation | https://developer.arm.com/documentation/ | 内核 TRM、架构手册、编译器指南检索入口（英文） |
| 视频录像 | — | — | 官方无系统视频课，配合国内 MOOC 学习 |
| 教材 | 《ARM Cortex-M3 权威指南》（Joseph Yiu，宋岩译） | 北京航空航天大学出版社 | 中文经典，配合 TRM 阅读 |
| 作业 / 实验 | — | — | 在调试器里观察寄存器 / 栈 / 中断行为 |
| 自学建议 | — | — | 不需要从头读；遇到「中断优先级怎么配」「PSP/MSP 是什么」时按章节查 |

## 教材与参考书

| 书名 | 作者 | 版本 | 用途章节 | 链接或书目说明 |
|---|---|---|---|---|
| 《STM32F4 开发实战——标准库 + 寄存器》 / 同系列 STM32 教材 | 刘军 / 正点原子团队 | 历年版 | GPIO、中断、定时器、串口、I2C、SPI、ADC、DMA | 正点原子资料下载中心：http://www.openedv.com/ （教材与开发板配套，不提供盗版 PDF） |
| 《嵌入式系统设计——基于 STM32CubeMX 与 HAL 库》 | 漆强 | 高等教育出版社，2022 | HAL 库开发全流程 | 电子科大 MOOC 配套教材，京东 / 淘宝可购 |
| 《ARM Cortex-M3 权威指南》 | Joseph Yiu 著，宋岩 译 | 北京航空航天大学出版社 | Cortex-M 内核、NVIC、中断、存储器模型 | 中文经典，配合 ARM 官方 TRM |
| STM32 参考手册（RM0090 等） | STMicroelectronics | 按型号分册 | 片上外设寄存器说明 | ST 官方文档站：https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html ；STM32 MCU Wiki：https://wiki.st.com/stm32mcu/ |
| STM32 数据手册（Data Sheet） | STMicroelectronics | 按型号分册 | 引脚定义、电气参数、封装 | 同上，芯片产品页下载 |
| FreeRTOS 内核手册 | Amazon Web Services | 最新版 | API 函数、配置项、移植说明 | 在线免费：https://www.freertos.org/Documentation/00-Overview |
| 《Arduino 编程从入门到精通》类教材 | 人民邮电 / 清华社等 | 按需 | Arduino 入门 | Arduino 官方文档已足够：https://docs.arduino.cc/ |

## 习题、实验与动手练习

- **GPIO 输出 / 输入实验**：LED 流水灯、按键消抖、继电器控制。完成方式：STM32 开发板 + 示波器 / 逻辑分析仪观察电平。
- **中断实验**：外部中断触发 LED 翻转、EXTI 线配置优先级。完成方式：HAL 库 / 寄存器两种写法各写一遍。
- **定时器实验**：定时中断、PWM 输出（呼吸灯）、输入捕获测频率。完成方式：接示波器测 PWM 占空比与频率。
- **串口 UART 实验**：printf 重定向到串口、中断接收不定长数据、与 PC 串口助手通信。完成方式：USB-TTL 模块 + 串口助手。
- **I2C / SPI 实验**：读 OLED 屏（SSD1306）、读 MPU6050 六轴传感器、驱动 W25Q64 Flash。完成方式：按模块接线，用逻辑分析仪抓波形。
- **ADC / DMA 实验**：采集电位器电压、DMA 采样多通道 ADC 并通过串口上报。完成方式：接电位器，串口看数据。
- **RTOS 实验**：创建两个任务分别闪 LED 与读传感器，用队列传递数据；用信号量同步中断与任务。完成方式：STM32 + FreeRTOS 移植工程。
- **Arduino 入门实验**：Blink、呼吸灯、按键控制、温湿度传感器（DHT11/DHT22）、串口绘图。完成方式：Arduino Uno + 面包板 + 杜邦线。

## 项目实战

### 入门（1–2 周）

- **目标**：做一个「环境监测节点」——OLED 屏显示温度 / 湿度 / 光照，按键切换页面。
- **工具**：STM32F103 / F411 开发板、SSD1306 OLED、DHT11 / BH1750 传感器、Keil / STM32CubeIDE。
- **参考方向**：综合 GPIO + I2C + 串口 + 简单状态机；不挂外部仓库，按外设例程自己拼。

### 进阶（3–5 周）

- **目标**：做一个「串口命令行控制板」——通过 UART 接收文本命令，控制 LED 亮度（PWM）、读取 ADC 电压、上报传感器数据。
- **工具**：STM32、HAL 库、FreeRTOS（命令解析任务 + LED 任务 + 采样任务）。
- **参考方向**：练习任务划分、队列传递命令字符串、PWM + ADC 联调。

### 综合（1–2 个月）

- **目标**：做一个「小型数据采集与上传节点」——多通道 ADC 采样 + DMA + SD 卡存储（SPI）+ 串口 / 蓝牙上报。
- **工具**：STM32、FreeRTOS、SPI Flash / SD 卡模块、蓝牙串口模块（HC-05 等）。
- **参考方向**：为 [04 电机与运动控制](../04-motor-control/README.md) 或电赛项目打底；重点练多外设协同与调试方法。

## 我的笔记

- （暂无笔记，后续整理后在此登记）
