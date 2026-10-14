---
tags:
  - flashcards/discrete
  - quiz-4
  - chapter-4-3
---
## Class Examples

### Example 1 — Repeating decimal
Write $0.\overline{12}$ as a ratio of two integers.
?
Let $x=0.\overline{12}$.
Then $100x=12.\overline{12}$, so $100x-x=12$ and $99x=12$.
Therefore, $x=\frac{12}{99}=\frac{4}{33}\in\mathbb Q$.
$\square$

### Example 2 — Sum of rational numbers
Prove that the sum of any two rational numbers is rational.
?
**Proof:**
Let $m,n\in\mathbb Q$.
Then $m=\frac{a}{b}$ and $n=\frac{c}{d}$ for some $a,b,c,d\in\mathbb Z$ with $b,d\ne0$.
Thus $m+n=\frac{ad+bc}{bd}$.
Since integers are closed under addition and multiplication, $ad+bc,bd\in\mathbb Z$.
Also, $bd\ne0$ by the zero-product property.
Therefore, $m+n\in\mathbb Q$.
$\square$

### Example 3 — Clear polynomial denominators
Suppose $c$ is a root of $p(x)=\frac12x^2-\frac34x+\frac18$.
Prove that $c$ is a root of a polynomial with integer coefficients.
?
**Proof:**
Since $p(c)=0$, let $q(x)=8p(x)=4x^2-6x+1$.
The coefficients of $q$ are integers, and $q(c)=8p(c)=0$.
Therefore, $c$ is a root of the integer-coefficient polynomial $q(x)$.
$\square$

### Example 4 — Rational number between two rationals
Prove that if $r,s\in\mathbb Q$ and $r<s$, then a rational number lies strictly between them.
?
**Proof:**
Let $m=\frac{r+s}{2}$.
By HW4 #18, $m\in\mathbb Q$.
Since $r<s$, adding $r$ gives $2r<r+s$, so $r<m$.
Adding $s$ gives $r+s<2s$, so $m<s$.
Therefore, $r<m<s$, and $m$ is rational.
$\square$

### Example 5 — Disprove closure under quotient
Disprove: For all $r,s\in\mathbb Q$, $\frac{r}{s}\in\mathbb Q$.
?
**Disproof:**
Let $r=1$ and $s=0$.
Then $r,s\in\mathbb Q$, but $\frac{r}{s}=\frac10$ is undefined and therefore is not rational.
Thus the statement is false.
$\square$

### Example 6 — Difference of rational numbers
Prove that the difference of any two rational numbers is rational.
?
**Proof:**
Let $r=\frac{a}{b}$ and $s=\frac{c}{d}$, where $a,b,c,d\in\mathbb Z$ and $b,d\ne0$.
Then $r-s=\frac{ad-bc}{bd}$.
Since $ad-bc,bd\in\mathbb Z$ and $bd\ne0$, $r-s\in\mathbb Q$.
$\square$

## Homework 4 Questions

### HW4 #4.3 #14(a)
Write “The cube of any rational number is rational” symbolically.
?
$\forall r\in\mathbb R$, if $r$ is rational, then $r^3$ is rational.

### HW4 #4.3 #14(b)
Prove that the cube of any rational number is rational.
?
**Proof:**
Let $r$ be an arbitrary rational number.
Then $r=\frac{a}{b}$ for some $a,b\in\mathbb Z$ with $b\ne0$.
Thus $r^3=\frac{a^3}{b^3}$.
Since products of integers are integers, $a^3,b^3\in\mathbb Z$.
Also, $b^3\ne0$ by the zero-product property.
Therefore, $r^3$ is rational by definition.
$\square$

### HW4 #4.3 #18
Prove that the average of any two rational numbers is rational.
?
**Proof:**
Let $r,s\in\mathbb Q$.
Then $r=\frac{a}{b}$ and $s=\frac{c}{d}$ for some $a,b,c,d\in\mathbb Z$ with $b,d\ne0$.
Thus $\frac{r+s}{2}=\frac{ad+bc}{2bd}$.
Let $p=ad+bc$ and $q=2bd$.
Then $p,q\in\mathbb Z$, and $q\ne0$ by the zero-product property.
Hence $\frac{r+s}{2}=\frac{p}{q}$ is rational by definition.
$\square$

### HW4 #4.3 #32
Prove that a root of a polynomial with rational coefficients is a root of a polynomial with integer coefficients.
?
**Proof:**
Let $c$ be a root of $a_nx^n+\cdots+a_0$, where $a_i\in\mathbb Q$ and $a_n\ne0$.
Write $a_i=\frac{p_i}{q_i}$ with $p_i,q_i\in\mathbb Z$ and $q_i\ne0$.
Let $Q=q_0q_1\cdots q_n$ and $b_i=Qa_i$.
Then $Q\ne0$ by the zero-product property, and $b_i=p_i\prod_{j\ne i}q_j\in\mathbb Z$ because it is a product of integers.
Also, $b_n=Qa_n\ne0$ by the zero-product property.
Multiplying $a_nc^n+\cdots+a_0=0$ by $Q$ gives $b_nc^n+\cdots+b_0=0$.
Therefore, $c$ is a root of the integer-coefficient polynomial $b_nx^n+\cdots+b_0$.
$\square$

### HW4 #4.3 #33(a)
Determine the parity of the coefficients of $(x-r)(x-s)$ for all parity cases.
?
$(x-r)(x-s)=x^2-(r+s)x+rs$.
If $r,s$ are odd, the coefficients are odd, even, odd.
If $r,s$ are even, they are odd, even, even.
If one is even and one is odd, they are odd, odd, even.
A negative sign does not change parity.
$\square$

### HW4 #4.3 #33(b)
Prove that $x^2-1253x+255$ cannot be factored into two nonconstant integer-coefficient polynomials.
?
**Proof:**
Suppose it factors as $(ax+b)(cx+d)$ with $a,b,c,d\in\mathbb Z$.
Both factors have degree $1$ because they are nonconstant and their product has degree $2$.
Since $ac=1$, either $a=c=1$ or $a=c=-1$.
Changing both signs in the second case lets us write $x^2-1253x+255=(x-r)(x-s)$ for some $r,s\in\mathbb Z$.
If $r,s$ are odd, the $x$-coefficient is even.
If at least one is even, the constant $rs$ is even.
Thus the product cannot have both an odd $x$-coefficient and an odd constant.
But $-1253$ and $255$ are both odd, a contradiction.
Therefore, no such factorization exists.
$\square$

### HW4 #4.3 #36
What is wrong with checking only $r=\frac14$ and $s=\frac12$ to prove that the sum of any two rational numbers is rational?
?
This is **arguing from examples**.
It proves only one case, not the universal statement.
A valid proof must use arbitrary $r=\frac{a}{b}$ and $s=\frac{c}{d}$ with integer numerators and nonzero denominators, then show $r+s=\frac{ad+bc}{bd}\in\mathbb Q$.
$\square$
