# CS1134 Labs — Code Patterns

Reviewed: `lab1/lab1.py`, `lab2/lab2.py`, and `lab3/lab3.py`.

## Overall style

The labs use direct, readable Python. Each function or class solves one small problem. Code mostly uses explicit loops, list indexing, and mutable objects. This is a good match for an introductory data-structures course: it shows the algorithm rather than relying on library shortcuts.

## Lab 1 — Counting, classes, permutations, and game flow

- `can_construct(word, letters)` compares character counts. Your version loops over the alphabet and uses `.count()`; it is simple, but repeats scans of both strings. The supplied solution builds a 26-slot count table, which makes the work linear in the input size.
- `Complex` models a complex number with instance fields `a` and `b`. Magic methods (`__add__`, `__sub__`, `__mul__`, `__repr__`, `__iadd__`) let instances work with `+`, `-`, `*`, printing, and `+=`.
- `create_permutation` builds an ordering of indices, then `scramble_word` uses those indices to construct a string. In `lab1.py`, the order is deterministic: it repeatedly selects the middle remaining index. The solution file includes a random version.
- `guessing_game` separates setup (scramble), repeated attempts (`for attempt in range(1, 4)`), and success/failure output.

## Lab 2 — Stateful classes and polynomial operations

- `BrowserHistory` stores state in a list plus a `current` index. `visit` removes forward history before appending a new URL. `back` and `forward` enforce index boundaries.
- `Polynomial` stores coefficients by exponent: `[3, 7, 0, -9]` means `3 + 7x - 9x^3`.
  - Addition aligns coefficients by index.
  - Multiplication uses nested loops; terms at indices `i` and `j` contribute to `i + j`.
  - `__call__` evaluates the polynomial at a value.
  - `derive` mutates the existing object, replacing its coefficients with derivative coefficients.
- Caution: `coefficients=[]` is a mutable default argument. Prefer `coefficients=None`, then make a new list inside `__init__`.

## Lab 3 — In-place algorithms and binary search

- `reverse_list` swaps from both ends toward the center. It modifies the input list in place.
- `new_maximums` is a generator. `yield` produces a value each time a new running maximum is found.
- `move_zeros` uses two pointers: `readInd` scans each element and `writeInd` marks where the next nonzero belongs. A second loop fills the rest with zeros.
- `remove_target_elem` uses the same compaction pattern, then pops unused trailing items.
- `search_range` runs binary search twice: once biased left to find the first target, then biased right to find the last. Expected time is O(log n), and the list must be sorted.
- Edge case to fix: `search_range([], target)` reads `lst[mid]` before checking for an empty list. Add `if not lst: return (-1, -1)` at the start.

## Patterns to recognize

| Pattern | Examples | Key idea |
|---|---|---|
| Object state | `BrowserHistory`, `Polynomial`, `Complex` | Store data on `self`; methods read or change it. |
| Operator overloading | `Complex`, `Polynomial` | Special methods define normal Python operators for objects. |
| In-place update | Lab 3 list functions | Change the supplied list instead of returning a separate list. |
| Two pointers | reverse, move zeros, remove target | Maintain two indexes with different roles. |
| Binary search | `search_range` | Halve a sorted search space each loop. |
| Generator | `new_maximums` | Yield values lazily, one at a time. |
