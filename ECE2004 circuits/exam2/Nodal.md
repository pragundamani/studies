# Nodal

## Flashcards #flashcards/ece

For current defined from node $A$ to node $B$ through resistance $R$, write the branch-current equation. ![[images/flashcards/nodal-card-01.png|450]]
?
$I_{A\to B}=(V_A-V_B)/R$.

Write KCL at node $V_1$ if currents leave through $R_1$ to $V_A$, through $R_2$ to $V_2$, and through $R_3$ to ground, while $I_s$ enters the node. ![[images/flashcards/nodal-card-02.png|450]]
?
$(V_1-V_A)/R_1+(V_1-V_2)/R_2+V_1/R_3-I_s=0$.

A node $V$ connects to $6\,\text{V}$ through $2\,\Omega$, to ground through $4\,\Omega$, and receives $1\,\text{A}$. Write KCL and solve for $V$. ![[images/flashcards/nodal-card-03.png|450]]
?
$(V-6)/2+V/4-1=0$, so $V=16/3\,\text{V}\approx5.33\,\text{V}$.

A $2\,\text{A}$ source enters a node connected to ground by $5\,\Omega$. Find the node voltage. ![[images/flashcards/nodal-card-04.png|450]]
?
$V/5-2=0$, so $V=10\,\text{V}$.

Write the conductance-matrix row for node $V_1$ connected to ground by $2\,\Omega$, to $V_2$ by $4\,\Omega$, with $1\,\text{A}$ injected into $V_1$. ![[images/flashcards/nodal-card-05.png|450]]
?
$(1/2+1/4)V_1-(1/4)V_2=1$.

A $12\,\text{V}$ source has its positive terminal at node $V_1$ and its negative terminal at ground. What is $V_1$? ![[images/flashcards/nodal-card-06.png|450]]
?
$V_1=12\,\text{V}$.

A $6\,\text{V}$ source lies between nonreference nodes with $+$ at $V_1$ and $-$ at $V_2$. Write its constraint. ![[images/flashcards/nodal-card-07.png|450]]
?
$V_1-V_2=6\,\text{V}$.

A supernode has $V_1$ connected to ground by $2\,\Omega$, $V_2$ connected to ground by $4\,\Omega$, and $3\,\text{A}$ entering. A source imposes $V_1-V_2=6\,\text{V}$. Solve. ![[images/flashcards/nodal-card-08.png|450]]
?
$V_1/2+V_2/4-3=0$ and $V_1-V_2=6$; therefore $V_1=6\,\text{V}$ and $V_2=0\,\text{V}$.

A dependent voltage source has $+$ at $V_1$, $-$ at $V_2$, and value $2I_x$. If $I_x=V_2/(4\,\Omega)$, write the node-voltage constraint. ![[images/flashcards/nodal-card-09.png|450]]
?
$V_1-V_2=2I_x=V_2/2$.

The solved current defined from $A$ to $B$ is $I_{A\to B}=-3\,\text{A}$. State the actual current.
?
$3\,\text{A}$ flows from $B$ to $A$.

The solved node voltage is $V_A=-4\,\text{V}$ relative to ground. Interpret the sign.
?
Node $A$ is $4\,\text{V}$ below the reference potential.

How are independent voltage and current sources deactivated for a resistance calculation?
?
Replace an independent voltage source with a short circuit and an independent current source with an open circuit.

Nodes $A$ and $B$ are shorted. If $V_A=7\,\text{V}$, find $V_B$. ![[images/flashcards/nodal-card-13.png|450]]
?
$V_B=V_A=7\,\text{V}$.

An open branch has $8\,\text{V}$ across it. Find its branch current. ![[images/flashcards/nodal-card-14.png|450]]
?
$I=0\,\text{A}$.

A $5\,\Omega$ resistor connects $V_A=8\,\text{V}$ to $V_B=3\,\text{V}$. Find current from $A$ to $B$ and absorbed power. ![[images/flashcards/nodal-card-15.png|450]]
?
$I_{A\to B}=(8-3)/5=1\,\text{A}$ and $P_R=I^2R=5\,\text{W}$ absorbed.

A $10\,\text{V}$ source carries $2\,\text{A}$ into its negative terminal. Find its power status. ![[images/flashcards/nodal-card-16.png|450]]
?
With passive sign convention, $p=10(-2)=-20\,\text{W}$, so the source delivers $20\,\text{W}$.
