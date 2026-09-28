# Lab 3 Vitamins

## 1. Big-O and Big-Theta proofs

**a.** For $n \ge 1$, $n^2+5n-2 \le n^2+5n \le 6n^2 \le 6n^3$.  
So $n^2+5n-2=O(n^3)$ using $c=6$ and $n_0=1$.
   
**b.** For $n \ge 1$, $\frac{n^2-1}{n+1}=n-1 \le n$.  
So $\frac{n^2-1}{n+1}=O(n)$ using $c=1$ and $n_0=1$.

**c.** For $n \ge 2$, $\sqrt{36n^2-72n+36}=6n-6$, and $3n \le 6n-6 \le 6n$.  
Therefore, the function is $\Theta(n)$ using $c_1=3$, $c_2=6$, and $n_0=2$.

**d.** For $n \ge 1$, $1 \cdot n^2 \le 4^{\log_2 n}=(2^2)^{\log_2 n}=2^{2\log_2 n}=n^2 \le 1 \cdot n^2$.  
Therefore, it is $\Theta(n^2)$ using $c_1=1$, $c_2=1$, and $n_0=1$.

## 2. True or False

**a. True.** $8n^2\sqrt n=8n^{5/2} \le 8n^3$ for $n \ge 1$, so it is $O(n^3)$.

**b. False.** $\frac{8n^{5/2}}{n^3}=\frac8{\sqrt n}$ approaches $0$, so $8n^2\sqrt n$ grows slower than $n^3$ and is not $\Theta(n^3)$.

## 3. Generator output

```text
2, 7, 16, 29,
```

## 4. Function order

**a.**

```text
f6 <= f10 < f5 < f4 <= f11 < f3 <= f12 < f9 < f1 <= f2 < f8 < f14 < f15 < f13
```

**b.**

```text
f22 < f19 < f24 <= f29 < f16 <= f21 < f17 < f23 < f20 <= f26 < f28 < f25 < f30 < f27 < f18
```

## 5. Running times

**a.** `contains` is best-case $\Theta(1)$ when the target is the first item. It is worst-case $\Theta(n)$ when the target is not in the list or is the last item.

**b.** `pairs` is $\Theta(n^2)$ because its inner loop runs a total of $0+1+\dots+(n-1)=\frac{n(n-1)}2$ times.

**c.** `doubling` is $\Theta(n\log n)$ because the inner loop doubles `j`, so it runs $\Theta(\log n)$ times for every outer iteration.

**d.** `repeated_search` is $\Theta(n^2)$ because checking whether `-1` is in the list takes $\Theta(n)$ time and it is done $n$ times.

## 6. Binary search

For `23`, the midpoint values are `16`, `38`, and `23`. The search returns index **5**, after **3** midpoint checks.

| low | high | mid | `lst[mid]` | action |
|---:|---:|---:|---:|---|
| 0 | 8 | 4 | 16 | `low = 5` |
| 5 | 8 | 6 | 38 | `high = 5` |
| 5 | 5 | 5 | 23 | match |

For `15`, the midpoint values are `16`, `5`, `8`, and `12`. The search returns **-1**, after **4** midpoint checks.

| low | high | mid | `lst[mid]` | action |
|---:|---:|---:|---:|---|
| 0 | 8 | 4 | 16 | `high = 3` |
| 0 | 3 | 1 | 5 | `low = 2` |
| 2 | 3 | 2 | 8 | `low = 3` |
| 3 | 3 | 3 | 12 | `low = 4` |
