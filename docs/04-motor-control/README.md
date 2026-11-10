# 04 电机与运动控制

电机模型、驱动电路与闭环控制：直流 / 无刷 / PMSM 电机原理，FOC 磁场定向控制，电流环、速度环、位置环，以及逆变器与 PWM 调制。

## 路线位置

- **前置**：[02 电路与电子学](../02-circuit-electronics/README.md)、[03 嵌入式与单片机](../03-embedded-mcu/README.md)、[06 信号与通信](../06-signal-communication/README.md)（控制与滤波基础）。
- **通往**：竞赛电控项目、机器人 / 小车运动控制方向。
- **学习顺序建议**：先理解电机模型与坐标变换，再在仿真里跑通电流环，最后落到 MCU 实测。
- **跨方向说明**：本板块「方向一：经典与现代控制理论」不只服务电机。[05 电力系统](../05-power-system/README.md) 的稳定分析、机器人与小车电控都要用这门课。做电力或机器人方向的人来这里取课，不算走错板块。
- **方向路线**：[电机驱动与控制](/directions) 的课程链、第一个项目与缺口（电力电子尚无完整课程条目）。

## 核心公开课与课程

> 卡片里的「难度」与「建议学时」是编辑估算，用于横向比较，不是课程官方数据。要报名或排时间，以课程页写明的周数与学分为准。

> 本板块分三条主线：**经典/现代控制理论**打底 → **电机原理与电力电子**建模 → **FOC 与运动控制**落地。PMSM / FOC 竞赛电控与清华电气复试方向，建议三条线交叉推进，控制理论与电机学并行学，最后用 ST 官方 SDK 在 STM32G4/F4 上跑通无感 FOC。

### 方向一：经典与现代控制理论

控制理论是电机闭环（电流环 / 速度环 / 位置环）的数学骨架。中文课优先跟胡寿松教材体系打基础，英文课用 MIT OCW 补频域分析与状态空间直觉。

---

### 西北工业大学《自动控制原理》

- **开课院校**：西北工业大学（卢京潮、石静等团队）
- **先修要求**：高等数学、复变函数、线性代数基础
- **编程语言 / 工具**：纸笔推导 + MATLAB / Simulink 做频域与时域仿真
- **难度**：🌟🌟🌟🌟（核心 3–4 星）
- **建议学时**：约 80–100 小时
- **简介**：国内胡寿松《自动控制原理》教材体系的主流 MOOC 之一，覆盖传递函数、时域分析、根轨迹、频域校正、PID 设计与非线性系统入门。是电气、自动化、机电专业考研与复试的核心理论课，也是后续 FOC 电流环 PI 整定的直接基础。适合先修完电路与高等数学的自学者。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | 中国大学 MOOC · 自动控制原理 | https://www.icourse163.org/course/NWPU-1472032161 | 中文，含讲义、章节测验与讨论区 |
| 视频录像 | 中国大学 MOOC 课程页录像 | https://www.icourse163.org/course/NWPU-1207128810 | 中文，另一开学期次，可交叉参考 |
| 教材 | 《自动控制原理》（第七版），胡寿松主编，科学出版社 | 科学出版社官方书目页 | 国内使用范围较广的教材，配套习题解答 |
| 作业 / 实验 | 课程章节测验 + MATLAB 频域仿真练习 | https://search.bilibili.com/all?keyword=%E8%83%A1%E5%AF%BF%E6%9D%BE%20%E8%87%AA%E5%8A%A8%E6%8E%A7%E5%88%B6%E5%8E%9F%E7%90%86 | B 站搜索入口，配合做题 |
| 自学建议 | — | — | 重点吃透根轨迹与 Bode 图校正，为后续 FOC 电流环 PI 参数整定打基础；每章课后题必做 |

### 哈尔滨工程大学《现代控制理论》

- **开课院校**：哈尔滨工程大学
- **先修要求**：自动控制原理（经典控制）、线性代数
- **编程语言 / 工具**：MATLAB / Simulink 状态空间建模
- **难度**：🌟🌟🌟🌟
- **建议学时**：约 60–80 小时
- **简介**：从传递函数过渡到状态空间描述，覆盖状态方程建立、能控能观性、状态反馈、观测器与李雅普诺夫稳定性。对电机控制而言，这门课是理解 PMSM d-q 模型、Luenberger 观测器与无传感 FOC 的理论前提。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | 中国大学 MOOC · 现代控制理论（哈工程） | https://www.icourse163.org/course/HRBEU-1205960802 | 中文，含状态空间与多项式矩阵描述 |
| 视频录像 | 同上 MOOC 课程页录像 | https://www.icourse163.org/course/HRBEU-1205960802 | 中文原版 |
| 教材 | 《现代控制理论》，刘豹、唐万生主编，机械工业出版社 | 机械工业出版社官方书目页 | 国内配套主流教材 |
| 作业 / 实验 | 课程章节作业 + MATLAB `ss()` / `place()` / `observer()` 练习 | — | 用 MATLAB 搭建状态空间模型并设计极点配置 |
| 自学建议 | — | — | 重点吃透状态反馈与观测器，后续 ST 无感 FOC 的 Luenberger 观测器直接对应这里 |

