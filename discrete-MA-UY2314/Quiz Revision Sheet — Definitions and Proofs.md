---
title: Quiz Revision Sheet — Definitions, Proofs, and Examples
source_notes:
  - Note Sep 23, 2026
  - Note Sep 28, 2026
  - Note Oct 5, 2026 (4.4 only)
---

# Quiz Revision Sheet

## Definitions

**Even.** An integer $n\in\mathbb Z$ is even iff there exists $k\in\mathbb Z$ such that $n=2k$.

**Odd.** An integer $n\in\mathbb Z$ is odd iff there exists $k\in\mathbb Z$ such that $n=2k+1$.

**Prime.** An integer $n>1$ is prime iff, for all $r,s\in\mathbb Z^+$, if $n=rs$, then either $r=1$ and $s=n$, or $r=n$ and $s=1$.

**Composite.** An integer $n>1$ is composite iff there exist $r,s\in\mathbb Z^+$ such that $n=rs$, $1<r<n$, and $1<s<n$.

**Divisibility.** Let $n,d\in\mathbb Z$. Then $d\mid n$ iff there exists $k\in\mathbb Z$ such that $n=dk$ and $d\ne0$.

- $d\mid n$: $d$ divides $n$.
- $d$ is a factor of $n$.
- $d$ is a divisor of $n$.
- $n$ is a multiple of $d$.

## Facts used in proofs

- Integers are closed under addition and multiplication.
- If $a=b$ and $b=c$, then $a=c$.
- If $a=b$, then $b=a$.
- If $a=b$, then one may substitute $b$ for $a$.
- If $ab=0$, then $a=0$ or $b=0$.

## Counterexample

To prove that a statement of the form $\forall x\in D,\;P(x)$ is false, prove its negation: $\exists a\in D$ such that $P(a)$ is false. Find **one** counterexample.

**Example.** $\forall a,b\in\mathbb Z$, if $a^2=b^2$, then $a=b$.

False. Let $a=-1$ and $b=1$. Then $a,b\in\mathbb Z$ and $a^2=b^2$, but $a\ne b$.

Note: $a^2=b^2$ means $(a-b)(a+b)=0$, so $a=b$ **or** $a=-b$.

## Direct-proof style

To prove $\forall x\in D$, if $P(x)$ then $Q(x)$:

> Let $a$ be a particular but arbitrarily chosen element of $D$ such that $P(a)$ is true. We must show that $Q(a)$ is true. Use algebra, definitions, and facts already known. Therefore the statement is true for all $x\in D$.

Always provide a reason: definition, substitution, algebra, factoring, or closure of the integers.

## Examples from the notes

### Example: the sum of two even numbers is even

**Prove that the sum of any two even numbers is even.**

**Proof.**

Suppose that $m$ and $n$ are any two particular but arbitrarily chosen integers.

Suppose that $m$ and $n$ are even.

Then $m=2k$ and $n=2\ell$ for some $k,\ell\in\mathbb Z$, by definition of even.

So $m+n=2k+2\ell$.

$m+n=2(k+\ell)$, by factoring out $2$.

Since $k+\ell\in\mathbb Z$, let $r=k+\ell$.

Then $m+n=2r$ for some $r\in\mathbb Z$.

By definition of even, $m+n$ is even. $\square$

### Example: if $m$ is even, then $3m+5$ is odd

**Proof.**

Let $m$ be any even integer.

Then $m=2r$ for some $r\in\mathbb Z$, by definition of an even integer.

So $3m+5=3(2r)+5$, by substitution.

$3m+5=6r+5$, by algebra.

$3m+5=2(3r+2)+1$, by factoring out $2$ and addition.

Now $3r+2\in\mathbb Z$ because integers are closed under multiplication and addition.

Thus $3m+5=2k+1$ for some $k\in\mathbb Z$.

By definition of odd numbers, $3m+5$ is odd. $\square$

### Example: $m^2-1$ is not prime

**Prove that for all $m\in\mathbb Z$ with $m\ge3$, $m^2-1$ is not prime.**

**Proof.**

Let $m$ be any particular but arbitrarily chosen integer such that $m\ge3$.

Then $m^2-1=(m+1)(m-1)$, by factoring.

Since $m\ge3$, $m+1\ge4$ and $m-1\ge2$.

Therefore $m+1\ne1$ and $m-1\ne1$.

Therefore $m^2-1$ cannot be prime. $\square$

### Example: $2k^2-5k+2$ is composite

