def count_lowercase(s, low, high):
    if low == high:
        return int(s[low].islower())
    return int(s[low].islower()) + count_lowercase(s, low + 1, high)


def is_number_of_lowercase_even(s, low, high):
    if low == high:
        return not s[low].islower()
    return is_number_of_lowercase_even(s, low + 1, high) == (not s[low].islower())
