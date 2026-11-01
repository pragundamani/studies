# Mesh

## Flashcards #flashcards/ece

What is the branch current through an element used only by mesh $k$? ![[images/flashcards/mesh-01-single-branch.png|450]]
?
In the mesh-current reference direction, $i=I_k$; for a resistor, $v=RI_k$.

For clockwise meshes $I_1$ and $I_2$, what is the shared-branch current in mesh 1's direction? ![[images/flashcards/mesh-02-shared-branch.png|450]]
?
$i=I_1-I_2$; a shared resistor has drop $v=R(I_1-I_2)$ in mesh 1's traversal direction.

What is the resistor-only mesh equation in matrix form?
?
$\mathbf{R}\mathbf{I}=\mathbf{V}$, where $R_{kk}$ is the resistance sum in mesh $k$, $R_{km}$ is the negative shared resistance, and $V_k$ is the signed source-rise sum.

Mesh 1 contains a $2\,\Omega$ resistor, shares a $3\,\Omega$ resistor with mesh 2, and has a $10\,	ext{V}$ rise. Write its mesh equation. ![[images/flashcards/mesh-04-equation-values.png|450]]
?
$2I_1+3(I_1-I_2)=10$, or $5I_1-3I_2=10$.

Using “resistor drops = source rises,” how is a traversed voltage source signed?
?
Crossing from $-$ to $+$ gives a positive rise; crossing from $+$ to $-$ gives a negative rise.

A $2\,	ext{A}$ outer-edge current source points with clockwise mesh current $I_1$. Write the constraint. ![[images/flashcards/mesh-06-source-aligned.png|450]]
?
$I_1=2\,	ext{A}$.

A $2\,	ext{A}$ outer-edge current source points opposite clockwise mesh current $I_1$. Write the constraint. ![[images/flashcards/mesh-07-source-opposed.png|450]]
?
$I_1=-2\,	ext{A}$.

A $3\,	ext{A}$ source shared by meshes 1 and 2 points in mesh 1's branch direction. What source constraint is used with the supermesh KVL equation? ![[images/flashcards/mesh-08-shared-source.png|450]]
?
$I_1-I_2=3\,	ext{A}$.

A dependent voltage source is $4i_x$ and its controlling branch is shared, with reference in mesh 1's direction. Substitute the control variable. ![[images/flashcards/mesh-09-dependent-source.png|450]]
?
$i_x=I_1-I_2$, so the source voltage is $4(I_1-I_2)$.

Solve $6I_1-4I_2=8$ and $-4I_1+10I_2=2$.
?
$I_1=2\,	ext{A}$ and $I_2=1\,	ext{A}$.

If a solved clockwise mesh current is $I_2=-1.5\,	ext{A}$, what is the actual current?
?
$1.5\,	ext{A}$ counterclockwise.

If $I_1=3\,	ext{A}$ and $I_2=-1\,	ext{A}$, find the shared-branch current in mesh 1's direction. ![[images/flashcards/mesh-12-shared-current-values.png|450]]
?
$i=I_1-I_2=3-(-1)=4\,	ext{A}$.

How are independent sources deactivated when checking a resistive mesh circuit?
?
Replace an independent voltage source with a short circuit and an independent current source with an open circuit; keep dependent sources active.

A $4\,\Omega$ shared resistor has $I_1=2\,	ext{A}$ and $I_2=1\,	ext{A}$. Find its absorbed power. ![[images/flashcards/mesh-14-shared-resistor-power.png|450]]
?
$i=I_1-I_2=1\,	ext{A}$, so $P=i^2R=(1)^2(4)=4\,	ext{W}$ absorbed.

A $12\,	ext{V}$ source carries $2\,	ext{A}$ into its positive terminal. Find its power status. ![[images/flashcards/mesh-15-source-absorbing.png|450]]
?
$p=vi=(12)(2)=24\,	ext{W}$ absorbed.

A $10\,	ext{V}$ source carries $3\,	ext{A}$ out of its positive terminal. Find its power status. ![[images/flashcards/mesh-16-source-delivering.png|450]]
?
$p=-vi=-(10)(3)=-30\,	ext{W}$, so it delivers $30\,	ext{W}$.