**Prove that for all $k\in\mathbb Z$, if $k\ge4$, then $2k^2-5k+2$ is composite.**

**Proof.** Let $k$ be any integer such that $k\ge4$. Then $2k^2-5k+2=(2k-1)(k-2)$, by factoring.

We must prove $1<2k-1<2k^2-5k+2$ and $1<k-2<2k^2-5k+2$.

Since $k\ge4$, $2k-1\ge7>1$ and $k-2\ge2>1$.

To prove $2k-1<2k^2-5k+2$, prove $0<2k^2-7k+3$.

$2k^2-7k+3=(2k-1)(k-3)>0$.

This is true because $2k-1>0$ and $k-3>0$.

Therefore $2k-1<2k^2-5k+2$.

To prove $k-2<2k^2-5k+2$, prove $0<2k^2-6k+4$.

$2k^2-6k+4=2(k-1)(k-2)>0$.

Therefore $k-2<2k^2-5k+2$.

So $2k^2-5k+2=(2k-1)(k-2)$ has two proper factors greater than $1$.

Therefore $2k^2-5k+2$ is composite. $\square$

### Example: divisibility

$2\mid4$ is true because $4=2\cdot2$ and $2\in\mathbb Z$.

$4\nmid2$ because $\frac24\notin\mathbb Z$.

$8\mid0$ is true because $0=8\cdot0$ and $0\in\mathbb Z$.

$0\nmid8$ because division by $0$ is not allowed.

### Theorem: if $a\mid b$, then $a\le b$

**Theorem.** If $a,b\in\mathbb Z$, $a>0$, $b>0$, and $a\mid b$, then $a\le b$.

**Proof.**

Let $a$ and $b$ be any positive integers such that $a\mid b$.

By definition of divisibility, there exists $k\in\mathbb Z$ such that $b=ak$.

Since $b>0$ and $a>0$, $k>0$.

So $1\le k$.

Multiply both sides by $a$.

$a\le ak$.

By substitution, $a\le b$. $\square$

### Example: a linear combination

**Prove that if $5\mid a$ and $10\mid b$, then $5\mid(2a+3b)$.**

**Proof.**

Let $a,b$ be any integers such that $5\mid a$ and $10\mid b$.

By definition of divisibility, $a=5k$ for some $k\in\mathbb Z$.

Also, $b=10\ell$ for some $\ell\in\mathbb Z$.

Then $2a+3b=2(5k)+3(10\ell)$, by substitution.

$2a+3b=5(2k+6\ell)$, by factoring out $5$.

Since $2k+6\ell\in\mathbb Z$, let $m=2k+6\ell$.

Then $2a+3b=5m$ for some $m\in\mathbb Z$.

By definition of divisibility, $5\mid(2a+3b)$. $\square$

### Theorem: divisors of $1$

The only divisors of $1$ are $1$ and $-1$.

## Final check

- [ ] I can write every definition with the correct $\exists$ or $\forall$.
- [ ] I name an arbitrary integer and state its condition.
- [ ] I give a reason for each important proof step.
- [ ] I introduce an integer witness when the definition needs one.
- [ ] For composite, I show the factors are greater than $1$ and less than the number.
- [ ] For $d\mid n$, I write $n=dk$ for some $k\in\mathbb Z$.


## Polynomial example — explainer

**Question:** If $p(x)=\frac12x^2-\frac34x+\frac18$ and $p(c)=0$, how do we make a polynomial with integer coefficients that still has root $c$?

**What the question means:**

$c$ is a root because plugging in $c$ makes the polynomial equal $0$.

The coefficients $\frac12$, $-\frac34$, and $\frac18$ are rational numbers.

We want to remove the fractions.

**Step 1: Find a number that clears every denominator.**

The denominators are $2$, $4$, and $8$.

Use $8$ because $8$ is divisible by $2$, $4$, and $8$.

**Step 2: Multiply the entire polynomial by $8$.**

Let $q(x)=8p(x)$.

$q(x)=8\left(\frac12x^2-\frac34x+\frac18\right)$.

$q(x)=4x^2-6x+1$.

Now every coefficient in $q(x)$ is an integer.

**Step 3: Explain why $c$ is still a root.**

We are given $p(c)=0$.

So $q(c)=8p(c)$.

$q(c)=8\cdot0$.

$q(c)=0$.

Therefore $c$ is a root of $q(x)=4x^2-6x+1$ too.

> [!tip]
> Multiplying an equation equal to $0$ by a nonzero number does not change the fact that it equals $0$. We multiply every term by the same number; we do not change only one term.
