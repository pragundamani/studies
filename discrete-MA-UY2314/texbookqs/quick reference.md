---
id: discrete-quick-reference
aliases: []
tags:
  - discrete-mathematics
---
## Symbols

| Symbol | Read as | True when |
| --- | --- | --- |
| $\neg p$ | not $p$ | $p$ is false |
| $p\land q$ | $p$ and $q$ | both are true |
| $p\lor q$ | $p$ or $q$ | at least one is true |
| $p\oplus q$ | $p$ exclusive-or $q$ | exactly one is true |
| $p\to q$ | if $p$ then $q$ | $p$ is false, or $q$ is true |
| $p\leftrightarrow q$ | $p$ if and only if $q$ | $p$ and $q$ match |
| $\forall x\,P(x)$ | for every $x$, $P(x)$ | $P$ holds for all values in the domain |
| $\exists x\,P(x)$ | there exists an $x$ such that $P(x)$ | $P$ holds for at least one value |

A **statement** is a sentence that is true or false. “She is a math major” is not a statement until “she” refers to someone.

Two forms are **logically equivalent** when they have the same truth value in every row of a truth table. A **tautology** is always true. A **contradiction** is always false.

## 2.1 Logical equivalences

Order of operations: $\neg$ first, then $\land$ and $\lor$, then $\to$ and $\leftrightarrow$.

**De Morgan.** $\neg(p\land q)\equiv\neg p\lor\neg q$, and $\neg(p\lor q)\equiv\neg p\land\neg q$.

| Name | Equivalence |
| --- | --- |
| Commutative | $p\land q\equiv q\land p$, and the same for $\lor$ |
| Associative | $(p\land q)\land r\equiv p\land(q\land r)$, and the same for $\lor$ |
| Distributive | $p\land(q\lor r)\equiv(p\land q)\lor(p\land r)$, and $p\lor(q\land r)\equiv(p\lor q)\land(p\lor r)$ |
| Identity | $p\land\mathbf{t}\equiv p$, and $p\lor\mathbf{c}\equiv p$ |
| Negation | $p\lor\neg p\equiv\mathbf{t}$, and $p\land\neg p\equiv\mathbf{c}$ |
| Double negation | $\neg(\neg p)\equiv p$ |
| Idempotent | $p\land p\equiv p$, and $p\lor p\equiv p$ |
| Universal bound | $p\lor\mathbf{t}\equiv\mathbf{t}$, and $p\land\mathbf{c}\equiv\mathbf{c}$ |
| Absorption | $p\lor(p\land q)\equiv p$, and $p\land(p\lor q)\equiv p$ |
| Negations of $\mathbf{t}$ and $\mathbf{c}$ | $\neg\mathbf{t}\equiv\mathbf{c}$, and $\neg\mathbf{c}\equiv\mathbf{t}$ |

$\mathbf{t}$ is a tautology and $\mathbf{c}$ is a contradiction. Exclusive or is $p\oplus q\equiv(p\lor q)\land\neg(p\land q)$.

## 2.2 Conditionals

$p\to q$ is false only when $p$ is true and $q$ is false.

$$p\to q\equiv\neg p\lor q\equiv\neg(p\land\neg q).$$

The **negation** of $p\to q$ is $p\land\neg q$. It is not another conditional.

| Form | Symbolic | Relation to $p\to q$ |
| --- | --- | --- |
| Contrapositive | $\neg q\to\neg p$ | equivalent |
| Converse | $q\to p$ | not equivalent |
| Inverse | $\neg p\to\neg q$ | not equivalent |

The converse and the inverse are equivalent to each other.

| English | Means |
| --- | --- |
| $p$ only if $q$ | $p\to q$ |
| $q$ is necessary for $p$ | $p\to q$ |
| $p$ is sufficient for $q$ | $p\to q$ |
| $p$ if and only if $q$ | $(p\to q)\land(q\to p)$ |
| $p$ unless $q$ | $\neg q\to p$ |

