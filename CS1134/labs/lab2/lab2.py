class BrowserHistory:
    def __init__(self, homepage):
        self.history = [homepage]
        self.current = 0

    def visit(self, url):
        self.history = self.history[: self.current + 1]
        self.history.append(url)
        self.current += 1

    def back(self):
        if self.current > 0:
            self.current -= 1
        return self.history[self.current]

    def forward(self):
        if self.current < len(self.history) - 1:
            self.current += 1
        return self.history[self.current]

    def get_current(self):
        return self.history[self.current]

    def get_history(self):
        return self.history[:]


browser = BrowserHistory("google.com")
browser.visit("nyu.edu")
browser.visit("github.com")
browser.visit("youtube.com")

print(browser.get_current())
print(browser.back())
print(browser.back())
print(browser.forward())
print(browser.get_history())

browser.back()
browser.visit("wikipedia.org")
print(browser.get_history())


class Polynomial:
    def __init__(self, coefficients=[]):
        self.coefficients = coefficients
        self.data = self.coefficients

    def __add__(self, other):
        max_length = max(len(self.coefficients), len(other.coefficients))
        result = []

        for i in range(max_length):
            ownCoef = self.coefficients[i] if i < len(self.coefficients) else 0
            otherCoef = other.coefficients[i] if i < len(other.coefficients) else 0
            result.append(ownCoef + otherCoef)

        return Polynomial(result)

    def __mul__(self, other):
        result = [0] * (len(self.coefficients) + len(other.coefficients) - 1)

        for i in range(len(self.coefficients)):
            for j in range(len(other.coefficients)):
                result[i + j] += self.coefficients[i] * other.coefficients[j]

        return Polynomial(result)

    def __call__(self, param):
        result = 0
        for i in range(len(self.coefficients)):
            result += self.coefficients[i] * (param**i)
        return result

    def __repr__(self):
        terms = []
        for i in range(len(self.coefficients) - 1, -1, -1):
            terms.append(f"{self.coefficients[i]}x^{i}")
        return " + ".join(terms)

    def derive(self):
        derived_coefficients = []
        for i in range(1, len(self.coefficients)):
            derived_coefficients.append(i * self.coefficients[i])

        self.coefficients = derived_coefficients
        self.data = self.coefficients


poly1 = Polynomial([3, 7, 0, -9, 2])
poly2 = Polynomial([2, 0, 0, 5, 0, 0, 3])
poly3 = poly1 + poly2
print(poly3.data)
print(poly1(1))
print(poly2(1))
print(poly3(1))

poly1.derive()
print(poly1)
poly4 = poly1 * Polynomial([1, 2])
print(poly4)
