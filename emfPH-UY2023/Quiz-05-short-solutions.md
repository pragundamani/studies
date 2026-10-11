---
title: "Quiz 05 — Exact Questions and Minimum Full-Credit Answers"
tags: [physics, quiz, electric-field, electric-flux]
related: "[[HW05-explained]]"
---

# Quiz 05 — Exact Questions and Answers

## Question 1 — Electric flux (3 pts)

> **Exact question:** The figure at right shows the $\vec E$ field lines from a single positive point charge, along with two surfaces: $A$ = a disc of radius $R$, and $B$ = a hollow-cup hemisphere also of radius $R$ (like a hemispherical balloon with a circular opening; not a closed surface). The center of disc $A$ and the center of the circular opening to hemisphere $B$ are equidistant from the point charge. Which of those two surfaces has a greater electric flux through it (or are they equal)? Briefly justify your answer.

![[quiz-05-q1-diagram.png]]

### Minimum full-credit answer

Close hemisphere $B$ with its circular opening. The charge is outside this closed surface, so $Q_{\rm enc}=0$ and its net flux is zero. Thus the flux magnitude through $B$ equals that through its opening. That opening and disk $A$ have the same radius and distance from the charge, so their fluxes are equal.

$$
\boxed{|\Phi_A|=|\Phi_B|}
$$

**Answer:** Neither is greater; they have equal electric-flux magnitude.

---

## Question 2 — Field of a charged ring (5 pts)

> **Exact question:** The figure shows a uniformly charged ring of radius $R$ and total charge $Q$ sitting in the $yz$-plane (its center is at the origin). Point $P$ is on the central axis of the ring, a distance $x$ from the ring's center. Determine the electric field vector $\vec E$ at point $P$ (give the full vector). Justify the steps you use to arrive at your answer, which should be expressed solely in terms of $R$, $Q$, $x$, and constants of nature, as needed.

![[quiz-05-q2-diagram.png]]

### Minimum full-credit answer

By symmetry, the $y$- and $z$-components cancel, so only $E_x$ remains. For every charge element, $r=\sqrt{R^2+x^2}$ and $\cos\theta=x/r$.

$$
dE_x=k_e\frac{dq}{r^2}\cos\theta
=k_e\frac{x\,dq}{(R^2+x^2)^{3/2}}
$$

Using $\int dq=Q$:

$$
\boxed{\vec E(P)=\frac{k_eQx}{(R^2+x^2)^{3/2}}\hat{\mathbf i}}
$$

---

## WebAssign match

| Quiz 5 | Matching HW05 material |
|---|---|
| Question 1 | Question 8; closed-surface ideas in Questions 9–10 |
| Question 2 | Question 3; numerical use in Question 4 |
