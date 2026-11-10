# 01 数理与编程基础

EE 路线的地基：高数、线性代数、概率统计、大学物理，以及第一门编程语言（C 语言）。后面电路、信号、电机、控制里出现的公式和计算，都从这里来。

## 路线位置

- **前置**：无，这是起点。
- **通往**：[02 电路与电子学](../02-circuit-electronics/README.md)、[06 信号与通信](../06-signal-communication/README.md)；C 语言同时是 [03 嵌入式与单片机](../03-embedded-mcu/README.md) 的直接前置，线代与优化数学支撑 [05 电力系统](../05-power-system/README.md)。
- **学习顺序建议**：C 语言与数理基础并行；概率统计在信号与通信前补完即可。
- **课程页**：[Harvard CS50x · C 语言部分](/courses/cs50-c) —— 主推荐理由、先修、投入（官方数据与编辑估计分开）、完成标准。

## 核心公开课与课程

> 卡片里的「难度」与「建议学时」是编辑估算，用于横向比较，不是课程官方数据。要报名或排时间，以课程页写明的周数与学分为准。

### 微积分与高等数学

先把极限、导数、积分这一套工具练熟——后面电路里的瞬态分析、信号里的傅里叶变换，全是微积分的直接应用。中文课里同济版体系用得最广，英文课 MIT 18.01SC 讲得更细。

### 浙江大学 微积分（一）

- **开课院校**：浙江大学
- **先修要求**：高中数学
- **编程语言 / 工具**：纸笔演算 + 可选 Python 数值验证
- **难度**：🌟🌟🌟
- **建议学时**：约 80–100 小时（一元微积分部分）
- **简介**：苏德矿教授主讲的国家级精品课程转型 MOOC，覆盖函数极限、连续、一元微分学与一元积分学。语言亲切、例题扎实，适合工科生快速建立微积分直觉。与后续电路瞬态分析、信号与系统的微分方程基础直接衔接。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | 微积分（一）中国大学 MOOC | https://www.icourse163.org/course/detail.htm?cid=1003315004 | 中文，含章节测验与讨论区 |
| 视频录像 | 同上课程页 | 同上 | 中文授课，免费旁听 |
| 教材 | 《微积分（上）》苏德矿等，高等教育出版社第三版 | 高等教育出版社官网 | 配套教材，书店可购 |
| 作业 / 实验 | 课程章节测验 | 课程内 | 每讲后附练习题 |
| 自学建议 | — | — | 中文入门优先；遇到概念卡壳再翻 MIT 18.01SC 对应小节对照看 |

### MIT 18.01SC Single Variable Calculus

- **开课院校**：MIT
- **先修要求**：高中函数、三角
- **编程语言 / 工具**：纸笔 + 可选 Python
- **难度**：🌟🌟🌟
- **建议学时**：约 100–120 小时
- **简介**：MIT 经典单变量微积分 OCW Scholar 课，David Jerison 主讲，Mattuck、Miller、Orloff 等团队参与。从极限到积分技巧再到级数，节奏快、例题密度高，配套完整讲义、习题集与解题录像。适合中文课过完一遍后，用来查漏补缺、加深严谨理解。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | 18.01SC OCW 主页 | https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/ | English，含完整讲义、习题、考试 |
| 视频录像 | Lecture Videos | https://www.ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/video_galleries/lecture-videos/ | English，YouTube / OCW 内嵌 |
| 教材 | 无指定教材，讲义即教材 | 课程 Lecture Notes 页 | 免费 PDF |
| 作业 / 实验 | Problem Sets + Exams | 课程 Resources 页 | 含答案 |
| 自学建议 | — | — | 四级 445 分基础可配合字幕；不必全做，挑与 EE 相关的微分方程、积分应用重点练 |

### 线性代数

矩阵、向量空间、特征值——这是电机控制、信号处理、电路矩阵分析的数学骨架。Gilbert Strang 的 18.06 是很多人的入门首选。

### MIT 18.06 Linear Algebra（Gilbert Strang）

- **开课院校**：MIT
- **先修要求**：单变量微积分
- **编程语言 / 工具**：MATLAB / Python（NumPy）
- **难度**：🌟🌟🌟
- **建议学时**：约 80–100 小时
- **简介**：Gilbert Strang 教授三十余年经典课程，从消元法讲到特征值与 SVD，直觉驱动而非纯公理推导。Strang 本人的线代教材也是 EE 领域引用最广的一本。后续 FOC 控制中的坐标变换（Clark / Park）、信号中的频域矩阵表示都以此为基础。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | 18.06SC OCW 主页 | https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/ | English，Strang 主讲 |
| 视频录像 | Lecture Videos | https://www.ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-videos/ | English，YouTube 可搜 |
| 教材 | 《Introduction to Linear Algebra》Gilbert Strang | https://www.mit.edu/~18.06/index.shtml | 作者官网，Wellesley-Cambridge Press 第五版 |
| 作业 / 实验 | Problem Sets + Exams | 课程 Resources 页 | 含解答 |
| 自学建议 | — | — | 重点抓特征值、正交、SVD 三章；后续 04 电机控制的 Park 变换直接用到矩阵投影 |

