def permutations(lst, low, high):
    if low == high:
        return [[lst[low]]]
    smaller_permutations = permutations(lst, low, high - 1)
    result = []
    for permutation in smaller_permutations:
        for position in range(len(permutation) + 1):
            result.append(
                permutation[:position]
                + [lst[high]]
                + permutation[position:]
            )
    return result
