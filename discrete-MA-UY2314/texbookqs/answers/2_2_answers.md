---
id: discrete-2-2-textbook-answers
aliases: []
tags:
  - discrete-mathematics
  - textbook-solutions
---
# Solutions — Section 2.2: Conditional Statements

Each item refers to [[2_2_textbook_exercises|the exercise note]]. Items marked **Source issue** cannot be solved uniquely because the mathematical symbols or operands were absent from the extracted question.

###### 1.
[[2_2_textbook_exercises#Question 2.2.1|Question]]

#### If the loop does not contain a stop or a go to, then it repeats exactly 10 times.

###### 2.
[[2_2_textbook_exercises#Question 2.2.2|Question]]

#### If I catch the 8:05 bus, then I am on time for work.

###### 3.
[[2_2_textbook_exercises#Question 2.2.3|Question]]

#### If you do not freeze, then I will shoot.

###### 4.
[[2_2_textbook_exercises#Question 2.2.4|Question]]

#### If you do not fix my ceiling, then I will not pay my rent.

###### 5.
[[2_2_textbook_exercises#Question 2.2.5|Question]]

#### F only when $p$ is true and $q$ is false.

###### 6.
[[2_2_textbook_exercises#Question 2.2.6|Question]]

#### F only when $p$ is false and $q$ is true. (2.2.6)

###### 7.
[[2_2_textbook_exercises#Question 2.2.7|Question]]

#### T only when $p$ is true and $q$ is false. This is the negation of $p \to q$. (2.2.7)

###### 8.
[[2_2_textbook_exercises#Question 2.2.8|Question]]

#### T when $p$ and $q$ are equal. (2.2.8)

###### 9.
[[2_2_textbook_exercises#Question 2.2.9|Question]]

#### F only when $p$ is false and $q$ is true. (2.2.9)

###### 10.
[[2_2_textbook_exercises#Question 2.2.10|Question]]

#### T only when $p$ is true and $q$ is false. (2.2.10)

###### 11.
[[2_2_textbook_exercises#Question 2.2.11|Question]]

#### F when $r$ is false and at least one of $p,q$ is true. (2.2.11)

###### 12.
[[2_2_textbook_exercises#Question 2.2.12|Question]]

#### Using $p \to q \equiv \sim p \lor q$, the statement is $\sim(x>2) \lor (x^2>4)$, that is, $x \le 2$ or $x^2>4$.

###### 13.
[[2_2_textbook_exercises#Question 2.2.13|Question]]

#### **Equivalent.** $p \to q$ and $\sim q \to \sim p$ have the same truth table.

###### 14.
[[2_2_textbook_exercises#Question 2.2.14|Question]]

#### Each form is equivalent to $\sim p \lor q \lor r$.

$p \to q \lor r \equiv \sim p \lor q \lor r$.

$p \land \sim q \to r \equiv \sim p \lor q \lor r$ after De Morgan and double negation.

$p \land \sim r \to q \equiv \sim p \lor r \lor q$, which is the same form.

###### 15.
[[2_2_textbook_exercises#Question 2.2.15|Question]]

#### Let $p$ mean “$n$ is prime,” $q$ mean “$n$ is odd,” and $r$ mean “$n=2$.” The sentence is $p \to q \lor r$, and the other two forms are $p \land \sim q \to r$ and $p \land \sim r \to q$.

###### 16.
[[2_2_textbook_exercises#Question 2.2.16|Question]]

#### Let $P$ mean “you paid full price” and $Q$ mean “you bought it at Crown Books.” The statements are

$$P\to\neg Q\qquad\text{and}\qquad\neg Q\lor P.$$

Since $P\to\neg Q\equiv\neg P\lor\neg Q$, they are **not** equivalent. For $P=T$ and $Q=T$, the first statement is false but the second is true.

| $P$ | $Q$ | $P\to\neg Q$ | $\neg Q\lor P$ |
|---|---|---|---|
| T | T | F | T |
| T | F | T | T |
| F | T | T | F |
| F | F | T | T |

###### 17.
[[2_2_textbook_exercises#Question 2.2.17|Question]]

#### Let $P$ be the first factor claim, $Q$ the second factor claim, and $R$ the conclusion that the third quantity is a factor of the fourth. The two forms are

$$(P\land Q)\to R\qquad\text{and}\qquad\neg P\lor\neg Q\lor R.$$

They are **logically equivalent**, because

$$(P\land Q)\to R\equiv\neg(P\land Q)\lor R\equiv\neg P\lor\neg Q\lor R.$$

| $P$ | $Q$ | $R$ | $(P\land Q)\to R$ | $\neg P\lor\neg Q\lor R$ |
|---|---|---|---|---|
| T | T | T | T | T |
| T | T | F | F | F |
| T | F | T | T | T |
| T | F | F | T | T |
| F | T | T | T | T |
| F | T | F | T | T |
| F | F | T | T | T |
| F | F | F | T | T |

Here $P$ is “$m$ is a factor of $n$,” $Q$ is “$n$ is a factor of $p$,” and $R$ is “$m$ is a factor of $p$.”

###### 18.
[[2_2_textbook_exercises#Question 2.2.18|Question]]

#### Let $W$ mean “it walks like a duck,” $T$ mean “it talks like a duck,” and $D$ mean “it is a duck.” The statements are

$$S_1:(W\land T)\to D,$$
$$S_2:\neg W\lor\neg T\lor D,$$
$$S_3:(\neg W\land\neg T)\to\neg D.$$

$S_1$ and $S_2$ are equivalent, since

$$(W\land T)\to D\equiv\neg W\lor\neg T\lor D.$$

$S_3$ is not equivalent to either one. For $W$ false, $T$ false, and $D$ true, $S_1$ and $S_2$ are true, whereas $S_3$ is false.

###### 19.
[[2_2_textbook_exercises#Question 2.2.19|Question]]

#### **False.** Let $P$ mean “Sue is Luiz’s mother” and $Q$ mean “Ali is his cousin.” The given statement is $P\to Q$. Its negation is

$$\neg(P\to Q)\equiv P\land\neg Q,$$

not $P\to\neg Q$.

###### 20(a).
[[2_2_textbook_exercises#Question 2.2.20|Question]]

#### $P$ is a square and $P$ is not a rectangle.

###### 20(b).
[[2_2_textbook_exercises#Question 2.2.20|Question]]

#### Today is New Year’s Eve and tomorrow is not January.

###### 20(c).
[[2_2_textbook_exercises#Question 2.2.20|Question]]

#### The decimal expansion of $r$ is terminating and $r$ is irrational.

###### 20(d).
[[2_2_textbook_exercises#Question 2.2.20|Question]]

#### $n$ is prime, $n$ is not odd, and $n$ is not 2.

###### 20(e).
[[2_2_textbook_exercises#Question 2.2.20|Question]]

#### $x$ is nonnegative, $x$ is not positive, and $x$ is not 0.

###### 20(f).
[[2_2_textbook_exercises#Question 2.2.20|Question]]

#### The negation is: Tom is Ann’s father, and either Jim is not her uncle or Sue is not her aunt.

###### 20(g).
[[2_2_textbook_exercises#Question 2.2.20|Question]]

#### $n$ is divisible by 6, and $n$ is not divisible by 2 or $n$ is not divisible by 3.

###### 21.
[[2_2_textbook_exercises#Question 2.2.21|Question]]

#### $p \to q$ is false, so $p$ is true and $q$ is false. Then $\sim p$ is false, $p \lor q$ is true, and $q \to p$ is true.

###### 22.
[[2_2_textbook_exercises#Question 2.2.22|Question]]

#### The contrapositive of $P\to Q$ is $\neg Q\to\neg P$. Thus, for every readable item in Exercise 20, negate both the conclusion and hypothesis and reverse them. For example, 20(f) becomes: if Jim is not Ann’s uncle or Sue is not Ann’s aunt, then Tom is not Ann’s father. The contrapositives are:
- (a) If $P$ is not a rectangle, then $P$ is not a square.
- (b) If tomorrow is not January, then today is not New Year’s Eve.
- (c) If $r$ is not rational, then the decimal expansion of $r$ is not terminating.
- (d) If $n$ is not odd and $n$ is not 2, then $n$ is not prime.
- (e) If $x$ is not positive and $x$ is not 0, then $x$ is not nonnegative.
- (f) If Jim is not Ann’s uncle or Sue is not Ann’s aunt, then Tom is not Ann’s father.
- (g) If $n$ is not divisible by 2 or $n$ is not divisible by 3, then $n$ is not divisible by 6.

###### 23.
[[2_2_textbook_exercises#Question 2.2.23|Question]]

#### For $P\to Q$, the converse is $Q\to P$ and the inverse is $\neg P\to\neg Q$. Apply these to each item of Exercise 20. For 20(f):

- Converse: If Jim is Ann’s uncle and Sue is Ann’s aunt, then Tom is Ann’s father.
- Inverse: If Tom is not Ann’s father, then Jim is not Ann’s uncle or Sue is not Ann’s aunt.

For the assigned parts:
- (a) Converse: if $P$ is a rectangle, then $P$ is a square. Inverse: if $P$ is not a square, then $P$ is not a rectangle.
- (b) Converse: if tomorrow is January, then today is New Year’s Eve. Inverse: if today is not New Year’s Eve, then tomorrow is not January.
- (c) Converse: if $r$ is rational, then the decimal expansion of $r$ is terminating. Inverse: if the decimal expansion of $r$ is not terminating, then $r$ is not rational.
- (d) Converse: if $n$ is odd or $n=2$, then $n$ is prime. Inverse: if $n$ is not prime, then $n$ is not odd and $n\neq 2$.
- (e) Converse: if $x$ is positive or $x$ is 0, then $x$ is nonnegative. Inverse: if $x$ is not nonnegative, then $x$ is not positive and $x$ is not 0.
- (g) Converse: if $n$ is divisible by 2 and by 3, then $n$ is divisible by 6. Inverse: if $n$ is not divisible by 6, then $n$ is not divisible by 2 or $n$ is not divisible by 3.

###### 24.
[[2_2_textbook_exercises#Question 2.2.24|Question]]

#### A conditional is not equivalent to its converse. Let $P=T$ and $Q=F$. Then $P\to Q=F$, while the converse $Q\to P=T$.

###### 25.
[[2_2_textbook_exercises#Question 2.2.25|Question]]

#### A conditional is not equivalent to its inverse. With $P=T$ and $Q=F$,

$$P\to Q=F,\qquad \neg P\to\neg Q=T.$$

Thus the two columns differ.

###### 26.
[[2_2_textbook_exercises#Question 2.2.26|Question]]

#### A conditional and its contrapositive are equivalent:

$$P\to Q\equiv\neg P\lor Q\equiv Q\lor\neg P\equiv\neg Q\to\neg P.$$

Therefore their truth-table columns agree in every row.

###### 27.
[[2_2_textbook_exercises#Question 2.2.27|Question]]

#### The converse and inverse are equivalent:

$$Q\to P\equiv\neg Q\lor P\equiv P\lor\neg Q\equiv\neg P\to\neg Q.$$

Therefore their truth-table columns agree in every row.

###### 28.
[[2_2_textbook_exercises#Question 2.2.28|Question]]

#### “I say what I mean” means: if I mean something, then I say it. “I mean what I say” means: if I say something, then I mean it. These are converses. A conditional is not generally equivalent to its converse, so the two sentences need not say the same thing.

###### 29.
[[2_2_textbook_exercises#Question 2.2.29|Question]]

#### $p \land q \equiv q \land p$ becomes the tautology $(p \land q) \leftrightarrow (q \land p)$.

###### 30.
[[2_2_textbook_exercises#Question 2.2.30|Question]]

#### $p \to q \equiv \sim p \lor q$ becomes the tautology $(p \to q) \leftrightarrow (\sim p \lor q)$. (2.2.30)

###### 31.
[[2_2_textbook_exercises#Question 2.2.31|Question]]

#### $\sim(p \lor q) \equiv \sim p \land \sim q$ becomes the tautology $\sim(p \lor q) \leftrightarrow (\sim p \land \sim q)$. (2.2.31)

###### 32.
[[2_2_textbook_exercises#Question 2.2.32|Question]]

#### Let $P$ mean “the quadratic has two distinct real roots” and $Q$ mean “its discriminant is greater than zero.” “If and only if” means both directions:

$$P\to Q\qquad\text{and}\qquad Q\to P.$$

###### 33.
[[2_2_textbook_exercises#Question 2.2.33|Question]]

#### Let $P$ mean “this integer is even” and $Q$ mean “it equals twice some integer.” The statement is

$$P\to Q\qquad\text{and}\qquad Q\to P.$$

###### 34.
[[2_2_textbook_exercises#Question 2.2.34|Question]]

#### Let $P$ mean “the Cubs win the pennant” and $Q$ mean “they win tomorrow’s game.” “$P$ only if $Q$” means $P\to Q$:

- If the Cubs win the pennant, then they win tomorrow’s game.
- Contrapositive: If the Cubs do not win tomorrow’s game, then they do not win the pennant.

###### 35.
[[2_2_textbook_exercises#Question 2.2.35|Question]]

#### Let $P$ mean “Sam is allowed on Signe’s racing boat” and $Q$ mean “Sam is an expert sailor.”

- If Sam is allowed on Signe’s racing boat, then he is an expert sailor.
- If Sam is not an expert sailor, then he is not allowed on Signe’s racing boat.

###### 36.
[[2_2_textbook_exercises#Question 2.2.36|Question]]

#### No. The director said that majoring in mathematics or computer science, having at least a B average, and taking accounting are **necessary** conditions for being hired:

$$\text{hired}\to(M\lor C)\land B\land A.$$

Meeting necessary conditions does not guarantee being hired. The director did not state the converse.

###### 37.
[[2_2_textbook_exercises#Question 2.2.37|Question]]

#### If a new hearing is not granted, then payment will be made on fifth.

###### 38.
[[2_2_textbook_exercises#Question 2.2.38|Question]]

#### If it does not rain, then Ann will go.

###### 39.
[[2_2_textbook_exercises#Question 2.2.39|Question]]

#### If a security code is not entered, then this door will not open.

###### 40.
[[2_2_textbook_exercises#Question 2.2.40|Question]]

#### If I catch the 8:05 bus, then I am on time for work. (2.2.40)

###### 41.
[[2_2_textbook_exercises#Question 2.2.41|Question]]

#### If this triangle has two angles of $45^\circ$, then it is a right triangle.

###### 42.
[[2_2_textbook_exercises#Question 2.2.42|Question]]

#### If the number is divisible by 6, then it is divisible by 3. Contrapositive: if it is not divisible by 3, then it is not divisible by 6.

###### 43.
[[2_2_textbook_exercises#Question 2.2.43|Question]]

#### Answer 2.2.43

- If Jim passes the course, then he does homework regularly.
- If Jim does not do homework regularly, then he does not pass the course.

###### 44.
[[2_2_textbook_exercises#Question 2.2.44|Question]]

#### If Jon’s team wins the rest of its games, then it wins the championship.

###### 45.
[[2_2_textbook_exercises#Question 2.2.45|Question]]

#### If this computer program is correct, then it does not produce error messages during translation.

###### 46.
[[2_2_textbook_exercises#Question 2.2.46|Question]]

#### Let $B$ mean “the compound is boiling” and $T$ mean “its temperature is at least the stated temperature.” The given fact is $B\to T$. The statements that must be true are:

- If the temperature is less than the stated temperature, then the compound is not boiling. ($\neg T\to\neg B$)
- The compound will boil only if its temperature is at least the stated temperature. ($B\to T$)
- A necessary condition for the compound to boil is that its temperature be at least the stated temperature. ($B\to T$)

The other three are converses or inverses and need not be true. With water and $100^\circ\mathrm{C}$, (b), (c), and (e) must be true.

###### 47.
[[2_2_textbook_exercises#Question 2.2.47|Question]]

#### Both $p \to q \equiv \sim p \lor q$ and $p \to q \equiv \sim q \to \sim p$ rewrite $p \to (q \lor r)$ as $\sim p \lor q \lor r$.

###### 48.
[[2_2_textbook_exercises#Question 2.2.48|Question]]

#### The same two laws rewrite $\sim r \to \sim p$ as $p \to r$, and then as $\sim p \lor r$. (2.2.48)

###### 49.
[[2_2_textbook_exercises#Question 2.2.49|Question]]

#### $p \land \sim q \to r$ rewrites as $\sim(p \land \sim q) \lor r$, then as $\sim p \lor q \lor r$. (2.2.49)

###### 50.
[[2_2_textbook_exercises#Question 2.2.50|Question]]

#### $(p \lor q) \to r$ rewrites as $\sim(p \lor q) \lor r \equiv (\sim p \land \sim q) \lor r$. (2.2.50)

###### 51.
[[2_2_textbook_exercises#Question 2.2.51|Question]]

#### Yes. $\sim$ and $\land$ are enough, because $p \lor q \equiv \sim(\sim p \land \sim q)$ and $p \to q \equiv \sim(p \land \sim q)$.
