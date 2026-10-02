def e_approx(n):
    """Return sum(1 / i! for i from 0 through n)."""
    approximation = 1.0
    factorial = 1
    for i in range(1, n + 1):
        factorial *= i
        approximation += 1 / factorial
    return approximation
