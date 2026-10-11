---
id: hw3
aliases: []
tags: []
---
# Homework 5

> [!info] Assignment instructions
> - Submit this homework via Gradescope
> - Failure to submit homework correctly will result in zeroes If you do not select the pages of your work correctly, student graders cannot see your work
> - Handwritten homework is recommended You do not have to type up your work
> - Problems assigned from the textbook are from the 5th edition
> - No late homework accepted Lateness due to technical issues will not be excused
>
> For the Section 3.4 work, the PDF provides its worked #31 example as the model for universal-quantifier if-then rewrites, one containment diagram for each statement, and the ordered Universal Transitivity chain

### 1 Section 3.4 #30

>[!question]
> **Section 3.4 #30** In exercises 28–32, reorder the premises in each argument to show that the conclusion follows as a valid consequence from the premises It may be helpful to rewrite statements in if-then form and replace some of them by their contrapositives
>
> For each Section 3.4 problem in this homework: (a) rewrite each statement in if-then form; (b) sketch the diagram associated with each if-then statement; and (c) reorder the statements in the premises so that the conclusion follows from Universal Transitivity
>
> 1 If an object is above all the triangles, then it is above all the blue objects
> 2 If an object is not above all the gray objects, then it is not a square
> 3 Every black object is a square
> 4 Every object that is above all the gray objects is above all the triangles
>
> Therefore, if an object is black, then it is above all the blue objects


#### Solution

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

### 2 Section 3.4 #32 and #34

>[!question]
> **Section 3.4 #32** In exercises 28–32, reorder the premises in each argument to show that the conclusion follows as a valid consequence from the premises It may be helpful to rewrite statements in if-then form and replace some of them by their contrapositives
>
> Apply the course instructions from Section 3.4 #30: rewrite statements in if-then form, sketch each diagram, and order the premises by Universal Transitivity
>
> 1 When I work a logic example without grumbling, you may be sure it is one I understand
> 2 The arguments in these examples are not arranged in regular order like the ones I am used to
> 3 No easy examples make my head ache
> 4 I can’t understand examples if the arguments are not arranged in regular order like the ones I am used to
> 5 I never grumble at an example unless it gives me a headache
>
> Therefore, these examples are not easy


#### Solution

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

>[!question]
> **Section 3.4 #34** In 33 and 34, a single conclusion follows when all the given premises are taken into consideration, but it is difficult to see because the premises are jumbled up Reorder the premises to make it clear that a conclusion follows logically, and state the valid conclusion that can be drawn It may be helpful to rewrite some statements in if-then form and replace some statements by their contrapositives
>
> Apply the course instructions from Section 3.4 #30: rewrite statements in if-then form, sketch each diagram, and order the premises by Universal Transitivity
>
> All writers who understand human nature are clever
>
> No one is a true poet unless he can stir the human heart
>
> Shakespeare wrote *Hamlet*
>
> No writer who does not understand human nature can stir the human heart
>
> None but a true poet could have written *Hamlet*


#### Solution

###### (a) If-then forms

1. $\forall \text{ writer } x \text{ understands human nature }, W(x) \text{ is clever }$
2. $\forall \text{ person } x \text{ is a true poet }, P(x) \text{ can stir the human heart }$
3. $\forall \text{ person } x \text{ is Shakespeare }, P(x) \text{ wrote Hamlet }$
4. $\forall \text{ writer } x \text{ does not understand human nature }, W(x) \text{ cannot stir the human heart }$
5. $\forall \text{ person } x \text{ wrote Hamlet }, P(x) \text{ is a true poet }$

###### (b) Diagram

![[HW3_3_4_34.excalidraw]]

###### (c) Universal-Transitivity order

Use the contrapositive of statement 4: if a writer can stir the human heart, then the writer understands human nature

1. $\forall \text{ person } x \text{ is Shakespeare }, P(x) \text{ wrote Hamlet }$ (3)
2. $\forall \text{ person } x \text{ wrote Hamlet }, P(x) \text{ is a true poet }$ (5)
3. $\forall \text{ person } x \text{ is a true poet }, P(x) \text{ can stir the human heart }$ (2)
4. $\forall \text{ writer } x \text{ can stir the human heart }, W(x) \text{ understands human nature }$ (contrapositive of 4)
5. $\forall \text{ writer } x \text{ understands human nature }, W(x) \text{ is clever }$ (1)

