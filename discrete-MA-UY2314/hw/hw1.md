---
id: hw1
aliases: []
tags: []
---
# Homework 1

### 1. Logical Equivalences with Truth Tables

>[!question]
> Show the logical equivalences using truth tables and say a few words explaining why your truth table shows $\equiv$.

#### (a) $\sim(p \lor q) \equiv \sim p \wedge \sim q$

| $p$ | $q$ | $\sim p$ | $\sim q$ | $p \lor q$ | $\sim(p \lor q)$ | $\sim p \wedge \sim q$ |
| --- | --- | -------- | -------- | ---------- | ---------------- | ---------------------- |
| T   | T   | F        | F        | T          | F                | F                      |
| T   | F   | F        | T        | T          | F                | F                      |
| F   | T   | T        | F        | T          | F                | F                      |
| F   | F   | T        | T        | F          | T                | T                      |

 $\sim(p \lor q)$ and $\sim p \wedge \sim q$ have same truth values $\therefore$ are the same

#### (b) $p \lor (q \wedge r) \equiv (p \lor q) \wedge (p \lor r)$

| $p$ | $q$ | $r$ | $q \wedge r$ | $p \lor (q \wedge r)$ | $p \lor q$ | $p \lor r$ | $(p \lor q) \wedge (p \lor r)$ |
| --- | --- | --- | ------------ | --------------------- | ---------- | ---------- | ------------------------------ |
| T   | T   | T   | T            | T                     | T          | T          | T                              |
| T   | T   | F   | F            | T                     | T          | T          | T                              |
| T   | F   | T   | F            | T                     | T          | T          | T                              |
| T   | F   | F   | F            | T                     | T          | T          | T                              |
| F   | T   | T   | T            | T                     | T          | T          | T                              |
| F   | T   | F   | F            | F                     | T          | F          | F                              |
| F   | F   | T   | F            | F                     | F          | T          | F                              |
| F   | F   | F   | F            | F                     | F          | F          | F                              |

$p \lor (q \wedge r)$ and $(p \lor q) \wedge (p \lor r)$ also have same truth values $\therefore$ are equivalent

### 2. Logical Equivalence Proof

>[!question]
> Prove that $(p \lor q) \to r \equiv (p \to r) \wedge (q \to r)$ using Theorem $*$ and Theorem 2.1.1. Annotate your proof. For reference, see example 2.1.14.

1. $p \lor  q \to r$
2. $\sim (p \lor q) \lor r \text{ by theorem *}$
3. $r \lor \sim (p \lor q) \text{ by commutative law}$
4. $\sim (p \lor q) \equiv \sim p \land  \sim q \text{ by demorgans law}$
5. $r \lor \sim (p \lor q) \equiv r\lor (\sim p \land \sim q) \text{ by (4)}$
6. $(\sim p \land \sim q) \lor r \text{ by commutative law}$
7. $(\sim p \lor r) \land (\sim q \lor  r) \text{ by distributive law }$
8. $(p \to r) \land (q\to r) \text{ by theorem * }$ 
### 3. Comparing $p \to q$ and $q \to p$

>[!question]
> Find all values of $p$ and $q$ for which $p \to q$ is not equal to $q \to p$. For which values of $p, q$ are the statement forms equal?

| $p$ | $q$ | $p\to q$ | $q\to p$ |           |
| --- | --- | -------- | -------- | --------- |
| T   | T   | T        | T        | equal     |
| T   | F   | F        | T        | not equal |
| F   | T   | T        | F        | not equal |
| F   | F   | T        | T        | equal     |

### 4. Tautology Proof

>[!question]
> Show that $[(p \to q) \wedge (p \to \sim q)] \to \sim p$ is a tautology using Theorem $*$ and Theorem 2.1.1. Annotate your proof. For reference, see example 2.1.14.

