---
title: "PH-UY 2023 HW05 — Short Full-Credit Solutions"
tags: [physics, electric-field, electric-flux, webassign]
score: "38/38"
---

# HW05 — Short Full-Credit Solutions

> [!info] Quiz 5
> Both quiz questions come from this homework. See [[Quiz-05-short-solutions]].

> [!tip] Core formulas
> $d\vec E=k_e\dfrac{dq}{r^2}\hat r$, $dq=\lambda\,d\ell$, and $\Phi_E=EA\cos\theta$, where $k_e=8.99\times10^9\ \mathrm{N\,m^2/C^2}$.

## 1. Finite rod on its axis

![[webassign-q1-figure.png]]

$$
\vec E=-k_e\lambda\int_a^{a+\ell}\frac{dx}{x^2}\hat{\mathbf i}
=-k_e\lambda\left(\frac1a-\frac1{a+\ell}\right)\hat{\mathbf i}
$$

Using $\lambda=Q/\ell$ gives $\boxed{\vec E=-\dfrac{k_eQ}{a(a+\ell)}\hat{\mathbf i}}$.

## 2. Finite rod on its perpendicular bisector

![[webassign-q2-figure.png]]

Vertical components cancel; horizontal components add. Since $r=\sqrt{d^2+y^2}$, the first answer is $\boxed{r^3=(d^2+y^2)^{3/2}}$.

$$
E_x=\frac{k_eQ}{2a}\int_{-a}^{a}\frac{d\,dy}{(d^2+y^2)^{3/2}}
=\frac{k_eQ}{d\sqrt{d^2+a^2}}
$$

Thus, $\boxed{\vec E=\dfrac{k_eQ}{d\sqrt{d^2+a^2}}\hat{\mathbf i}}$.

## 3. Field on the axis of a charged ring

![[webassign-q3-figure.gif]]

Choices: **parallel**, **perpendicular**, **continuous**. Opposite transverse components cancel.

Use $r^2=a^2+x^2$ and $\cos\theta=x/\sqrt{a^2+x^2}$:

$$
dE_x=k_e\frac{dq}{a^2+x^2}\frac{x}{\sqrt{a^2+x^2}}
=\frac{k_ex}{(a^2+x^2)^{3/2}}dq
$$

Therefore, $\boxed{\vec E=\dfrac{k_eQx}{(a^2+x^2)^{3/2}}\hat{\mathbf i}}$.

For $a=0.140\ \mathrm m$ and $Q=51.8\times10^{-6}\ \mathrm C$:

- $x=0.0200\ \mathrm m$: $\boxed{E=3.29\times10^6\ \mathrm{N/C}}$
- $x=0.120\ \mathrm m$: $\boxed{E=8.91\times10^6\ \mathrm{N/C}}$
- $x=0.700\ \mathrm m$: $\boxed{E=8.96\times10^5\ \mathrm{N/C}}$

For $x\gg a$, $E\approx k_eQ/x^2$.

## 4. Numerical charged-ring field

![[webassign-q4-figure.png]]

Use $x=3.00\ \mathrm m$, $a=1.60\ \mathrm m$, and $Q=-4.40\times10^{-9}\ \mathrm C$:

$$
\vec E=\frac{(8.99\times10^9)(-4.40\times10^{-9})(3.00)}
{[(1.60)^2+(3.00)^2]^{3/2}}\hat{\mathbf i}
$$

Answer: $\boxed{\vec E=-3.02\hat{\mathbf i}\ \mathrm{N/C}}$. The negative charge makes the field point toward the ring.

## 5. Negatively charged semicircular rod

![[webassign-q5-figure.gif]]

![[webassign-q5-detail-figure.gif]]

Symmetry gives $E_y=0$. Use $L=\pi r$, $\lambda=Q/L$, and $dq=\lambda r\,d\theta$:

$$
E_x=\frac{k_e\lambda}{r}\int_{-\pi/2}^{\pi/2}\cos\theta\,d\theta
=\frac{2\pi k_eQ}{L^2}
$$

