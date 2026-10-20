### 3. Section 4.5 #17, #21

Suppose $n$ is any integer

If $n$ is even, then $n=2k$ for some integer $k$ Thus
$n^2-n+3=(2k)^2-2k+3=2(2k^2-k+1)+1$
Since $2k^2-k+1$ is an integer, $n^2-n+3$ is odd

If $n$ is odd, then $n=2k+1$ for some integer $k$ Thus
$n^2-n+3=(2k+1)^2-(2k+1)+3=2(2k^2+k+1)+1$
Since $2k^2+k+1$ is an integer, $n^2-n+3$ is odd

Therefore $n^2-n+3$ is odd for every integer $n$

Since $b\bmod 12=5$, $b=12k+5$ for some integer $k$ Then
$8b=8(12k+5)=96k+40=12(8k+3)+4$
Since $8k+3$ is an integer and $0\le4<12$, the remainder is $4$

### 4. Section 4.5 #25, #31(a), #33

Suppose $a\bmod 7=5$ and $b\bmod 7=6$ Then $a=7r+5$ and $b=7s+6$ for some integers $r$ and $s$ Thus
$ab=(7r+5)(7s+6)=7(7rs+6r+5s+4)+2$
Since $7rs+6r+5s+4$ is an integer and $0\le2<7$, $ab\bmod 7=2$

Suppose $m$ and $n$ are any integers

- If $m=2r$ and $n=2s$, then $m+n=2(r+s)$ and $m-n=2(r-s)$, so both are even
- If $m=2r+1$ and $n=2s+1$, then $m+n=2(r+s+1)$ and $m-n=2(r-s)$, so both are even
- If $m=2r$ and $n=2s+1$, then $m+n=2(r+s)+1$ and $m-n=2(r-s-1)+1$, so both are odd
- If $m=2r+1$ and $n=2s$, then $m+n=2(r+s)+1$ and $m-n=2(r-s)+1$, so both are odd

These cases include every possible parity of $m$ and $n$ Therefore $m+n$ and $m-n$ are either both odd or both even

$a-c$ is odd Since $a-b$ is odd and $b-c$ is even, $a-b=2r+1$ and $b-c=2s$ for some integers $r$ and $s$ Thus
$a-c=(a-b)+(b-c)=(2r+1)+2s=2(r+s)+1$
Since $r+s$ is an integer, $a-c$ is odd