1. $[(p \to q) \land (p \to \sim q)] \to \sim p$
2. $[(\sim p \lor q) \land (\sim p \lor \sim q)] \to \sim p \text{ by theorem * }$
3. $[\sim p \lor (q \land \sim q)] \to \sim p \text{ by distributive law }$
4. $[\sim p \lor \bot] \to \sim p \text{ by negation law }$
5. $\sim p \to \sim p \text{ by identity law }$
6. $\sim(\sim p) \lor \sim p \text{ by theorem * }$
7. $p \lor \sim p \text{ by double negation law }$
8. $\top \text{ by negation law }$

### 5. Section 2.1 #31

![[Pasted image 20260917165957.png|800]]
###### (a) 
$\{0,1\}, \{0,2\}, \{1,1\}, \{1,2\}$
###### (b) 
$\{2,1\}, \{2,2\}$
###### (c) 
$\{1,0\}, \{1,1\}, \{2,0\}, \{2,1\}$

### 6. Section 2.1 #46
![[Pasted image 20260917170113.png|800]]
###### (a)
$p \oplus p \equiv \bot$
$(p \oplus p) \oplus p \equiv \bot \oplus p \equiv p$
### 7. Section 2.2 #22 and #23
![[Pasted image 20260917195056.png|800]]

con: converse  
in: inverse  
cont: contrapositive
#### #22 (b) and #23 (b)

$p$: today is New Year’s Eve  
$q$: tomorrow is January

cont: $\sim q \to \sim p$

con: $q \to p$  
in: $\sim p \to \sim q$

#### #22 (c) and #23 (c)

$p$: the decimal expansion of $r$ is terminating  
$q$: $r$ is rational

cont: $\sim q \to \sim p$

con: $q \to p$  
in: $\sim p \to \sim q$

#### #22 (e) and #23 (e)

$p$: $x \geq 0$  
$q$: $x > 0 \lor x = 0$

cont: $\sim q \to \sim p$

con: $q \to p$  
in: $\sim p \to \sim q$

#### #22 (g) and #23 (g)

$p$: $6 \mid n$  
$q$: $2 \mid n \land 3 \mid n$

cont: $\sim q \to \sim p$

con: $q \to p$  
in: $\sim p \to \sim q$
### 8. Section 2.2 #14, #38, and #43

#### #14
##### (a)
###### eq1
1. $p \to q \lor r$
2. $\sim p \lor (q \lor r) \text{ by theorem * }$
###### eq2
1. $p \land \sim q \to r$
2. $\sim (p \land \sim q) \lor r \text{ by theorem * }$
3. $(\sim p \lor \sim(\sim q)) \lor r \text{ by demorgans law }$
4. $(\sim p \lor q) \lor r \text{ by double negation law }$
5. $\sim p \lor (q \lor r) \text{ by associative law }$
###### eq3
1. $p \land \sim r \to q$
2. $\sim (p \land \sim r) \lor q \text{ by theorem * }$
3. $(\sim p \lor \sim (\sim r)) \lor q \text{ by demorgans law }$
4. $(\sim p \lor r) \lor q \text{ by double negation law }$
5. $\sim p \lor (r \lor q) \text{ by associative law }$
6. $\sim p \lor (q \lor r) \text{ by commutative law }$ 
since all equations are equal to $\sim p \lor (q \lor r)$ they are all logically equivalent
##### (b)
$p = n \text{ is prime }$
$q = n \text{ is odd }$
$r = n \text{ is } 2$
$\therefore p \land \sim q \to r \text{ and } p \land \sim r \to q$

#### #38
ann goes: $a$
it rains: $r$
ann will go unless it rains:
$\sim r \to a$

#### #43
jim passes: $j$
hw done: $h$
$j \to h$
### 9. Section 2.3 #9, #12, and #23
pre is premise and con is conclusion
#### #9

| $p$ | $q$ | $r$ | pre 1: $(p \wedge q) \to \sim r$ | pre 2: $p \lor \sim q$ | pre 3: $\sim q \to p$ | con: $\sim r$ |
| --- | --- | --- | -------------------------------- | ---------------------- | --------------------- | ------------- |
| T   | T   | T   | F                                | T                      | T                     | F             |
| T   | T   | F   | T                                | T                      | T                     | T             |
| T   | F   | T   | T                                | T                      | T                     | F             |
| T   | F   | F   | T                                | T                      | T                     | T             |
| F   | T   | T   | T                                | F                      | T                     | F             |
| F   | T   | F   | T                                | F                      | T                     | T             |
| F   | F   | T   | T                                | T                      | F                     | F             |
| F   | F   | F   | T                                | T                      | F                     | T             |

