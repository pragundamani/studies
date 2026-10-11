---
title: Revision Sheet — Direct Proof, Rational Numbers, and Divisibility
source_notes:
  - 2026-09-23
  - 2026-09-28
  - 2026-10-05
---

# Revision Sheet

## 1. The proof method to use

### Direct proof
Use this for a statement of the form $\forall x\in D,\;P(x)\Rightarrow Q(x)$.

1. Let $a$ be an arbitrary element of $D$ such that $P(a)$ is true.
2. Use definitions, algebra, and known facts to prove $Q(a)$.
3. State that the result holds because $a$ was arbitrary.

**Checklist:** name the arbitrary object, state the assumption, cite the definition or closure rule used, produce any required integer witness, then conclude with the target definition.

### Disproving a universal statement
To disprove $\forall x\in D,\;P(x)$, give one $a\in D$ for which $P(a)$ is false. This is a **counterexample**.

Example: $\forall a,b\in\mathbb Z,\;a^2=b^2\Rightarrow a=b$ is false. Let $a=-1$ and $b=1$. Then $a^2=b^2=1$, but $a\ne b$.

> [!warning] Common error
> From $a^2=b^2$, conclude $a=b$ **or** $a=-b$, not only $a=b$.

## 2. Facts you may cite

- $\mathbb Z$ is closed under addition, subtraction, and multiplication.
- Equality allows substitution; it is reflexive, symmetric, and transitive.
- If $a,b\in\mathbb Z$ and $ab=0$, then $a=0$ or $b=0$.
- A product of positive integers is positive.

## 3. Definitions to know exactly

| Term | Definition |
|---|---|
| even integer | $n\in\mathbb Z$ is even iff $\exists k\in\mathbb Z$ such that $n=2k$. |
| odd integer | $n\in\mathbb Z$ is odd iff $\exists k\in\mathbb Z$ such that $n=2k+1$. |
| prime | $n>1$ is prime iff whenever $n=rs$ for $r,s\in\mathbb Z^+$, then $r=1,s=n$ or $r=n,s=1$. |
| composite | $n>1$ is composite iff $n=rs$ for some $r,s\in\mathbb Z^+$ with $1<r<n$ and $1<s<n$. |
| rational | $r\in\mathbb Q$ iff $r=\frac ab$ for some $a,b\in\mathbb Z$ with $b\ne0$. |
| divisibility | For $n,d\in\mathbb Z$, $d\mid n$ iff $d\ne0$ and $n=dk$ for some $k\in\mathbb Z$. |

`Exists` means **at least one** witness. Do not claim $n=2k$ for every $k\in\mathbb Z$.

Useful translations: $d\mid n$ means “$d$ divides $n$,” “$d$ is a factor/divisor of $n$,” and “$n$ is a multiple of $d$.”

## 4. Parity proofs

### Sum of two even integers
If $m,n\in\mathbb Z$ are even, then $m+n$ is even.

Let $m=2k$ and $n=2\ell$ for $k,\ell\in\mathbb Z$. Then $m+n=2k+2\ell=2(k+\ell)$. Since $k+\ell\in\mathbb Z$, the definition shows $m+n$ is even.

### Odd-result pattern
To prove an expression is odd, rewrite it as $2q+1$ where $q\in\mathbb Z$.

For example, if $m$ is even, $m=2r$, then $3m+5=6r+5=2(3r+2)+1$. Since $3r+2\in\mathbb Z$, $3m+5$ is odd.

## 5. Prime and composite proofs

To show $N$ is composite, do **all** of these:

1. Factor $N=rs$.
2. Show $r,s\in\mathbb Z^+$.
3. Show $1<r<N$ and $1<s<N$.

Example pattern: if $k>1$, then $k^2+2k+1=(k+1)(k+1)$. The factor $k+1>1$, and $k+1<(k+1)^2$ because $k+1>1$. Thus the expression is composite.

### Non-prime factorization
For every $m\in\mathbb Z$ with $m\ge3$, $m^2-1$ is not prime: $m^2-1=(m+1)(m-1)$, and both factors are greater than $1$.

