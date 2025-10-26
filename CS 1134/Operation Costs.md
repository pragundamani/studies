---
source: https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/
---

| Operation<br>   | Cost        |
| --------------- | ----------- |
| `append()`      | $\Theta(n)$ |
| `insert(0,n)`   | $\Theta(n)$ |
| `insert(-1,n)`  | $\Theta(n)$ |
| `pop()`         | $\Theta(1)$ |
| `pop(0)`        | $\Theta(n)$ |
| `sum(lst[0:n])` | $\Theta(n)$ |
### Sequences
$1+2+4+8+\dots+n=2n-1=O(n)$ 
$1+1+1+1+\dots+n=\log_{2}n=O(\log n)$
$1+2+3+4+\dots+n=$
$1+4+9+16+25+\dots+n^2=n^3=O(n^3)$

- **Constant:** $1 = 1 = O(1)$
- **Linear:** $1 + 1 + 1 + \dots + 1\ (n\ \text{terms}) = n = O(n)$
- **Log-linear:** $n + n + \frac{n}{2} + \frac{n}{4} + \dots + 1 = n\log_2 n = O(n \log n)$
- **Quadratic:** $1 + 2 + 3 + \dots + n = \frac{n(n+1)}{2} = O(n^2)$
- **Factorial:** $1 \times 2 \times 3 \times \dots \times n = n! = O(n!)$

