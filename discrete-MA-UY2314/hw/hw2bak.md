---
id: hw2
aliases: []
tags: []
---
# Homework 2

### 1. Section 3.1 #4, #20, #32(b)(d)

>[!question]
> **Section 3.1 #4.** Let $Q(x,y)$ be the predicate “If $x<y$, then $x^2<y^2$,” with domain $\mathbb R$ for both $x$ and $y$.
>
> (a) Explain why $Q(-2,1)$ is false.
>
> (b) Give values different from those in part (a) for which $Q(x,y)$ is false.
>
> (c) Explain why $Q(3,8)$ is true.
>
> (d) Give values different from those in part (c) for which $Q(x,y)$ is true.

##### (a)
For $x=-2$ and $y=1$:

$$Q(-2,1):\quad \text{if }-2<1\text{ then }(-2)^2<1^2$$

The hypothesis $-2<1$ is true, but the conclusion $4<1$ is false. Therefore,

$$Q(-2,1)\text{ is false.}$$

##### (b)
One different false example is $x=-5$, $y=2$:

$$-5<2\text{ is true, but }(-5)^2=25\not<4=2^2.$$ 

Thus $Q(-5,2)$ is false.

##### (c)
For $x=3$ and $y=8$:

$$3<8\text{ and }3^2=9<64=8^2,$$

so $Q(3,8)$ is true.

##### (d)
One different true example is $x=4$, $y=10$. Both $4<10$ and $4^2=16<100=10^2$ are true, so $Q(4,10)$ is true.

---

>[!question]
> **Section 3.1 #20.** Rewrite the following statement informally in at least two different ways without using variables, the symbol $\forall$, or the words “for all”:
>
> $\forall$ positive real number $x$, $\sqrt{x}$ is positive.

The statement says that the square root of every positive real number is positive.

1. The square root of a positive real number is positive.
2. Every positive real number has a positive square root.

---

>[!question]
> **Section 3.1 #32.** Let $\mathbb R$ be the domain of $x$. Which statements are true and which are false? Give counterexamples for statements that are false.
>
> (b) $x>2\Rightarrow x^2>4$
>
> (d) $x^2>4\Leftrightarrow |x|>2$

##### (b) $x>2\Rightarrow x^2>4$

**True.** If $x>2$, then $x$ is positive. Squaring preserves the inequality:

$$x>2 \Rightarrow x^2>2^2=4.$$ 

##### (d) $x^2>4\Leftrightarrow |x|>2$

**True.**

$$x^2>4 \Leftrightarrow |x|^2>2^2 \Leftrightarrow |x|>2.$$ 

### 2. Section 3.2 #15(b)(d)(e)

>[!question]
> **Section 3.2 #15.** Let $D=\{-48,-14,-8,0,1,3,16,23,26,32,36\}$. Determine which statements are true and which are false. Provide counterexamples for statements that are false.
>
> (b) $\forall x\in D$, if $x<0$, then $x$ is even.
>
> (d) $\forall x\in D$, if the ones digit of $x$ is $2$, then the tens digit is $3$ or $4$.
>
> (e) $\forall x\in D$, if the ones digit of $x$ is $6$, then the tens digit is $1$ or $2$.

##### (b) $\forall x\in D$, if $x<0$, then $x$ is even.

**True.** The negative elements of $D$ are $-48,-14,$ and $-8$. Each is even.

##### (d) $\forall x\in D$, if the ones digit of $x$ is $2$, then its tens digit is $3$ or $4$.

**True.** The only member of $D$ with ones digit $2$ is $32$, whose tens digit is $3$.

##### (e) $\forall x\in D$, if the ones digit of $x$ is $6$, then its tens digit is $1$ or $2$.

**False.** $x=36$ is a counterexample: its ones digit is $6$, but its tens digit is $3$.

---

### 3. Section 3.2 #12, #40, #46

>[!question]
> **Section 3.2 #12.** Determine whether the proposed statement is a negation of the given statement.
>
> Given statement: “The product of any irrational number and any rational number is irrational.”
>
> Proposed negation: “The product of any irrational number and any rational number is rational.”

The proposed statement is **not** the negation. The original has the form

$$\forall x\,\forall y,\ P(x,y).$$

Its negation must change the universal quantifiers to existential quantifiers:

$$\exists\text{ an irrational }x\text{ and a rational }y\text{ such that }xy\text{ is rational.}$$

For example, $\sqrt2$ is irrational and $0$ is rational, but $\sqrt2\cdot0=0$, which is rational.

>[!question]
> **Section 3.2 #40.** Express the following in if-then form and determine whether it is true: “Being divisible by $8$ is a sufficient condition for being divisible by $4$.”

##### #40

“Being divisible by $8$ is a sufficient condition for being divisible by $4$” means

$$8\mid n\to4\mid n.$$

This is true: if $n=8k$ for some integer $k$, then $n=4(2k)$, so $4\mid n$.

