---
id: discrete-2-1-textbook-answers
aliases: []
tags:
  - discrete-mathematics
  - textbook-exercises
---
# Answers — Textbook Exercises, Section 2.1

Each response refers to [[2_1_textbook_exercises|the exercise note]]. Several formulas, symbols, names, and numbers were removed by the source extraction. Those items are marked rather than guessed.

###### 1. Argument form
[[2_1_textbook_exercises#Question 2.1.1|Question]]

#### Let $p$ mean “all integers are rational” and let $q$ mean “the stated number is rational.” Part (a) has the form

$$p\to q,\quad p,\quad \therefore q,$$

which is **modus ponens**. Part (b) uses the same form: $p$ means “all algebraic expressions can be written in prefix notation,” and $q$ means “$(x+y)\cdot z$ can be written in prefix notation.”

###### 2. Argument form
[[2_1_textbook_exercises#Question 2.1.2|Question]]

#### Part (a) has the form

$$p\to q,\quad \neg q,\quad \therefore\neg p,$$

which is **modus tollens**. Here $p$ is “all computer programs contain errors” and $q$ is “this program contains an error.” Part (b) uses the same form with $p$ meaning “all prime numbers are odd” and $q$ meaning “2 is odd.”

###### 3. Argument form
[[2_1_textbook_exercises#Question 2.1.3|Question]]

#### Part (a) has the form (2.1.3)

$$p\lor q,\quad \neg p,\quad \therefore q,$$

which is **disjunctive syllogism**. Part (b has the same form) if $p$ is “my mind is shot” and $q$ is “logic is confusing”:

$$p\lor q,\quad\neg p,\quad\therefore q.$$

Part (b) is: my mind is shot or logic is confusing. My mind is not shot. Therefore, logic is confusing.

###### 4. Argument form
[[2_1_textbook_exercises#Question 2.1.4|Question]]

#### Part (a) has the form (2.1.4)

$$(p\to q)\land(q\to r),\quad\therefore p\to r,$$

or **hypothetical syllogism**. Part (b) uses the same form: if the graph has 4 vertices and 6 edges, then it is complete; if it is complete, then any two vertices are joined by a path; therefore if it has 4 vertices and 6 edges, any two vertices are joined by a path.

###### 5. Statements
[[2_1_textbook_exercises#Question 2.1.5|Question]]

#### (a) **A statement, and true:** 1024 is the smallest four-digit perfect square. (b) **Not a statement**, because “she” has no specified referent.

###### 6. Stocks and interest rates
[[2_1_textbook_exercises#Question 2.1.6|Question]]

#### Let $p$ be “stocks are increasing” and $q$ be “interest rates are steady.” Then

$$p\land q,\qquad \neg p\land\neg q.$$

###### 7. Juan
[[2_1_textbook_exercises#Question 2.1.7|Question]]

#### If $p$ means “Juan is a math major” and $q$ means “Juan is a computer science major,” the sentence is

$$p\land\neg q.$$

The indicated letter definitions are missing in the source; this uses the natural assignment above.

###### 8. John
[[2_1_textbook_exercises#Question 2.1.8|Question]]

#### Let $p,q,r$ mean that John is healthy, wealthy, and wise, respectively. In order, the five sentences are

$$p\land q\land\neg r,$$
$$\neg q\land p\land r,$$
$$\neg p\land\neg q\land\neg r,$$
$$p\land\neg q\land\neg r,$$
$$q\land\neg(p\land r).$$

###### 9. DATAENDFLAG, ERROR, and SUM
[[2_1_textbook_exercises#Question 2.1.9|Question]]

#### Let $p,q,r$ have the meanings specified in the question. In order, the sentences are

$$p\land q\land r,$$
$$p\land\neg q,$$
$$p\land(\neg q\lor\neg r),$$
$$\neg p\land q\land\neg r,$$
$$\neg p\lor(q\land r).$$

The numeric constants in the English sentences were lost, but the symbolic forms are unaffected.

###### 10. Meaning of “or”
[[2_1_textbook_exercises#Question 2.1.10|Question]]

#### The “or” is **inclusive**. Winning two consecutive games, winning three total games, or both is enough to win the playoffs.

###### 11. Truth tables for 12–15
[[2_1_textbook_exercises#Question 2.1.11|Question]]

#### $\sim p \lor q$ is false only when $p$ is true and $q$ is false. $p \land \sim q$ is true only in that row. $(p \lor q) \land \sim r$ is true when at least one of $p$ and $q$ is true and $r$ is false. $\sim(p \land q)$ is false only when $p$ and $q$ are both true.

###### 12. Truth table
[[2_1_textbook_exercises#Question 2.1.12|Question]]

#### The table for $\sim p \lor q$ is F only in the row $p$ true, $q$ false.

###### 13. Truth table
[[2_1_textbook_exercises#Question 2.1.13|Question]]

#### The table for $p \land \sim q$ is T only in the row $p$ true, $q$ false. (2.1.13)

###### 14. Truth table
[[2_1_textbook_exercises#Question 2.1.14|Question]]

#### The table for $(p \lor q) \land \sim r$ has 8 rows. It is T when $r$ is false and at least one of $p,q$ is true. (2.1.14)

###### 15. Truth table
[[2_1_textbook_exercises#Question 2.1.15|Question]]

#### $\sim(p \land q)$ has the same table as $\sim p \lor \sim q$: F only when both $p$ and $q$ are true. (2.1.15)

###### 16. Logical equivalence
[[2_1_textbook_exercises#Question 2.1.16|Question]]

#### **Equivalent.** Commutative law. The forms are $p \land q$ and $q \land p$.

###### 17. Logical equivalence
[[2_1_textbook_exercises#Question 2.1.17|Question]]

#### **Equivalent.** Associative law. The forms are $p \lor (q \lor r)$ and $(p \lor q) \lor r$. (2.1.17)

###### 18. Logical equivalence
[[2_1_textbook_exercises#Question 2.1.18|Question]]

#### **Equivalent.** Distributive law. The forms are $p \land (q \lor r)$ and $(p \land q) \lor (p \land r)$. (2.1.18)

###### 19. Logical equivalence
[[2_1_textbook_exercises#Question 2.1.19|Question]]

#### **Equivalent.** De Morgan. The forms are $\sim(p \land q)$ and $\sim p \lor \sim q$. (2.1.19)

###### 20. Logical equivalence
[[2_1_textbook_exercises#Question 2.1.20|Question]]

#### **Equivalent.** De Morgan. The forms are $\sim(p \lor q)$ and $\sim p \land \sim q$. (2.1.20)

###### 21. Logical equivalence
[[2_1_textbook_exercises#Question 2.1.21|Question]]

#### **Equivalent.** By the conditional-as-or law. The forms are $p \to q$ and $\sim p \lor q$. (2.1.21)

###### 22. Logical equivalence
[[2_1_textbook_exercises#Question 2.1.22|Question]]

#### **Not equivalent.** When $p$ is true and $q$ is false, the first is false and the second is true. The forms are $p \to q$ and $q \to p$. (2.1.22)

###### 23. Logical equivalence
[[2_1_textbook_exercises#Question 2.1.23|Question]]

#### **Equivalent.** Idempotent law. The forms are $p \land p$ and $p$. (2.1.23)

###### 24. Logical equivalence
[[2_1_textbook_exercises#Question 2.1.24|Question]]

#### **Equivalent.** Absorption law. The forms are $p \lor (p \land q)$ and $p$. (2.1.24)

###### 25. Negation
[[2_1_textbook_exercises#Question 2.1.25|Question]]

#### The negation is: **Hal is not a math major or Hal’s sister is not a computer science major.**

###### 26. Negation
[[2_1_textbook_exercises#Question 2.1.26|Question]]

#### The negation is: **Sam is not an orange belt or Kate is not a red belt.**

###### 27. Negation
[[2_1_textbook_exercises#Question 2.1.27|Question]]

#### The negation is: **The connector is not loose and the machine is plugged in.**

###### 28. Negation
[[2_1_textbook_exercises#Question 2.1.28|Question]]

#### The negation is: **The train is not late and my watch is not fast.**

###### 29. Negation
[[2_1_textbook_exercises#Question 2.1.29|Question]]

#### The negation is: **This computer program has no logical error in its first ten lines and it is not being run with an incomplete data set.**

###### 30. Negation
[[2_1_textbook_exercises#Question 2.1.30|Question]]

#### The negation is: **The dollar is not at an all-time high or the stock market is not at a record low.**

###### 31. Strings
[[2_1_textbook_exercises#Question 2.1.31|Question]]

#### (a) $\{01, 02, 11, 12\}$.

The first character is 0 or 1, and the second character is 1 or 2.

#### (b) $\{21, 22\}$.

The first character is 2, and the second character is 1 or 2.

#### (c) $\{10, 11, 20, 21\}$.

The first character is 1 or 2, and the second character is 0 or 1.

###### 32. Negation over the reals
[[2_1_textbook_exercises#Question 2.1.32|Question]]

#### The negation is $2 \le x$ and $x \le 5$.

###### 33. Negation over the reals
[[2_1_textbook_exercises#Question 2.1.33|Question]]

#### The negation is $x > -1$ and $x < 4$. (2.1.33)

###### 34. Negation over the reals
[[2_1_textbook_exercises#Question 2.1.34|Question]]

#### The negation is $x \le -2$ or $x \ge 2$. (2.1.34)

###### 35. Negation over the reals
[[2_1_textbook_exercises#Question 2.1.35|Question]]

#### The negation is $x \le 0$ or $x \ge 3$. (2.1.35)

###### 36. Negation over the reals
[[2_1_textbook_exercises#Question 2.1.36|Question]]

#### The negation is $x > -3$ and $x < 3$. (2.1.36)

###### 37. Negation over the reals
[[2_1_textbook_exercises#Question 2.1.37|Question]]

#### The negation is $x = 0$ or $x = 1$. (2.1.37)

###### 38. Program-variable negation
[[2_1_textbook_exercises#Question 2.1.38|Question]]

#### Negation: `num_orders` $\le 100$ or `num_instock` $> 50$.

###### 39. Program-variable negation
[[2_1_textbook_exercises#Question 2.1.39|Question]]

#### Negation: `num_orders` $>$ `num_instock` and `num_instock` $\neq 0$. (2.1.39)

###### 40. Tautology or contradiction
[[2_1_textbook_exercises#Question 2.1.40|Question]]

#### **Tautology.** $p \lor \sim p$ is true in every row.

###### 41. Tautology or contradiction
[[2_1_textbook_exercises#Question 2.1.41|Question]]

#### **Contradiction.** $p \land \sim p$ is false in every row. (2.1.41)

###### 42. Tautology or contradiction
[[2_1_textbook_exercises#Question 2.1.42|Question]]

#### **Tautology.** $(p \to q) \lor (q \to p)$ is true in every row. (2.1.42)

###### 43. Tautology or contradiction
[[2_1_textbook_exercises#Question 2.1.43|Question]]

#### **Contradiction.** $(p \land q) \land \sim p$ simplifies to a contradiction. (2.1.43)

###### 44. Inequalities
[[2_1_textbook_exercises#Question 2.1.44|Question]]

#### The solution set is $-1 < x \le 4$.

###### 45. Bob and Ann
[[2_1_textbook_exercises#Question 2.1.45|Question]]

#### Let $B$ mean “Bob is both a math and computer science major,” $M$ mean “Ann is a math major,” and $C$ mean “Ann is a computer science major.” Then (a) is

$$B\land M\land\neg(M\land C),$$

and (b) is

$$\neg(B\land M\land C)\land M\land B.$$

Since both contain $B\land M$, each reduces to $B\land M\land\neg C$. Thus they are **logically equivalent**.

###### 46. Exclusive or
[[2_1_textbook_exercises#Question 2.1.46|Question]]

#### (a) $p \oplus p$ is a contradiction (always false), and $(p \oplus p) \oplus p \equiv p$.

$p \oplus p$ is true only when the two values differ, so it is always false. Exclusive-or with a contradiction then returns $p$.

#### (b) **Yes.** Exclusive or is associative.

Both $(p \oplus q) \oplus r$ and $p \oplus (q \oplus r)$ are true exactly when an odd number of $p$, $q$, and $r$ are true.

#### (c) **Yes.** Both sides equal $p \oplus q$ when $r$ is true, and both are false when $r$ is false.

###### 47. Double positive
[[2_1_textbook_exercises#Question 2.1.47|Question]]

#### A common sarcastic double positive is “Yeah, right.” Its literal positives convey a negative response. “Sure, sure” can be used similarly, depending on tone.

###### 48. Reasons in a derived equivalence
[[2_1_textbook_exercises#Question 2.1.48|Question]]

#### De Morgan, then commutative: $\sim(p \lor q) \equiv \sim p \land \sim q \equiv \sim q \land \sim p$.

###### 49. Reasons in a derived equivalence
[[2_1_textbook_exercises#Question 2.1.49|Question]]

#### Conditional law, commutative, conditional law again: $p \to q \equiv \sim p \lor q \equiv q \lor \sim p \equiv \sim q \to \sim p$. (2.1.49)

###### 50. Verification by Theorem 2.1.1
[[2_1_textbook_exercises#Question 2.1.50|Question]]

#### $p \land t \equiv p$ by the identity law.

###### 51. Verification by Theorem 2.1.1
[[2_1_textbook_exercises#Question 2.1.51|Question]]

#### $p \lor c \equiv p$ by the identity law. (2.1.51)

###### 52. Verification by Theorem 2.1.1
[[2_1_textbook_exercises#Question 2.1.52|Question]]

#### $\sim(\sim p) \equiv p$ by double negation. (2.1.52)

###### 53. Verification by Theorem 2.1.1
[[2_1_textbook_exercises#Question 2.1.53|Question]]

#### $p \lor (p \land q) \equiv p$ by absorption. (2.1.53)

###### 54. Verification by Theorem 2.1.1
[[2_1_textbook_exercises#Question 2.1.54|Question]]

#### $(p \land q) \lor (p \land \sim q) \equiv p \land (q \lor \sim q) \equiv p \land t \equiv p$. (2.1.54)
