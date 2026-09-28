---
id: discrete-2-3-textbook-answers
aliases: []
tags:
  - discrete-mathematics
  - textbook-exercises
---
# Answers — Textbook Exercises 2.3

All links return to [[2_3_textbook_exercises|the Section 2.3 question note]]. Several prompts lost symbols or whole argument forms during extraction. Those are marked rather than guessed.

###### 1. Rational-number argument
[[2_3_textbook_exercises#Question 2.3.1|Question]]

#### **Modus tollens.** $\sqrt{2}$ is not rational.

###### 2. Number less than every positive real number
[[2_3_textbook_exercises#Question 2.3.2|Question]]

#### **Modus ponens.** The number equals zero.

###### 3. Logic and monkey’s uncle
[[2_3_textbook_exercises#Question 2.3.3|Question]]

#### Let $p$ be “logic is easy” and $q$ be “I am a monkey’s uncle.” Since $p\to q$ and $\neg q$, modus tollens gives

$$\therefore\ \neg p.$$

Thus, **logic is not easy**.

###### 4. Graph coloring
[[2_3_textbook_exercises#Question 2.3.4|Question]]

#### Let $p$ be “the graph can be colored with three colors” and $q$ be “it can be colored with four colors.” Since $p\to q$ and $\neg q$,

$$\therefore\ \neg p$$

by modus tollens. The graph **cannot be colored with three colors**.

###### 5. Address
[[2_3_textbook_exercises#Question 2.3.5|Question]]

#### They did not telephone. **Modus tollens** then gives: they were sure of the address.

###### 6. Argument form
[[2_3_textbook_exercises#Question 2.3.6|Question]]

#### **Valid.** Modus ponens: every row with both premises true has $q$ true.

###### 7. Argument form
[[2_3_textbook_exercises#Question 2.3.7|Question]]

#### **Valid.** Modus tollens. (2.3.7)

###### 8. Argument form
[[2_3_textbook_exercises#Question 2.3.8|Question]]

#### **Valid.** Generalization. (2.3.8)

###### 9. Argument form
[[2_3_textbook_exercises#Question 2.3.9|Question]]

#### **Invalid.** In the row $p=T$, $q=F$, $r=T$, every premise is true and $\sim r$ is false.

###### 10. Argument form
[[2_3_textbook_exercises#Question 2.3.10|Question]]

#### **Valid.** Elimination. (2.3.10)

###### 11. Argument form
[[2_3_textbook_exercises#Question 2.3.11|Question]]

#### **Valid.** Transitivity. (2.3.11)

###### 12. Argument form
[[2_3_textbook_exercises#Question 2.3.12|Question]]

#### (a) **Invalid: converse error.** The row $p=F$, $q=T$ has both premises true and the conclusion false.

#### (b) **Invalid: inverse error.** The row $p=F$, $q=T$ has both premises true and $\sim q$ false.

###### 13. Modus tollens
[[2_3_textbook_exercises#Question 2.3.13|Question]]

#### **Valid.** Modus tollens has form $p\to q,\ \neg q\ \therefore\ \neg p$. In every truth-table row where both premises are true, $\neg p$ is true.

###### 14. Example 2.3.3(a)
[[2_3_textbook_exercises#Question 2.3.14|Question]]

#### **Valid.** Modus ponens.

###### 15. Example 2.3.3(b)
[[2_3_textbook_exercises#Question 2.3.15|Question]]

#### **Valid.** Modus tollens.

###### 16. Example 2.3.4(a)
[[2_3_textbook_exercises#Question 2.3.16|Question]]

#### **Valid.** Generalization. (2.3.16)

###### 17. Example 2.3.4(b)
[[2_3_textbook_exercises#Question 2.3.17|Question]]

#### **Valid.** Specialization. (2.3.17)

###### 18. Example 2.3.5(a)
[[2_3_textbook_exercises#Question 2.3.18|Question]]

#### **Valid.** Elimination. (2.3.18)

###### 19. Example 2.3.5(b)
[[2_3_textbook_exercises#Question 2.3.19|Question]]

#### **Valid.** Transitivity. (2.3.19)

###### 20. Example 2.3.6
[[2_3_textbook_exercises#Question 2.3.20|Question]]

#### **Valid.** Division into cases. (2.3.20)

###### 21. Example 2.3.7
[[2_3_textbook_exercises#Question 2.3.21|Question]]

#### **Valid.** Proof by contradiction: a form that implies a contradiction is false. (2.3.21)

###### 22. Tom and Hua
[[2_3_textbook_exercises#Question 2.3.22|Question]]

#### Let $p$ mean “Tom is on the first displayed team” and $q$ mean “Hua is on the second displayed team.” The form is

$$\neg p\to q,\qquad \neg q\to p\qquad \therefore\qquad \neg p\lor\neg q.$$

It is **invalid**. For $p=T,q=T$, both premises are true and $\neg p\lor\neg q$ is false. Tom on team A and Hua on team B is a counterexample row.

###### 23. Oleg
[[2_3_textbook_exercises#Question 2.3.23|Question]]

#### Let $p$ = “Oleg is a math major,” $q$ = “Oleg is an economics major,” and $r$ = “Oleg must take Math 362.” The form is

$$p\lor q,\qquad p\to r\qquad \therefore\qquad q\lor\neg r.$$

It is **invalid**. The row $p=T,q=F,r=T$ makes both premises true and the conclusion false.

###### 24. Jules
[[2_3_textbook_exercises#Question 2.3.24|Question]]

#### **Converse error.** The form is $p \to q$, $q \therefore p$. Jules obtained the answer 24, but that does not show the solution was correct.

###### 25. Rational or irrational
[[2_3_textbook_exercises#Question 2.3.25|Question]]

#### Let $p$ be “the number is rational” and $q$ be “the number is irrational.” The form is

$$p\lor q,\qquad\neg p\qquad\therefore\qquad q.$$

This is valid by **disjunctive syllogism**.

###### 26. Movies and exam
[[2_3_textbook_exercises#Question 2.3.26|Question]]

#### Let $p$ = “I go to the movies,” $q$ = “I finish my homework,” and $r$ = “I do well on the exam.” The form is

$$p\to\neg q,\qquad \neg q\to\neg r\qquad\therefore\qquad p\to\neg r.$$

This is valid by **hypothetical syllogism**.

###### 27. Square of a number
[[2_3_textbook_exercises#Question 2.3.27|Question]]

#### If a number is greater than 2, then its square is greater than 4. This number is not greater than 2. Therefore its square is not greater than 4. The form is $p\to q$, $\neg p$, therefore $\neg q$, the **inverse error**. $-3$ is not greater than 2, but $(-3)^2=9>4$, so the conclusion need not follow.

###### 28. Rational and irrational numbers
[[2_3_textbook_exercises#Question 2.3.28|Question]]

#### Let $p$ be “there are as many rational as irrational numbers” and $q$ be “the irrational numbers are infinite.” The form is $p\to q,\ q\ \therefore\ p$. This is the **converse error**.

###### 29. Divisibility
[[2_3_textbook_exercises#Question 2.3.29|Question]]

#### Let $p$ be “at least one factor is divisible by the displayed number” and $q$ be “the product is divisible by it.” The form is $p\to q,\ \neg p\ \therefore\ \neg q$. This is the **inverse error**. The divisor is 6.

###### 30. Computer program
[[2_3_textbook_exercises#Question 2.3.30|Question]]

#### Let $p$ be “the program is correct” and $q$ be “it gives correct output on the teacher’s test data.” The form is $p\to q,\ q\ \therefore\ p$. This is the **converse error**.

###### 31. Sandra
[[2_3_textbook_exercises#Question 2.3.31|Question]]

#### Let $p$ be “Sandra knows Java” and $q$ be “Sandra knows C++.” The form is $p\land q\ \therefore\ q$. This is valid by **simplification**.

###### 32. Stereo
[[2_3_textbook_exercises#Question 2.3.32|Question]]

#### Let $p$ = “I get a Christmas bonus,” $q$ = “I sell my motorcycle,” and $r$ = “I buy a stereo.” The form is

$$p\to r,\qquad q\to r\qquad\therefore\qquad (p\lor q)\to r.$$

This is valid by **proof by cases** (constructive dilemma).

###### 33. Valid argument with a false conclusion
[[2_3_textbook_exercises#Question 2.3.33|Question]]

#### For example: > All cats are reptiles. > Luna is a cat. > Therefore, Luna is a reptile. The form is modus ponens, so it is valid, although its conclusion is false.

###### 34. Invalid argument with a true conclusion
[[2_3_textbook_exercises#Question 2.3.34|Question]]

#### If a number is divisible by 4, then it is even. 8 is even. Therefore 8 is divisible by 4. The conclusion is true, but affirming the consequent is invalid.

###### 35. Valid versus invalid
[[2_3_textbook_exercises#Question 2.3.35|Question]]

#### A form is **valid** when every row that makes all premises true also makes the conclusion true. It is **invalid** when at least one row has all true premises and a false conclusion.

###### 36. Computer-program mistake
[[2_3_textbook_exercises#Question 2.3.36|Question]]

#### Let $U$ = undeclared variable, $S$ = syntax error, $M$ = missing semicolon, and $V$ = misspelled variable name. The premises are

$$U\lor S,\quad S\to(M\lor V),\quad\neg M,\quad\neg V.$$

From $\neg M\land\neg V$, $\neg(M\lor V)$. Modus tollens on $S\to(M\lor V)$ gives $\neg S$. Then $U\lor S$ and $\neg S$ give $U$ by disjunctive syllogism. The mistake is an **undeclared variable**.

###### 37. Pirate’s treasure
[[2_3_textbook_exercises#Question 2.3.37|Question]]

#### The house is next to a lake, so the treasure is not in the kitchen. If the front tree were an elm, the treasure would be in the kitchen; therefore it is not an elm. Since the tree is an elm or the treasure is under the flagpole, the treasure is **buried under the flagpole**.

###### 38. Knights and knaves
[[2_3_textbook_exercises#Question 2.3.38|Question]]

#### (a) $A$ is a knave and $B$ is a knight. (b) $A$ is a knave and $B$ is a knight. (c) There is one knave.

- (a) $A$ is a **knave** and $B$ is a **knight**.
- (b) The sole speaker $A$ is a **knave**, and $B$ is a **knight**.
- (c) Exactly one person is a knave. Either configuration works: $A$ a knave and $B$ a knight, or $A$ a knight and $B$ a knave. In each case the knave's accusation is false and the knight's accusation is true.

(a) and (b) follow because the opening statement cannot be true, so $A$ is a knave and $B$ is a knight. (c) only forces the count: one knave.

###### 39. Six natives
[[2_3_textbook_exercises#Question 2.3.39|Question]]

#### $W$ and $Y$ are knights. $U$, $V$, $X$, and $Z$ are knaves. With exactly two knights, “at most three” and “exactly two” are true, and the other four statements are false.

###### 40. Murder at Hazelton’s house
[[2_3_textbook_exercises#Question 2.3.40|Question]]

#### The cook cannot have been in the kitchen: that would make the butler kill with strychnine, contradicting death by candlestick. Thus the cook was not in the kitchen, so Sara was not in the dining room. The disjunction then puts Lady Hazelton in the dining room. Therefore the **chauffeur** killed Lord Hazelton.

###### 41. Sharky
[[2_3_textbook_exercises#Question 2.3.41|Question]]

#### **Muscles killed Sharky.** If Muscles killed him, Socko’s claim that Lefty did it is false, Fats’s claim that Muscles did not do it is false, and Muscles’s claim is true. Lefty’s stated alibi is false, leaving exactly one truth-teller.

###### 42. Deduction
[[2_3_textbook_exercises#Question 2.3.42|Question]]

#### **Valid.** $\sim q$ by (b) and (d), modus tollens; $u \land s$ by (e); $s$ by specialization; $p$ by (a) and elimination; $p \land s$ by conjunction; $t$ by (c), modus ponens.

###### 43. Deduction
[[2_3_textbook_exercises#Question 2.3.43|Question]]

#### **Valid.** From $p \to q$, $q \to r$, and $\sim r$: $\sim q$ by modus tollens, then $\sim p$ by modus tollens.

###### 44. Deduction
[[2_3_textbook_exercises#Question 2.3.44|Question]]

#### **Valid.** $\sim q$ by (d) and (e); $\sim p$ by (a), modus tollens; $r$ by (b) and (e); $\sim p \land r$ by conjunction; $u$ by (f); $\sim t$ by (c) and (e); $w$ by (g) and elimination; $u \land w$ by conjunction.