$\therefore \text{ Shakespeare is clever }$

### 3 Section 4.1 #7, #11, and #16

>[!question]
> **Section 4.1 #7** Prove the statement:
>
> There are real numbers $a$ and $b$ such that
>
> $$\sqrt{a+b}=\sqrt{a}+\sqrt{b}$$


#### Solution

Let $a=0$ and $b=1$ Both are real numbers, and

$$\sqrt{a+b}=\sqrt{0+1}=1=0+1=\sqrt0+\sqrt1=\sqrt a+\sqrt b$$

Thus such real numbers exist

>[!question]
> **Section 4.1 #11** Prove the statement:
>
> There is an integer $n$ such that $2n^2-5n+2$ is prime


#### Solution

Let $n=0$ Then

$$2n^2-5n+2=2(0)^2-5(0)+2=2,$$

and $2$ is prime Therefore, there is an integer $n$ for which $2n^2-5n+2$ is prime

>[!question]
> **Section 4.1 #16** Disprove the statement by giving a counterexample Explain how the counterexample actually disproves it
>
> For every integer $n$, if $n$ is even, then $n^2+1$ is prime


#### Solution

The statement is false Let $n=8$ Then $n$ is even, but

$$n^2+1=8^2+1=65=5\cdot13,$$

which is not prime Therefore $n=8$ is a counterexample

### 4 Section 4.1 #22 and #29

>[!question]
> **Section 4.1 #22** Prove the statement by the method of exhaustion:
>
> For each integer $n$ with $1\le n\le10$, $n^2-n+11$ is a prime number


#### Solution

By exhaustion, check each possible integer $n$:

| $n$ | $n^2-n+11$ |
| --- | --- |
| 1 | 11 |
| 2 | 13 |
| 3 | 17 |
| 4 | 23 |
| 5 | 31 |
| 6 | 41 |
| 7 | 53 |
| 8 | 67 |
| 9 | 83 |
| 10 | 101 |

Each listed value is prime Therefore, for every integer $n$ with $1\le n\le10$, $n^2-n+11$ is prime

>[!question]
> **Section 4.1 #29** In exercises 28–31:
>
> (a) Rewrite the theorem in three forms: (1) with an explicit universal quantifier and in if-then form; (2) with an explicit universal quantifier but without the words “if” or “then”; and (3) in if-then form without an explicit universal quantifier
>
> (b) Fill in the blanks in the proof
>
> **Theorem:** The negative of any even integer is even
>
> **Proof:** Suppose $n$ is any particular but arbitrarily chosen even integer We must show that $-n$ is even By **(a)**, $n=2k$ for some integer $k$ Then
>
> $$-n=-(2k)\quad\text{by **(b)**}$$
> $$\phantom{-n}=2(-k)\quad\text{by algebra}$$
>
> Let $r=-k$ Then $r$ is an integer because $-1$ and $k$ are integers and **(c)** Hence $-n=2r$, where $r$ is an integer, and so $-n$ is even by **(d)**


#### Solution

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

### 5 Section 4.2 #8, #9, and #14

>[!question]
> **Section 4.2 #8** Prove the statement Use only definitions and the listed assumptions, not previously established properties of odd and even integers Follow the directions in this section for writing proofs of universal statements
>
> For any integers $m$ and $n$, if $m$ is even and $n$ is odd, then $5m+3n$ is odd


#### Solution

Suppose $m$ is any even integer and $n$ is any odd integer Then $m=2r$ for some integer $r$, and $n=2s+1$ for some integer $s$ Hence

$$5m+3n=5(2r)+3(2s+1)=10r+6s+3=2(5r+3s+1)+1$$

Since $5r+3s+1$ is an integer, $5m+3n$ is odd by definition

>[!question]
> **Section 4.2 #9** Prove the statement
>
> If an integer greater than $4$ is a perfect square, then the immediately preceding integer is not prime


#### Solution