### 概率统计

随机信号、噪声、采样——EE 里到处是概率。中文 MOOC 打基础，英文 OCW 做深化。

### 电子科技大学 概率论与数理统计

- **开课院校**：电子科技大学
- **先修要求**：高等数学（一元微积分）
- **编程语言 / 工具**：纸笔 + 可选 Python
- **难度**：🌟🌟🌟
- **建议学时**：约 60–80 小时
- **简介**：国家级一流课程，电科大课程组集体录制，面向工科学生讲概率与统计的应用问题。从随机事件、随机变量到大数定律、参数估计，例题贴近工程。与后续 06 信号与通信中的随机信号分析、噪声建模直接衔接。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | 概率论与数理统计 电科大 | https://www.icourse163.org/course/UESTC-1001590004 | 中文，一流课程 |
| 视频录像 | 同上 | 同上 | 中文授课 |
| 教材 | 《概率论与数理统计》浙江大学盛骤等，高等教育出版社 | 高教社官网 | 国内通用教材 |
| 作业 / 实验 | 课程章节测验 | 课程内 | 含讨论区 |
| 自学建议 | — | — | 中文优先入门；已有的 [概率论与数理统计笔记](./probability-statistics.md) 配合食用 |

### MIT 6.041SC Probabilistic Systems Analysis

- **开课院校**：MIT
- **先修要求**：微积分基础
- **编程语言 / 工具**：数学推导
- **难度**：🌟🌟🌟🌟
- **建议学时**：约 80–100 小时
- **简介**：John Tsitsiklis 主讲的经典概率课，从概率公理讲到随机过程与统计推断。比国内工科概率课更重直觉与建模，适合在中文课过完一遍后拔高。后续通信原理中的随机过程、信号检测都以本课程为基础。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | 6.041SC OCW 主页 | https://www.ocw.mit.edu/courses/6-041sc-probabilistic-systems-analysis-and-applied-probability-fall-2013/ | English |
| 视频录像 | Lecture Videos | https://www.ocw.mit.edu/courses/6-041sc-probabilistic-systems-analysis-and-applied-probability-fall-2013/video_galleries/lecture-videos/ | English，Tsitsiklis 全程录像 |
| 教材 | 《Introduction to Probability》Bertsekas & Tsitsiklis | 作者官网可购 | 免费讲义 PDF 可在课程页找到 |
| 作业 / 实验 | Problem Sets + Exams | 课程 Resources 页 | 含解答 |
| 自学建议 | — | — | 不必全刷；重点看随机变量、期望、大数定律三章，为 06 板块铺垫 |

### 大学物理（电磁学为主）

EE 的物理直觉来自电磁学。力学、热光量已有笔记，这里只补电磁学部分。

### 国防科技大学 大学物理-电磁学

- **开课院校**：国防科技大学
- **先修要求**：高等数学（矢量微积分初步）
- **编程语言 / 工具**：纸笔
- **难度**：🌟🌟
- **建议学时**：约 40–60 小时
- **简介**：国防科大国家级教学团队录制，含多个演示实验。从静电场、电势到恒定磁场、电磁感应、麦克斯韦方程组，是电路原理与电机学的物理源头。与已有 [大学物理复习笔记（热学·光学·量子）](./university-physics-thermal-optics-quantum.md) 互补，补齐电磁学这块拼图。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | 大学物理-电磁学 国防科大 | https://www.icourse163.org/course/NUDT-17002 | 中文 |
| 视频录像 | 同上 | 同上 | 含演示实验视频 |
| 教材 | 《大学物理学》张三慧，清华大学出版社 | 清华社官网 | 经典教材 |
| 作业 / 实验 | 课程单元测验 | 课程内 | |
| 自学建议 | — | — | 重点抓电场、磁场、电磁感应三章；后续 02 电路原理的电压电流概念从这里来 |

### C 语言入门

EE 的第一门编程语言。硬件底层、单片机、DSP 算法全是 C。

### Harvard CS50x

- **开课院校**：Harvard University
- **先修要求**：无
- **编程语言 / 工具**：C
- **难度**：🌟🌟
- **建议学时**：约 100–150 小时
- **简介**：Harvard 最有名的 CS 入门课，David Malan 主讲。从 C 语言指针、内存讲到算法基础，讲课感染力极强。Week 1 专讲 C 语言语法，是零基础入门的最佳选择之一。后续 03 嵌入式与单片机的 STM32 编程直接以 C 为前提。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | CS50x 官方 | https://cs50.harvard.edu/x/ | English，可免费旁听（2026-11-11 访问确认可打开，站点标为 CS50x 2026 版） |
| 视频录像 | Week 1: C | https://cs50.harvard.edu/x/2022/weeks/1/ | English，YouTube / edX 可看 |
| 教材 | 无指定教材，课程讲义即教材 | 课程 Notes 页 | 免费 |
| 作业 / 实验 | Problem Set 1–5 | 课程内 | C 语言指针练习 |
| 自学建议 | — | — | 零基础强烈推荐；已有的 [C 语言学习笔记](./c-language.md) 配合做课后题 |

