# 06 信号与通信

信号与系统、通信原理、数字信号处理：连续 / 离散信号、傅里叶变换、滤波、采样定理、调制解调，以及时域频域分析方法。

## 路线位置

- **前置**：[01 数理与编程基础](../01-math-programming/README.md)（高数、概率）。
- **通往**：[04 电机与运动控制](../04-motor-control/README.md)（控制环滤波）、通信节点与嵌入式信号处理。
- **学习顺序建议**：信号与系统先行，通信原理、数字信号处理随后；多结合代码做频谱与滤波实验。

## 核心公开课与课程

> 卡片里的「难度」与「建议学时」是编辑估算，用于横向比较，不是课程官方数据。要报名或排时间，以课程页写明的周数与学分为准。

### 信号与系统

整个信号处理领域的地基：LTI 系统、卷积、傅里叶变换、拉普拉斯变换、Z 变换。Oppenheim 的 MIT RES.6.007 是很多自学者的默认起点。

### MIT RES.6.007 Signals and Systems（Oppenheim）

- **开课院校**：MIT
- **先修要求**：微积分、微分方程、复变函数初步
- **编程语言 / 工具**：纸笔 + MATLAB / Python 验证
- **难度**：🌟🌟🌟🌟
- **建议学时**：约 100–120 小时
- **简介**：Alan V. Oppenheim 教授本人主讲的经典公开课，配套他的同名教材。从连续信号与 LTI 系统、卷积讲到傅里叶变换、拉普拉斯变换。是通信原理、DSP、控制理论的共同先修，也是 EE 数学难度最高的一门课之一。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | RES.6.007 OCW 主页 | https://www.ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/ | English，Oppenheim 主讲 |
| 视频录像 | Lecture Videos | https://www.ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/video_galleries/lecture-videos/ | English，Oppenheim 全程录像 |
| 教材 | 《Signals and Systems》Oppenheim & Willsky | 课程 Readings 页 | 教材必备，出版社 Prentice Hall |
| 作业 / 实验 | Problem Sets + Exams | 课程 Resources 页 | 含解答 |
| 自学建议 | — | — | 硬课，建议中文先过一遍再啃英文；卷积和傅里叶变换是核心中的核心 |

### UC Berkeley EE120 Signals and Systems

- **开课院校**：UC Berkeley
- **先修要求**：微积分、微分方程
- **编程语言 / 工具**：MATLAB
- **难度**：🌟🌟🌟🌟
- **建议学时**：约 80–100 小时
- **简介**：Berkeley 电类核心课，与 MIT RES.6.007 内容平行但例题风格不同。课程站公开了完整的 syllabus、作业与实验，适合作为 Oppenheim 课的补充对照。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | EE120 课程目录 | https://www2.eecs.berkeley.edu/Courses/EE120/index.html | English |
| 视频录像 | 课程站 | https://inst.eecs.berkeley.edu/~ee120/fa20/syllabus/ | English，近年课程材料公开 |
| 教材 | 同 Oppenheim Signals and Systems | — | 与 MIT 课通用 |
| 作业 / 实验 | 课程 Syllabus 页 | 课程站 | 含 MATLAB 实验 |
| 自学建议 | — | — | 选做作业补充练习即可；不必重复看全部视频 |

### 通信原理

调制解调、信噪比、信道容量——从模拟 AM/FM 到数字基带与频带传输。西电樊昌信教材是国内标准。

### 西安电子科技大学 通信原理

- **开课院校**：西安电子科技大学
- **先修要求**：信号与系统、概率论
- **编程语言 / 工具**：MATLAB / Python 仿真
- **难度**：🌟🌟🌟🌟
- **建议学时**：约 80–100 小时
- **简介**：樊昌信教授领衔，国家级精品课程与国家级资源共享课。教材《通信原理》连续七轮中标全国统编教材。从确定信号分析、随机过程讲到模拟调制、数字基带传输、数字频带传输，是国内通信方向的标准入门课。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | 通信原理 西电 | https://www.icourse163.org/course/detail.htm?cid=1449262162 | 中文，国家级精品 |
| 视频录像 | 同上 | 同上 | 中文授课 |
| 教材 | 《通信原理》樊昌信、曹丽娜，国防工业出版社第七版 | 国防工业出版社官网 | 国内通信标配教材 |
| 作业 / 实验 | 课程章节测验 | 课程内 | |
| 自学建议 | — | — | 中文优先；重点抓采样定理、数字基带、2ASK/2FSK/2PSK 调制解调 |

### 数字信号处理（DSP）

离散傅里叶变换（DFT / FFT）、数字滤波器设计——这是把信号处理落地到计算机 / 单片机的关键。

### 北京交通大学 数字信号处理

- **开课院校**：北京交通大学
- **先修要求**：信号与系统、概率论
- **编程语言 / 工具**：MATLAB / Python
- **难度**：🌟🌟🌟🌟
- **建议学时**：约 80–100 小时
- **简介**：陈后金教授主编，国家级一流课程、国家精品在线开放课程。从离散信号与系统、Z 变换、DFT/FFT 到数字滤波器设计，例题与 MATLAB 实验结合紧密。是国内 DSP 方向的主流中文 MOOC。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | 数字信号处理 北交大 | https://www.icourse163.org/course/detail.htm?cid=1001950001 | 中文，国家级一流课程 |
| 视频录像 | 同上 | 同上 | 中文授课 |
| 教材 | 《数字信号处理》陈后金，高等教育出版社第三版 | 高教社官网 | 国家级规划教材 |
| 作业 / 实验 | 课程章节测验 + MATLAB 实验 | 课程内 | |
| 自学建议 | — | — | 重点抓 DFT/FFT 与 FIR/IIR 滤波器设计；用 Python NumPy 复现实验 |

