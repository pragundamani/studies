def appearances(s, low, high):
    if low == high:
        return {s[low]: 1}
    counts = appearances(s, low, high - 1)
    char = s[high]
    counts[char] = counts.get(char, 0) + 1
    return counts