### Longer factor-bound example from class
For $k\in\mathbb Z$ with $k\ge4$, $2k^2-5k+2=(2k-1)(k-2)$ is composite.

- $2k-1>1$ and $k-2>1$.
- To show $2k-1<2k^2-5k+2$, note $2k^2-7k+3=(2k-1)(k-3)>0$.
- To show $k-2<2k^2-5k+2$, note $2k^2-6k+4=2(k-1)(k-2)>0$.

## 6. Rational numbers

### Fast tests
- Every integer is rational: $z=\frac z1$.
- $0$ is rational: $0=\frac01$.
- A fraction with denominator $0$ is **not** rational.
- A terminating or repeating decimal is rational. For example, if $x=0.\overline{21}$, then $100x-x=21$, so $x=\frac{21}{99}=\frac7{33}$.

### Closure under addition
If $m,n\in\mathbb Q$, then $m+n\in\mathbb Q$.

Write $m=\frac ab$ and $n=\frac cd$, where $a,b,c,d\in\mathbb Z$ and $b,d\ne0$. Then $m+n=\frac{ad+bc}{bd}$. The numerator and denominator are integers, and $bd\ne0$. Therefore $m+n\in\mathbb Q$.

**Corollary:** if $r\in\mathbb Q$, then $2r\in\mathbb Q$, since $2\in\mathbb Q$ and rationals are closed under addition.

### Polynomial root result
If $c\in\mathbb R$ is a root of a polynomial with rational coefficients, then $c$ is a root of a polynomial with integer coefficients.

Method: write each coefficient as a fraction. Multiply the polynomial by the product of all nonzero denominators. The new polynomial has integer coefficients, and multiplying $p(c)=0$ by a nonzero integer still gives $0$.

## 7. Divisibility

### Key theorem
If $a,b\in\mathbb Z$ with $0<a$ and $a\mid b$, then $a\le b$.

Reason: $b=ak$ for some $k\in\mathbb Z$. Since $b>0$ and $a>0$, $k>0$, hence $k\ge1$. Thus $b=ak\ge a$.

The positivity conditions matter. Without them, the conclusion need not hold.

The only divisors of $1$ are $1$ and $-1$. Also, every nonzero integer divides $0$, since $0=d\cdot0$; but $0$ divides no integer under this definition.

### Closure pattern for divisibility
If $d\mid a$ and $d\mid b$, then $d\mid(3a+6b)$.

Let $a=dk$ and $b=d\ell$ for $k,\ell\in\mathbb Z$. Then $3a+6b=3dk+6d\ell=d(3k+6\ell)$. Since $3k+6\ell\in\mathbb Z$, $d\mid(3a+6b)$.

## 8. Quiz-day proof checklist

- [ ] Did I use the correct definition, including its quantifiers?
- [ ] Did I say why each new value is an integer?
- [ ] For an existential claim, did I give a witness?
- [ ] For a composite claim, did I verify the strict factor bounds?
- [ ] For a rational fraction, did I show the denominator is nonzero?
- [ ] For a universal claim, did I begin with an arbitrary valid object?
- [ ] For a false universal claim, did I give one valid counterexample?

## 9. Quick self-test

1. Prove: if $n$ is odd, then $n+6$ is odd.
2. Give a counterexample to $\forall n\in\mathbb Z,\;n^2>n$.
3. Prove: if $d\mid a$ and $d\mid b$, then $d\mid(a-b)$.
4. Show that $3k^2+6k+3$ is composite for every $k\in\mathbb Z$ with $k\ge1$.
5. Explain why $\frac{a}{b}+\frac{c}{d}$ is rational when $a,b,c,d\in\mathbb Z$ and $b,d\ne0$.


## 10. Solved examples for reference

### Example 1 — Identify parity
**Question:** Is $-34$ even, odd, or neither?

**Solution:** $-34=2(-17)$ and $-17\in\mathbb Z$. Therefore $-34$ is even.

### Example 2 — Direct proof: even input
**Question:** Prove that if $m\in\mathbb Z$ is even, then $3m+5$ is odd.