For $L=0.175\ \mathrm m$ and $Q=-7.50\times10^{-6}\ \mathrm C$:

$$
|E|=\frac{2\pi(8.99\times10^9)(7.50\times10^{-6})}{(0.175)^2}
=1.38\times10^7\ \mathrm{N/C}
$$

Answers: $\boxed{|E|=1.38\times10^7\ \mathrm{N/C}}$ and $\boxed{\vec E=-1.38\times10^7\hat{\mathbf i}\ \mathrm{N/C}}$. Direction: **left**, toward the negative rod.

## 6. Flux through a circle

![[webassign-q6-figure.png]]

Here $A=\pi R^2$ and $\theta=0^\circ$:

$$
\Phi_E=EA\cos\theta=(4000)\pi(4.00)^2
=2.01\times10^5\ \mathrm{N\,m^2/C}
$$

Answer: $\boxed{\Phi_E=2.01\times10^5\ \mathrm{N\,m^2/C}}$.

## 7. Flux through a tilted rectangle

![[webassign-q7-figure.png]]

The area is $A=LW=(5.00)(3.00)=15.0\ \mathrm{m^2}$.

$$
\Phi_E=EA\cos\theta=(3000)(15.0)\cos150^\circ
=-3.90\times10^4\ \mathrm{N\,m^2/C}
$$

Answer: $\boxed{\Phi_E=-3.90\times10^4\ \mathrm{N\,m^2/C}}$. It is negative because $150^\circ>90^\circ$.

## 8. Flux through a paraboloid

![[webassign-q8-figure.gif]]

Close the curved surface with a circular disk. Since $Q_{\rm inside}=0$,

$$
\Phi_{\rm curved}+\Phi_{\rm disk}=0,
\qquad \Phi_{\rm disk}=-E_0\pi r^2.
$$

Therefore, $\boxed{\Phi_{\rm curved}=E_0\pi r^2}$. The depth $d$ is irrelevant.

## 9. Flux through a cube

![[webassign-q9-figure.png]]

The field is parallel to **four** faces. WebAssign category: **a substitution**.

- Entering face: $\boxed{\Phi_1=E\ell^2\cos180^\circ=-E\ell^2}$
- Leaving face: $\boxed{\Phi_2=E\ell^2\cos0^\circ=+E\ell^2}$
- Entire cube: $\boxed{\Phi_{\rm net}=0}$

For the exercise, the $yz$ face has outward normal $-\hat{\mathbf i}$:

$$
\Phi_{yz}=-(18.0\cos30.0^\circ)(0.210)^2
=-0.687\ \mathrm{N\,m^2/C}
$$

Answer: $\boxed{\Phi_{yz}=-0.687\ \mathrm{N\,m^2/C}}$.

## 10. Flux concepts and small area elements

![[webassign-q10-figure.png]]

### Concept answers

1. Field leaves surface $\Rightarrow$ **positive**.
2. Field is tangent $\Rightarrow$ **zero**.
3. Field enters surface $\Rightarrow$ **negative**.
4. False: flux is proportional to the **square** of the number of field lines.
5. False: more lines leaving gives negative flux. It actually gives **positive** flux.

### Numerical fluxes

Use $A=1.3\ \mathrm{cm^2}=1.3\times10^{-4}\ \mathrm{m^2}$ and $\Phi=EA\cos\theta$.

- $\theta=65^\circ$: $\boxed{\Phi_1=(1830)(1.3\times10^{-4})\cos65^\circ=0.1005\ \mathrm{N\,m^2/C}}$
- $\theta=90^\circ$: $\boxed{\Phi_2=0}$
- $\theta=135^\circ$: $\boxed{\Phi_3=(1830)(1.3\times10^{-4})\cos135^\circ=-0.1682\ \mathrm{N\,m^2/C}}$

For the entire empty closed surface, $\boxed{\Phi_{\rm net}=0}$.

---

# Fast sign check

| Situation | Flux |
|---|---:|
| Field leaves surface | Positive |
| Field enters surface | Negative |
| Field is tangent to surface | Zero |
| Empty closed surface in uniform field | Net zero |
