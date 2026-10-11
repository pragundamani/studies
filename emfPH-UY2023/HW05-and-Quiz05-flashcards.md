---
title: "HW05 and Quiz 05 Flashcards"
tags:
  - flashcards/physics/HW05
  - physics
  - electric-field
  - electric-flux
---

#flashcards/physics/HW05

A uniformly charged rod extends from $x=a$ to $x=a+\ell$.
What is its electric field at a point to its left on the axis?
![[webassign-q1-figure.png]]
?
Use $\lambda=Q/\ell$:
$$
\vec E=-k_e\lambda\int_a^{a+\ell}\frac{dx}{x^2}\hat{\mathbf i}
=\boxed{-\frac{k_eQ}{a(a+\ell)}\hat{\mathbf i}}.
$$


A rod of length $2a$ is on the $y$-axis, and $P$ is distance $d$ from its center.
What are $r^3$ and the field at $P$?
![[webassign-q2-figure.png]]
?
Vertical components cancel.
$$
r^3=\boxed{(d^2+y^2)^{3/2}},
\qquad
\vec E=\boxed{\frac{k_eQ}{d\sqrt{d^2+a^2}}\hat{\mathbf i}}.
$$


For a uniformly charged ring, which field components cancel, and which add at an axial point $P$?
![[webassign-q3-figure.gif]]
?
Components perpendicular to the axis cancel in opposite pairs.
Components parallel to the axis add.
The ring is a continuous charge distribution.


Derive the electric field on the axis of a ring of radius $a$ at distance $x$.
![[webassign-q3-figure.gif]]
?
Use $r^2=a^2+x^2$ and $\cos\theta=x/r$:
$$
dE_x=\frac{k_ex}{(a^2+x^2)^{3/2}}dq.
$$
Since $\int dq=Q$,
$$
\boxed{\vec E=\frac{k_eQx}{(a^2+x^2)^{3/2}}\hat{\mathbf i}}.
$$


When does a charged ring act like a point charge?
?
When $x\gg a$:
$$
\frac{k_eQx}{(a^2+x^2)^{3/2}}
\approx \boxed{\frac{k_eQ}{x^2}}.
$$


For $x=3.00\ \mathrm m$, $a=1.60\ \mathrm m$, and $Q=-4.40\times10^{-9}\ \mathrm C$, find the ring's axial field.
![[webassign-q4-figure.png]]
?
$$
\vec E=\frac{k_eQx}{(a^2+x^2)^{3/2}}\hat{\mathbf i}
=\boxed{-3.02\hat{\mathbf i}\ \mathrm{N/C}}.
$$
The negative charge makes the field point toward the ring.


A negatively charged rod of length $L$ is bent into a semicircle.
Find the field at its center.
![[webassign-q5-figure.gif]]
![[webassign-q5-detail-figure.gif]]
?
Vertical components cancel. Use $L=\pi r$ and $\lambda=Q/L$:
$$
E_x=\frac{k_e\lambda}{r}\int_{-\pi/2}^{\pi/2}\cos\theta\,d\theta
=\boxed{\frac{2\pi k_eQ}{L^2}}.
$$
For this problem, $\boxed{|E|=1.38\times10^7\ \mathrm{N/C}}$, directed left toward the negative rod.


Find the flux through a circle with $E=4000\ \mathrm{N/C}$, $R=4.00\ \mathrm m$, and field parallel to its normal.
![[webassign-q6-figure.png]]
?
$$
\Phi_E=EA\cos0^\circ=(4000)\pi(4.00)^2
=\boxed{2.01\times10^5\ \mathrm{N\,m^2/C}}.
$$


Find the flux through a $5.00\ \mathrm m\times3.00\ \mathrm m$ rectangle when $E=3000\ \mathrm{N/C}$ and $\theta=150^\circ$ from the normal.
![[webassign-q7-figure.png]]
?
$$
\Phi_E=EA\cos\theta=(3000)(15.0)\cos150^\circ
=\boxed{-3.90\times10^4\ \mathrm{N\,m^2/C}}.
$$
It is negative because $\theta>90^\circ$.


A uniform field $E_0$ passes through an open paraboloidal surface of radius $r$ and depth $d$.
Find the curved-surface flux.
![[webassign-q8-figure.gif]]
?
Close it with a circular disk. Since $Q_{\rm enc}=0$,
$$
\Phi_{\rm curved}=-\Phi_{\rm disk}
=\boxed{E_0\pi r^2}.
$$
The depth $d$ is irrelevant.


A uniform field passes through a cube along the $x$-axis.
What are the fluxes through its faces and its net flux?
![[webassign-q9-figure.png]]
?
Four faces have zero flux because the field is parallel to them.
$$
\Phi_1=\boxed{-E\ell^2},
\qquad
\Phi_2=\boxed{+E\ell^2},
\qquad
\Phi_{\rm net}=\boxed{0}.
$$


A field of $18.0\ \mathrm{N/C}$ is $30.0^\circ$ from $+x$ toward $+z$.
What is the flux through the cube's $yz$ face if $\ell=0.210\ \mathrm m$ and its normal is $-\hat{\mathbf i}$?
?
Only $E_x=E\cos30^\circ$ contributes:
$$
\Phi_{yz}=-(18.0\cos30.0^\circ)(0.210)^2
=\boxed{-0.687\ \mathrm{N\,m^2/C}}.
$$


What are the flux signs when a field leaves, enters, or is tangent to a surface?
![[webassign-q10-figure.png]]
?
Field leaves $\Rightarrow$ positive flux.
Field enters $\Rightarrow$ negative flux.
Field is tangent $\Rightarrow$ zero flux.


Which two Quiz/HW statements about field lines are false?
?
False: flux is proportional to the **square** of the number of field lines.
It is proportional to the net number of lines.

False: more lines leaving gives negative flux.
More lines leaving gives **positive** flux.


For $E=1830\ \mathrm{N/C}$ and $A=1.3\ \mathrm{cm^2}$, find the fluxes at $65^\circ$, $90^\circ$, and $135^\circ$.
?
Convert $A=1.3\times10^{-4}\ \mathrm{m^2}$ and use $\Phi=EA\cos\theta$:

$\boxed{\Phi_{65^\circ}=0.1005\ \mathrm{N\,m^2/C}}$

$\boxed{\Phi_{90^\circ}=0}$

$\boxed{\Phi_{135^\circ}=-0.1682\ \mathrm{N\,m^2/C}}$


Quiz 5: A disk $A$ and hemispherical cup $B$ have radius $R$ and their centers are equally distant from a point charge.
Which has greater electric-flux magnitude?
![[quiz-05-q1-diagram.png]]
?
They are equal.
Close $B$ with its circular opening. No charge is enclosed, so the cup and opening have equal flux magnitudes. The opening matches disk $A$.
$$
\boxed{|\Phi_A|=|\Phi_B|}.
$$


Quiz 5: What is the full electric-field vector at axial point $P$ for a ring of radius $R$, charge $Q$, and axial distance $x$?
![[quiz-05-q2-diagram.png]]
?
Transverse components cancel. Use $r=\sqrt{R^2+x^2}$ and $\cos\theta=x/r$:
$$
\boxed{\vec E(P)=\frac{k_eQx}{(R^2+x^2)^{3/2}}\hat{\mathbf i}}.
$$