### MIT 6.341 Discrete-Time Signal Processing

- **开课院校**：MIT
- **先修要求**：信号与系统（连续）、概率初步
- **编程语言 / 工具**：MATLAB
- **难度**：🌟🌟🌟🌟🌟
- **建议学时**：约 100–120 小时
- **简介**：Oppenheim 主讲的研究生级 DSP 课，配套经典教材《Discrete-Time Signal Processing》。从采样率转换、滤波器结构讲到现代谱估计，是 DSP 领域的圣经级课程。适合在北交大课过完一遍后拔高。

| 类型 | 名称 | 链接 | 说明 |
|---|---|---|---|
| 课程官网 | 6.341 OCW 主页 | https://www.ocw.mit.edu/courses/6-341-discrete-time-signal-processing-fall-2005/ | English，研究生级 |
| 视频录像 | 课程主页（本课程无公开录像，以讲义与习题为主） | https://www.ocw.mit.edu/courses/6-341-discrete-time-signal-processing-fall-2005/ | English，配合讲义自学 |
| 教材 | 《Discrete-Time Signal Processing》Oppenheim, Schafer & Buck | 课程页有免费 PDF 节选 | Prentice Hall 第三版 |
| 作业 / 实验 | Problem Sets + Exams | 课程 Resources 页 | 含解答 |
| 自学建议 | — | — | 不必全刷；重点看多采样率与滤波器设计两章，为电机控制中的电流环滤波打基础 |

## 教材与参考书

| 书名 | 作者 | 版本 | 用途章节 | 链接或书目说明 |
|---|---|---|---|---|
| 《Signals and Systems》 | Oppenheim & Willsky | 第二版 | LTI 系统、卷积、傅里叶、拉氏变换 | Prentice Hall，EE 经典 |
| 《通信原理》 | 樊昌信、曹丽娜 | 第七版 | 模拟调制、数字基带、数字频带、同步 | 国防工业出版社 |
| 《离散时间信号处理》 | Oppenheim, Schafer & Buck | 第二版 | DFT/FFT、FIR/IIR、多采样率 | 中译本：刘顺美等译，电子工业出版社 |
| 《数字信号处理》 | 陈后金 | 第三版 | 离散系统、Z 变换、DFT、滤波器设计 | 高等教育出版社 |
| 《通信原理（英文版）》 | Simon Haykin | 第四版 | 随机过程、信息论、信道容量 | Wiley，补充阅读 |

## 习题、实验与动手练习

- **信号与系统课后题**：Oppenheim《Signals and Systems》每章精选题手推，重点卷积积分、傅里叶变换性质、拉氏逆变换。
- **Python 信号处理实验**：用 NumPy 实现 DFT（先手写再用 `np.fft.fft` 验证）、画方波的傅里叶级数逼近、观察吉布斯现象。
- **滤波器设计实验**：用 SciPy 的 `signal.firwin` / `iirfilter` 设计低通 / 带通滤波器，对含噪正弦波做滤波并画幅频响应。
- **AM 调制解调仿真**：用 Python 生成 AM 信号，加噪后用包络检波或相干解调还原，观察信噪比影响。
- **MATLAB 官方 DSP 教程**：https://www.mathworks.com/help/signal/examples.html ，含大量现成 demo 可跑。

## 项目实战

### 入门

- **FFT 频谱分析仪（Python）**：录制一段环境声音（麦克风）或读入 WAV 文件，用 `np.fft.fft` 画时域波形与频谱。目标：把傅里叶变换从公式变成可视化。工具：Python + NumPy + Matplotlib + sounddevice。
- **RC 低通滤波器频响测量**：在面包板上搭 RC 低通电路，用信号发生器扫频，记录输出幅度与相位，画伯德图并与理论截止频率对比。目标：把电路知识和频域分析串起来。工具：面包板、电阻电容、信号发生器、示波器。

### 进阶

- **数字滤波器设计与实现**：用 Python 设计一个 FIR 低通滤波器，对含 50Hz 工频干扰的心电 / 肌电信号（可用公开数据集或合成信号）做滤波，对比滤波前后频谱。目标：掌握窗函数法设计滤波器。工具：Python + SciPy.signal。
- **2ASK 调制解调仿真**：用 Python 生成二进制序列，做 2ASK 调制、加高斯噪声、过信道、相干解调，画误码率 vs 信噪比曲线。目标：把通信原理的调制解调落地成代码。工具：Python + NumPy。

### 综合

- **简易软件无线电（SDR）接收**：用 RTL-SDR  dongle（约 50 元）接收 FM 广播，用 Python `pyrtlsdr` 库采样数据，做 FM 解调并播放声音。目标：综合信号采集、下变频、解调全流程。工具：RTL-SDR + Python + NumPy。
- **电机电流环噪声分析**：在 04 电机项目中，用示波器采集三相电流波形，上传电脑做 FFT 分析，找出 PWM 开关噪声和谐波，设计数字滤波器抑制。目标：把信号处理直接用于电机控制调试。工具：示波器 + Python + SciPy。

## 我的笔记

（暂无笔记，后续整理后在此登记）
