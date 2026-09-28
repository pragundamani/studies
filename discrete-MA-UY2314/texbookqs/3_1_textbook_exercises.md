---
id: discrete-3-1-textbook-exercises
aliases: []
tags:
  - discrete-mathematics
  - textbook-exercises
---
# Textbook Exercises — Section 3.1

### Section 3.1: Predicates and Quantified Statements I

### Question 3.1.1

>[!question]
> A menagerie consists of seven brown dogs, two black dogs, six gray cats, ten black cats, five blue birds, six yellow birds, and one black bird. Determine which of the following statements are true and which are false.

#### (a) There is an animal in the menagerie that is red.

> [[answers/3_1_answers#(a) **False.** No red animal is listed.|(a) There is an animal in the menagerie that is red.]]

#### (b) Every animal in the menagerie is a bird or a mammal.

> [[answers/3_1_answers#(b) **True.** The birds are birds, and every dog or cat is a mammal.|(b) Every animal in the menagerie is a bird or a mammal.]]

#### (c) Every animal in the menagerie is brown or gray or black.

> [[answers/3_1_answers#(c) **False.** The blue and yellow birds are neither brown, gray, nor black.|(c) Every animal in the menagerie is brown or gray or black.]]

#### (d) There is an animal in the menagerie that is neither a cat nor a dog.

> [[answers/3_1_answers#(d) **True.** Any bird is neither a cat nor a dog.|(d) There is an animal in the menagerie that is neither a cat nor a dog.]]

#### (e) No animal in the menagerie is blue.

> [[answers/3_1_answers#(e) **False.** There are five blue birds.|(e) No animal in the menagerie is blue.]]

#### (f) There are in the menagerie a dog, a cat, and a bird that all have the same color.

> [[answers/3_1_answers#(f) **True.** There are black dogs, black cats, and one black bird.|(f) There are in the menagerie a dog, a cat, and a bird that all have the same color.]]

### Question 3.1.2

>[!question]
> Indicate which of the following statements are true and which are false. Justify your answers as best as you can.

#### (a) Every integer is a real number.

> [[answers/3_1_answers#(a) **True.** $\mathbb Z\subseteq\mathbb R$.|(a) Every integer is a real number.]]

#### (b) Is $1/2$ a positive real number?

> Is $1/2$ a positive real number?

> [[answers/3_1_answers#(b) **True.** $1/2$ is a positive real number.|(b) Is $1/2$ a positive real number?]]
#### (c) For every real number $x$, is $x^2$ a negative real number?

> For every real number $x$, is $x^2$ a negative real number?

> [[answers/3_1_answers#(c) **False.** For $x=1$, $x^2$ is not a negative real number.|For every real number $x$, is $x^2$ a negative real number?]]
#### (d) Every real number is an integer.

> [[answers/3_1_answers#(d) **False.** For example, $\tfrac12$ is real but not an integer.|(d) Every real number is an integer.]]

### Question 3.1.3

>[!question]

#### Let $Q(n,m)$ mean “if $n$ divides $m$, then $m$ divides $n$,” with both variables integers. (a) Is $Q(4,2)$ true or false? (b) Give a false pair. (c) Is $Q(3,6)$ true or false? (d) Give a true pair other than $Q(4,2)$.

> Let $Q(n,m)$ mean “if $n$ divides $m$, then $m$ divides $n$,” with both variables integers. (a) Is $Q(4,2)$ true or false? (b) Give a false pair. (c) Is $Q(3,6)$ true or false? (d) Give a true pair other than $Q(4,2)$.

> [[answers/3_1_answers#(a) **True** for $Q(4,2)$: 4 does not divide 2, so the conditional is true. (b) $Q(2,4)$ is false: 2 divides 4 but 4 does not divide 2. (c) **False** for $Q(3,6)$: 3 divides 6 but 6 does not divide 3. (d) $Q(6,3)$ is true: 6 does not divide 3, so the conditional is true.|Let $Q(n,m)$ mean “if $n$ divides $m$, then $m$ divides $n$,” with both variables integers. (a) Is $Q(4,2)$ true or false? (b) Give a false pair. (c) Is $Q(3,6)$ true or false? (d) Give a true pair other than $Q(4,2)$.]]
### Question 3.1.4

>[!question]
> Let $Q(x,y)$ be the predicate “If $x < y$, then $x^2 < y^2$,” with domain for both $x$ and $y$ being the set of real numbers.

#### (a) Explain why $Q(-2, 1)$ is false.

> [[answers/3_1_answers#(a) **False.** $-2<1$ is true, but $(-2)^2=4$ is not less than $1^2$.|(a) Explain why $Q(-2, 1)$ is false.]]

#### (b) Give values different from those in part (a) for which $Q(x,y)$ is false.

> [[answers/3_1_answers#(b) $Q(-5,2)$ is false: $-5<2$, but $25 \not< 4$.|(b) Give values different from those in part (a) for which $Q(x,y)$ is false.]]

#### (c) Explain why $Q(3, 8)$ is true.

> [[answers/3_1_answers#(c) **True.** $3<8$ and $9<64$, so the conditional’s hypothesis and conclusion are both true.|(c) Explain why $Q(3, 8)$ is true.]]

#### (d) Give values different from those in part (c) for which $Q(x,y)$ is true.

> [[answers/3_1_answers#(d) $Q(4,10)$ is true: $4<10$ and $16<100$.|(d) Give values different from those in part (c) for which $Q(x,y)$ is true.]]

### Question 3.1.5

>[!question]
> Find the truth set of each predicate.

#### (a) “$x$ is an integer,” domain $\mathbb{R}$. (b) “$x$ is an integer,” domain the positive integers. (c) $x^2<4$, domain $\mathbb{R}$. (d) $x^2<4$, domain $\mathbb{Z}$. Find each truth set.

> (a) “$x$ is an integer,” domain $\mathbb{R}$. (b) “$x$ is an integer,” domain the positive integers. (c) $x^2<4$, domain $\mathbb{R}$. (d) $x^2<4$, domain $\mathbb{Z}$. Find each truth set.

> [[answers/3_1_answers#(a) All integers, domain $\mathbb{R}$: the truth set is $\mathbb{Z}$. (b) All integers, domain $\mathbb{Z}^+$: the truth set is $\mathbb{Z}^+$. (c) $x^2<4$, domain $\mathbb{R}$: $-2<x<2$. (d) $x^2<4$, domain $\mathbb{Z}$: $\{-1,0,1\}$.|(a) “$x$ is an integer,” domain $\mathbb{R}$. (b) “$x$ is an integer,” domain the positive integers. (c) $x^2<4$, domain $\mathbb{R}$. (d) $x^2<4$, domain $\mathbb{Z}$. Find each truth set.]]
### Question 3.1.6

>[!question]
> Let the domain be the even integers, and let $P(x)$ mean “$x$ is divisible by 4.” Find the truth set of $P(x)$.

> [[answers/3_1_answers#Domain: the even integers. Predicate: “$x$ is divisible by 4.” The truth set is the multiples of 4.|Let the domain be the even integers, and let $P(x)$ mean “$x$ is divisible by 4.” Find the truth set of $P(x)$.]]

### Question 3.1.7

>[!question]

#### Let $S$ be the strings of length 2 over $\{a,b,c\}$. (a) List the strings that begin with $a$. (b) List the strings with at most one $b$.

> Let $S$ be the strings of length 2 over $\{a,b,c\}$. (a) List the strings that begin with $a$. (b) List the strings with at most one $b$.

> [[answers/3_1_answers#Length 2 over $\{a,b,c\}$. (a) Strings starting with $a$: $aa,ab,ac$. (b) Strings with at most one $b$: every string except $bb$.|Let $S$ be the strings of length 2 over $\{a,b,c\}$. (a) List the strings that begin with $a$. (b) List the strings with at most one $b$.]]
### Question 3.1.8

>[!question]
> Let $S$ be the strings of length 3 over $\{0,1\}$.

#### Let $S$ be the strings of length 3 over $\{0,1\}$. (a) List strings whose second character is 1 or whose first two characters agree. (b) List strings that are not all the same character.

> Let $S$ be the strings of length 3 over $\{0,1\}$. (a) List strings whose second character is 1 or whose first two characters agree. (b) List strings that are not all the same character.

> [[answers/3_1_answers#Length 3 over $\{0,1\}$. (a) Second symbol is 1, or the first two agree: $010,011,110,111,000,001$. (b) Not all three equal: every string except $000$ and $111$.|Let $S$ be the strings of length 3 over $\{0,1\}$. (a) List strings whose second character is 1 or whose first two characters agree. (b) List strings that are not all the same character.]]
### Question 3.1.9

>[!question]
> Find counterexamples to show that the statements in 9, 10, 11, and 12 are false.
>

> Every real number is an integer. Give a counterexample.

> [[answers/3_1_answers#(9) **False:** $1/2$ is not an integer. (10) **False:** $2$ is a positive integer that is not greater than 3. (11) **False:** $x=1$ is positive and $x^2$ is not greater than $x$. (12) **False:** $x=-2$, $y=1$ are real and $x^2 \not< y^2$ fails the claimed inequality while $x<y$.|Every real number is an integer. Give a counterexample.]]
### Question 3.1.10

>[!question]
> Find counterexamples to show that the statements in 9, 10, 11, and 12 are false.
>

> Every positive integer is greater than 3. Give a counterexample.

> [[answers/3_1_answers#(9) **False:** $1/2$ is not an integer. (10) **False:** $2$ is a positive integer that is not greater than 3. (11) **False:** $x=1$ is positive and $x^2$ is not greater than $x$. (12) **False:** $x=-2$, $y=1$ are real and $x^2 \not< y^2$ fails the claimed inequality while $x<y$.|Every positive integer is greater than 3. Give a counterexample.]]
### Question 3.1.11

>[!question]
> Find counterexamples to show that the statements in 9, 10, 11, and 12 are false.
>

> For every positive real $x$, $x^2>x$. Give a counterexample.

> [[answers/3_1_answers#(9) **False:** $1/2$ is not an integer. (10) **False:** $2$ is a positive integer that is not greater than 3. (11) **False:** $x=1$ is positive and $x^2$ is not greater than $x$. (12) **False:** $x=-2$, $y=1$ are real and $x^2 \not< y^2$ fails the claimed inequality while $x<y$.|For every positive real $x$, $x^2>x$. Give a counterexample.]]
### Question 3.1.12

>[!question]
> Find counterexamples to show that the statements in 9, 10, 11, and 12 are false.
>

> For all real $x$ and $y$, if $x<y$ then $x^2<y^2$. Give a counterexample.

> [[answers/3_1_answers#(9) **False:** $1/2$ is not an integer. (10) **False:** $2$ is a positive integer that is not greater than 3. (11) **False:** $x=1$ is positive and $x^2$ is not greater than $x$. (12) **False:** $x=-2$, $y=1$ are real and $x^2 \not< y^2$ fails the claimed inequality while $x<y$.|For all real $x$ and $y$, if $x<y$ then $x^2<y^2$. Give a counterexample.]]
### Question 3.1.13

>[!question]
> Which are equivalent to “all squares are rectangles”? (i) Every square is a rectangle. (ii) Every rectangle is a square. (iii) If a figure is a square, then it is a rectangle.

> [[answers/3_1_answers#“All squares are rectangles” matches “every square is a rectangle” and “if a figure is a square, then it is a rectangle.” It does not match “every rectangle is a square.”|Which are equivalent to “all squares are rectangles”?]]
### Question 3.1.14

>[!question]
> Which are equivalent to “all integers are rational numbers”? (i) Every integer is a rational number. (ii) Every rational number is an integer. (iii) If a number is an integer, then it is rational.

> [[answers/3_1_answers#“All integers are rational” matches “every integer is rational” and “if a number is an integer, then it is rational.” It does not match “every rational number is an integer,” since $1/2$ is rational and not an integer. (3.1.14)|Which are equivalent to “all integers are rational numbers”? (i) Every integer is a rational number. (ii) Every rational number is an integer. (iii) If a number is an integer, then it is rational.]]
### Question 3.1.15

>[!question]
> Rewrite the following statements informally in at least two different ways without using variables or quantifiers.

#### (a) For every rectangle $x$, $x$ is a quadrilateral.

> [[answers/3_1_answers#(a) The intended statement has the form “Every rectangle is a quadrilateral.” Two informal forms are:|(a) For every rectangle $x$, $x$ is a quadrilateral.]]

#### Rewrite without variables or $\exists$: there is a set $S$ such that $S$ has exactly 4 subsets.

> Rewrite without variables or $\exists$: there is a set $S$ such that $S$ has exactly 4 subsets.

> [[answers/3_1_answers#There is a set with exactly 4 subsets. One informal form: some set has exactly four subsets.|Rewrite without variables or $\exists$: there is a set $S$ such that $S$ has exactly 4 subsets.]]
### Question 3.1.16

>[!question]
> Rewrite each statement in the form “For all $x$, ….” Use “if …, then …” when the English statement is conditional.

#### (a) All dinosaurs are extinct.

> [[answers/3_1_answers#(a) For every object $x$, if $x$ is a dinosaur, then $x$ is extinct.|(a) All dinosaurs are extinct.]]

#### (b) Every real number is positive, negative, or zero.

> [[answers/3_1_answers#(b) For every real number $x$, $x$ is positive, negative, or zero.|(b) Every real number is positive, negative, or zero.]]

#### (c) No irrational numbers are integers.

> [[answers/3_1_answers#(c) For every number $x$, if $x$ is irrational, then $x$ is not an integer.|(c) No irrational numbers are integers.]]

#### (d) No logicians are lazy.

> [[answers/3_1_answers#(d) For every person $x$, if $x$ is a logician, then $x$ is not lazy.|(d) No logicians are lazy.]]

#### (e) 3 is not equal to the square of any integer.

> (e) 3 is not equal to the square of any integer.

> [[answers/3_1_answers#For every integer $n$, $3 \neq n^2$. Informally: 3 is not the square of any integer.|(e) 3 is not equal to the square of any integer.]]
#### (f) $-1$ is not equal to the square of any real number.

> (f) $-1$ is not equal to the square of any real number.

> [[answers/3_1_answers#$-1 \neq x^2$, for every real number $x$.|(f) $-1$ is not equal to the square of any real number.]]
### Question 3.1.17

>[!question]
> Rewrite each statement in the form “There exists an $x$ such that ….”

#### (a) Some exercises have answers.

> [[answers/3_1_answers#(a) There exists an exercise $x$ such that $x$ has an answer.|(a) Some exercises have answers.]]

#### (b) Some real numbers are rational.

> [[answers/3_1_answers#(b) There exists a real number $x$ such that $x$ is rational.|(b) Some real numbers are rational.]]

### Question 3.1.18

>[!question]
> Let the domain be the students at your school. Let $M(x)$ mean “$x$ is a math major,” $C(x)$ mean “$x$ is a computer science student,” and $E(x)$ mean “$x$ is an engineering student.” Express each statement with quantifiers and these predicates.

#### (a) There is an engineering student who is a math major.

> [[answers/3_1_answers#(a) $\exists x\,(E(x)\land M(x))$.|(a) There is an engineering student who is a math major.]]

#### (b) Every computer science student is an engineering student.

> [[answers/3_1_answers#(b) $\forall x\,(C(x)\to E(x))$.|(b) Every computer science student is an engineering student.]]

#### (c) No computer science students are engineering students.

> [[answers/3_1_answers#(c) $\forall x\,(C(x)\to\neg E(x))$.|(c) No computer science students are engineering students.]]

#### (d) Some computer science students are also math majors.

> [[answers/3_1_answers#(d) $\exists x\,(C(x)\land M(x))$.|(d) Some computer science students are also math majors.]]

#### (e) Some computer science students are engineering students and some are not.

> [[answers/3_1_answers#(e) $\exists x\,(C(x)\land E(x))\land\exists y\,(C(y)\land\neg E(y))$.|(e) Some computer science students are engineering students and some are not.]]

### Question 3.1.19

>[!question]
> Which are equivalent to “for every student $x$, if $x$ is a computer science student, then $x$ takes discrete math”? (i) All computer science students take discrete math. (ii) All students who take discrete math are computer science students.

> [[answers/3_1_answers#Equivalent versions of “every computer science student takes discrete math”: all computer science students take discrete math; if a student is in computer science, then that student takes discrete math.|Which are equivalent to “for every student $x$, if $x$ is a computer science student, then $x$ takes discrete math”?]]
### Question 3.1.20

>[!question]
> Rewrite the following statement informally in at least two different ways without using variables or the symbol $\forall$ or the words “for all.”
>
> $\forall$ real numbers $x$, if $x > 0$, then $\sqrt{x} > 0$.

> [[answers/3_1_answers#The square root of a positive real number is positive. Every positive real number has a positive square root.|Rewrite the following statement informally in at least two different ways without using variables or the symbol $\forall$ or the words “for all.”]]

### Question 3.1.21

>[!question]
> Rewrite the following statements so that the quantifier trails the rest of the sentence.

#### (a) For any graph $G$, the total degree of $G$ is even.

> [[answers/3_1_answers#(a) The total degree of $G$ is even, for every graph $G$.|(a) For any graph $G$, the total degree of $G$ is even.]]

#### (b) For any isosceles triangle $T$, the base angles of $T$ are equal.

> [[answers/3_1_answers#(b) The base angles of $T$ are equal, for every isosceles triangle $T$.|(b) For any isosceles triangle $T$, the base angles of $T$ are equal.]]

#### (c) There exists a prime number $p$ such that $p$ is even.

> [[answers/3_1_answers#(c) $p$ is even, for some prime number $p$.|(c) There exists a prime number $p$ such that $p$ is even.]]

#### (d) There exists a continuous function $f$ such that $f$ is not differentiable.

> [[answers/3_1_answers#(d) $f$ is not differentiable, for some continuous function $f$.|(d) There exists a continuous function $f$ such that $f$ is not differentiable.]]

### Question 3.1.22

>[!question]
> Rewrite each statement in the form “For all $x$, ….” Use “if …, then …” when the English statement is conditional.

#### (a) All Java programs have at least 5 lines.

> All Java programs have at least 5 lines.

> [[answers/3_1_answers#If a program is a Java program, then it has at least 5 lines.|All Java programs have at least 5 lines.]]
#### (b) Any valid argument with true premises has a true conclusion.

> [[answers/3_1_answers#(b) If an argument is valid and has true premises, then its conclusion is true.|(b) Any valid argument with true premises has a true conclusion.]]

### Question 3.1.23

>[!question]
> Rewrite each statement as “For all $x$, if …, then …” and also as “Every … is ….”

#### (a) All equilateral triangles are isosceles.

> [[answers/3_1_answers#(a) If a triangle is equilateral, then it is isosceles. Equivalently: every equilateral triangle is isosceles.|(a) All equilateral triangles are isosceles.]]

#### (b) Every computer science student needs to take data structures.

> [[answers/3_1_answers#(b) If a student is a computer science student, then the student needs to take data structures. Equivalently: every computer science student needs to take data structures.|(b) Every computer science student needs to take data structures.]]

### Question 3.1.24

>[!question]
> Rewrite each statement as “There is an $x$ such that …” and as “There is an $x$ such that $x$ is … and ….”

#### (a) Some hatters are mad.

> [[answers/3_1_answers#(a) There is a hatter who is mad. Equivalently, there is an $x$ such that $x$ is a hatter and $x$ is mad.|(a) Some hatters are mad.]]

#### (b) Some questions are easy.

> [[answers/3_1_answers#(b) There is a question that is easy. Equivalently, there is an $x$ such that $x$ is a question and $x$ is easy.|(b) Some questions are easy.]]

### Question 3.1.25

>[!question]
> The statement “The square of any rational number is rational” can be rewritten formally as “For all rational numbers $x$, $x^2$ is rational” or as “For all $x$, if $x$ is rational then $x^2$ is rational.” Rewrite each statement in those two forms. When the statement is about a pair, use two variables: “For all $x$ and $y$, …” and “For all $x$ and $y$, if …, then ….”

#### (a) The reciprocal of any nonzero fraction is a fraction.

> [[answers/3_1_answers#(a) For every nonzero fraction $x$, $1/x$ is a fraction. Equivalently: for every $x$, if $x$ is a nonzero fraction, then $1/x$ is a fraction.|(a) The reciprocal of any nonzero fraction is a fraction.]]

#### (b) The derivative of any polynomial function is a polynomial function.

> [[answers/3_1_answers#(b) For every polynomial function $f$, $f'$ is a polynomial function. Equivalently: for every $f$, if $f$ is polynomial, then $f'$ is polynomial.|(b) The derivative of any polynomial function is a polynomial function.]]

#### (c) The sum of the angles of any triangle is $180^\circ$.

> [[answers/3_1_answers#For every triangle $T$, the sum of the angles of $T$ is $180^\circ$. Equivalently: for every $T$, if $T$ is a triangle, then its angle sum is $180^\circ$.|(c) The sum of the angles of any triangle is $180^\circ$.]]
#### (d) The negative of any irrational number is irrational.

> [[answers/3_1_answers#(d) For every irrational number $x$, $-x$ is irrational. Equivalently: for every $x$, if $x$ is irrational, then $-x$ is irrational.|(d) The negative of any irrational number is irrational.]]

#### (e) The sum of any two even integers is even.

> [[answers/3_1_answers#(e) For all even integers $m,n$, $m+n$ is even. Equivalently: for all integers $m,n$, if $m$ and $n$ are even, then $m+n$ is even.|(e) The sum of any two even integers is even.]]

#### (f) The product of any two fractions is a fraction.

> [[answers/3_1_answers#(f) For all fractions $r,s$, $rs$ is a fraction. Equivalently: for all $r,s$, if $r$ and $s$ are fractions, then $rs$ is a fraction.|(f) The product of any two fractions is a fraction.]]

### Question 3.1.26

>[!question]
> Consider the statement “All integers are rational numbers but some rational numbers are not integers.”

#### (a) Write it in the form “For all $x$, if … then …, but there exists an $x$ such that ….”

> [[answers/3_1_answers#In words: if $x$ is an integer, then $x$ is rational, but there exists an $x$ such that $x$ is rational and $x$ is not an integer. Formally, with $R(x)$ = “$x$ is rational” and $I(x)$ = “$x$ is an integer,”|(a) Write it in the form “For all $x$, if … then …, but there exists an $x$ such that ….”]]

#### (b) Let $R(x)$ mean “$x$ is rational” and $I(x)$ mean “$x$ is an integer.” Write the statement using $\forall$, $\exists$, $\to$, $\land$, and $\neg$.

> [[answers/3_1_answers#In words: if $x$ is an integer, then $x$ is rational, but there exists an $x$ such that $x$ is rational and $x$ is not an integer. Formally, with $R(x)$ = “$x$ is rational” and $I(x)$ = “$x$ is an integer,”|(b) Let $R(x)$ mean “$x$ is rational” and $I(x)$ mean “$x$ is an integer.” Write the statement using $\forall$, $\exists$, $\to$, $\land$, and $\neg$.]]

### Question 3.1.27

>[!question]
> Draw a Tarski world with two squares and two circles. Decide whether each statement is true in that world.

#### Using a Tarski world with two squares and two circles, decide: (a) every square is black, (b) some circle is black, (c) some square is left of some circle, (d) some circle is above some square. Draw a world that makes (a) false and (b) true.

> Using a Tarski world with two squares and two circles, decide: (a) every square is black, (b) some circle is black, (c) some square is left of some circle, (d) some circle is above some square. Draw a world that makes (a) false and (b) true.

> [[answers/3_1_answers#One world: a white square at the lower left, a black square at the upper right, a black circle at the upper left, and a white circle at the lower right. (a) **False:** the lower-left square is not black. (b) **True:** the upper-left circle is black. (c) **True:** the lower-left square is left of the lower-right circle. (d) **True:** the upper-left circle is above the lower-left square.|Using a Tarski world with two squares and two circles, decide: (a) every square is black, (b) some circle is black, (c) some square is left of some circle, (d) some circle is above some square. Draw a world that makes (a) false and (b) true.]]
### Question 3.1.28

>[!question]
> Rewrite without quantifiers and say whether it is true: every real number is an integer.

> [[answers/3_1_answers#(28) “Every real number is an integer” is false; $1/2$ is a counterexample. (29) “Every square is a rectangle” is true. (30) “Some integer is an odd perfect square” is true; $1$ and $9$ are examples.|Rewrite without quantifiers and say whether it is true: every real number is an integer.]]

### Question 3.1.29

>[!question]
> Rewrite without quantifiers and say whether it is true: every square is a rectangle.

> [[answers/3_1_answers#(28) “Every real number is an integer” is false; $1/2$ is a counterexample. (29) “Every square is a rectangle” is true. (30) “Some integer is an odd perfect square” is true; $1$ and $9$ are examples.|Rewrite without quantifiers and say whether it is true: every square is a rectangle.]]

### Question 3.1.30

>[!question]
> Rewrite without quantifiers and say whether it is true: some integer is an odd perfect square.

> [[answers/3_1_answers#(28) “Every real number is an integer” is false; $1/2$ is a counterexample. (29) “Every square is a rectangle” is true. (30) “Some integer is an odd perfect square” is true; $1$ and $9$ are examples.|Rewrite without quantifiers and say whether it is true: some integer is an odd perfect square.]]

### Question 3.1.31

>[!question]
> In any mathematics or computer science text other than this book, find an example of a statement that is universal but is implicitly quantified. Copy the statement as it appears and rewrite it making the quantification explicit. Give a complete citation for your example, including title, author, publisher, year, and page number.

> [[answers/3_1_answers#This is a research-and-citation exercise. A valid answer must quote a statement from a specific mathematics or computer-science text and give a verifiable page number. The source note provides no selected text, so a complete citation should not be invented. For any chosen statement of the form “The sum of two even integers is even,” the explicit version is: “For all integers $m,n$, if $m$ and $n$ are even, then $m+n$ is even.”|In any mathematics or computer science text other than this book, find an example of a statement that is universal but is implicitly quantified. Copy the statement as it appears and rewrite it making the quantification explicit. Give a complete citation for your example, including title, author, publisher, year, and page number.]]

### Question 3.1.32

>[!question]
> Let the set of all real numbers be the domain of the predicate variable $x$. Which of the following are true and which are false? Give counterexamples for the statements that are false.

#### (b) $\forall x$, if $x > 2$ then $x^2 > 4$.

> [[answers/3_1_answers#(b) **True.** If $x>2$, then $x^2>4$.|(b) $\forall x$, if $x > 2$ then $x^2 > 4$.]]

#### (d) $\forall x$, $x^2 > 4$ if and only if $\lvert x\rvert > 2$.

> [[answers/3_1_answers#(d) **True.** $x^2>4$ exactly when $\lvert x\rvert>2$.|(d) $\forall x$, $x^2 > 4$ if and only if $\lvert x\rvert > 2$.]]

### Question 3.1.33

>[!question]

#### (a) Domain $\{1,2,3\}$. $P(x)$: $x$ is even. $R(x)$: $x>0$. Is $\forall x\,(P(x)\land R(x))$ true?

> Let the domain be $\{1,2,3\}$, $P$ even, $Q$ odd, $R(x)$ mean $x>0$, and $S(x)$ mean $x<0$. Which are true? (a) $\forall x (P(x) \land R(x))$. (b) $\forall x (P(x) \land Q(x))$. (c) $\exists x (P(x) \lor Q(x))$. (d) $\forall x (R(x) \land S(x))$.

> [[answers/3_1_answers#Domain $\{1,2,3\}$. Let $P$ be even, $Q$ be odd, $R$ be “$>0$”, $S$ be “$<0$”. (a) $\forall x (P(x) \land R(x))$ is false. (b) $\forall x (P(x) \land Q(x))$ is false. (c) $\exists x (P(x) \lor Q(x))$ is true. (d) $\forall x (R(x) \land S(x))$ is false.|(a) Is $\forall x\,(P(x)\land R(x))$ true on $\{1,2,3\}$?]]
#### (b) Same domain and predicates, and $Q(x)$: $x$ is odd. Is $\forall x\,(P(x)\land Q(x))$ true?

> Let the domain be $\{1,2,3\}$, $P$ even, $Q$ odd, $R(x)$ mean $x>0$, and $S(x)$ mean $x<0$. Which are true? (a) $\forall x (P(x) \land R(x))$. (b) $\forall x (P(x) \land Q(x))$. (c) $\exists x (P(x) \lor Q(x))$. (d) $\forall x (R(x) \land S(x))$.

> [[answers/3_1_answers#Domain $\{1,2,3\}$. Let $P$ be even, $Q$ be odd, $R$ be “$>0$”, $S$ be “$<0$”. (a) $\forall x (P(x) \land R(x))$ is false. (b) $\forall x (P(x) \land Q(x))$ is false. (c) $\exists x (P(x) \lor Q(x))$ is true. (d) $\forall x (R(x) \land S(x))$ is false.|(b) Is $\forall x\,(P(x)\land Q(x))$ true?]]
#### (c) Same domain. Is $\exists x\,(P(x)\lor Q(x))$ true?

> Let the domain be $\{1,2,3\}$, $P$ even, $Q$ odd, $R(x)$ mean $x>0$, and $S(x)$ mean $x<0$. Which are true? (a) $\forall x (P(x) \land R(x))$. (b) $\forall x (P(x) \land Q(x))$. (c) $\exists x (P(x) \lor Q(x))$. (d) $\forall x (R(x) \land S(x))$.

> [[answers/3_1_answers#Domain $\{1,2,3\}$. Let $P$ be even, $Q$ be odd, $R$ be “$>0$”, $S$ be “$<0$”. (a) $\forall x (P(x) \land R(x))$ is false. (b) $\forall x (P(x) \land Q(x))$ is false. (c) $\exists x (P(x) \lor Q(x))$ is true. (d) $\forall x (R(x) \land S(x))$ is false.|Let the domain be $\{1,2,3\}$, $P$ even, $Q$ odd, $R(x)$ mean $x>0$, and $S(x)$ mean $x<0$. Which are true? (a) $\forall x (P(x) \land R(x))$. (b) $\forall x (P(x) \land Q(x))$. (c) $\exists x (P(x) \lor Q(x))$. (d) $\forall x (R(x) \land S(x))$.]]
#### (d) Same domain, and $S(x)$: $x<0$. Is $\forall x\,(R(x)\land S(x))$ true?

> Let the domain be $\{1,2,3\}$, $P$ even, $Q$ odd, $R(x)$ mean $x>0$, and $S(x)$ mean $x<0$. Which are true? (a) $\forall x (P(x) \land R(x))$. (b) $\forall x (P(x) \land Q(x))$. (c) $\exists x (P(x) \lor Q(x))$. (d) $\forall x (R(x) \land S(x))$.

> [[answers/3_1_answers#Domain $\{1,2,3\}$. Let $P$ be even, $Q$ be odd, $R$ be “$>0$”, $S$ be “$<0$”. (a) $\forall x (P(x) \land R(x))$ is false. (b) $\forall x (P(x) \land Q(x))$ is false. (c) $\exists x (P(x) \lor Q(x))$ is true. (d) $\forall x (R(x) \land S(x))$ is false.|(d) Is $\forall x\,(R(x)\land S(x))$ true?]]
