def flat_list(nested_lst, low, high):
    if low > high:
        return []
    if isinstance(nested_lst[low], list):
        current = flat_list(nested_lst[low], 0, len(nested_lst[low]) - 1)
    else:
        current = [nested_lst[low]]
    return current + flat_list(nested_lst, low + 1, high)
