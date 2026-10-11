---
id: hw3
aliases: []
tags: []
---
### 1 Section 3.4 #30

#### (a) If-then forms

1. $\forall \text{ object } x \text{ above all triangles }, O(x) \text{ above all blue objects }$
2. $\forall \text{ object } x \text{ not above all gray objects }, O(x) \text{ not a square }$

3. $\forall \text{ object } x \text{ is black }, O(x) \text{ is a square }$

4. $\forall \text{ object } x \text{ above all gray objects }, O(x) \text{ above all triangles }$

#### (b) Diagram
![[HW3_3_4_30.excalidraw]]
#### (c) Universal-Transitivity order
Use the contrapositive of statement 2: if an object is a square, then it is above all gray objects
1. $\forall \text{ object } x \text{ is black }, O(x) \text{ is a square }$ (3)
2. $\forall \text{ object } x \text{ is a square }, O(x) \text{ is above all gray objects }$ (contrapositive of 2)
3. $\forall \text{ object } x \text{ is above all gray objects }, O(x) \text{ is above all triangles }$ (4)
4. $\forall \text{ object } x \text{ is above all triangles }, O(x) \text{ is above all blue objects }$ (1)
$\therefore \ \forall \text{ object } x \text{ is black }, O(x) \text{ is above all blue objects }$

### 2 Section 3.4 #32
###### (a) If-then forms
1. $\forall \text{ logic example } x \text{ worked without grumbling }, E(x) \text{ understood }$
2. $\forall \text{ logic example } x \text{ is one of these examples }, E(x) \text{ has arguments not in regular order }$
3. $\forall \text{ logic example } x \text{ is easy }, E(x) \text{ does not give me a headache }$
4. $\forall \text{ logic example } x \text{ has arguments not in regular order }, E(x) \text{ is not understood }$
5. $\forall \text{ logic example } x \text{ is grumbled at }, E(x) \text{ gives me a headache }$
###### (b) Diagram
![[HW3_3_4_32.excalidraw]]
###### (c) Universal-Transitivity order
Use the contrapositive of statement 1: if I do not understand an example, then I grumble at it Use the contrapositive of statement 3: if an example gives me a headache, then it is not easy
1. $\forall \text{ logic example } x \text{ is one of these examples }, E(x) \text{ has arguments not in regular order }$ (2)
2. $\forall \text{ logic example } x \text{ has arguments not in regular order }, E(x) \text{ is not understood }$ (4)
3. $\forall \text{ logic example } x \text{ is not understood }, E(x) \text{ is grumbled at }$ (contrapositive of 1)
4. $\forall \text{ logic example } x \text{ is grumbled at }, E(x) \text{ gives me a headache }$ (5)
5. $\forall \text{ logic example } x \text{ gives me a headache }, E(x) \text{ is not easy }$ (contrapositive of 3)
$\therefore \forall \text{ logic example } x \text{ is one of these examples }, E(x) \text{ is not easy }$

### 2 Section 3.4  #34
###### (a) If-then forms
1. $\forall \text{ writer } x \text{ understands human nature }, W(x) \text{ is clever }$
2. $\forall \text{ person } x \text{ is a true poet }, P(x) \text{ can stir the human heart }$
3. $\forall \text{ person } x \text{ is Shakespeare }, P(x) \text{ wrote Hamlet }$
4. $\forall \text{ writer } x \text{ does not understand human nature }, W(x) \text{ cannot stir the human heart }$
5. $\forall \text{ person } x \text{ wrote Hamlet }, P(x) \text{ is a true poet }$

###### (b) Diagram
![[HW3_3_4_34.excalidraw]]
###### (c) Universal-Transitivity order
1. $\forall \text{ person } x \text{ is Shakespeare }, P(x) \text{ wrote Hamlet }$ (3)
2. $\forall \text{ person } x \text{ wrote Hamlet }, P(x) \text{ is a true poet }$ (5)
3. $\forall \text{ person } x \text{ is a true poet }, P(x) \text{ can stir the human heart }$ (2)
4. $\forall \text{ person } x \text{ wrote Hamlet }, P(x) \text{ is a writer }$ (definition of writer)
5. $\forall \text{ writer } x \text{ can stir the human heart }, W(x) \text{ understands human nature }$ (contrapositive of 4)
6. $\forall \text{ writer } x \text{ understands human nature }, W(x) \text{ is clever }$ (1)
$\therefore \text{ Shakespeare is clever }$

