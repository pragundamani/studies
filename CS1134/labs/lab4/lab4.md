### 1. true or false
a. false, n³ faster than n² log n
b. false, square root n faster than log n
c. true, n / log n faster than square root n
d. false, n! eventually faster than 100ⁿ

### 2. sums

|                 answer |        runtime |
| ---------------------: | -------------: |
|                      k |       theta(k) |
|                     k² |      theta(k²) |
|           k(k + 1) / 2 |      theta(k²) |
|                 2k - 1 |       theta(k) |
|               n log(n) | theta(n log n) |
|         n²(n² + 1) / 2 |      theta(n⁴) |
|         about 2 log(n) |   theta(log n) |
|                    n2ⁿ |     theta(n2ⁿ) |
| log(n)(log(n) + 1) / 2 |  theta(log² n) |
|               2ⁿ⁺¹ - 1 |      theta(2ⁿ) |

### 3. code runtimes
a. theta(n³), n² loop runs, list search costs n
b. theta(n), 1 + 2 + 4 + ... + n
c. theta(log n), i doubling each time
d. theta(n square root n), n outer runs, square root n inner runs
e. theta(n²), n + (n - 1) + ... + 1

### 4. list methods

| method           |            one call |        n calls |
| ---------------- | ------------------: | -------------: |
| `append`         | theta(n) worst case | theta(n) total |
| `insert(0, val)` |            theta(n) |      theta(n²) |

empty starting list, same final runtimes

### 5. append code
a. theta(n), n appends, n total resizing work
b. theta(n log n), log n inner runs for each outer run