**Solution:** Let $m$ be an arbitrary even integer. Then $m=2r$ for some $r\in\mathbb Z$. Thus $3m+5=3(2r)+5=6r+5=2(3r+2)+1$. Since $3r+2\in\mathbb Z$, $3m+5$ has the form $2q+1$ for an integer $q$. Therefore $3m+5$ is odd.

### Example 3 — Counterexample
**Question:** Disprove: for every $n\in\mathbb Z$, $n^2>n$.

**Solution:** Take $n=0$, which is an integer. Then $n^2=0$, and $0\not>0$. Therefore $n=0$ is a counterexample, so the statement is false.

### Example 4 — Show an expression is composite
**Question:** Prove that $k^2+2k+1$ is composite for every $k\in\mathbb Z$ with $k>1$.

**Solution:** Let $k>1$. Then $k^2+2k+1=(k+1)^2=(k+1)(k+1)$. Since $k>1$, $k+1>1$. Also $k+1<(k+1)^2$ because $k+1>1$. Thus both factors are positive integers strictly between $1$ and $k^2+2k+1$. Therefore $k^2+2k+1$ is composite.

### Example 5 — Show an expression is not prime
**Question:** Prove that $m^2-1$ is not prime for every $m\in\mathbb Z$ with $m\ge3$.

**Solution:** Let $m\ge3$. Factor: $m^2-1=(m-1)(m+1)$. Here $m-1\ge2$ and $m+1\ge4$, so this is a product of two integers greater than $1$. Therefore $m^2-1$ is not prime.

### Example 6 — Convert a repeating decimal
**Question:** Write $0.\overline{12}$ as a fraction.

**Solution:** Let $x=0.\overline{12}$. Then $100x=12.\overline{12}$. Subtracting gives $99x=12$, so $x=\frac{12}{99}=\frac4{33}$. Thus $0.\overline{12}=\frac4{33}$.

### Example 7 — Sum of rational numbers
**Question:** Prove that $\frac{2}{3}+\frac{5}{8}$ is rational.

**Solution:** $\frac{2}{3}+\frac{5}{8}=\frac{16+15}{24}=\frac{31}{24}$. Both $31$ and $24$ are integers and $24\ne0$. Therefore $\frac{31}{24}\in\mathbb Q$.

### Example 8 — Clear polynomial denominators
**Question:** Let $p(x)=\frac12x^2-\frac34x+\frac18$, and suppose $p(c)=0$. Find an integer-coefficient polynomial that also has root $c$.

**Solution:** The product of the denominators is $8$. Let $q(x)=8p(x)$. Then $q(x)=4x^2-6x+1$, which has integer coefficients. Since $p(c)=0$, $q(c)=8p(c)=0$. Hence $c$ is a root of $4x^2-6x+1$.

### Example 9 — Basic divisibility
**Question:** Decide whether $6\mid54$ and whether $7\mid54$.

**Solution:** Since $54=6\cdot9$ and $9\in\mathbb Z$, $6\mid54$. If $7\mid54$, then $54=7k$ for some $k\in\mathbb Z$, which would give $k=\frac{54}{7}$; this is not an integer. Therefore $7\nmid54$.

### Example 10 — Linear combination
**Question:** If $5\mid a$ and $10\mid b$, prove that $5\mid(2a+3b)$.

**Solution:** Since $5\mid a$, write $a=5k$ for some $k\in\mathbb Z$. Since $10\mid b$, write $b=10\ell$ for some $\ell\in\mathbb Z$. Then $2a+3b=2(5k)+3(10\ell)=5(2k+6\ell)$. Since $2k+6\ell\in\mathbb Z$, $5\mid(2a+3b)$.

### Example 11 — Use the divisor size theorem
**Question:** Can $12\mid5$?

**Solution:** No. If $12\mid5$, then because $12>0$, $5>0$, and both are integers, the divisor theorem would require $12\le5$. This is false. Therefore $12\nmid5$.

### Example 12 — Divisors of one
**Question:** Find all integer divisors of $1$.

**Solution:** The divisors are $1$ and $-1$, because $1=1\cdot1=(-1)(-1)$. No other integer can divide $1$.
