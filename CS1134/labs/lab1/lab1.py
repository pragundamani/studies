def can_construct(word, letters):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    for letter in alphabet:
        if word.count(letter) > letters.count(letter):
            return False
    return True


class Complex:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def __add__(self, other):
        return Complex(self.a + other.a, self.b + other.b)

    def __sub__(self, other):
        return Complex(self.a - other.a, self.b - other.b)

    def __mul__(self, other):
        real_part = self.a * other.a - self.b * other.b
        imaginary_part = self.a * other.b + self.b * other.a
        return Complex(real_part, imaginary_part)

    def __repr__(self):
        if self.b < 0:
            return str(self.a) + " - " + str(-self.b) + "i"
        return str(self.a) + " + " + str(self.b) + "i"

    def __iadd__(self, other):
        self.a = self.a + other.a
        self.b = self.b + other.b
        return self


def create_permutation(n):
    numbers = []
    permutation = []

    for number in range(n):
        numbers.append(number)

    while len(numbers) > 0:
        middle = len(numbers) // 2
        permutation.append(numbers[middle])
        numbers.pop(middle)

    return permutation


def scramble_word(word):
    permutation = create_permutation(len(word))
    scrambled_word = ""

    for index in permutation:
        scrambled_word = scrambled_word + word[index]

    return scrambled_word


def guessing_game(word):
    scrambled_word = scramble_word(word)
    print("Unscramble the word:")
    print(" ".join(scrambled_word))

    for attempt in range(1, 4):
        guess = input("Try #" + str(attempt) + ": ")
        if guess == word:
            print("Yay, you got it!")
            return
        print("Wrong!")

    print("The word was " + word)