### MIT 6.241J Dynamic Systems and Control

- **开课院校**：MIT（OCW）
- **先修要求**：微分方程、线性代数
- **编程语言 / 工具**：MATLAB / Simulink
- **难度**：🌟🌟🌟🌟
- **建议学时**：约 100–120 小时
- **简介**：MIT 经典系统与控制课，连续覆盖建模、反馈、状态空间、最优控制与稳定性。英文授课，例题工程化程度高，适合在中文自动控制原理之后做体系化拔高，是清华电气复试与国外教材对照的主力课。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | MIT OCW · 6.241J Spring 2011 | https://www.ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/ | 英文，含 syllabus、讲义、作业、考试归档 |
| 视频录像 | 课程主页（本课程无公开录像，以讲义与作业为主） | https://www.ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/ | English，配合讲义自学 |
| 教材 | Feedback Systems: An Introduction for Scientists and Engineers，Karl Johan Åström & Richard M. Murray | https://fbswiki.org/wiki/index.php/Main_Page | 作者开源免费 PDF；2026-11-11 核验：原 Caltech 站点已 404，书站迁至 FBSwiki |
| 作业 / 实验 | OCW assignments + MATLAB lab | https://www.ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/pages/assignments/ | 含历年题与 solution |
| 自学建议 | — | — | 与西工大自动控制原理并行对照学，英文术语与中文教材名词一一对应 |

### MIT 2.14 Analysis and Design of Feedback Control Systems

- **开课院校**：MIT（Mechanical Engineering）
- **先修要求**：微分方程、基础电路
- **编程语言 / 工具**：MATLAB / Simulink
- **难度**：🌟🌟🌟
- **建议学时**：约 60–80 小时
- **简介**：面向机械与工程方向的反馈控制导论，以实例驱动讲 PID、频域校正与稳定性，节奏比 6.241J 更慢、更直观。适合在啃完中文自动控制原理后做工程化复习。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | MIT OCW · 2.14 Spring 2014 | https://www.ocw.mit.edu/courses/2-14-analysis-and-design-of-feedback-control-systems-spring-2014/ | 英文，含习题、项目归档 |
| 视频录像 | 课程主页（本课程无公开录像，以习题与项目为主） | https://www.ocw.mit.edu/courses/2-14-analysis-and-design-of-feedback-control-systems-spring-2014/ | English，配合作业自学 |
| 教材 | Modern Control Engineering，Katsuhiko Ogata，Prentice Hall | 出版社官方书目页 | 经典英文控制教材 |
| 作业 / 实验 | OCW assignments | https://www.ocw.mit.edu/courses/2-14-analysis-and-design-of-feedback-control-systems-spring-2014/pages/assignments/ | 含 solution |
| 自学建议 | — | — | 用作 6.241J 的缓冲与补充，通过习题与设计案例建立物理直觉 |

---

### 方向二：电机原理与电力电子

电机学讲清楚「电机为什么能动」，电力电子讲清楚「逆变器怎么把直流电变成三相交流电」。这两块是 FOC 的物理层基础。

---

### 华中科技大学《电机学》

- **开课院校**：华中科技大学（杨凯、熊永前、杨军等团队）
- **先修要求**：电路原理、电磁学、高等数学
- **编程语言 / 工具**：纸笔推导 + MATLAB 稳态仿真
- **难度**：🌟🌟🌟🌟🌟
- **建议学时**：约 100–120 小时
- **简介**：国内电机学标杆 MOOC 之一，覆盖变压器、直流电机、异步电机、同步电机（含 PMSM）的结构、电磁关系与运行特性。PMSM 的 d-q 模型、磁链方程、转矩方程都在这门课里第一次出现，是 FOC 建模的源头。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | 中国大学 MOOC · 电机学（华科） | https://www.icourse163.org/course/HUST-1206691841 | 中文，国家级精品课 |
| 视频录像 | 同上 MOOC 课程页录像 | https://www.icourse163.org/course/HUST-1206691841 | 中文原版 |
| 教材 | 《电机学》（第三版），辜承林、陈乔夫、熊永前主编，华中科技大学出版社 | 华中科技大学出版社官方书目页 | 课程配套教材 |
| 作业 / 实验 | 课程章节测验 + 电机稳态仿真实例 | — | 重点做变压器、异步机、同步机稳态等效电路题 |
| 自学建议 | — | — | PMSM 方向重点啃同步电机章节，理解 d-q 坐标变换的物理意义，为 FOC 做准备 |

