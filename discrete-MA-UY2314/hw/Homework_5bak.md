---
id: hw5
aliases: []
tags: []
---
# Homework 5

### 1. Section 4.4 #28, #29, #30, #37

For Questions 28–30: Determine whether the statement is true or false. Prove the statement directly from the definitions if it is true, and give a counterexample if it is false.

>[!question]
> **Section 4.4 #28.** For all integers $a$, $b$, and $c$, if $a \mid bc$, then $a \mid b$ or $a \mid c$.

False Let $a=6$, $b=2$, and $c=3$ Then $6\mid(2\cdot3)$, but $6\nmid2$ and $6\nmid3$ Thus the statement is false

---

>[!question]
> **Section 4.4 #29.** For all integers $a$ and $b$, if $a \mid b$, then $a^2 \mid b^2$.

True Suppose $a$ and $b$ are integers and $a\mid b$ Then $b=ak$ for some integer $k$ Hence
$$b^2=(ak)^2=a^2k^2$$
Since $k^2$ is an integer, $a^2\mid b^2$ by definition

---

>[!question]
> **Section 4.4 #30.** For all integers $a$ and $n$, if $a \mid n^2$ and $a \le n$, then $a \mid n$.

False Let $a=4$ and $n=6$ Then $4\mid6^2$ because $6^2=36=4\cdot9$, and $4\le6$ However, $4\nmid6$ Thus the statement is false

---

>[!question]
> **Section 4.4 #37.** Use the unique factorization theorem to write the following integers in standard factored form.
>
> (a) $1{,}176$
>
> (b) $5{,}733$
>
> (c) $3{,}675$

###### (a)
$1{,}176=8\cdot147=2^3\cdot3\cdot7^2$

###### (b)
$5{,}733=9\cdot637=3^2\cdot7^2\cdot13$

###### (c)
$3{,}675=3\cdot1{,}225=3\cdot5^2\cdot7^2$

By the unique factorization theorem, these standard factored forms are unique except for the order of the factors

### 2. Section 4.4 #45, #48

>[!question]
> **Section 4.4 #45.** Prove that if $n$ is any nonnegative integer whose decimal representation ends in 5, then $5 \mid n$.

Suppose $n$ is a nonnegative integer whose decimal representation ends in $5$ Then $n=10q+5$ for some nonnegative integer $q$ Hence
$$n=10q+5=5(2q+1)$$
Since $2q+1$ is an integer, $5\mid n$ by definition

---

>[!question]
> **Section 4.4 #48.** Prove that for any nonnegative integer $n$, if the sum of the digits of $n$ is divisible by 3, then $n$ is divisible by 3.

Let the decimal digits of $n$ be $d_k,d_{k-1},\ldots,d_0$ Then
$$n=\sum_{i=0}^k d_i10^i$$
For each $i$, $10^i-1$ is divisible by $3$, so $10^i=3q_i+1$ for some integer $q_i$ Therefore
$$n=\sum_{i=0}^k d_i(3q_i+1)=3\sum_{i=0}^k d_iq_i+\sum_{i=0}^k d_i$$
Suppose the sum of the digits is divisible by $3$ Then $\sum_{i=0}^k d_i=3m$ for some integer $m$, and
$$n=3\left(\sum_{i=0}^k d_iq_i+m
ight)$$
The expression in parentheses is an integer Hence $3\mid n$ by definition


### 3. Section 4.5 #17, #21

>[!question]
> **Section 4.5 #17.** Prove directly from the definitions that for every integer $n$, $n^2-n+3$ is odd. Use division into two cases: $n$ is even and $n$ is odd.

Suppose $n$ is any integer

If $n$ is even, then $n=2k$ for some integer $k$ Thus
$$n^2-n+3=(2k)^2-2k+3=2(2k^2-k+1)+1$$
Since $2k^2-k+1$ is an integer, $n^2-n+3$ is odd

If $n$ is odd, then $n=2k+1$ for some integer $k$ Thus
$$n^2-n+3=(2k+1)^2-(2k+1)+3=2(2k^2+k+1)+1$$
Since $2k^2+k+1$ is an integer, $n^2-n+3$ is odd

Therefore $n^2-n+3$ is odd for every integer $n$

---

>[!question]
> **Section 4.5 #21.** Suppose $b$ is any integer. If $b \bmod 12=5$, what is $8b \bmod 12$? In other words, if division of $b$ by 12 gives a remainder of 5, what is the remainder when $8b$ is divided by 12? Your solution should show that you obtain the same answer no matter what integer you start with.

Since $b\bmod 12=5$, $b=12k+5$ for some integer $k$ Then
$$8b=8(12k+5)=96k+40=12(8k+3)+4$$
Since $8k+3$ is an integer and $0\le4<12$, the remainder is $4$ Thus $8b\bmod 12=4$ for every such integer $b$

### 4. Section 4.5 #25, #31(a), #33

>[!question]
> **Section 4.5 #25.** Prove that for all integers $a$ and $b$, if $a \bmod 7=5$ and $b \bmod 7=6$, then $ab \bmod 7=2$.

Suppose $a\bmod 7=5$ and $b\bmod 7=6$ Then $a=7r+5$ and $b=7s+6$ for some integers $r$ and $s$ Thus
$$ab=(7r+5)(7s+6)=7(7rs+6r+5s+4)+2$$
Since $7rs+6r+5s+4$ is an integer and $0\le2<7$, $ab\bmod 7=2$

---

For Questions 31 and 33, you may use the properties listed in Example 4.3.3.

>[!question]
> **Section 4.5 #31(a).** Prove that for all integers $m$ and $n$, $m+n$ and $m-n$ are either both odd or both even.

Suppose $m$ and $n$ are any integers

- If $m=2r$ and $n=2s$, then $m+n=2(r+s)$ and $m-n=2(r-s)$, so both are even
- If $m=2r+1$ and $n=2s+1$, then $m+n=2(r+s+1)$ and $m-n=2(r-s)$, so both are even
- If $m=2r$ and $n=2s+1$, then $m+n=2(r+s)+1$ and $m-n=2(r-s-1)+1$, so both are odd
- If $m=2r+1$ and $n=2s$, then $m+n=2(r+s)+1$ and $m-n=2(r-s)+1$, so both are odd

These cases include every possible parity of $m$ and $n$ Therefore $m+n$ and $m-n$ are either both odd or both even

---

>[!question]
> **Section 4.5 #33.** Given any integers $a$, $b$, and $c$, if $a-b$ is odd and $b-c$ is even, what can you say about the parity of $a-c$? Prove your answer.

$a-c=(a-b)+(b-c)$ Since $a-b$ is odd and $b-c$ is even, there are integers $r$ and $s$ such that
$$a-b=2r+1 \quad	ext{and}\quad b-c=2s$$
Thus
$$a-c=(2r+1)+2s=2(r+s)+1$$
Since $r+s$ is an integer, $a-c$ is odd
