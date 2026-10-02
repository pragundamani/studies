def shift(lst, k, direction="left"):
    # circularly shift lst k positions in place
    if direction == "left":
        lst[:] = lst[k:] + lst[:k]
    elif direction == "right":
        lst[:] = lst[-k:] + lst[:-k]
    else:
        raise ValueError("direction must be 'left' or 'right'")
