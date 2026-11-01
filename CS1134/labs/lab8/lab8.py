from ArrayQueue import *
from ArrayStack import *


def finalPrices(prices):
    answer = [0] * len(prices)
    s = ArrayStack()

    for i in range(len(prices) - 1, -1, -1):
        while not s.is_empty() and s.top() > prices[i]:
            s.pop()
        if s.is_empty():
            answer[i] = prices[i]
        else:
            answer[i] = prices[i] - s.top()
        s.push(prices[i])

    return answer


def lucky_draw(tickets):
    s = ArrayStack()

    for ticket in tickets:
        if not s.is_empty() and (s.top() + ticket) % 2 == 0:
            s.pop()
        else:
            s.push(ticket)

    return len(s)


def eval_prefix(exp_str):
    exp_lst = exp_str.split()
    s = ArrayStack()

    for char in reversed(exp_lst):
        if char.isdigit():
            s.push(int(char))
        else:
            left = s.pop()
            right = s.pop()
            if char == "+":
                s.push(left + right)
            elif char == "-":
                s.push(left - right)
            elif char == "*":
                s.push(left * right)
            else:
                s.push(left // right)

    return s.pop()


def reverse_prefix(q, k):
    s = ArrayStack()
    n = len(q)

    for _ in range(k):
        s.push(q.dequeue())
    while not s.is_empty():
        q.enqueue(s.pop())
    for _ in range(n - k):
        q.enqueue(q.dequeue())


class RecentCounter:
    def __init__(self, x):
        self.data = ArrayQueue()
        self.interval = x

    def ping(self, t):
        self.data.enqueue(t)
        while self.data.first() < t - self.interval:
            self.data.dequeue()
        return len(self.data)


def ticket_time(tickets, k):
    q = ArrayQueue()
    for i in range(len(tickets)):
        q.enqueue((i, tickets[i]))

    elapsed = 0
    while True:
        index, remaining = q.dequeue()
        elapsed += 1
        remaining -= 1

        if remaining == 0:
            if index == k:
                return elapsed
        else:
            q.enqueue((index, remaining))


# print(finalPrices([8, 4, 6, 2, 3])) # [4, 2, 4, 2, 3]

# print(lucky_draw([3, 8, 6, 5, 2])) # 1
# print(lucky_draw([7, 1, 3, 6, 2, 1, 2, 4, 8])) # 1

# print(eval_prefix("- + * 16 5 * 8 4 20")) # 92

# q = ArrayQueue()
# for value in [10, 20, 30, 40, 50]:
#     q.enqueue(value)
# reverse_prefix(q, 3)
# print(q) # [30, 20, 10, 40, 50]

# counter = RecentCounter(3000)
# print(counter.ping(10)) # 1
# print(counter.ping(20)) # 2
# print(counter.ping(3010)) # 3
# print(counter.ping(3011)) # 3
# print(counter.ping(7000)) # 1

# print(ticket_time([2, 1, 3], 0)) # 4
# print(ticket_time([1, 2, 1], 1)) # 4
# print(ticket_time([3], 0)) # 3
