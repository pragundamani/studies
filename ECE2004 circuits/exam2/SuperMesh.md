# SuperMesh

## Flashcards #flashcards/ece

A shared current source points in the direction of $I_1$ and opposite $I_2$. Write its constraint. ![[images/flashcards/supermesh-shared-source-i1.png|450]]
?
$I_1-I_2=I_s$

The shared source arrow is reversed. Write its constraint. ![[images/flashcards/supermesh-shared-source-i2.png|450]]
?
$I_2-I_1=I_s$

A $12\,\mathrm{V}$ rise and outer resistors $2\,\Omega$ and $4\,\Omega$ form a supermesh. Write KVL for clockwise $I_1$ and $I_2$. ![[images/flashcards/supermesh-12v-2ohm-4ohm.png|450]]
?
$-12+2I_1+4I_2=0$

Solve $2I_1+4I_2=12$ and $I_1-I_2=1$. ![[images/flashcards/supermesh-12v-2ohm-4ohm-1a.png|450]]
?
$I_1=2.67\,\mathrm{A}$ and $I_2=1.67\,\mathrm{A}$

A $3\,\mathrm{A}$ source lies only on the outer edge of mesh 1 and points with clockwise $I_1$. Find $I_1$. ![[images/flashcards/supermesh-outer-source-3a.png|450]]
?
$I_1=3\,\mathrm{A}$

For clockwise adjacent mesh currents, find the shared-branch current referenced in the direction of $I_1$. ![[images/flashcards/supermesh-shared-branch-reference.png|450]]
?
$I_b=I_1-I_2$

If $I_1=5\,\mathrm{A}$ and $I_2=2\,\mathrm{A}$, find the shared-branch current in the direction of $I_2$. ![[images/flashcards/supermesh-shared-branch-5a-2a.png|450]]
?
$I_b=I_2-I_1=-3\,\mathrm{A}$

If solving gives $I_2=-1.5\,\mathrm{A}$ for an assumed clockwise current, state the actual current.
?
$1.5\,\mathrm{A}$ counterclockwise

A shared $6\,\Omega$ resistor carries $I_1-I_2=2\,\mathrm{A}$. Find its voltage drop in that current direction. ![[images/flashcards/supermesh-shared-resistor-6ohm-2a.png|450]]
?
$V=R(I_1-I_2)=(6)(2)=12\,\mathrm{V}$

A $5\,\Omega$ resistor carries $I_1-I_2=-2\,\mathrm{A}$. Find its absorbed power. ![[images/flashcards/supermesh-shared-resistor-5ohm-minus2a.png|450]]
?
$P=R(I_1-I_2)^2=5(-2)^2=20\,\mathrm{W}$ absorbed

Write the passive-sign-convention power equation and classify its sign.
?
$p=vi$; $p>0$ is absorbed and $p<0$ is delivered

A source has $v=8\,\mathrm{V}$ and $i=-3\,\mathrm{A}$ under the passive sign convention. Find its power. ![[images/flashcards/supermesh-psc-source-8v-minus3a.png|450]]
?
$p=vi=(8)(-3)=-24\,\mathrm{W}$, so it delivers $24\,\mathrm{W}$

Mesh KVL gives $10-2I_1-v_s=0$. Find $v_s$ when $I_1=3\,\mathrm{A}$. ![[images/flashcards/supermesh-kvl-10v-2ohm-vs.png|450]]
?
$v_s=10-2(3)=4\,\mathrm{V}$

How is an independent voltage source deactivated for a resistance calculation?
?
Set $v_s=0$ and replace it with a short circuit.

How is an independent current source deactivated for a resistance calculation?
?
Set $i_s=0$ and replace it with an open circuit.

A $2\,\mathrm{A}$ shared source requires $I_1-I_2=2\,\mathrm{A}$. If $I_1=-1\,\mathrm{A}$, find $I_2$. ![[images/flashcards/supermesh-shared-source-2a-i1-minus1a.png|450]]
?
$I_2=I_1-2=-3\,\mathrm{A}$