Suppose an integer $n>4$ is a perfect square Then $n=k^2$ for some integer $k$ Since $k^2>4$, $|k|>2$ Let $t=|k|$, so $t\ge3$ and $n=t^2$ Then

$$n-1=t^2-1=(t-1)(t+1)$$

Both factors are integers greater than $1$ Thus $n-1$ is composite, and therefore it is not prime

>[!question]
> **Section 4.2 #14** Prove that the statement is false
>
> There exists an integer $k\ge4$ such that $2k^2-5k+2$ is prime


#### Solution

The statement is false For any integer $k\ge4$,

$$2k^2-5k+2=(2k-1)(k-2)$$

Here $2k-1\ge7$ and $k-2\ge2$, so both factors are greater than $1$ Therefore $2k^2-5k+2$ is composite for every $k\ge4$ No such $k$ makes it prime

### 6 Section 4.2 #18 and #19

>[!question]
> **Section 4.2 #18** Find the mistakes in this proposed proof
>
> **Theorem:** The product of any even integer and any odd integer is even
>
> **Proposed proof:** Suppose $m$ is any even integer and $n$ is any odd integer If $m\cdot n$ is even, then by definition of even there exists an integer $r$ such that $m\cdot n=2r$ Also, since $m$ is even, there exists an integer $p$ such that $m=2p$, and since $n$ is odd there exists an integer $q$ such that $n=2q+1$ Thus
>
> $$mn=(2p)(2q+1)=2r,$$
>
> where $r$ is an integer By definition of even, then, $mn$ is even, as was to be shown


#### Solution

The proposed proof assumes the result it needs to prove: it begins, “If $m\cdot n$ is even,” and then concludes that $m\cdot n$ is even This is circular reasoning

It also writes $mn=2r$ without defining $r$ from $p$ and $q$ A correct proof would substitute $m=2p$:

$$mn=(2p)n=2(pn)$$

Because $p$ and $n$ are integers, $pn$ is an integer Hence $mn$ is even

>[!question]
> **Section 4.2 #19** Find the mistakes in this proposed proof
>
> **Theorem:** The sum of any two even integers equals $4k$ for some integer $k$
>
> **Proposed proof:** Suppose $m$ and $n$ are any two even integers By definition of even, $m=2k$ for some integer $k$ and $n=2k$ for some integer $k$ By substitution,
>
> $$m+n=2k+2k=4k$$
>
> This is what was to be shown


#### Solution

The proof uses the same variable $k$ for both even integers without justification From $m$ and $n$ being even, we may write

$$m=2p \quad\text{and}\quad n=2q$$

for possibly different integers $p$ and $q$ Then

$$m+n=2p+2q=2(p+q),$$

which shows that the sum is even, but not necessarily a multiple of $4$ For example, $2+4=6$, and $6$ is not a multiple of $4$ Thus the theorem is false

### 7 Section 4.2 #26, #30, and #31

>[!question]
> **Section 4.2 #26** Determine whether the statement is true or false Justify your answer with a proof or counterexample Use only definitions and the listed assumptions
>
> For all integers $a$, $b$, and $c$, if $a$, $b$, and $c$ are consecutive, then $a+b+c$ is even


#### Solution

The statement is false Let $a=2$, $b=3$, and $c=4$ These are consecutive integers, but

$$a+b+c=2+3+4=9,$$

which is odd Thus consecutive integers do not always have an even sum

>[!question]
> **Section 4.2 #30** Determine whether the statement is true or false Justify your answer with a proof or counterexample Use only the definitions of the terms and the listed Assumptions, not previously established properties
>
> For every integer $m$, if $m>2$, then $m^2-4$ is composite


#### Solution

The statement is false Let $m=3$ Then $m>2$, but

$$m^2-4=3^2-4=5,$$

and $5$ is prime, not composite

>[!question]
> **Section 4.2 #31** Determine whether the statement is true or false Justify your answer with a proof or counterexample Use only the definitions of the terms and the listed Assumptions, not previously established properties
>
> For every integer $n$, $n^2-n+11$ is a prime number



#### Solution

The statement is false Let $n=11$ Then

$$n^2-n+11=11^2-11+11=121=11^2,$$

which is not prime