### 3 Section 4.1 #7
Let $a=0$ and $b=1$ Both are real numbers, and
$\sqrt{a+b}=\sqrt{0+1}=1=0+1=\sqrt0+\sqrt1=\sqrt a+\sqrt b$
Thus such real numbers exist
### 3 Section 4.1 #11
Let $n=0$ Then
$2n^2-5n+2=2(0)^2-5(0)+2=2,$
and $2$ is prime Therefore, there is an integer $n$ for which $2n^2-5n+2$ is prime
### 3 Section 4.1 #11
The statement is false Let $n=8$ Then $n$ is even, but
$n^2+1=8^2+1=65=5\cdot13,$
which is not prime Therefore $n=8$ is a counterexample

### 4 Section 4.1 #22
By exhaustion, check each possible integer $n$:

| $n$ | $n^2-n+11$ |
| --- | ---------- |
| 1   | 11         |
| 2   | 13         |
| 3   | 17         |
| 4   | 23         |
| 5   | 31         |
| 6   | 41         |
| 7   | 53         |
| 8   | 67         |
| 9   | 83         |
| 10  | 101        |

Each listed value is prime Therefore, for every integer $n$ with $1\le n\le10$, $n^2-n+11$ is prime

### 4 Section 4.1  #29
###### (a) Three forms
1 $\forall n\in\mathbb Z$, if $n$ is even, then $-n$ is even
2 For every even integer $n$, $-n$ is even
3 If an integer is even, then its negative is even

###### (b) Proof blanks
- (a) definition of even
- (b) substitution
- (c) products of integers are integers
- (d) definition of even

Thus the completed proof is: Suppose $n$ is any even integer By the definition of even, $n=2k$ for some integer $k$ Then $-n=-(2k)=2(-k)$ by substitution and algebra Let $r=-k$ Then $r$ is an integer because $-1$ and $k$ are integers and products of integers are integers Hence $-n=2r$, where $r$ is an integer, so $-n$ is even by the definition of even

### 5 Section 4.2 #8
Suppose $m$ is any even integer and $n$ is any odd integer Then $m=2r$ for some integer $r$, and $n=2s+1$ for some integer $s$ Hence
$5m+3n=5(2r)+3(2s+1)=10r+6s+3=2(5r+3s+1)+1$
Since $5r+3s+1$ is an integer, $5m+3n$ is odd by definition

### 5 Section 4.2 #9
Suppose an integer $n>4$ is a perfect square Then $n=k^2$ for some integer $k$ Since $k^2>4$, $|k|>2$ Let $t=|k|$, so $t\ge3$ and $n=t^2$ Then

$n-1=t^2-1=(t-1)(t+1)$

Both factors are integers greater than $1$ Thus $n-1$ is composite, and therefore it is not prime

### 5 Section 4.2 #14
$2k^2-5k+2=(2k-1)(k-2)$

Here $2k-1\ge7$ and $k-2\ge2$, so both factors are greater than $1$ Therefore $2k^2-5k+2$ is composite for every $k\ge4$ No such $k$ makes it prime

### 6 Section 4.2 #18 
The proposed proof assumes the result it needs to prove: it begins, “If $m\cdot n$ is even,” and then concludes that $m\cdot n$ is even This is circular reasoning

It also writes $mn=2r$ without defining $r$ from $p$ and $q$ A correct proof would substitute $m=2p$
$mn=(2p)n=2(pn)$

Because $p$ and $n$ are integers, $pn$ is an integer Hence $mn$ is even

### 6 Section 4.2 #19
The proof uses the same variable $k$ for both even integers without justification From $m$ and $n$ being even, we may write
$m=2p \quad\text{and}\quad n=2q$
for possibly different integers $p$ and $q$ Then
$m+n=2p+2q=2(p+q),$
which shows that the sum is even, but not necessarily a multiple of $4$ For example, $2+4=6$, and $6$ is not a multiple of $4$ Thus the theorem is false

### 7 Section 4.2 #26
The statement is false Let $a=2$, $b=3$, and $c=4$ These are consecutive integers, but
$a+b+c=2+3+4=9,$
which is odd Thus consecutive integers do not always have an even sum

### 7 Section 4.2 #30
The statement is false Let $m=3$ Then $m>2$, but
$m^2-4=3^2-4=5,$
and $5$ is prime, not composite

### 7 Section 4.2 #31
The statement is false Let $n=11$ Then
$n^2-n+11=11^2-11+11=121=11^2,$
which is not prime