invalid because row 3 has all premise columns true and the conclusion column false

#### #12 (b)

| $p$ | $q$ | $\sim p$ | $\sim q$ | $p \to q$ | critical rows |
| --- | --- | -------- | -------- | --------- | ------------- |
| T   | T   | F        | F        | T         |               |
| T   | F   | F        | T        | F         |               |
| F   | T   | **T**    | **F**    | T         | critical row  |
| F   | F   | **T**    | **T**    | T         | critical row  |

invalid because a critical row has all premise columns true and the conclusion column false

#### #23
$p$: oleg is a math major  
$q$: oleg is an economics major  
$r$: oleg is required to take math 362

| $p$ | $q$ | $r$ | $p \lor q$ | $p \to r$ | $q \lor \sim r$ | Critical rows |
| --- | --- | --- | ---------- | --------- | --------------- | ------------- |
| T   | T   | T   | T          | **T**     | **T**           | critical row  |
| T   | T   | F   | T          | F         | T               |               |
| T   | F   | T   | T          | **T**     | **F**           | critical row  |
| T   | F   | F   | T          | F         | T               |               |
| F   | T   | T   | T          | T         | T               | critical row  |
| F   | T   | F   | T          | T         | T               | critical row  |
| F   | F   | T   | F          | T         | F               |               |
| F   | F   | F   | F          | T         | T               |               |

invalid because a critical row has all premis columns true and the conclusion column false
### 10. Section 2.3 #29 and #38

#### #29
$p$ is at least one of the two numbers is divisible by $6$  
$q$ is the product of the two numbers is divisible by $6$

$p \to q$
$\sim  p$
$\therefore \sim  q$

inverse error
#### #38 (d)

let $k$ be the number of knights

suppose $k=0$  
$\therefore U$ and $W$ say true statements  
$\therefore U$ and $W$ are knights `by definition of knight`  
$\therefore k=2$, contradiction

suppose $k=1$  
$\therefore W$ and $Z$ say true statements  
$\therefore W$ and $Z$ are knights `by definition of knight`  
$\therefore k=2$, contradiction

suppose $k=2$  
$\therefore W$ and $Y$ say true statements  
$\therefore W$ and $Y$ are knights `by definition of knight`  
$\therefore U$, $V$, $X$, and $Z$ are knaves `by definition of knave`

### 11. Section 2.3 #42 and #44

#### #42

###### premises
(a) $p \vee q$  
(b) $q \to r$  
(c) $p \land s \to t$  
(d) $\sim r$  
(e) $\sim q \to u \land s$

###### argument
1. $\sim q \text{ by (b) and (d), modus tollens }$
2. $u \land s \text{ by (e) and step 1, modus ponens }$
3. $s \text{ by step 2, specialization }$
4. $p \text{ by (a) and step 1, elimination }$
5. $p \land s \text{ by step 4 and 3, conjunction }$
6. $t \text{ by (c) and step 5, modus ponens }$

#### #44

###### premises
(a) $p \to q$  
(b) $r \vee s$  
(c) $\sim s \to \sim t$  
(d) $\sim q \vee s$  
(e) $\sim s$  
(f) $\sim p \land r \to u$  
(g) $w \vee t$

###### argument
1. $\sim q \text{ by (d) and (e), elimination }$
2. $\sim p \text{ by (a) and step 1, modus tollens }$
3. $r \text{ by (b) and (e), elimination }$
4. $\sim p \land r \text{ by step 2 and 3, conjunction }$
5. $u \text{ by (f) and step 4, modus ponens }$
6. $\sim t \text{ by (c) and (e), modus ponens }$
7. $w \text{ by (g) and step 6, elimination }$
8. $u \land w \text{ by step 5 and 7, conjunction }$