>[!question]
> **Section 3.2 #46.** Express the following without using the words *necessary* or *sufficient*: “Having a large income is not a necessary condition for a person to be happy.”

##### #46

“Having a large income is not a necessary condition for a person to be happy” means that some happy person does not have a large income:

$$\exists x\text{ such that }x\text{ is happy and }x\text{ does not have a large income.}$$

---

### 4. Section 3.3 #43, #44, #45

>[!question]
> **Section 3.3 #43.** The definition of $\lim_{x\to a}f(x)=L$ says: For every real number $\varepsilon>0$, there exists a real number $\delta>0$ such that for every real number $x$, if $a-\delta<x<a+\delta$ and $x\ne a$, then $|f(x)-L|<\varepsilon$. Write what it means for $\lim_{x\to a}f(x)\ne L$; in other words, negate the definition.

The definition is

$$\forall \varepsilon>0,\exists \delta>0\text{ such that }\forall x\in\mathbb R,\bigl(0<|x-a|<\delta\to |f(x)-L|<\varepsilon\bigr).$$

Its negation is

$$\boxed{\exists\varepsilon>0\text{ such that }\forall\delta>0,\ \exists x\in\mathbb R\text{ with }a-\delta<x<a+\delta,\ x\ne a,\text{ and }\bigl(f(x)\le L-\varepsilon\text{ or }f(x)\ge L+\varepsilon\bigr).}$$

---

>[!question]
> **Section 3.3 #44.** The notation $\exists !$ means “there exists a unique.” Determine whether each statement is true or false and explain.
>
> (a) $\exists!x\in\mathbb R$ such that $\forall y\in\mathbb R$, $xy=y$.
>
> (b) $\exists!x\in\mathbb Z$ such that $1/x$ is an integer.
>
> (c) $\forall x\in\mathbb R$, $\exists!y\in\mathbb R$ such that $x+y=0$.

> Determine whether each statement involving $\exists !$ is true or false.

##### (a) $\exists!x\in\mathbb R$ such that $\forall y\in\mathbb R,\ xy=y$

**True.** The unique value is $x=1$. It satisfies $1\cdot y=y$ for every $y$. If $xy=y$ for all $y$, use $y=2$ to get $2x=2$, so $x=1$.

##### (b) $\exists!x\in\mathbb Z$ such that $1/x$ is an integer

**False.** Both $x=1$ and $x=-1$ work, since $1/1=1$ and $1/(-1)=-1$ are integers. Thus the value is not unique.

##### (c) $\forall x\in\mathbb R,\ \exists!y\in\mathbb R$ such that $x+y=0$

**True.** For each real $x$, the only value that works is $y=-x$.

---

>[!question]
> **Section 3.3 #45.** Suppose $P(x)$ is a predicate and $D$ is the domain of $x$. Rewrite the statement “$\exists!x\in D$ such that $P(x)$” without using $\exists!$.

$$\exists!x\in D\text{ such that }P(x)$$

can be rewritten without $\exists !$ as

$$\boxed{\exists x\in D\text{ such that }P(x)\text{ and }\forall y\in D,\bigl(P(y)\to y=x\bigr).}$$

This says that at least one element satisfies $P$, and every element satisfying $P$ is that same element.

---

### 5. Section 3.3 #56, #57

>[!question]
> **Section 3.3 #56.** Determine whether the following statements are equivalent. If not, give a counterexample.
>
> $\exists x\in D, (P(x)\wedge Q(x))$
>
> $(\exists x\in D, P(x))\wedge(\exists x\in D, Q(x))$

Compare

$$\exists x\in D\,(P(x)\wedge Q(x))$$

and

$$(\exists x\in D\,P(x))\wedge(\exists x\in D\,Q(x)).$$

They are **not equivalent**. The first statement implies the second because the same $x$ satisfies both predicates. The converse can be false because the two existential statements can use different elements.

Counterexample: Let $D=\{1,2,3\}$, let $P(x)$ mean “$x$ is even,” and let $Q(x)$ mean “$x$ is odd.” Then the second statement is true, but no one element is both even and odd, so the first statement is false.

>[!question]
> **Section 3.3 #57.** Determine whether the following statements are equivalent. If not, give a counterexample.
>
> $\forall x\in D, (P(x)\vee Q(x))$
>
> $(\forall x\in D, P(x))\vee(\forall x\in D, Q(x))$

Compare

$$\forall x\in D\,(P(x)\vee Q(x))$$

and

$$(\forall x\in D\,P(x))\vee(\forall x\in D\,Q(x)).$$

They are **not equivalent**. The second statement implies the first, but not conversely.

Use $D=\{1,2,3\}$, let $P(x)$ mean “$x$ is even,” and let $Q(x)$ mean “$x$ is odd.” Every element satisfies $P$ or $Q$, so the first statement is true. But not every element is even, and not every element is odd, so the second statement is false.
1