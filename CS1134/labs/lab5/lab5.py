def sumTo(n):
    if n == 0:
        return 0
    return n + sumTo(n - 1)


def productEvens(n):
    if n == 0:
        return 1
    return n * productEvens(n - 2)


def digitSum(n):
    if n < 10:
        return n
    return n % 10 + digitSum(n // 10)


def isIncreasing(lst):
    if len(lst) <= 1:
        return True
    return lst[0] < lst[1] and isIncreasing(lst[1:])


def countAdjacent(lst, low, high):
    if low >= high:
        return 0

    match = 0
    if lst[low] == lst[low + 1]:
        match = 1
    return match + countAdjacent(lst, low + 1, high)


def isPalindrome(string, low, high):
    if low >= high:
        return True
    if string[low] != string[high]:
        return False
    return isPalindrome(string, low + 1, high - 1)


def binarySearch(lst, low, high, value):
    if low > high:
        return None

    mid = (low + high) // 2
    if lst[mid] == value:
        return mid
    elif value < lst[mid]:
        return binarySearch(lst, low, mid - 1, value)
    else:
        return binarySearch(lst, mid + 1, high, value)


def countPeaks(lst, low, high):
    if low > high:
        return 0

    peak = 0
    if (low > 0 and low < len(lst) - 1) and (lst[low] > lst[low - 1] and lst[low] > lst[low + 1]):
        peak = 1
    return peak + countPeaks(lst, low + 1, high)


def vcCount(word, low, high):
    if low > high:
        return (0, 0)

    vowels, consonants = vcCount(word, low + 1, high)
    letter = word[low].lower()

    if letter in "aeiou":
        vowels += 1
    elif letter.isalpha():
        consonants += 1

    return (vowels, consonants)

print(sumTo(5))
print(productEvens(8))

print(digitSum(5724))
print(digitSum(8))
print(digitSum(101))

print(isIncreasing([2, 5, 8, 13]))
print(isIncreasing([2, 5, 5, 9]))
print(isIncreasing([7]))

print(countAdjacent([1, 1, 3, 5, 5, 5], 0, 5))
print(countAdjacent([1, 2, 3, 4], 0, 3))

print(isPalindrome("racecar", 0, 6))
print(isPalindrome("racecar", 1, 5))
print(isPalindrome("race car", 0, 6))
print(isPalindrome("racecar", 1, 3))

nums = [1, 3, 5, 7, 9]
print(binarySearch(nums, 0, len(nums) - 1, 7))

print(countPeaks([2, 7, 3, 8, 5, 9, 1], 0, 6))

word = "NYUTandonEngineering"
print(vcCount(word, 0, len(word) - 1))
