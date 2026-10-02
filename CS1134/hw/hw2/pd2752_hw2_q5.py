def split_parity(lst):
    """Put odd values before even values, modifying lst in place."""
    left = 0
    right = len(lst) - 1
    while left < right:
        while left < right and lst[left] % 2 != 0:
            left += 1
        while left < right and lst[right] % 2 == 0:
            right -= 1
        if left < right:
            lst[left], lst[right] = lst[right], lst[left]
            left += 1
            right -= 1
