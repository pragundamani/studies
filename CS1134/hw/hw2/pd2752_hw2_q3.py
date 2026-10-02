def factors(num):
    """Yield the positive divisors of num in ascending order."""
    large_factors = []
    factor = 1
    while factor * factor <= num:
        if num % factor == 0:
            yield factor
            other = num // factor
            if other != factor:
                large_factors.append(other)
        factor += 1

    while large_factors:
        yield large_factors.pop()
