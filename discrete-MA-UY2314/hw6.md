### Section 4.5 #38
> **Question:** Prove that the square of any integer has one of the forms $5k$, $5k+1$, or $5k+4$ for some integer $k$.

suppose $m$ is any integer
by the division algorithm, when $m$ is divided by $5$, there are integers $q$ and $r$ such that
$m=5q+r$
and
$0\le r<5$
therefore $r=0,1,2,3,$ or $4$
these five values include every possible remainder when an integer is divided by $5$

squaring each possible form gives the piecewise function
$$
m^2=(5q+r)^2=
\begin{cases}
(5q)^2=25q^2=5(5q^2) & r=0,\\
(5q+1)^2=25q^2+10q+1=5(5q^2+2q)+1 & r=1,\\
(5q+2)^2=25q^2+20q+4=5(5q^2+4q)+4 & r=2,\\
(5q+3)^2=25q^2+30q+9=5(5q^2+6q+1)+4 & r=3,\\
(5q+4)^2=25q^2+40q+16=5(5q^2+8q+3)+1 & r=4.
\end{cases}
$$

since $q$ is an integer, each expression in parentheses is an integer
- when $r=0$, $m^2$ has the form $5k$
- when $r=1$ or $r=4$, $m^2$ has the form $5k+1$
- when $r=2$ or $r=3$, $m^2$ has the form $5k+4$

therefore, in every possible case, $m^2$ has the form $5k$, $5k+1$, or $5k+4$ for some integer $k$

### Section 4.5 #42
> **Question:** Prove that if $r$ and $c$ are real numbers, then $-c\le r\le c$ if and only if $|r|\le c$.

suppose $r$ and $c$ are real numbers
we prove both directions

first suppose
$-c\le r\le c$
there are two cases

- if $r\ge0$, then $|r|=r$
  since $r\le c$, it follows that $|r|\le c$

- if $r<0$, then $|r|=-r$
  from $-c\le r$, multiplying both sides by $-1$ reverses the inequality:
  $c\ge-r$
  thus $-r\le c$, so $|r|\le c$

therefore $-c\le r\le c$ implies $|r|\le c$

now suppose
$|r|\le c$
for every real number $r$,
$-|r|\le r\le|r|$
multiplying $|r|\le c$ by $-1$ reverses the inequality, so
$-c\le-|r|$
combining the inequalities gives
$-c\le-|r|\le r\le|r|\le c$
hence
$-c\le r\le c$

therefore $|r|\le c$ implies $-c\le r\le c$
since both directions hold,
$-c\le r\le c$ if and only if $|r|\le c$

### Section 4.5 #47
> **Question:** Suppose $m$, $n$, and $d$ are integers and $d>0$. Prove that if $d\mid(m-n)$, then $m\bmod d=n\bmod d$.

suppose $m$, $n$, and $d$ are integers, $d>0$, and
$d\mid(m-n)$
by the definition of divisibility, there is an integer $k$ such that
$m-n=dk$
adding $n$ to both sides gives
$m=n+dk$

by the division algorithm, dividing $n$ by $d$ gives unique integers $q$ and $r$ such that
$n=dq+r$
and
$0\le r<d$
therefore
$n\bmod d=r$

substituting $n=dq+r$ into $m=n+dk$ gives
$m=(dq+r)+dk$
combining the multiples of $d$ gives
$m=d(q+k)+r$

since $q$ and $k$ are integers, $q+k$ is an integer
also, $0\le r<d$
therefore $m=d(q+k)+r$ is the division-algorithm form of $m$
by uniqueness of the quotient and remainder, the remainder when $m$ is divided by $d$ is also $r$
thus
$m\bmod d=r$

therefore
$m\bmod d=r=n\bmod d$

### Section 4.6 #13
> **Question:** Suppose $n$ is an even integer. Prove that $\left\lfloor\frac n2\right\rfloor=\frac n2$.

suppose $n$ is an even integer
by the definition of even, there is an integer $k$ such that
$n=2k$
dividing both sides by $2$ gives
$\frac n2=k$

since $k$ is an integer,
$k\le k<k+1$
by the definition of floor,
$\lfloor k\rfloor=k$
therefore
$\left\lfloor\frac n2\right\rfloor=\lfloor k\rfloor=k=\frac n2$

### Section 4.6 #14
> **Question:** Is the following statement true or false? For all real numbers $x$ and $y$, $\lfloor x-y\rfloor=\lfloor x\rfloor-\lfloor y\rfloor$.

false
it is enough to find one counterexample
let
$x=2\quad\text{and}\quad y=1.9$
then
$x-y=2-1.9=0.1$
so
$\lfloor x-y\rfloor=\lfloor0.1\rfloor=0$

also,
$\lfloor x\rfloor=\lfloor2\rfloor=2$
and
$\lfloor y\rfloor=\lfloor1.9\rfloor=1$
therefore
$\lfloor x\rfloor-\lfloor y\rfloor=2-1=1$

since $0\ne1$,
$\lfloor x-y\rfloor\ne\lfloor x\rfloor-\lfloor y\rfloor$
therefore the statement is false

### Section 4.6 #15
> **Question:** Prove that for every real number $x$, $\lfloor x-1\rfloor=\lfloor x\rfloor-1$.

suppose $x$ is any real number
let
$n=\lfloor x\rfloor$
then $n$ is an integer and, by the definition of floor,
$n\le x<n+1$
subtracting $1$ from all three parts gives
$n-1\le x-1<n$
since
$n=(n-1)+1$
we have
$n-1\le x-1<(n-1)+1$

because $n-1$ is an integer, the definition of floor gives
$\lfloor x-1\rfloor=n-1$
since $n=\lfloor x\rfloor$,
$\lfloor x-1\rfloor=\lfloor x\rfloor-1$

### Section 4.6 #18
> **Question:** Is the following statement true or false? For all real numbers $x$ and $y$, $\lceil x+y\rceil=\lceil x\rceil+\lceil y\rceil$.

false
it is enough to find one counterexample
let
$x=0.2\quad\text{and}\quad y=0.3$
then
$x+y=0.2+0.3=0.5$
so
$\lceil x+y\rceil=\lceil0.5\rceil=1$

also,
$\lceil x\rceil=\lceil0.2\rceil=1$
and
$\lceil y\rceil=\lceil0.3\rceil=1$
therefore
$\lceil x\rceil+\lceil y\rceil=1+1=2$

since $1\ne2$,
$\lceil x+y\rceil\ne\lceil x\rceil+\lceil y\rceil$
therefore the statement is false

### Section 4.6 #23
> **Question:** Prove that if $x$ is a real number that is not an integer, then $\lfloor x\rfloor+\lfloor-x\rfloor=-1$.

suppose $x$ is a real number that is not an integer
let
$n=\lfloor x\rfloor$
then $n$ is an integer and
$n\le x<n+1$
because $x$ is not an integer, $x\ne n$
therefore the left inequality is strict:
$n<x<n+1$

multiplying all three parts by $-1$ reverses the inequalities:
$-n>-x>-n-1$
writing them in increasing order gives
$-n-1<-x<-n$
since
$-n=(-n-1)+1$
we have
$-n-1\le-x<(-n-1)+1$

because $-n-1$ is an integer, the definition of floor gives
$\lfloor-x\rfloor=-n-1$
also, $\lfloor x\rfloor=n$
therefore
$\lfloor x\rfloor+\lfloor-x\rfloor=n+(-n-1)=-1$
