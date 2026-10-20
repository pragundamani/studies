def sortLst(lst):
    for i in range(len(lst)):
        while lst[i] != i:
            j = lst[i]
            lst[i], lst[j] = lst[j], lst[i]


# lst = [2, 0, 1, 3]
# sortLst(lst)
# print(lst)


def bubbleSort(lst):
    for i in range(len(lst) - 1):
        swapped = False
        for j in range(len(lst) - i - 1):
            if lst[j] > lst[j + 1]:
                lst[j], lst[j + 1] = lst[j + 1], lst[j]
                swapped = True
        if not swapped:
            return


# lst = [5, 1, 4, 2]
# print(bubbleSort(lst))
#


def powerOfTwo(n):
    if n == 0:
        return False
    elif n == 1:
        return True
    elif n % 2 != 0:
        return False
    else:
        return powerOfTwo(n // 2)


# print(powerOfTwo(16))
# print(powerOfTwo(12))
# print(powerOfTwo(1))
# print(powerOfTwo(0))


def splitParity(lst, low, high):
    if low > high:
        return
    if lst[low] % 2 == 0:
        low += 1
    elif lst[high] % 2 != 0:
        high -= 1
    else:
        lst[low], lst[high] = lst[high], lst[low]
        low += 1
        high -= 1
    if low < high:
        splitParity(lst, low, high)


# lst = [4, -5, 2, 3, -1, -6, 7, 9, 0]
# splitParity(lst, 0, len(lst) - 1)
# print(lst)


def nestedSum(lst):
    total = 0
    for i in lst:
        if isinstance(i, list):
            total += nestedSum(i)
        else:
            total += i
    return total


# print(nestedSum([[1,2],3,[4,[5,6]]]))


def flattenHelper(lst, result):
    for i in lst:
        if isinstance(i, list):
            flattenHelper(i, result)
        else:
            result.append(i)


def flatten(lst):
    result = []
    flattenHelper(lst, result)
    return result


# print(flatten([[1,2],3,[4,[5,6]],[]]))


def balancedHelper(text, ind, count):
    if count < 0:
        return False
    if ind == len(text):
        return count == 0
    if text[ind] == "(":
        count += 1
    else:
        count -= 1
    return balancedHelper(text, ind + 1, count)


def balancedParentheses(text):
    return balancedHelper(text, 0, 0)


print(balancedParentheses("(()())"))
print(balancedParentheses(")("))
print(balancedParentheses("(()"))
