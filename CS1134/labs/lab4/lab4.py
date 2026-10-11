def binary_search(lst, target, left, right):
    while left <= right:
        mid = (left + right) // 2
        if lst[mid] == target:
            return mid
        elif lst[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return None


def find_pivot(lst):
    if len(lst) == 0:
        return None

    left = 0
    right = len(lst) - 1

    while left < right:
        mid = (left + right) // 2
        if lst[mid] > lst[right]:
            left = mid + 1
        else:
            right = mid
    return left


def shift_binary_search(lst, target):
    if len(lst) == 0:
        return None

    pivot = find_pivot(lst)
    if lst[pivot] <= target <= lst[-1]:
        return binary_search(lst, target, pivot, len(lst) - 1)
    return binary_search(lst, target, 0, pivot - 1)
    # return binary_search(lst, target, 0, try (pivot - 1) ) 


def LSRP(s):
    lastSeen = [-1] * 26
    left = 0
    longest = 0

    for right in range(len(s)):
        letterIndex = ord(s[right]) - ord("a")
        left = max(left, lastSeen[letterIndex] + 1)
        lastSeen[letterIndex] = right
        longest = max(longest, right - left + 1)

    return longest


def jump_search_k(lst, value, k):
    if len(lst) == 0:
        return None

    previous = 0
    current = 0

    while current < len(lst) - 1 and lst[current] < value:
        previous = current
        current = min(current + k, len(lst) - 1)

    for i in range(previous, current + 1):
        if lst[i] == value:
            return i
        if lst[i] > value:
            return None
    return None


def jump_search(lst, value):
    if len(lst) == 0:
        return None
    if len(lst) == 1:
        if lst[0] == value:
            return 0
        return None

    k = int(len(lst) ** 0.5)
    return jump_search_k(lst, value, k)


def exponential_search(lst, value):
    if len(lst) == 0:
        return None
    if lst[0] == value:
        return 0

    index = 1
    while index < len(lst) and lst[index] < value:
        index *= 2

    left = index // 2
    right = min(index, len(lst) - 1)
    return binary_search(lst, value, left, right)

nums = [15, 20, 21, 1, 3, 6, 7, 10, 12, 14]
print(find_pivot(nums))
print(shift_binary_search(nums, 21))

print(LSRP("abcabcbb"))
print(LSRP("bbbbb"))
print(LSRP("pwwkew"))
print(LSRP(""))
print(LSRP("a"))
print(LSRP("dvdf"))

lst = [-1111, -818, -646, -50, -25, -3, 0, 1, 2, 11, 33, 45,
       46, 51, 58, 72, 74, 75, 99, 110, 120, 121, 345, 400, 500, 999,
       1000, 1114, 1134, 4444, 10010, 500000, 999999]
print(jump_search(lst, 1134))
print(exponential_search(lst, 1134))
