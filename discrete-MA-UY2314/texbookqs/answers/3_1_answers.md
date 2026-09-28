---
id: discrete-3-1-textbook-exercises-answers
aliases: []
tags:
  - discrete-mathematics
  - textbook-exercises
---
# Answers — Section 3.1

> [!note]
> Each item refers to [[3_1_textbook_exercises#Section 3.1 Predicates and Quantified Statements I|the question note]]. Several formulas, variables, domains, and answer choices were removed by the source extraction. Those items are flagged rather than guessed.

###### 1. Menagerie
[[3_1_textbook_exercises#Question 3.1.1|Question]]

#### (a) **False.** No red animal is listed.

#### (b) **True.** The birds are birds, and every dog or cat is a mammal.

#### (c) **False.** The blue and yellow birds are neither brown, gray, nor black.

#### (d) **True.** Any bird is neither a cat nor a dog.

#### (e) **False.** There are five blue birds.

#### (f) **True.** There are black dogs, black cats, and one black bird.

###### 2. Basic number statements
[[3_1_textbook_exercises#Question 3.1.2|Question]]

#### (a) **True.** $\mathbb Z\subseteq\mathbb R$.

#### (b) **True.** $1/2$ is a positive real number.

#### (c) **False.** For $x=1$, $x^2$ is not a negative real number.

#### (d) **False.** For example, $\tfrac12$ is real but not an integer.

###### 3. Divisibility predicate
[[3_1_textbook_exercises#Question 3.1.3|Question]]

#### (a) **True** for $Q(4,2)$: 4 does not divide 2, so the conditional is true. (b) $Q(2,4)$ is false: 2 divides 4 but 4 does not divide 2. (c) **False** for $Q(3,6)$: 3 divides 6 but 6 does not divide 3. (d) $Q(6,3)$ is true: 6 does not divide 3, so the conditional is true.

###### 4. Real-number implication predicate
[[3_1_textbook_exercises#Question 3.1.4|Question]]

#### (a) **False.** $-2<1$ is true, but $(-2)^2=4$ is not less than $1^2$.

#### (b) $Q(-5,2)$ is false: $-5<2$, but $25 \not< 4$.

#### (c) **True.** $3<8$ and $9<64$, so the conditional’s hypothesis and conclusion are both true.

#### (d) $Q(4,10)$ is true: $4<10$ and $16<100$.

###### 5. Truth sets
[[3_1_textbook_exercises#Question 3.1.5|Question]]

#### (a) All integers, domain $\mathbb{R}$: the truth set is $\mathbb{Z}$. (b) All integers, domain $\mathbb{Z}^+$: the truth set is $\mathbb{Z}^+$. (c) $x^2<4$, domain $\mathbb{R}$: $-2<x<2$. (d) $x^2<4$, domain $\mathbb{Z}$: $\{-1,0,1\}$.

###### 6. Truth set on even integers
[[3_1_textbook_exercises#Question 3.1.6|Question]]

#### Domain: the even integers. Predicate: “$x$ is divisible by 4.” The truth set is the multiples of 4.

###### 7. Strings over three symbols
[[3_1_textbook_exercises#Question 3.1.7|Question]]

#### Length 2 over $\{a,b,c\}$. (a) Strings starting with $a$: $aa,ab,ac$. (b) Strings with at most one $b$: every string except $bb$.

###### 8. Strings over two symbols
[[3_1_textbook_exercises#Question 3.1.8|Question]]

#### Length 3 over $\{0,1\}$. (a) Second symbol is 1, or the first two agree: $010,011,110,111,000,001$. (b) Not all three equal: every string except $000$ and $111$.

###### 9–12. Counterexamples
[[3_1_textbook_exercises#Question 3.1.9|Question]]

#### (9) **False:** $1/2$ is not an integer. (10) **False:** $2$ is a positive integer that is not greater than 3. (11) **False:** $x=1$ is positive and $x^2$ is not greater than $x$. (12) **False:** $x=-2$, $y=1$ are real and $x^2 \not< y^2$ fails the claimed inequality while $x<y$.

###### 13–14. Equivalent expressions
[[3_1_textbook_exercises#Question 3.1.13|Question]]

#### “All squares are rectangles” matches “every square is a rectangle” and “if a figure is a square, then it is a rectangle.” It does not match “every rectangle is a square.”

#### “All integers are rational” matches “every integer is rational” and “if a number is an integer, then it is rational.” It does not match “every rational number is an integer,” since $1/2$ is rational and not an integer. (3.1.14)

###### 15. Informal rewrites
[[3_1_textbook_exercises#Question 3.1.15|Question]]

#### (a) The intended statement has the form “Every rectangle is a quadrilateral.” Two informal forms are:

1. All rectangles are quadrilaterals.
2. If a figure is a rectangle, then it is a quadrilateral.

#### There is a set with exactly 4 subsets. One informal form: some set has exactly four subsets.

###### 16. Universal form
[[3_1_textbook_exercises#Question 3.1.16|Question]]

#### (a) For every object $x$, if $x$ is a dinosaur, then $x$ is extinct.

#### (b) For every real number $x$, $x$ is positive, negative, or zero.

#### (c) For every number $x$, if $x$ is irrational, then $x$ is not an integer.

#### (d) For every person $x$, if $x$ is a logician, then $x$ is not lazy.

#### For every integer $n$, $3 \neq n^2$. Informally: 3 is not the square of any integer.

#### $-1 \neq x^2$, for every real number $x$.

###### 17. Existential form
[[3_1_textbook_exercises#Question 3.1.17|Question]]

#### (a) There exists an exercise $x$ such that $x$ has an answer.

#### (b) There exists a real number $x$ such that $x$ is rational.

###### 18. Students, majors, and programs
[[3_1_textbook_exercises#Question 3.1.18|Question]]

Using the source predicates $M(x)$, $C(x)$, and $E(x)$:

#### (a) $\exists x\,(E(x)\land M(x))$.

#### (b) $\forall x\,(C(x)\to E(x))$.

#### (c) $\forall x\,(C(x)\to\neg E(x))$.

#### (d) $\exists x\,(C(x)\land M(x))$.

#### (e) $\exists x\,(C(x)\land E(x))\land\exists y\,(C(y)\land\neg E(y))$.

###### 19–20. Equivalent expressions / informal rewrite
[[3_1_textbook_exercises#Question 3.1.19|Question]]

#### Equivalent versions of “every computer science student takes discrete math”: all computer science students take discrete math; if a student is in computer science, then that student takes discrete math.

#### The square root of a positive real number is positive. Every positive real number has a positive square root.

###### 21. Move the quantifier to the end
[[3_1_textbook_exercises#Question 3.1.21|Question]]

#### (a) The total degree of $G$ is even, for every graph $G$.

#### (b) The base angles of $T$ are equal, for every isosceles triangle $T$.

#### (c) $p$ is even, for some prime number $p$.

#### (d) $f$ is not differentiable, for some continuous function $f$.

###### 22. If-then form
[[3_1_textbook_exercises#Question 3.1.22|Question]]

#### If a program is a Java program, then it has at least 5 lines.

#### (b) If an argument is valid and has true premises, then its conclusion is true.

###### 23. Two universal forms
[[3_1_textbook_exercises#Question 3.1.23|Question]]

#### (a) If a triangle is equilateral, then it is isosceles. Equivalently: every equilateral triangle is isosceles.

#### (b) If a student is a computer science student, then the student needs to take data structures. Equivalently: every computer science student needs to take data structures.

###### 24. Two existential forms
[[3_1_textbook_exercises#Question 3.1.24|Question]]

#### (a) There is a hatter who is mad. Equivalently, there is an $x$ such that $x$ is a hatter and $x$ is mad.

#### (b) There is a question that is easy. Equivalently, there is an $x$ such that $x$ is a question and $x$ is easy.

###### 25. Formal rewrites
[[3_1_textbook_exercises#Question 3.1.25|Question]]

#### (a) For every nonzero fraction $x$, $1/x$ is a fraction. Equivalently: for every $x$, if $x$ is a nonzero fraction, then $1/x$ is a fraction.

#### (b) For every polynomial function $f$, $f'$ is a polynomial function. Equivalently: for every $f$, if $f$ is polynomial, then $f'$ is polynomial.

#### For every triangle $T$, the sum of the angles of $T$ is $180^\circ$. Equivalently: for every $T$, if $T$ is a triangle, then its angle sum is $180^\circ$.

#### (d) For every irrational number $x$, $-x$ is irrational. Equivalently: for every $x$, if $x$ is irrational, then $-x$ is irrational.

#### (e) For all even integers $m,n$, $m+n$ is even. Equivalently: for all integers $m,n$, if $m$ and $n$ are even, then $m+n$ is even.

#### (f) For all fractions $r,s$, $rs$ is a fraction. Equivalently: for all $r,s$, if $r$ and $s$ are fractions, then $rs$ is a fraction.

###### 26. Integers and rational numbers
[[3_1_textbook_exercises#Question 3.1.26|Question]]

#### In words: if $x$ is an integer, then $x$ is rational, but there exists an $x$ such that $x$ is rational and $x$ is not an integer. Formally, with $R(x)$ = “$x$ is rational” and $I(x)$ = “$x$ is an integer,”

$$\forall x\,(I(x)\to R(x))\land\exists x\,(R(x)\land\neg I(x)).$$

###### 27. Tarski’s world
[[3_1_textbook_exercises#Question 3.1.27|Question]]

#### One world: a white square at the lower left, a black square at the upper right, a black circle at the upper left, and a white circle at the lower right. (a) **False:** the lower-left square is not black. (b) **True:** the upper-left circle is black. (c) **True:** the lower-left square is left of the lower-right circle. (d) **True:** the upper-left circle is above the lower-left square.

###### 28–30. Predicates over mathematical objects, figures, and integers
[[3_1_textbook_exercises#Question 3.1.28|Question]]

#### (28) “Every real number is an integer” is false; $1/2$ is a counterexample. (29) “Every square is a rectangle” is true. (30) “Some integer is an odd perfect square” is true; $1$ and $9$ are examples.

###### 31. Implicit universal quantification
[[3_1_textbook_exercises#Question 3.1.31|Question]]

#### This is a research-and-citation exercise. A valid answer must quote a statement from a specific mathematics or computer-science text and give a verifiable page number. The source note provides no selected text, so a complete citation should not be invented. For any chosen statement of the form “The sum of two even integers is even,” the explicit version is: “For all integers $m,n$, if $m$ and $n$ are even, then $m+n$ is even.”

###### 32. One predicate variable
[[3_1_textbook_exercises#Question 3.1.32|Question]]

#### (b) **True.** If $x>2$, then $x^2>4$.

#### (d) **True.** $x^2>4$ exactly when $\lvert x\rvert>2$.

###### 33. Predicate variables $P,Q,R,S$
[[3_1_textbook_exercises#Question 3.1.33|Question]]

#### Domain $\{1,2,3\}$. Let $P$ be even, $Q$ be odd, $R$ be “$>0$”, $S$ be “$<0$”. (a) $\forall x (P(x) \land R(x))$ is false. (b) $\forall x (P(x) \land Q(x))$ is false. (c) $\exists x (P(x) \lor Q(x))$ is true. (d) $\forall x (R(x) \land S(x))$ is false.
