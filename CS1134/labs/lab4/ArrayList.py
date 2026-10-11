import ctypes


def make_array(n):
    return (n * ctypes.py_object)()


class ArrayList:
    def __init__(self, values=None):
        self.data_arr = make_array(1)
        self.capacity = 1
        self.n = 0

        if values is not None:
            for value in values:
                self.append(value)

    def __len__(self):
        return self.n

    def __iter__(self):
        for i in range(self.n):
            yield self.data_arr[i]

    def __repr__(self):
        values = []
        for i in range(self.n):
            values.append(repr(self.data_arr[i]))
        return "[" + ", ".join(values) + "]"

    def resize(self, new_capacity):
        new_array = make_array(new_capacity)
        for i in range(self.n):
            new_array[i] = self.data_arr[i]
        self.data_arr = new_array
        self.capacity = new_capacity

    def append(self, value):
        if self.n == self.capacity:
            self.resize(2 * self.capacity)
        self.data_arr[self.n] = value
        self.n += 1

    def extend(self, values):
        for value in values:
            self.append(value)

    def insert(self, index, value):
        if index < 0:
            index = max(0, self.n + index)
        else:
            index = min(index, self.n)

        if self.n == self.capacity:
            self.resize(2 * self.capacity)

        for i in range(self.n, index, -1):
            self.data_arr[i] = self.data_arr[i - 1]
        self.data_arr[index] = value
        self.n += 1

    def __getitem__(self, index):
        if index < 0:
            index += self.n
        if index < 0 or index >= self.n:
            raise IndexError("invalid index")
        return self.data_arr[index]

    def __setitem__(self, index, value):
        if index < 0:
            index += self.n
        if index < 0 or index >= self.n:
            raise IndexError("invalid index")
        self.data_arr[index] = value

    def __add__(self, other):
        result = ArrayList()
        for value in self:
            result.append(value)
        for value in other:
            result.append(value)
        return result

    def __iadd__(self, other):
        if self is other:
            other = ArrayList(other)
        for value in other:
            self.append(value)
        return self

    def __mul__(self, times):
        result = ArrayList()
        for i in range(times):
            for value in self:
                result.append(value)
        return result

    def __rmul__(self, times):
        return self * times

    def remove(self, value):
        remove_index = -1
        for i in range(self.n):
            if self.data_arr[i] == value:
                remove_index = i
                break

        if remove_index == -1:
            raise ValueError(str(value) + " is not in ArrayList")

        for i in range(remove_index, self.n - 1):
            self.data_arr[i] = self.data_arr[i + 1]
        self.n -= 1

    def removeOdds(self):
        write_index = 0
        for read_index in range(self.n):
            if self.data_arr[read_index] % 2 == 0:
                self.data_arr[write_index] = self.data_arr[read_index]
                write_index += 1
        self.n = write_index

arr = ArrayList([1, 2, 3])
print(arr)

arr1 = ArrayList([1, 2, 3])
arr2 = ArrayList([4, 5, 6])
print(arr1 + arr2)

arr1 += arr2
print(arr1)

arr = ArrayList([1, 2, 3])
print(arr[-1])
arr[-1] = 5
print(arr[-1])

arr1 = ArrayList([1, 2, 3])
print(arr1 * 2)
print(2 * arr1)

print(ArrayList("Python"))
print(ArrayList(range(10)))

arr = ArrayList([1, 2, 3, 2, 3, 4, 2, 2])
arr.remove(2)
print(arr)

arr = ArrayList([1, 2, 3, 2, 3, 4, 2, 5])
arr.removeOdds()
print(arr)
