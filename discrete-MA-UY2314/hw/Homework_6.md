# Homework 6

### Section 4.5 #38
suppose $m$ is any integer
by the division algorithm, $m=5q+r$ for some integer $q$, where $r=0,1,2,3,$ or $4$

- if $r=0$, then $m^2=(5q)^2=5(5q^2)$
- if $r=1$, then $m^2=(5q+1)^2=5(5q^2+2q)+1$
- if $r=2$, then $m^2=(5q+2)^2=5(5q^2+4q)+4$
- if $r=3$, then $m^2=(5q+3)^2=5(5q^2+6q+1)+4$
- if $r=4$, then $m^2=(5q+4)^2=5(5q^2+8q+3)+1$

since each expression in parentheses is an integer, $m^2$ has the form $5k$, $5k+1$, or $5k+4$

### Section 4.5 #42
suppose $r$ and $c$ are real numbers

if $-c\le r\le c$, then:
- if $r\ge0$, $|r|=r\le c$
- if $r<0$, then $r\ge-c$, so $-r\le c$ and $|r|=-r\le c$

if $|r|\le c$, then $-c\le-|r|\le r\le|r|\le c$
hence $-c\le r\le c$

therefore $-c\le r\le c$ if and only if $|r|\le c$

### Section 4.5 #47
suppose $m$ and $n$ are integers, $d>0$, and $d\mid(m-n)$
then $m-n=dk$ for some integer $k$, so $m=n+dk$

by the division algorithm, $n=dq+r$ for some integers $q$ and $r$, where $0\le r<d$
thus
$m=dq+r+dk=d(q+k)+r$

since $q+k$ is an integer and $0\le r<d$, both $m$ and $n$ have remainder $r$ when divided by $d$
therefore $m\bmod d=n\bmod d$

### Section 4.6 #13
suppose $n$ is an even integer
then $n=2k$ for some integer $k$
thus
$\frac n2=k$

since $k$ is an integer,
$\left\lfloor\frac n2\right\rfloor=\lfloor k\rfloor=k=\frac n2$

### Section 4.6 #14
false
let $x=2$ and $y=1.9$
then
$\lfloor x-y\rfloor=\lfloor0.1\rfloor=0$
but
$\lfloor x\rfloor-\lfloor y\rfloor=2-1=1$
therefore $\lfloor x-y\rfloor\ne\lfloor x\rfloor-\lfloor y\rfloor$

### Section 4.6 #15
suppose $x$ is any real number and let $n=\lfloor x\rfloor$
by definition of floor,
$n\le x<n+1$
subtracting $1$ gives
$n-1\le x-1<n$
therefore
$\lfloor x-1\rfloor=n-1=\lfloor x\rfloor-1$

### Section 4.6 #18
false
let $x=0.2$ and $y=0.3$
then
$\lceil x+y\rceil=\lceil0.5\rceil=1$
but
$\lceil x\rceil+\lceil y\rceil=1+1=2$
therefore $\lceil x+y\rceil\ne\lceil x\rceil+\lceil y\rceil$

### Section 4.6 #23
suppose $x$ is a real number that is not an integer
let $n=\lfloor x\rfloor$
then
$n<x<n+1$

multiplying by $-1$ gives
$-n-1<-x<-n$
hence $\lfloor-x\rfloor=-n-1$

therefore
$\lfloor x\rfloor+\lfloor-x\rfloor=n+(-n-1)=-1$
