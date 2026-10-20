## 1

a. Let the bottom wire be ground. The left, middle, and right nodes are $V_A$, $V_B$, and $V_C=V_{OUT}$. The 20 V source creates a supernode around $V_A$ and $V_B$.

![[hws/Homework6_Q1_Circuit_Diagram.excalidraw.md]]

b. With currents leaving the supernode,

$\dfrac{V_A}{50\ \Omega}+\dfrac{V_B}{100\ \Omega}+\dfrac{V_B-V_C}{25\ \Omega}-1\ \mathrm{A}=0$

$V_B-V_A=20\ \mathrm{V}$

At $V_C$,

$\dfrac{V_C-V_B}{25\ \Omega}+\dfrac{V_C}{25\ \Omega}=0$

$V_A=8\ \mathrm{V}$, $V_B=28\ \mathrm{V}$, and $V_{OUT}=V_C=14\ \mathrm{V}$.

## 2

a. Define clockwise mesh currents $i_1$ in the lower-left mesh, $i_2$ in the upper mesh, and $i_3$ in the lower-right mesh. The 1 A source between meshes 2 and 3 requires a supermesh.

![[hws/Homework6_Q2_Circuit_Diagram.excalidraw.md]]

b. Current-source constraints:

$i_1=-1\ \mathrm{A}$

$i_2-i_3=1\ \mathrm{A}$

Supermesh KVL:

$(150\ \Omega)i_2+(250\ \Omega)(i_2-i_1)+(30\ \Omega)i_3-5\ \mathrm{V}=0$

Substitute $i_1=-1\ \mathrm{A}$ and $i_3=i_2-1\ \mathrm{A}$:

$150i_2+250(i_2+1)+30(i_2-1)-5=0$

| mesh current |                value |
| ------------ | -------------------: |
| $i_1$        | $-1.000\ \mathrm{A}$ |
| $i_2$        | $-0.500\ \mathrm{A}$ |
| $i_3$        | $-1.500\ \mathrm{A}$ |

c. The upward current through the 5 V source is

$I_X=i_3-i_1=-0.500\ \mathrm{A}$

Thus, $I_X=0.500\ \mathrm{A}$ downward.

With the indicated polarity, $V_X$ is the left-node voltage. Across the 250 $\Omega$ resistor,

$V_X-5\ \mathrm{V}=(250\ \Omega)(i_1-i_2)$

$V_X=5+250[-1.000-(-0.500)]=-120\ \mathrm{V}$

## 3

Apply superposition to Problem 1.

With only the 1 A source active, short the 20 V source and call the joined node $V_N$:

$\dfrac{V_N}{50\ \Omega}+\dfrac{V_N}{100\ \Omega}+\dfrac{V_N-V_{OUT,1}}{25\ \Omega}=1\ \mathrm{A}$

$\dfrac{V_{OUT,1}-V_N}{25\ \Omega}+\dfrac{V_{OUT,1}}{25\ \Omega}=0$

$V_{OUT,1}=10\ \mathrm{V}$

With only the 20 V source active, open the 1 A source:

$\dfrac{V_A}{50\ \Omega}+\dfrac{V_B}{100\ \Omega}+\dfrac{V_B-V_{OUT,2}}{25\ \Omega}=0$

$V_B-V_A=20\ \mathrm{V}$

$\dfrac{V_{OUT,2}-V_B}{25\ \Omega}+\dfrac{V_{OUT,2}}{25\ \Omega}=0$

$V_{OUT,2}=4\ \mathrm{V}$

$V_{OUT}=V_{OUT,1}+V_{OUT,2}=10+4=14\ \mathrm{V}$

## 4

Let the bottom wire be ground, the output node be $V=V_{OUT}$, and the node between the 2 $\Omega$ resistor and 2 A source be $V_D$. Keep the dependent source active.

![[hws/Homework6_Q4_Circuit_Diagram.excalidraw.md]]

$V_1=V-V_D$

With only the 5 V source active, open the 2 A source. No current flows in the 2 $\Omega$ branch, so $V_{1,5}=0$ and the dependent source is zero:

$\dfrac{V_5-5\ \mathrm{V}}{10\ \Omega}+\dfrac{V_5}{10\ \Omega}=0$

$V_5=2.5\ \mathrm{V}$

With only the 2 A source active, short the 5 V source. At $V_D$,

$\dfrac{V_D-V_2}{2\ \Omega}+2\ \mathrm{A}=0$

$V_{1,2}=V_2-V_D=4\ \mathrm{V}$

At $V_2$,

$\dfrac{V_2}{10\ \Omega}+\dfrac{V_2-V_D}{2\ \Omega}+\dfrac{V_2}{10\ \Omega}-1.5V_{1,2}=0$

$\dfrac{V_2}{10}+2+\dfrac{V_2}{10}-6=0$

$V_2=20\ \mathrm{V}$

$V_{OUT}=V_5+V_2=2.5+20=22.5\ \mathrm{V}$
