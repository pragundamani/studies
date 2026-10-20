### Section 4.4 #28
false
let $a=6$, $b=2$, and $c=3$
then $6\mid(2\cdot3)$, but $6\nmid2$ and $6\nmid3$

### Section 4.4 #29
suppose $a$ and $b$ are integers and $a\mid b$
then $b=ak$ for some integer $k$
hence
$b^2=(ak)^2=a^2k^2$
since $k^2$ is an integer, $a^2\mid b^2$ by definition

### Section 4.4 #30
false
let $a=4$ and $n=6$
then $4\mid6^2$ because $6^2=36=4\cdot9$, and $4\le6$
however, $4\nmid6$

### Section 4.4 #37
###### (a)
$1{,}176=8\cdot147=2^3\cdot3\cdot7^2$
###### (b)
$5{,}733=9\cdot637=3^2\cdot7^2\cdot13$
###### (c)
$3{,}675=3\cdot1{,}225=3\cdot5^2\cdot7^2$
by the unique factorization theorem, each standard factored form is unique except for the order of the factors

### Section 4.4 #45
suppose the decimal representation of a nonnegative integer $n$ ends in $5$
then $n=10q+5$ for some nonnegative integer $q$
hence
$n=10q+5=5(2q+1)$
since $2q+1$ is an integer, $5\mid n$ by definition

### Section 4.4 #48
let the decimal digits of $n$ be $d_k,d_{k-1},\ldots,d_0$
then
$n=\sum_{i=0}^k d_i10^i$
since $10\equiv1\pmod3$, $10^i\equiv1\pmod3$ for each $i$
thus $10^i=3q_i+1$ for some integer $q_i$
hence
$n=\sum_{i=0}^k d_i(3q_i+1)=3\sum_{i=0}^k d_iq_i+\sum_{i=0}^k d_i$
suppose the sum of the digits is divisible by $3$
then $\sum_{i=0}^k d_i=3m$ for some integer $m$
thus
$n=3\left(\sum_{i=0}^k d_iq_i+m\right)$
since the expression in parentheses is an integer, $3\mid n$ by definition

### Section 4.5 #17
suppose $n$ is any integer

if $n$ is even
then $n=2k$ for some integer $k$
thus
$n^2-n+3=(2k)^2-2k+3=2(2k^2-k+1)+1$
since $2k^2-k+1$ is an integer, $n^2-n+3$ is odd

if $n$ is odd
then $n=2k+1$ for some integer $k$
thus
$n^2-n+3=(2k+1)^2-(2k+1)+3=2(2k^2+k+1)+1$
since $2k^2+k+1$ is an integer, $n^2-n+3$ is odd

therefore $n^2-n+3$ is odd for every integer $n$

### Section 4.5 #21
since $b\bmod12=5$, $b=12k+5$ for some integer $k$
then
$8b=8(12k+5)=96k+40=12(8k+3)+4$
since $8k+3$ is an integer and $0\le4<12$, $8b\bmod12=4$

### Section 4.5 #25
suppose $a\bmod7=5$ and $b\bmod7=6$
then $a=7r+5$ and $b=7s+6$ for some integers $r$ and $s$
thus
$ab=(7r+5)(7s+6)=7(7rs+6r+5s+4)+2$
since $7rs+6r+5s+4$ is an integer and $0\le2<7$, $ab\bmod7=2$

### Section 4.5 #31
###### (a)
suppose $m$ and $n$ are any integers
in each case below, $r$ and $s$ are integers
- if $m=2r$ and $n=2s$
  then $m+n=2(r+s)$ and $m-n=2(r-s)$, so both are even
- if $m=2r+1$ and $n=2s+1$
  then $m+n=2(r+s+1)$ and $m-n=2(r-s)$, so both are even
- if $m=2r$ and $n=2s+1$
  then $m+n=2(r+s)+1$ and $m-n=2(r-s-1)+1$, so both are odd
- if $m=2r+1$ and $n=2s$
  then $m+n=2(r+s)+1$ and $m-n=2(r-s)+1$, so both are odd
these cases include every possible parity of $m$ and $n$
therefore $m+n$ and $m-n$ are either both odd or both even

### Section 4.5 #33
since $a-b$ is odd and $b-c$ is even, there are integers $r$ and $s$ such that
$a-b=2r+1 \quad\text{and}\quad b-c=2s$
thus
$a-c=(a-b)+(b-c)=(2r+1)+2s=2(r+s)+1$
since $r+s$ is an integer, $a-c$ is odd
