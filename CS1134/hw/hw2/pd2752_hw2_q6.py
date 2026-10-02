def two_sum(srt_lst, target):
    """Return indices of two sorted-list values that add to target."""
    left = 0
    right = len(srt_lst) - 1
    while left < right:
        current_sum = srt_lst[left] + srt_lst[right]
        if current_sum == target:
            return (left, right)
        if current_sum < target:
            left += 1
        else:
            right -= 1
    return None
