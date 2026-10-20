### Section 4.4 #28
The statement is false Let $a=6$, $b=2$, and $c=3$ Then $6\mid(2\cdot3)$, but $6\nmid2$ and $6\nmid3$

### Section 4.4 #29
Suppose $a$ and $b$ are integers and $a\mid b$ Then $b=ak$ for some integer $k$ Hence
$b^2=(ak)^2=a^2k^2$
Since $k^2$ is an integer, $a^2\mid b^2$ by definition

### Section 4.4 #30
The statement is false Let $a=4$ and $n=6$ Then $4\mid6^2$ because $6^2=36=4\cdot9$, and $4\le6$ However, $4\nmid6$

### Section 4.4 #37
###### (a)
$1{,}176=8\cdot147=2^3\cdot3\cdot7^2$

###### (b)
$5{,}733=9\cdot637=3^2\cdot7^2\cdot13$

###### (c)
$3{,}675=3\cdot1{,}225=3\cdot5^2\cdot7^2$

By the unique factorization theorem, each standard factored form is unique except for the order of the factors

### Section 4.4 #45
Suppose a nonnegative integer $n$ ends in $5$ Then $n=10q+5$ for some nonnegative integer $q$ Hence
$n=10q+5=5(2q+1)$
Since $2q+1$ is an integer, $5\mid n$ by definition

### Section 4.4 #48
Let the decimal digits of $n$ be $d_k,d_{k-1},\ldots,d_0$ Then
$n=\sum_{i=0}^k d_i10^i$
For each $i$, $10^i-1$ is divisible by $3$, so $10^i=3q_i+1$ for some integer $q_i$ Hence
$n=\sum_{i=0}^k d_i(3q_i+1)=3\sum_{i=0}^k d_iq_i+\sum_{i=0}^k d_i$
Suppose the sum of the digits is divisible by $3$ Then $\sum_{i=0}^k d_i=3m$ for some integer $m$ Thus
$n=3\left(\sum_{i=0}^k d_iq_i+m\right)$
The expression in parentheses is an integer Hence $3\mid n$ by definition

### Section 4.5 #17
Suppose $n$ is any integer

If $n$ is even, then $n=2k$ for some integer $k$ Thus
$n^2-n+3=(2k)^2-2k+3=2(2k^2-k+1)+1$
Since $2k^2-k+1$ is an integer, $n^2-n+3$ is odd

If $n$ is odd, then $n=2k+1$ for some integer $k$ Thus
$n^2-n+3=(2k+1)^2-(2k+1)+3=2(2k^2+k+1)+1$
Since $2k^2+k+1$ is an integer, $n^2-n+3$ is odd

Therefore $n^2-n+3$ is odd for every integer $n$

### Section 4.5 #21
Since $b\bmod12=5$, $b=12k+5$ for some integer $k$ Then
$8b=8(12k+5)=96k+40=12(8k+3)+4$
Since $8k+3$ is an integer and $0\le4<12$, $8b\bmod12=4$

### Section 4.5 #25
Suppose $a\bmod7=5$ and $b\bmod7=6$ Then $a=7r+5$ and $b=7s+6$ for some integers $r$ and $s$ Thus
$ab=(7r+5)(7s+6)=7(7rs+6r+5s+4)+2$
Since $7rs+6r+5s+4$ is an integer and $0\le2<7$, $ab\bmod7=2$

### Section 4.5 #31
###### (a)
Suppose $m$ and $n$ are any integers

- If $m=2r$ and $n=2s$, then $m+n=2(r+s)$ and $m-n=2(r-s)$, so both are even
- If $m=2r+1$ and $n=2s+1$, then $m+n=2(r+s+1)$ and $m-n=2(r-s)$, so both are even
- If $m=2r$ and $n=2s+1$, then $m+n=2(r+s)+1$ and $m-n=2(r-s-1)+1$, so both are odd
- If $m=2r+1$ and $n=2s$, then $m+n=2(r+s)+1$ and $m-n=2(r-s)+1$, so both are odd

These cases include every possible parity of $m$ and $n$ Therefore $m+n$ and $m-n$ are either both odd or both even

### Section 4.5 #33
Since $a-b$ is odd and $b-c$ is even, there are integers $r$ and $s$ such that
$a-b=2r+1 \quad\text{and}\quad b-c=2s$
Thus
$a-c=(a-b)+(b-c)=(2r+1)+2s=2(r+s)+1$
Since $r+s$ is an integer, $a-c$ is odd
