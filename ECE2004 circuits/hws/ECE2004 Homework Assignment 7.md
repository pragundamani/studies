## 1
a. Let $b=0\ \text{V}$. Remove $R_L$ to find $V_{\mathrm{th}}=V_{OC}$.
$\dfrac{V_{\mathrm{th}}-25\ \mathrm{V}}{25\ \Omega}+0.5\ \mathrm{A}=0$

$V_{\mathrm{th}}=12.5\ \text{V}$
Set the $25\ \text{V}$ source to zero and open the $0.5\ \text{A}$ source.
$R_{\mathrm{th}}=25\ \Omega+15\ \Omega=40\ \Omega$
b. $I_L=\dfrac{V_{\mathrm{th}}}{R_{\mathrm{th}}+R_L}$

$P_L=I_L^2R_L=\dfrac{V_{\mathrm{th}}^2R_L}{(R_{\mathrm{th}}+R_L)^2}$

Case 1, $R_L=100\ \Omega$: $P_L=\dfrac{(12.5\ \mathrm{V})^2(100\ \Omega)}{(40\ \Omega+100\ \Omega)^2}=0.797\ \text{W}$

Case 2, $R_L=40\ \Omega$: $P_L=\dfrac{(12.5\ \mathrm{V})^2(40\ \Omega)}{(40\ \Omega+40\ \Omega)^2}=0.977\ \text{W}$

Case 3, $R_L=3\ \Omega$: $P_L=\dfrac{(12.5\ \mathrm{V})^2(3\ \Omega)}{(40\ \Omega+3\ \Omega)^2}=0.254\ \text{W}$

c. $P_L=0.977\ \text{W}$ is highest when $R_L=40\ \Omega$. Maximum power occurs when $R_L=R_{\mathrm{th}}$.
## 2
The short-circuit current is $I_N=I_{SC}$ from $a$ to $b$.
![[Homework7_Q2_Norton_Circuit.excalidraw]]
$I_N=\dfrac{V_{\mathrm{th}}}{R_{\mathrm{th}}}=\dfrac{12.5\ \mathrm{V}}{40\ \Omega}=0.3125\ \text{A}$ from $a$ to $b$

$R_N=R_{\mathrm{th}}=40\ \Omega$
The Norton equivalent is a $0.3125\ \text{A}$ source from $b$ to $a$ in parallel with $40\ \Omega$ and $R_L$.
## 3
Transform the $25\ \text{V}$ source and $25\ \Omega$ resistor.
$I=\dfrac{25\ \mathrm{V}}{25\ \Omega}=1\ \text{A}$ upward

$I_{eq}=1\ \text{A}-0.5\ \text{A}=0.5\ \text{A}$ upward
Transform the $0.5\ \text{A}$ source and $25\ \Omega$ resistor.
$V=(0.5\ \text{A})(25\ \Omega)=12.5\ \text{V}$
$R_S=25\ \Omega+15\ \Omega=40\ \Omega$
![[Homework7_Q1_Q3_Thevenin_Circuit.excalidraw]]
$V_S=12.5\ \text{V}$ with $R_S=40\ \Omega$ in series with $R_L$.
## 4
$R_{EQ}=\dfrac{V_{OC}}{I_{SC}}=\dfrac{V_{\mathrm{th}}}{I_N}$

$R_{EQ}=\dfrac{12.5\ \mathrm{V}}{0.3125\ \mathrm{A}}=40\ \Omega$

$R_{EQ}=R_{\mathrm{th}}=R_N=40\ \Omega$
## 5
a. Let $b=0\ \text{V}$ and remove $R_L$. $I_X$ is left to right through the $10\ \Omega$ resistor.
$I_X=\dfrac{5\ \mathrm{V}-V_{\mathrm{th}}}{10\ \Omega}$

$\dfrac{V_{\mathrm{th}}-5\ \mathrm{V}}{10\ \Omega}-2I_X=0$

$\dfrac{V_{\mathrm{th}}-5\ \mathrm{V}}{10\ \Omega}-2\left(\dfrac{5\ \mathrm{V}-V_{\mathrm{th}}}{10\ \Omega}\right)=0$

$V_{\mathrm{th}}=5\ \text{V}$
Short $a$ to $b$. Let $V$ be the node between the $10\ \Omega$, $15\ \Omega$, and dependent source.
$\dfrac{V-5\ \mathrm{V}}{10\ \Omega}+\dfrac{V}{15\ \Omega}-2\left(\dfrac{5\ \mathrm{V}-V}{10\ \Omega}\right)=0$

$11V=45$, so $V=\dfrac{45}{11}\ \text{V}$

$I_N=\dfrac{V}{15\ \Omega}=\dfrac{45/11\ \mathrm{V}}{15\ \Omega}=\dfrac{3}{11}\ \text{A}=0.2727\ \text{A}$ from $a$ to $b$

$R_{\mathrm{th}}=\dfrac{V_{\mathrm{th}}}{I_N}=\dfrac{5\ \mathrm{V}}{3/11\ \mathrm{A}}=18.33\ \Omega$

b. Set the $5\ \text{V}$ source to zero and connect a $1\ \text{V}$ test source to $a$-$b$.
$I_X=\dfrac{0-V}{10\ \Omega}=-\dfrac{V}{10\ \Omega}$

$\dfrac{V}{10\ \Omega}+\dfrac{V-1\ \mathrm{V}}{15\ \Omega}-2I_X=0$

$\dfrac{V}{10\ \Omega}+\dfrac{V-1\ \mathrm{V}}{15\ \Omega}+\dfrac{2V}{10\ \Omega}=0$

$11V=2$, so $V=\dfrac{2}{11}\ \text{V}$

$I_{TS}=\dfrac{1\ \mathrm{V}-V}{15\ \Omega}=\dfrac{1-2/11}{15}\ \mathrm{A}=\dfrac{3}{55}\ \text{A}$

$R_{\mathrm{th}}=\dfrac{1\ \mathrm{V}}{I_{TS}}=\dfrac{1}{3/55}=18.33\ \Omega$

## 6
Transform the $5\ \text{V}$ source and $6\ \Omega$ resistor.
![[Homework7_Q6_Source_Transformation_Circuit.excalidraw]]
$I=\dfrac{5\ \mathrm{V}}{6\ \Omega}=\dfrac{5}{6}\ \text{A}$ upward

$I_{eq}=\dfrac{5}{6}\ \text{A}+0.5\ \text{A}=\dfrac{4}{3}\ \text{A}$ upward

$R_{eq}=6\ \Omega\parallel10\ \Omega=\dfrac{(6\ \Omega)(10\ \Omega)}{6\ \Omega+10\ \Omega}=3.75\ \Omega$

Transform the $\dfrac{4}{3}\ \text{A}$ source and $3.75\ \Omega$ resistor.

$V_S=I_{eq}R_{eq}=\left(\dfrac{4}{3}\ \mathrm{A}\right)(3.75\ \Omega)=5\ \text{V}$

$R_S=3.75\ \Omega$
The equivalent circuit is a $5\ \text{V}$ source and $3.75\ \Omega$ resistor in series with $R_L$.
