def list_min(lst, low, high):
    if low == high:
        return lst[low]
    mid = (low + high) // 2
    left_min = list_min(lst, low, mid)
    right_min = list_min(lst, mid + 1, high)
    return min(left_min, right_min)
