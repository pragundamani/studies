### a. func1(16)
1. 16
2. 14
3. 12
4. 10
5. 8
6. 6
7. 4
8. 2
9. 0
return: 80  
runtime: theta(n)

### b. func2(16)
1. 16
2. 8
3. 4
4. 2
5. 1
return: 5  
runtime: theta(log n)

### c. func3([2, 4, 6, 8, 10, 12])

| 2   | 4   | 6   | 8   | 10  | 12  |
| --- | --- | --- | --- | --- | --- |
| 2   | 4   | 6   | 8   | 10  |     |
| 2   | 4   | 6   | 8   |     |     |
| 2   | 4   | 6   |     |     |     |
| 2   | 4   |     |     |     |     |
| 2   |     |     |     |     |     |
return: 42  
runtime: theta(n²), because lists
### d. func4(64)
1. 64
2. 32
3. 16
4. 8
5. 4
6. 2
7. 1
return: 127  
runtime: theta(log n)
### e. func5(5)
1. 5
2. 4
3. 3
4. 2
5. 1
6. 0
return: 20  
runtime: theta(n²), loops

