### 1. Section 4.4 #28, #29, #30, #37

False Let $a=6$, $b=2$, and $c=3$ Then $6\mid(2\cdot3)$, but $6\nmid2$ and $6\nmid3$ Thus the statement is false

True Suppose $a$ and $b$ are integers and $a\mid b$ Then $b=ak$ for some integer $k$ Hence
$b^2=(ak)^2=a^2k^2$
Since $k^2$ is an integer, $a^2\mid b^2$ by definition

False Let $a=4$ and $n=6$ Then $4\mid6^2$ because $6^2=36=4\cdot9$, and $4\le6$ However, $4\nmid6$ Thus the statement is false

###### (a)
$1{,}176=8\cdot147=2^3\cdot3\cdot7^2$

###### (b)
$5{,}733=9\cdot637=3^2\cdot7^2\cdot13$

###### (c)
$3{,}675=3\cdot1{,}225=3\cdot5^2\cdot7^2$

By the unique factorization theorem, these standard factored forms are unique except for the order of the factors

### 2. Section 4.4 #45, #48

Suppose $n$ is a nonnegative integer whose decimal representation ends in $5$ Then $n=10q+5$ for some nonnegative integer $q$ Hence
$n=10q+5=5(2q+1)$
Since $2q+1$ is an integer, $5\mid n$ by definition

Let the decimal digits of $n$ be $d_k,d_{k-1},\ldots,d_0$ Then
$n=\sum_{i=0}^k d_i10^i$
For each $i$, $10^i-1$ is divisible by $3$, so $10^i=3q_i+1$ for some integer $q_i$ Thus
$n=\sum_{i=0}^k d_i(3q_i+1)=3\sum_{i=0}^k d_iq_i+\sum_{i=0}^k d_i$
Suppose the sum of the digits is divisible by $3$ Then $\sum_{i=0}^k d_i=3m$ for some integer $m$ Hence
$n=3\left(\sum_{i=0}^k d_iq_i+m\right)$
Since $\sum_{i=0}^k d_iq_i+m$ is an integer, $3\mid n$ by definition
