# Supernode

## Flashcards #flashcards/ece

For supernode boundary currents defined as leaving, write the governing KCL equation.
?
$\sum (V_i-V_k)/R+\sum I_{\text{leaving}}-\sum I_{\text{entering}}=0$

A voltage source $V_s$ is positive at node $A$ and negative at node $B$. Write its constraint. ![[images/flashcards/supernode-02-source-polarity.png|450]]
?
$V_A-V_B=V_s$

An $8\,\mathrm{V}$ source is positive at $B$ and negative at $A$. Write its constraint. ![[images/flashcards/supernode-03-8v-b-positive.png|450]]
?
$V_B-V_A=8\,\mathrm{V}$

A source $V_s$ is positive at node $A$ and negative at ground. Write the node-voltage equation. ![[images/flashcards/supernode-04-source-to-ground.png|450]]
?
$V_A=V_s$

Node $A$ has $2\,\Omega$ to ground, node $B$ has $4\,\Omega$ to ground, and a $6\,\mathrm{A}$ source enters the supernode. Write boundary KCL. ![[images/flashcards/supernode-05-boundary-kcl.png|450]]
?
$V_A/(2\,\Omega)+V_B/(4\,\Omega)-6\,\mathrm{A}=0$

Solve $6=V_A/2+V_B/4$ and $V_A-V_B=6$ for the node voltages. ![[images/flashcards/supernode-06-solve-node-voltages.png|450]]
?
$V_A=10\,\mathrm{V}$ and $V_B=4\,\mathrm{V}$

For $V_A=10\,\mathrm{V}$ with $2\,\Omega$ to ground and $6\,\mathrm{A}$ entering node $A$, find the voltage-source current defined from $A$ to $B$. ![[images/flashcards/supernode-07-source-current.png|450]]
?
$I_{A\to B}=6-10/2=1\,\mathrm{A}$

A calculated source current is $I_{A\to B}=-1.5\,\mathrm{A}$. State the actual current.
?
$1.5\,\mathrm{A}$ flows from $B$ to $A$.

A dependent voltage source is positive at $A$, negative at $B$, and has value $3V_x$. Write its constraint if $V_x=V_C-V_D$. ![[images/flashcards/supernode-09-dependent-source.png|450]]
?
$V_A-V_B=3(V_C-V_D)$

For $V_A-V_B=3V_x$ and $V_x=-2\,\mathrm{V}$, find $V_A-V_B$. ![[images/flashcards/supernode-10-dependent-value.png|450]]
?
$V_A-V_B=-6\,\mathrm{V}$, so $V_B$ is $6\,\mathrm{V}$ above $V_A$.

A $5\,\mathrm{V}$ source is positive at $A$ relative to $B$, and a $3\,\mathrm{V}$ source is positive at $B$ relative to $C$. Write the constraints and find $V_A-V_C$. ![[images/flashcards/supernode-11-series-sources.png|450]]
?
$V_A-V_B=5\,\mathrm{V}$, $V_B-V_C=3\,\mathrm{V}$, and $V_A-V_C=8\,\mathrm{V}$

A $6\,\mathrm{V}$ source is positive at $A$ relative to $B$, with a $3\,\Omega$ resistor in parallel. Find the resistor current from $A$ to $B$. ![[images/flashcards/supernode-12-parallel-resistor.png|450]]
?
$I_R=(V_A-V_B)/R=6/3=2\,\mathrm{A}$

A $6\,\mathrm{V}$ source has $1\,\mathrm{A}$ flowing from its positive terminal $A$ to its negative terminal $B$. Find its power and status. ![[images/flashcards/supernode-13-source-absorbing.png|450]]
?
$p=vi=(6)(1)=6\,\mathrm{W}$ absorbed

A $6\,\mathrm{V}$ source has $1\,\mathrm{A}$ flowing from $B$ to its positive terminal $A$. Find its power and status using passive sign convention. ![[images/flashcards/supernode-14-source-delivering.png|450]]
?
$p=vi=(6)(-1)=-6\,\mathrm{W}$, so it delivers $6\,\mathrm{W}$.

How do the node constraint and circuit element change when an independent voltage source between $A$ and $B$ is deactivated?
?
Replace it with a short circuit, so $V_A=V_B$.