### Python 入门

Python 是 EE 自学者的瑞士军刀：数据分析、信号处理仿真、自动化脚本都用得上。

### MIT 6.100L Introduction to CS and Programming using Python

- **开课院校**：MIT
- **先修要求**：无
- **编程语言 / 工具**：Python
- **难度**：🌟🌟
- **建议学时**：约 60–80 小时
- **简介**：MIT 最新的 Python 入门课，取代了经典的 6.0001。从变量、控制流讲到类、调试与简单算法，节奏紧凑，作业实用。后续 06 信号处理实验用 Python（NumPy / SciPy）做频谱分析，以及考研数据分析方向都以此为基础。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | 6.100L OCW 主页 | https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/ | English |
| 视频录像 | Lecture Videos | https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/video_galleries/lecture-videos/ | English，Ana Bell 主讲 |
| 教材 | 无指定教材 | 课程 Syllabus 页 | https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/pages/syllabus/ |
| 作业 / 实验 | Problem Sets + Labs | 课程 Resources 页 | 含 Python 代码 |
| 自学建议 | — | — | 英文有压力可先看 B 站 Python 搜索入口补中文直觉；重点练 NumPy 数组运算 |

## 教材与参考书

| 书名 | 作者 | 版本 | 用途章节 | 链接或书目说明 |
|---|---|---|---|---|
| 《高等数学》（上·下） | 同济大学数学系 | 第七版 | 极限、导数、积分、微分方程、级数 | 高等教育出版社，国内工科标配 |
| 《Introduction to Linear Algebra》 | Gilbert Strang | 第五版 | 矩阵、特征值、正交、SVD | Wellesley-Cambridge Press，官网 https://www.mit.edu/~18.06/index.shtml |
| 《概率论与数理统计》 | 盛骤 等 | 第四版 | 随机变量、数字特征、参数估计、假设检验 | 高等教育出版社 |
| 《大学物理学》（电磁学部分） | 张三慧 | 第三版 | 静电场、恒定磁场、电磁感应 | 清华大学出版社 |
| 《C Primer Plus》 | Stephen Prata | 第六版 | C 语言语法、指针、内存 | 人民邮电出版社，英文原版更准 |
| 《Python Crash Course》 | Eric Matthes | 第三版 | Python 基础语法、数据结构 | No Starch Press，官网 https://ehmatthes.github.io/pcc_3e/ |

## 习题、实验与动手练习

- **同济高等数学课后题**：每章精选奇数题手写演算，错题进错题本。
- **Strang 线代 Problem Sets**：OCW 课程页下载，每讲配套题，重点做特征值与 SVD 章节。
- **Python 小实验**：用 NumPy 实现矩阵乘法、傅里叶级数逼近方波——既是编程练习也是线代 / 微积分的数值验证。
- **C 语言指针练习**：CS50 的 Problem Set 2–4（数组、字符串、内存），在本地 VS Code + MinGW 环境完成。
- **大学物理电磁学**：国防科大 MOOC 每单元后的测验题，重点算电场强度、磁感应强度、感应电动势。

## 项目实战

### 入门

- **Python 科学计算脚本集**：用 NumPy / Matplotlib 画函数图像、数值积分（梯形法）、矩阵乘法验证。目标：把微积分和线代的抽象公式变成可运行代码。工具：Python 3.13 + NumPy + Matplotlib。
- **C 语言命令行小程序**：温度转换器、学生成绩排序、猜数字游戏。目标：熟悉变量、循环、函数、指针。工具：VS Code + MinGW。

### 进阶

- **数值积分与微分方程求解器**：用 Python 实现欧拉法 / 龙格-库塔法解一阶 ODE，对比 SciPy 的 `solve_ivp`。目标：为后续电路瞬态分析、电机控制仿真打基础。工具：Python + NumPy + SciPy。
- **C 语言链表与二叉树**：手写动态链表、二叉搜索树的插入 / 删除 / 遍历。目标：为 03 嵌入式的数据结构打基础。工具：VS Code + MinGW。

### 综合

- **信号采样与混叠可视化**：用 Python 生成正弦波，改变采样率观察混叠现象，画出时域波形与频谱。目标：把微积分、傅里叶级数、概率统计串起来，提前感受 06 板块的内容。工具：Python + NumPy + Matplotlib。

## 我的笔记

- [C 语言学习笔记](./c-language.md) — 8 章核心语法，每章附可运行代码与易错点
- [大学物理复习笔记（热学 · 光学 · 量子）](./university-physics-thermal-optics-quantum.md) — 核心公式与考点，附完整 PDF
- [概率论与数理统计笔记](./probability-statistics.md) — 随机事件到参数估计，附完整 PDF