## 2.3 Valid argument forms

An argument is **valid** when the conclusion is true in every row where all the premises are true. A valid argument can have a false conclusion if a premise is false. An invalid argument can have a true conclusion.

| Name | Form |
| --- | --- |
| Modus ponens | $p\to q,\; p,\;\therefore q$ |
| Modus tollens | $p\to q,\;\neg q,\;\therefore\neg p$ |
| Generalization | $p,\;\therefore p\lor q$ |
| Specialization | $p\land q,\;\therefore p$ |
| Elimination | $p\lor q,\;\neg q,\;\therefore p$ |
| Transitivity | $p\to q,\; q\to r,\;\therefore p\to r$ |
| Division into cases | $p\lor q,\; p\to r,\; q\to r,\;\therefore r$ |
| Conjunction | $p,\; q,\;\therefore p\land q$ |
| Contradiction | $\neg p\to\mathbf{c},\;\therefore p$ |

**Converse error:** from $p\to q$ and $q$, concluding $p$. **Inverse error:** from $p\to q$ and $\neg p$, concluding $\neg q$.

## 3.1 Predicates and single quantifiers

A **predicate** $P(x)$ becomes a statement once $x$ is given a value or a quantifier. Its **truth set** is the set of domain elements that make it true.

| English | Form |
| --- | --- |
| All $A$ are $B$ | $\forall x\,(A(x)\to B(x))$ |
| Some $A$ are $B$ | $\exists x\,(A(x)\land B(x))$ |
| No $A$ are $B$ | $\forall x\,(A(x)\to\neg B(x))$ |
| Some $A$ are not $B$ | $\exists x\,(A(x)\land\neg B(x))$ |

“All” and “every” use $\to$ after $\forall$. “Some” and “there is” use $\land$ after $\exists$.

## 3.2 Negations and related forms

$$\neg(\forall x\,P(x))\equiv\exists x\,\neg P(x),\qquad \neg(\exists x\,P(x))\equiv\forall x\,\neg P(x).$$

The negation of $\forall x\,(P(x)\to Q(x))$ is $\exists x\,(P(x)\land\neg Q(x))$.

For $\forall x\,(P(x)\to Q(x))$:

| Form | Statement | Equivalent? |
| --- | --- | --- |
| Contrapositive | $\forall x\,(\neg Q(x)\to\neg P(x))$ | yes |
| Converse | $\forall x\,(Q(x)\to P(x))$ | no |
| Inverse | $\forall x\,(\neg P(x)\to\neg Q(x))$ | no |

$A$ is sufficient for $B$ means $\forall x\,(A(x)\to B(x))$. $B$ is necessary for $A$ means the same thing.

## 3.3 Two quantifiers

Order matters. $\forall x\,\exists y\,P(x,y)$ lets $y$ depend on $x$. $\exists y\,\forall x\,P(x,y)$ requires one $y$ that works for every $x$. The second implies the first. The first does not imply the second.

Negate from the outside, flipping each quantifier and negating the predicate at the end:

$$\neg(\forall x\,\exists y\,P(x,y))\equiv\exists x\,\forall y\,\neg P(x,y).$$

$\exists!\,x\,P(x)$ means there is exactly one such $x$: $\exists x\,(P(x)\land\forall y\,(P(y)\to y=x))$.

## 3.4 Arguments with quantifiers

**Universal instantiation.** From $\forall x\,P(x)$, conclude $P(a)$ for any particular $a$ in the domain.

**Universal modus ponens.** From $\forall x\,(P(x)\to Q(x))$ and $P(a)$, conclude $Q(a)$.

**Universal modus tollens.** From $\forall x\,(P(x)\to Q(x))$ and $\neg Q(a)$, conclude $\neg P(a)$.

The same converse and inverse errors still apply after a particular element is named. A diagram can show an argument is invalid when the premises can be drawn true while the conclusion is drawn false.
