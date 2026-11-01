# Homework 7

### 1
suppose $x\ne0$
$\therefore |x|>0$
choose
$\varepsilon=\frac{|x|}{2}>0$
by the given statement,
$|x|<\frac{|x|}{2}\equiv2|x|<|x|\equiv|x|<0$
this contradicts $|x|>0$
$\therefore x=0$

### Section 4.7 #9
###### (a)
the negation is existential, not universal
correct negation:
$\exists x\notin\mathbb Q,\ \exists y\in\mathbb Q\text{ such that }x-y\in\mathbb Q$

###### (b)
suppose $x$ is irrational and $y$ is rational
suppose $x-y$ is rational
$\therefore x=(x-y)+y$
since the sum of two rational numbers is rational, $x$ is rational
this contradicts that $x$ is irrational
$\therefore x-y\text{ is irrational}$

### Section 4.7 #18
suppose $a,b\in\mathbb Q$, $b\ne0$, and $r\notin\mathbb Q$
suppose $a+br$ is rational
$\therefore a+br=q\text{ for some }q\in\mathbb Q$
$a+br=q\equiv br=q-a\equiv r=\frac{q-a}{b}$
since $q-a$ and $b$ are rational and $b\ne0$, $\frac{q-a}{b}$ is rational
this contradicts that $r$ is irrational
$\therefore a+br\text{ is irrational}$

### Section 4.7 #22
###### (a) contradiction
suppose $r^2$ is irrational but $r$ is rational
we need a contradiction
$r=\frac ab$
for some integers $a$ and $b$ with $b\ne0$
$r^2=\left(\frac ab\right)^2=\frac{a^2}{b^2}$
since $a^2,b^2\in\mathbb Z$ and $b^2\ne0$, $r^2$ is rational
this contradicts that $r^2$ is irrational
$\therefore r\text{ is irrational}$

###### (b) contraposition
suppose $r$ is rational
we need to show $r^2$ is rational
$r=\frac ab$
for some integers $a$ and $b$ with $b\ne0$
$r^2=\frac{a^2}{b^2}\in\mathbb Q$
$\therefore\text{ the original statement is true}$

### Section 4.7 #24
###### (a) contraposition
suppose $\frac1x$ is rational
$\frac1x=\frac ab\equiv x=\frac ba$
for some integers $a$ and $b$ with $a\ne0$ and $b\ne0$
$x\in\mathbb Q$
$\therefore\ \text{if }x\text{ is irrational, then }\frac1x\text{ is irrational}$

###### (b) contradiction
suppose $x$ is irrational but $\frac1x$ is rational
$\frac1x=\frac ab\equiv x=\frac ba$
for some integers $a$ and $b$ with $a\ne0$ and $b\ne0$
$\therefore x\text{ is rational}$
this contradicts that $x$ is irrational
$\therefore \frac1x\text{ is irrational}$

### Section 4.7 #28
###### contradiction
suppose $a\mid b$ and $a\mid c$, but $a\nmid(b+c)$
$\therefore b=ak\quad\text{and}\quad c=am$
for some integers $k$ and $m$
$\therefore b+c=ak+am=a(k+m)$
since $k+m$ is an integer, $a\mid(b+c)$
this contradicts $a\nmid(b+c)$
$\therefore\ \text{if }a\mid b\text{ and }a\mid c\text{, then }a\mid(b+c)$

###### contraposition
the contrapositive is:
$\text{if }a\nmid(b+c)\text{, then }a\nmid b\text{ or }a\nmid c$
suppose $a\nmid(b+c)$
$\text{if }a\nmid b\text{, then the conclusion is true}$
$\text{if }a\mid b\text{, suppose for contradiction that }a\mid c$
$\therefore b=ak\quad\text{and}\quad c=am$
for some integers $k$ and $m$
$b+c=a(k+m)$
$a\mid(b+c)\text{, a contradiction}$
$\therefore a\nmid c$
$a\nmid b\lor a\nmid c$
$\therefore\text{ the original statement is true}$

### Section 4.7 #31
###### (a)
let $n$, $r$, and $s$ be positive integers
the contrapositive is:
$\text{if }r>\sqrt n\text{ and }s>\sqrt n\text{, then }rs>n$
suppose $r>\sqrt n$ and $s>\sqrt n$
multiplying the inequalities gives
$rs>\sqrt n\sqrt n=n$
$\therefore\ \text{if }rs\le n\text{, then }r\le\sqrt n\text{ or }s\le\sqrt n$

###### (b)
suppose $n>1$ is not prime
$\therefore n\text{ is composite}$
$n=rs$
for some integers $r,s>1$
by part (a), at least one of $r$ or $s$ is at most $\sqrt n$
without loss of generality, suppose
$r\le\sqrt n$
since $r>1$, $r$ has a prime divisor $p$
$p\le r\le\sqrt n$
$p\mid r\land r\mid n\quad\therefore\quad p\mid n$
$\therefore\text{ there is a prime }p\le\sqrt n\text{ that divides }n$

