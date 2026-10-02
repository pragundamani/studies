def findChange(lst01):
    """Return the index of the first 1 in a 0s-then-1s list."""
    low = 0
    high = len(lst01) - 1
    answer = None
    while low <= high:
        mid = (low + high) // 2
        if lst01[mid] == 1:
            answer = mid
            high = mid - 1
        else:
            low = mid + 1
    return answer