### 中国大学 MOOC《电力电子学》（逆变器与 SPWM 章节）

- **开课院校**：中国大学 MOOC 平台课程（参考王兆安《电力电子技术》教材体系）
- **先修要求**：电路原理、模拟电子技术
- **编程语言 / 工具**：MATLAB / Simulink / PLECS 仿真
- **难度**：🌟🌟🌟🌟
- **建议学时**：约 60–80 小时（重点学逆变与 PWM 章节）
- **简介**：覆盖整流、直流变换、逆变与 PWM 控制技术。对 FOC 方向而言，重点是第四章三相逆变电路与第七章 SPWM/SVPWM 原理——这正是 ST 三相逆变器硬件与调制算法的理论对应。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | 中国大学 MOOC · 电力电子学 | https://www.icourse163.org/course/detail.htm?cid=1003409011 | 中文，含 SPWM 单极性/双极性/倍频专题 |
| 视频录像 | 同上课程页录像 | https://www.icourse163.org/course/detail.htm?cid=1003409011 | 中文原版 |
| 教材 | 《电力电子技术》（第五版），王兆安、刘进军主编，机械工业出版社 | 机械工业出版社官方书目页 | 国内电力电子标配教材 |
| 作业 / 实验 | 课程作业 + Simulink 三相桥逆变仿真 | https://search.bilibili.com/all?keyword=SPWM%20SVPWM%20%E4%B8%89%E7%9B%B8%E9%80%86%E5%8F%98%E5%99%A8 | B 站搜索入口，看波形仿真演示 |
| 自学建议 | — | — | 其他章节可略读，死磕 SPWM 与 SVPWM 矢量合成，后续直接对应 MCU 寄存器配置 |

---

### 方向三：FOC 与运动控制实践

理论学完后，用 ST 官方生态把 Clarke/Park、电流环、速度环、SVPWM 在真实 STM32 上跑通。这部分以厂商官方文档为主，不依赖未核实的第三方博客。

---

### STMicroelectronics X-CUBE-MCSDK 与 STM32 电机控制生态

- **开课院校**：ST 官方（厂商技术生态，非大学课程）
- **先修要求**：STM32 嵌入式开发、C 语言、自动控制原理、电机学
- **编程语言 / 工具**：C（STM32 HAL/LL）、STM32CubeIDE、Motor Control Workbench、ST Motor Pilot
- **难度**：🌟🌟🌟🌟🌟
- **建议学时**：约 80–120 小时（含硬件调参）
- **简介**：ST 官方 PMSM/BLDC FOC SDK，覆盖电流环 / 速度环 / 位置环、编码器 / HALL / 无感观测器、SVPWM、死区补偿等全套工业级算法。配合中文开发者指南与 FAQ wiki，是国内做 PMSM FOC 竞赛电控最主流的开源可参考实现。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | ST X-CUBE-MCSDK 官方页 | https://www.st.com/en/embedded-software/x-cube-mcsdk.html | 英文，SDK 下载与授权说明 |
| 视频录像 | ST 中文电机控制生态页 | https://www.st.com.cn/content/st_com/zh/ecosystems/stm32-motor-control-ecosystem.html | 中文，含演示视频与开发板选型 |
| 教材 | PMSM Single/Dual FOC 库开发者指南（中文 PDF） | https://www.st.com/resource/zh/user_manual/cd00298482-advanced-developer-s-guide-for-stm32f-mcus-pmsm-single-dual-foc-library-stmicroelectronics.pdf | 中文官方手册，直接对着代码读 |
| 作业 / 实验 | ST Motor Control FAQ wiki + SDK Getting Started | https://wiki.st.com/stm32mcu/wiki/STM32MotorControl:Frequently_Asked_Questions | 英文 wiki，FAQ 覆盖调参、观测器、采样电阻等工程坑 |
| 自学建议 | — | — | 按 SDK 6.x Getting Started 顺序：先 Motor Pilot 调通开环 → 电流环 → 速度环 → 无感观测器；配合中文开发者指南逐章读代码 |

## 教材与参考书

