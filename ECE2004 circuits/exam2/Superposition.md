# Superposition

## Flashcards #flashcards/ece

For source contributions $x_1,x_2,\ldots,x_n$ measured with one reference, write the total response.
?
$x=x_1+x_2+\cdots+x_n$

Deactivate an ideal independent voltage source.
?
Set $V_s=0$ and replace it with a short circuit.

Deactivate an ideal independent current source.
?
Set $I_s=0$ and replace it with an open circuit.

A practical voltage source is $V_s$ in series with $R_s$. What remains when $V_s$ is deactivated? ![[images/flashcards/superposition-card-04-practical-source.png|450]]
?
The resistor $R_s$ remains in the circuit; only the ideal voltage source becomes a short.

A dependent source obeys $v_d=3i_x$. Write its constraint in each superposition subproblem. ![[images/flashcards/superposition-card-05-dependent-source.png|450]]
?
Keep the source active and use $v_d=3i_x$, with $i_x$ recalculated for that subproblem.

A $10\,\text{V}$ source drives series resistors $2\,\Omega$ and $3\,\Omega$. Find the voltage contribution across the $3\,\Omega$ resistor. ![[images/flashcards/superposition-card-06-divider.png|450]]
?
$v_1=10\left(\frac{3}{2+3}\right)=6.0\,\text{V}$

A $2\,\text{A}$ source feeds $4\,\Omega\parallel12\,\Omega$. Find the node-voltage contribution. ![[images/flashcards/superposition-card-07-parallel.png|450]]
?
$R_{\text{eq}}=4\parallel12=3\,\Omega$, so $v_2=(2)(3)=6.0\,\text{V}$.

With only a $12\,\text{V}$ source active, node voltage $v_1$ connects to $12\,\text{V}$ through $4\,\Omega$ and to ground through $6\,\Omega$. Write KCL and solve. ![[images/flashcards/superposition-card-08-voltage-source.png|450]]
?
$\frac{v_1-12}{4}+\frac{v_1}{6}=0$, so $v_1=7.2\,\text{V}$.

With the voltage source shorted, a $2\,\text{A}$ source enters a node connected to ground through $4\,\Omega$ and $6\,\Omega$. Write KCL and solve. ![[images/flashcards/superposition-card-09-current-source.png|450]]
?
$\frac{v_2}{4}+\frac{v_2}{6}=2$, so $v_2=4.8\,\text{V}$.

The node contributions are $v_1=7.2\,\text{V}$ and $v_2=4.8\,\text{V}$. Find the total node voltage and downward current through $6\,\Omega$. ![[images/flashcards/superposition-card-10-total-node.png|450]]
?
$v=7.2+4.8=12.0\,\text{V}$ and $i=v/6=2.0\,\text{A}$ downward.

A current reference points right. Two source contributions are $+0.65\,\text{A}$ and $-0.90\,\text{A}$. Find and interpret the total.
?
$i=0.65-0.90=-0.25\,\text{A}$, so the actual current is $0.25\,\text{A}$ left.

Clockwise mesh currents are $i_1=3.0\,\text{A}$ and $i_2=1.2\,\text{A}$ through a shared branch referenced with $i_1$. Find the branch current. ![[images/flashcards/superposition-card-12-meshes.png|450]]
?
$i_b=i_1-i_2=3.0-1.2=1.8\,\text{A}$ in the $i_1$ direction.

A resistor current has source contributions $i_1$ and $i_2$. Write its absorbed power after superposition.
?
$p_R=R(i_1+i_2)^2$

A $4\,\Omega$ resistor has total current $1.5\,\text{A}$. Find its absorbed power. ![[images/flashcards/superposition-card-14-resistor-power.png|450]]
?
$p_R=i^2R=(1.5)^2(4)=9.0\,\text{W}$ absorbed.

A $12\,\text{V}$ source carries a total current of $2.0\,\text{A}$ entering its negative terminal. Find its power status. ![[images/flashcards/superposition-card-15-source-power.png|450]]
?
$p=-vi=-(12)(2.0)=-24\,\text{W}$, so the source delivers $24\,\text{W}$.
