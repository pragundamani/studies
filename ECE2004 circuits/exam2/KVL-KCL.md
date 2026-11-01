# KVL and KCL

## Flashcards #flashcards/ece

Write KCL at a node using leaving currents as positive.
?
$\sum I_{\text{leaving}}-\sum I_{\text{entering}}=0$

Write the current from node $A$ to node $B$ through resistance $R$. ![[images/flashcards/kvl-kcl-card-02.png|450]]
?
$I_{A\to B}=(V_A-V_B)/R$

For $V_A=8\,\text{V}$, $V_B=2\,\text{V}$, and $R=3\,\Omega$, find $I_{A\to B}$. ![[images/flashcards/kvl-kcl-card-03.png|450]]
?
$I_{A\to B}=(8-2)/3=2\,\text{A}$ from $A$ to $B$.

An assumed current $i$ is solved as $-3\,\text{A}$. Interpret the result.
?
The actual current is $3\,\text{A}$ opposite the assumed direction.

Currents $1\,\text{A}$ and $3\,\text{A}$ enter a node; $7\,\text{A}$ and $i_2$ leave. Find $i_2$. ![[images/flashcards/kvl-kcl-card-05.png|450]]
?
$1+3-7-i_2=0$, so $i_2=-3\,\text{A}$; the actual current is $3\,\text{A}$ entering.

A $2\,\text{A}$ source enters a node connected to ground by $3\,\Omega$ and $6\,\Omega$. Find the node voltage $v$. ![[images/flashcards/kvl-kcl-card-06.png|450]]
?
$v/3+v/6-2=0$, so $v=4\,\text{V}$.

A $6\,\text{V}$ source lies between nodes $a$ and $b$, with its positive terminal at $a$. Write its constraint. ![[images/flashcards/kvl-kcl-card-07.png|450]]
?
$V_a-V_b=6\,\text{V}$

Write KVL for a source $V_s$ driving series resistors $R_1$ and $R_2$ in the assumed current direction. ![[images/flashcards/kvl-kcl-card-08.png|450]]
?
$-V_s+R_1i+R_2i=0$, so $i=V_s/(R_1+R_2)$.

A $12\,\text{V}$ source drives $2\,\Omega$ and $4\,\Omega$ in series. Find the loop current. ![[images/flashcards/kvl-kcl-card-09.png|450]]
?
$-12+2i+4i=0$, so $i=2\,\text{A}$.

Two clockwise mesh currents share a resistor $R$. Write the resistor drop in the mesh-1 direction. ![[images/flashcards/kvl-kcl-card-10.png|450]]
?
$v_R=R(i_1-i_2)$

For $i_1=4\,\text{mA}$, $i_2=1\,\text{mA}$, and $R=2\,\text{k}\Omega$, find the shared-resistor drop in the mesh-1 direction. ![[images/flashcards/kvl-kcl-card-11.png|450]]
?
$v_R=2(4-1)=6\,\text{V}$.

Two clockwise meshes share a $2\,\text{A}$ current source directed in the mesh-1 branch direction. Write the source constraint. ![[images/flashcards/kvl-kcl-card-12.png|450]]
?
$i_1-i_2=2\,\text{A}$

How are independent sources deactivated when finding an equivalent resistance?
?
Set an independent voltage source to $0\,\text{V}$ (short circuit) and an independent current source to $0\,\text{A}$ (open circuit).

When independent sources are deactivated, what happens to dependent sources?
?
Keep dependent sources active and retain their controlling equations.

A device has $v=10\,\text{V}$ and $i=2\,\text{A}$ entering its positive terminal. Find its power. ![[images/flashcards/kvl-kcl-card-15.png|450]]
?
$p=vi=(10)(2)=20\,\text{W}$ absorbed.

A source has $v=12\,\text{V}$ and $i=-3\,\text{A}$ referenced into its positive terminal. Find its power. ![[images/flashcards/kvl-kcl-card-16.png|450]]
?
$p=vi=(12)(-3)=-36\,\text{W}$, so it delivers $36\,\text{W}$.
