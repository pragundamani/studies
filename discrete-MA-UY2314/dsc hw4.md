# Homework 4

### Section 4.3 #14
###### (a)
$\forall x\in\mathbb Q,\,x^3\in\mathbb Q$

###### (b)
True Let $x$ be any rational number Then $x=\frac ab$ for some integers $a$ and $b$ with $b\ne0$ Thus
$x^3=\left(\frac ab\right)^3=\frac{a^3}{b^3}$
Since $a^3,b^3\in\mathbb Z$ and $b^3\ne0$, $x^3$ is rational by definition

### Section 4.3 #18
True Let $r$ and $s$ be any rational numbers Then $r=\frac ab$ and $s=\frac cd$ for some integers $a,b,c,d$ with $b\ne0$ and $d\ne0$ Thus
$\frac{r+s}{2}=\frac{\frac ab+\frac cd}{2}=\frac{ad+bc}{2bd}$
Since $ad+bc$ and $2bd$ are integers and $2bd\ne0$, $\frac{r+s}{2}$ is rational by definition

### Section 4.3 #32
Let $c$ be a root of a polynomial with rational coefficients $p(x)=a_nx^n+\cdots+a_1x+a_0$, so $p(c)=0$ Write each coefficient as $a_i=\frac{b_i}{d_i}$, where $b_i,d_i\in\mathbb Z$ and $d_i\ne0$

Let $D=|d_0d_1\cdots d_n|$ and define $q(x)=Dp(x)$ Each coefficient of $q(x)$ has the form $Da_i=b_i\frac D{d_i}$, which is an integer Also, $q(c)=Dp(c)=D(0)=0$ Therefore $c$ is a root of a polynomial with integer coefficients

### Section 4.3 #33
###### (a)
$(x-r)(x-s)=x^2-(r+s)x+rs$

- If $r$ and $s$ are both odd, the coefficients are odd, even, odd
- If $r$ and $s$ are both even, the coefficients are odd, even, even
- If one is even and the other is odd, the coefficients are odd, odd, even

The negative sign on $-(r+s)$ does not change whether the coefficient is even or odd

###### (b)
Suppose $x^2-1253x+255=(x-r)(x-s)$ for some integers $r$ and $s$ Comparing coefficients gives $r+s=1253$ and $rs=255$ Since $rs$ is odd, both $r$ and $s$ must be odd But the sum of two odd integers is even, while $1253$ is odd This is a contradiction Therefore $x^2-1253x+255$ cannot be factored into two nonconstant polynomials with integer coefficients

### Section 4.3 #36
The proof checks only the specific rational numbers $r=\frac14$ and $s=\frac12$ This example shows that their sum is rational, but it does not prove the claim for every pair of rational numbers A universal statement cannot be proved using only one example
