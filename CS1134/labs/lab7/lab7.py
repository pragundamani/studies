def power(x, n):
    if n == 0:
        return 1
    p = power(x, n // 2)
    p *= p
    if n % 2 == 1:
        p *= x
    return p


def find_missing_sorted(lst):
    low = 0
    high = len(lst) - 1

    while low <= high:
        mid = (low + high) // 2
        if lst[mid] == mid:
            low = mid + 1
        else:
            high = mid - 1

    return low


def find_missing_unsorted(lst):
    n = len(lst)
    expected = 0
    actual = 0

    for value in lst:
        actual += value
    for value in range(n + 1):
        expected += value

    return expected - actual


# print(power(2, 10)) # 1024
# print(power(-2, 3)) # -8
# print(power(5, 0)) # 1

# print(find_missing_sorted([0, 1, 2, 4, 5])) # 3
# print(find_missing_sorted([1, 2, 3])) # 0
# print(find_missing_sorted([0, 1, 2])) # 3
# print(find_missing_sorted([])) # 0

# print(find_missing_unsorted([4, 0, 2, 1])) # 3
# print(find_missing_unsorted([])) # 0
