1. a.
```text
3
4
2
```
`s`: [1, 2]
`t`: []

1. b.
```text
3
4
```
`q`: [4, 8, 3]

1. c.
```text
[7]
[7, 9]
[2, 4]
1
```
`q`: [[2, 4]]

2.
```text
20
20
2
```

3. a. `stack_min` returns the minimum and keeps the stack unchanged.

3. b. `remove_evens` removes even values and keeps odd values in order.

3. c. `is_palindrome` returns `True` for a palindrome.

4.

| Prefix | Infix | Postfix | Value |
|---|---|---|---:|
| `- * 4 5 + 3 2` | `(4 * 5) - (3 + 2)` | `4 5 * 3 2 + -` | 15 |
| `/ - 18 6 + 2 1` | `(18 - 6) / (2 + 1)` | `18 6 - 2 1 + /` | 4 |
| `- + 8 * 3 2 5` | `(8 + (3 * 2)) - 5` | `8 3 2 * + 5 -` | 9 |
| `* + 2 3 - 9 5` | `(2 + 3) * (9 - 5)` | `2 3 + 9 5 - *` | 20 |
