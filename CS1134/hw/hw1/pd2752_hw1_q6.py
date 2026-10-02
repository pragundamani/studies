from numbers import Number


class Vector:
    def __init__(self, d):
        if isinstance(d, int):
            self.coords = [0] * d
        else:
            self.coords = list(d)

    def __len__(self):
        return len(self.coords)

    def __getitem__(self, j):
        return self.coords[j]

    def __setitem__(self, j, val):
        self.coords[j] = val

    def __add__(self, other):
        if len(self) != len(other):
            raise ValueError("dimensions must agree")
        result = Vector(len(self))
        for j in range(len(self)):
            result[j] = self[j] + other[j]
        return result

    def __eq__(self, other):
        return self.coords == other.coords

    def __ne__(self, other):
        return not (self == other)

    def __str__(self):
        return "<" + ", ".join(map(str, self.coords)) + ">"

    def __repr__(self):
        return str(self)

    def __sub__(self, other):
        if len(self) != len(other):
            raise ValueError("dimensions must agree")
        return Vector(self[j] - other[j] for j in range(len(self)))

    def __neg__(self):
        return Vector(-coordinate for coordinate in self.coords)

    def __mul__(self, other):
        if isinstance(other, Number):
            return Vector([self[j] * other for j in range(len(self))])
        if isinstance(other, Vector):
            if len(self) != len(other):
                raise ValueError("dimensions must agree")
            return sum(self[j] * other[j] for j in range(len(self)))
        return NotImplemented

    def __rmul__(self, other):
        return self * other