| 书名 | 作者 | 版本 | 用途章节 | 链接或书目说明 |
|---|---|---|---|---|
| 《自动控制原理》（第七版） | 胡寿松 主编 | 科学出版社，2019 | 传递函数、根轨迹、频域校正、PID | 国内控制原理标配教材，配套习题解答；西工大 MOOC 指定教材 |
| 《现代控制理论》 | 刘豹、唐万生 主编 | 机械工业出版社 | 状态空间、能控能观、观测器 | 国内现代控制理论主流教材 |
| 《电机学》（第三版） | 辜承林、陈乔夫、熊永前 | 华中科技大学出版社 | 变压器、直流、异步、同步（PMSM）电机 | 华科 MOOC 指定教材 |
| 《电力电子技术》（第五版） | 王兆安、刘进军 | 机械工业出版社 | 三相逆变、SPWM、PWM 控制技术 | 国内电力电子标配教材 |
| Feedback Systems: An Introduction for Scientists and Engineers | Karl Johan Åström, Richard M. Murray | Princeton University Press | 反馈建模、鲁棒性、PID | 作者开源的免费 PDF 在 FBSwiki：https://fbswiki.org/wiki/index.php/Main_Page （2026-11-11 核验） |
| Modern Control Engineering | Katsuhiko Ogata | Pearson / Prentice Hall | 经典控制+状态空间英文参考 | MIT 2.14 指定教材 |
| PMSM FOC 库开发者指南 | STMicroelectronics | ST UM（中文） | Clarke/Park、电流环、SVPWM、观测器 | 官方中文 PDF：https://www.st.com/resource/zh/user_manual/cd00298482-advanced-developer-s-guide-for-stm32f-mcus-pmsm-single-dual-foc-library-stmicroelectronics.pdf |

## 习题、实验与动手练习

- **控制理论手算 + MATLAB 仿真**：胡寿松教材课后题全做；用 MATLAB `rltool` / `sisotool` 做根轨迹与 Bode 图校正练习。完成方式：纸笔推导 + MATLAB 出图。
- **电机模型 Simulink 仿真**：在 Simulink 搭建 PMSM d-q 坐标系下的数学模型，输入 d/q 电压观察转速与转矩响应。完成方式：MATLAB/Simulink 模型文件。
- **三相逆变器 + SPWM 仿真**：用 Simulink Simscape Electrical 或 PLECS 搭三相两电平桥，输出 SPWM/SVPWM 波形，观察线电压谐波。完成方式：仿真模型 + 波形截图。
- **FOC 电流环半实物仿真**：在 Simulink 中跑通 Clarke → Park → PI → Park 逆变换 → SVPWM 全链路，先仿真后移植 MCU。完成方式：Simulink 模型 + 示波器波形。
- **ST MC SDK 实测调参**：按 SDK Getting Started 流程，用 ST 官方 PMSM 开发板（如 NUCLEO-G431RB + X-NUCLEO-IHM07M1）从开环 V/f 调到无感 FOC。完成方式：Motor Pilot 波形截图 + 实测转速阶跃响应。
- **环路 PI 整定练习**：对电流环、速度环分别做阶跃响应测试，观察超调与整定时间，调整带宽。完成方式：示波器/上位机波形记录。

## 项目实战

### 入门级：开环六步方波驱动 BLDC

- **目标**：用 STM32 + 三相桥驱动板，按六步换相逻辑点亮一颗 BLDC 电机，能正反转与调速。
- **工具**：STM32CubeIDE、ST MC SDK、三相驱动板（如 X-NUCLEO-IHM07M1）。
- **参考方向**：ST wiki `STM32MotorControl:Getting_started`；六步方波与 FOC 的对比见 FAQ wiki。

### 进阶级：PMSM FOC 速度环闭环

- **目标**：在 ST MC SDK 基础上，跑通带编码器的 PMSM FOC：电流环闭环 → 速度环闭环 → 阶跃转速响应无明显超调。
- **工具**：STM32G4/F4、Motor Control Workbench、Motor Pilot 上位机。
- **参考方向**：中文开发者指南（CD00298482）第 4–6 章；自动控制原理频域校正用于 PI 带宽设计。

### 综合级：竞赛电控 FOC 系统（驭磁轻舟方向）

- **目标**：面向 eVTOL 电控场景，在 550–950 VDC 母线、SiC 逆变桥、外转子 SPMSM 上实现 FOC：电流环 / 速度环 / 位置环三闭环，配合 LEM 传感器采样与死区补偿，跑通额定 / 30 s / 5 s / 极限四工况仿真与实测。
- **工具**：MATLAB/Simulink/PLECS 仿真、SiC 功率板、LEM 电压电流传感器、STM32G4 或更高性能 MCU。
- **参考方向**：ST MC SDK 算法框架 + 电力电子逆变器仿真 + 控制理论 PI 整定；不挂未核实的第三方开源仓库，基于官方 SDK 二次开发。

## 我的笔记

- （暂无笔记，后续整理后在此登记）
