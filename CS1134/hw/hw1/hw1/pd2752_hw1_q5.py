def fibs(n):
    previous = 1
    current = 1
    for _ in range(n):
        yield previous
        previous, current = current, previous + current