###### (c)
the contrapositive of part (b) is:
$\forall n\in\mathbb Z,\ n>1:$
$(\nexists\text{ prime }p\le\sqrt n:p\mid n)\to n\text{ is prime}$

### Section 4.8 #8
false
let $n=4$
$\sqrt n=\sqrt4=2=\frac21$
$\sqrt n\in\mathbb Q$
$\therefore n=4\text{ is a counterexample}$

### 7
false
let
$x=\sqrt2\quad\text{and}\quad y=\sqrt2$
both $x$ and $y$ are irrational, but
$xy=\sqrt2\sqrt2=2$
$2\in\mathbb Q\quad\therefore\quad\text{the conjecture is false}$

### 8
###### (a)
suppose $\sqrt6$ is rational
$\therefore \sqrt6=\frac ab$
for some positive integers $a$ and $b$, where the fraction is in lowest terms
squaring gives
$a^2=6b^2$
$\therefore a^2\text{ is even}$
by Proposition 4.7.4, $a$ is even
let $a=2k$ for some integer $k$
$4k^2=6b^2\equiv2k^2=3b^2$
$2\mid3b^2$
$\text{if }b=1\text{, then }2k^2=3$
the left side is even and the right side is odd, a contradiction
$\therefore b>1\land b^2>1$
since $2\nmid3$, Euclid’s lemma implies $2\mid b^2$
by Proposition 4.7.4, $b$ is even
$\therefore a\text{ and }b\text{ are both divisible by }2$
this contradicts that $\frac ab$ is in lowest terms
$\therefore \sqrt6\text{ is irrational}$

###### (b)
suppose $\sqrt2+\sqrt3$ is rational
$\therefore \sqrt2+\sqrt3=r$
for some $r\in\mathbb Q$
squaring gives
$r^2=(\sqrt2+\sqrt3)^2=5+2\sqrt6\equiv\sqrt6=\frac{r^2-5}{2}$
since $r$ is rational, $\frac{r^2-5}{2}$ is rational
this contradicts part (a)
$\therefore \sqrt2+\sqrt3\text{ is irrational}$

### Section 4.10 #12
$54=48(1)+6$
$48=6(8)+0$
the last nonzero remainder is $6$
$\therefore \gcd(54,48)=6$

### Section 4.10 #15
$10{,}933=832(13)+117$
$832=117(7)+13$
$117=13(9)+0$
the last nonzero remainder is $13$
$\therefore \gcd(10{,}933,832)=13$

### Section 4.10 #22
###### (a)
suppose $a\mid b$
$a\text{ is a divisor of both }a\text{ and }b$
let $c$ be any common divisor of $a$ and $b$
$c\mid a\quad\therefore\quad c\le a$
$a\text{ is the greatest common divisor of }a\text{ and }b$
$\gcd(a,b)=a$

###### (b)
suppose $\gcd(a,b)=a$
by definition, $\gcd(a,b)\mid b$
$a\mid b$
$\therefore a\mid b\equiv\gcd(a,b)=a$

### Section 4.10 #24
suppose
$a=bq+r$
for some integers $a,b,q,$ and $r$ with $b\ne0$
let
$d=\gcd(b,r)$
$\therefore d\mid b\land d\mid r$
$b=dk\quad\text{and}\quad r=dm$
for some integers $k$ and $m$
$\therefore a=bq+r=dkq+dm=d(kq+m)$
since $kq+m$ is an integer, $d\mid a$
$\therefore d\text{ is a common divisor of }a\text{ and }b$
$d\le\gcd(a,b)$
since $d=\gcd(b,r)$,
$\gcd(b,r)\le\gcd(a,b)$

### Section 4.10 #28
###### (a)
$12=2^2\cdot3$
$18=2\cdot3^2$
$\operatorname{lcm}(12,18)=2^2\cdot3^2=36$

###### (b)
$\operatorname{lcm}(2^2\cdot3\cdot5,2^3\cdot3^2)=2^3\cdot3^2\cdot5=360$

###### (c)
$2{,}800=2^4\cdot5^2\cdot7$
$6{,}125=5^3\cdot7^2$
$\operatorname{lcm}(2{,}800,6{,}125)=2^4\cdot5^3\cdot7^2=98{,}000$

### Section 4.10 #29
###### one direction
suppose
$\gcd(a,b)=\operatorname{lcm}(a,b)=d$
by definition of greatest common divisor,
$d\mid a$ and $d\mid b$
since $a,b>0$,
$d\le a$ and $d\le b$
by definition of least common multiple,
$a\mid d$ and $b\mid d$
$a\le d\land b\le d$
$a=d\land b=d$
$\therefore a=b$

###### other direction
suppose $a=b$
$a\text{ divides both }a\text{ and }b$
let $c$ be any common divisor of $a$ and $b$
$c\mid a\quad\therefore\quad c\le a$
$\therefore \gcd(a,b)=a$
also, $a$ is a positive common multiple of $a$ and $b$
let $m$ be any positive common multiple of $a$ and $b$
$a\mid m\quad\therefore\quad a\le m$
$\operatorname{lcm}(a,b)=a$
$\therefore \gcd(a,b)=\operatorname{lcm}(a,b)\equiv a=b$
