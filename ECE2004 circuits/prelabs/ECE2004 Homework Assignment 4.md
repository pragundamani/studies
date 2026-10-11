## 1

a. Let the bottom wire be ground. $V_A=12\ \text{V}$, $V_1$ is the middle node, and $V_B=5\ \text{V}$

![[ECE2004 circuits/prelabs/Homework4_Q1_Circuit_Diagram.excalidraw]]


b. $\sum I_{OUT}=0$

c. $\dfrac{V_1-12\ \mathrm{V}}{50\ \Omega}+\dfrac{V_1-5\ \mathrm{V}}{25\ \Omega}+\dfrac{V_1}{100\ \Omega}=0$

d. $2(V_1-12)+4(V_1-5)+V_1=0$

$7V_1=44$

| node | voltage |
|---|---:|
| ground | $0\ \text{V}$ |
| $V_A$ | $12\ \text{V}$ |
| $V_1$ | $6.286\ \text{V}$ |
| $V_B$ | $5\ \text{V}$ |

e. $I_X=\dfrac{V_1}{100\ \Omega}=62.86\ \text{mA}$ downward

f. $12\ \text{V}$ source: current leaves the $+$ terminal, so $P=-(12\ \text{V})\dfrac{12-V_1}{50\ \Omega}=-1.371\ \text{W}$, delivers $1.371\ \text{W}$

$5\ \text{V}$ source: current enters the $+$ terminal, so $P=(5\ \text{V})\dfrac{V_1-5}{25\ \Omega}=0.257\ \text{W}$, absorbs $0.257\ \text{W}$

## 2

a. Let the bottom wire be ground. The left node is $V_L$ and the right node is $V_R$

![[ECE2004 circuits/prelabs/Homework4_Q2_Circuit_Diagram.excalidraw]]


b. $\sum I_{OUT}=0$

c. At $V_L$:

$\dfrac{V_L}{10\ \Omega}+\dfrac{V_L}{12\ \Omega}+\dfrac{V_L-V_R}{2\ \Omega}+8\ \mathrm{A}=0$

At $V_R$:

$\dfrac{V_R}{4\ \Omega}+\dfrac{V_R-V_L}{2\ \Omega}-8\ \mathrm{A}-2\ \mathrm{A}=0$

d.

| node | voltage |
|---|---:|
| ground | $0\ \text{V}$ |
| $V_L$ | $-3.809524\ \text{V}$ |
| $V_R$ | $10.793651\ \text{V}$ |

e. $V_X=V_R-V_L=10.793651-(-3.809524)=14.603\ \text{V}$

f. $8\ \text{A}$ source: current enters the $-$ terminal, so $P=-V_X(8\ \text{A})=-116.825\ \text{W}$, delivers $116.825\ \text{W}$

$2\ \text{A}$ source: current enters the bottom ($-$) terminal, so $P=-V_R(2\ \text{A})=-21.587\ \text{W}$, delivers $21.587\ \text{W}$

## 3

a. Let the bottom wire be ground. The left, middle, and right nodes are $V_L$, $V_M$, and $V_R$

![[ECE2004 circuits/prelabs/Homework4_Q3_Circuit_Diagram.excalidraw]]


$V_M=1\ \text{V}$

b. $\sum I_{OUT}=0$

c. At $V_L$:

$\dfrac{V_L}{8\ \Omega}+\dfrac{V_L-1\ \mathrm{V}}{12\ \Omega}-100\ \mathrm{mA}=0$

At $V_R$:

$\dfrac{V_R}{30\ \Omega}+100\ \mathrm{mA}+200\ \mathrm{mA}=0$

d.

| node | voltage |
|---|---:|
| ground | $0\ \text{V}$ |
| $V_L$ | $0.880\ \text{V}$ |
| $V_M$ | $1.000\ \text{V}$ |
| $V_R$ | $-9.000\ \text{V}$ |

e. $I_{1\ \mathrm{V}}=200\ \mathrm{mA}-\dfrac{1\ \mathrm{V}-0.880\ \mathrm{V}}{12\ \Omega}=0.190\ \mathrm{A}$

$P_{1\ \mathrm{V}}=(1\ \mathrm{V})(0.190\ \mathrm{A})=0.190\ \mathrm{W}$, absorbs $0.190\ \mathrm{W}$ because current enters the $+$ terminal

f. $100\ \mathrm{mA}$ source: current enters the $-$ terminal, so $P=(V_R-V_L)(0.100\ \mathrm{A})=(-9.000\ \mathrm{V}-0.880\ \mathrm{V})(0.100\ \mathrm{A})=-0.988\ \mathrm{W}$, delivers $0.988\ \mathrm{W}$

$200\ \mathrm{mA}$ source: current enters the $-$ terminal, so $P=(V_R-V_M)(0.200\ \mathrm{A})=(-9.000\ \mathrm{V}-1.000\ \mathrm{V})(0.200\ \mathrm{A})=-2.000\ \mathrm{W}$, delivers $2.000\ \mathrm{W}$

## 4

a. Let the bottom wire be ground. $V_A=5\ \text{V}$. The nodes after the $40\ \Omega$, $50\ \Omega$, and $10\ \Omega$ resistors are $V_1$, $V_2$, and $V_3$

![[ECE2004 circuits/prelabs/Homework4_Q4_Circuit_Diagram.excalidraw]]


b. $\sum I_{OUT}=0$

c. At $V_1$:

$\dfrac{V_1}{20\ \Omega}+\dfrac{V_1-5\ \mathrm{V}}{40\ \Omega}+\dfrac{V_1-V_2}{50\ \Omega}=0$

At $V_2$:

$\dfrac{V_2}{100\ \Omega}+\dfrac{V_2-V_1}{50\ \Omega}+\dfrac{V_2-V_3}{10\ \Omega}+2.5\ \mathrm{A}-2\ \mathrm{A}=0$

At $V_3$:

$\dfrac{V_3}{200\ \Omega}+\dfrac{V_3-V_2}{10\ \Omega}+2\ \mathrm{A}-5\ \mathrm{A}=0$

d.

| node | voltage |
|---|---:|
| ground | $0\ \text{V}$ |
| $V_A$ | $5.000\ \text{V}$ |
| $V_1$ | $17.740\ \text{V}$ |
| $V_2$ | $78.015\ \text{V}$ |
| $V_3$ | $102.871\ \text{V}$ |
