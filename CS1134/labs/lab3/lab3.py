def reverse_list(lst, low=None, high=None):
    if low is None and high is None:
        low = 0
        high = len(lst) - 1
    while low < high:
        lst[low], lst[high] = lst[high], lst[low]
        low += 1
        high -= 1


# numbers = [1, 2, 3, 4, 5, 6]
# reverse_list(numbers)
# print(numbers)


def new_maximums(lst):
    maximum = lst[0]
    yield maximum
    for i in range(1, len(lst)):
        if lst[i] > maximum:
            maximum = lst[i]
            yield maximum


def move_zeros(nums):
    writeInd, value = 0, 0
    for readInd in range(len(nums)):
        if nums[readInd] != value:
            nums[writeInd] = nums[readInd]
            writeInd += 1

    while writeInd < len(nums):
        nums[writeInd] = value
        writeInd += 1


def remove_target_elem(lst, target):
    writeInd = 0
    for readInd in range(len(lst)):
        if lst[readInd] != target:
            lst[writeInd] = lst[readInd]
            writeInd += 1
    while len(lst) > writeInd:
        lst.pop()


def search_range(lst, target):
    low = 0
    high = len(lst) - 1
    first = -1

    while low <= high:
        mid = (low + high) // 2
        if lst[mid] < target:
            low = mid + 1
        else:
            if lst[mid] == target:
                first = mid
            high = mid - 1

    if first == -1:
        return (-1, -1)

    low = first
    high = len(lst) - 1
    last = first

    while low <= high:
        mid = (low + high) // 2

        if lst[mid] > target:
            high = mid - 1
        else:
            if lst[mid] == target:
                last = mid
            low = mid + 1

    return (first, last)


numbers = [1, 2, 3, 4, 5, 6]
reverse_list(numbers)
print(numbers)

print(list(new_maximums([3, 1, 4, 4, 2, 7, 5, 9])))

numbers = [0, 1, 0, 3, 13, 0]
move_zeros(numbers)
print(numbers)

numbers = [1, 2, 2, 3, 2]
remove_target_elem(numbers, 2)
print(numbers)

print(search_range([1, 2, 2, 2, 5, 8], 2))
print(search_range([1, 2, 2, 2, 5, 8], 4))
print(search_range([7, 7, 7], 7))
print(search_range([], 7))
