## Array Of Heap Objects

```cpp
TYPE** arr = new TYPE*[SIZE];

for (int i = 0; i < SIZE; ++i) {
    arr[i] = new TYPE;
}

for (int i = 0; i < SIZE; ++i) {
    delete arr[i];
}

delete[] arr;
```

- `delete` = one heap object
- `delete[]` = dynamic array

## Function Templates

```cpp
template<typename T>
T getMin(T a, T b) {
    return (a < b) ? a : b;
}
```

```cpp
template<typename T, typename Pred>
int count_if(T items[], int size, Pred pred) {
    int count = 0;
    for (int i = 0; i < size; ++i) {
        if (pred(items[i])) ++count;
    }
    return count;
}
```

```cpp
template<typename Iter, typename Pred>
int count_if(Iter begin, Iter end, Pred pred) {
    int count = 0;
    for (Iter it = begin; it != end; ++it) {
        if (pred(*it)) ++count;
    }
    return count;
}
```

```cpp
template<typename Iter, typename Pred>
Iter find_if(Iter begin, Iter end, Pred pred) {
    for (Iter it = begin; it != end; ++it) {
        if (pred(*it)) return it;
    }
    return end;
}
```

```cpp
template<typename Iter, typename T>
Iter find_value(Iter begin, Iter end, const T& target) {
    for (Iter it = begin; it != end; ++it) {
        if (*it == target) return it;
    }
    return end;
}
```

## Iterator Loops

```cpp
CONTAINER<TYPE>::iterator it;

for (it = container.begin(); it != container.end(); ++it) {
    // use *it
}
```

```cpp
CONTAINER<TYPE>::iterator it;
TYPE total = TYPE();

for (it = container.begin(); it != container.end(); ++it) {
    total += *it;
}

cout << total;
```

## Lambdas

```cpp
auto pred = [](TYPE value) {
    return condition;
};
```

```cpp
auto pred = [x](TYPE value) {
    return value < x;
};
```

```cpp
auto pred = [&x](TYPE value) {
    ++x;
    return condition;
};
```

```cpp
auto pred = [=](TYPE value) {
    return condition;
};
```

```cpp
auto pred = [&](TYPE value) {
    total += value;
    return condition;
};
```

```cpp
count_if(begin, end, [](TYPE value) {
    return condition;
});
```

- `[]` capture nothing
- `[x]` capture `x` by value
- `[&x]` capture `x` by reference
- `[=]` capture used variables by value
- `[&]` capture used variables by reference

## Recursion

```cpp
void baseN(unsigned num, unsigned base) {
    if (num < base) {
        cout << num;
    }
    else {
        baseN(num / base, base);
        cout << num % base;
    }
}
```

```cpp
void baseN(unsigned num, unsigned base) {
    string digits = "0123456789ABCDEF";

    if (num < base) {
        cout << digits[num];
    }
    else {
        baseN(num / base, base);
        cout << digits[num % base];
    }
}
```

```cpp
bool isPalindrome(const string& s, int low, int high) {
    if (low >= high) return true;
    if (s[low] != s[high]) return false;
    return isPalindrome(s, low + 1, high - 1);
}
```

```cpp
int charCount(const char s[], int index = 0) {
    if (s[index] == '\0') return 0;
    return 1 + charCount(s, index + 1);
}
```

## Tree Patterns

```cpp
int treeMin(Node* root) {
    if (root == nullptr) return INT_MAX;
    return min(root->data, min(treeMin(root->left), treeMin(root->right)));
}
```

```cpp
int treeMax(Node* root) {
    if (root == nullptr) return INT_MIN;
    return max(root->data, max(treeMax(root->left), treeMax(root->right)));
}
```

```cpp
int treeMin(Node* root) {
    if (root == nullptr) return INT_MAX;

    return min(root->data,
           min(treeMin(root->left),
           min(treeMin(root->mid),
               treeMin(root->right))));
}
```

```cpp
int treeMax(Node* root) {
    if (root == nullptr) return INT_MIN;

    return max(root->data,
           max(treeMax(root->left),
           max(treeMax(root->mid),
               treeMax(root->right))));
}
```

## Singly Linked List Iterator

```cpp
class Iterator {
    Node* curr;

public:
    Iterator(Node* curr = nullptr) : curr(curr) {}

    TYPE& operator*() {
        return curr->data;
    }

    Iterator& operator++() {
        curr = curr->next;
        return *this;
    }

    Iterator operator++(int) {
        Iterator old = *this;
        curr = curr->next;
        return old;
    }

    bool operator==(const Iterator& rhs) const {
        return curr == rhs.curr;
    }

    bool operator!=(const Iterator& rhs) const {
        return curr != rhs.curr;
    }
};

Iterator begin() {
    return Iterator(head);
}

Iterator end() {
    return Iterator(nullptr);
}
```

```cpp
for (TYPE& value : container) {
    value *= 2;
}
```

- mutation in ranged-for requires `operator*()` to return `TYPE&`

## Singly Linked List Insert

```cpp
void push_front(TYPE value) {
    head = new Node(value, head);
}
```

```cpp
void push_back(TYPE value) {
    if (head == nullptr) {
        head = new Node(value);
        return;
    }

    Node* curr = head;
    while (curr->next != nullptr) {
        curr = curr->next;
    }
    curr->next = new Node(value);
}
```

## Copy Control

```cpp
ClassName& operator=(const ClassName& rhs) {
    if (this == &rhs) return *this;

    delete ptr;
    ptr = new TYPE(*rhs.ptr);
    data = rhs.data;

    return *this;
}
```

## Boolean Conversion

```cpp
explicit operator bool() const {
    return condition;
}
```

## Operator Overloading

| Operator | Usually | Why |
| --- | --- | --- |
| `=`, `[]`, `()`, `->` | member | required |
| `<<`, `>>` | non-member | left operand is stream |
| `+=`, `-=`, `*=`, `/=` | member | modifies left object |
| `+`, `-`, `*`, `/`, `==`, `!=`, `<` | non-member | symmetric conversions |
| unary `++`, `--`, `*`, `&` | member | acts on one object |
