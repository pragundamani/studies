# 5.1  
a. $x=1$

b.

| $x$ | $y$ |
| --- | --- |
| $0$ | $0$ |
| $0$ | $1$ |
| $1$ | $0$ |

c. $x=1$

# 5.2  
a. $f=\overline{(a\cdot b)+b}$

b.

| $a$ | $b$ | AND | NOR |
| --- | --- | --- | --- |
| $0$ | $0$ | $0$ | $1$ |
| $0$ | $1$ | $0$ | $0$ |
| $1$ | $0$ | $0$ | $1$ |
| $1$ | $1$ | $1$ | $0$ |

c. $f=\overline{b}$

# 5.3  
a. $f=\overline{x\cdot y}+\overline{x}=(\overline{x}+\overline{y})+\overline{x}=\overline{x}+\overline{y}$

| $x$ | $y$ | $f$ |
| --- | --- | --- |
| $0$ | $0$ | $1$ |
| $0$ | $1$ | $1$ |
| $1$ | $0$ | $1$ |
| $1$ | $1$ | $0$ |
b.
$\overline{x_1}\cdot\overline{x_2}+\overline{x_1}+\overline{x_2}$  
$=(\overline{x_1}+\overline{x_2})+\overline{x_1}\cdot\overline{x_2}$  
$=\overline{x_1}+\overline{x_2}$

$\overline{x_1\cdot x_2}+\overline{x_1+x_2}$  
$=(\overline{x_1}+\overline{x_2})+(\overline{x_1}\cdot\overline{x_2})$  
$=\overline{x_1}+\overline{x_2}$

# 5.4  
https://circuitverse.org/simulator
a.
![[Pasted image 20260304165206.png]]

b.
![[Pasted image 20260304165814.png]]

c.
![[Pasted image 20260304170916.png]]

# 5.5

a.

1. NOt
    - $\text{NAND}(a,a)=\overline{a\cdot a}$
    - $a\cdot a=a$
    - $\text{NAND}(a,a)=\overline{a}$
2. Hardwired to 1
    - $\text{NAND}(1,b)=\overline{1\cdot b}$
    - $1\cdot b=b$
    - $\text{NAND}(1,b)=\overline{b}$
3. AND
    - $\text{NAND}(a,b)=\overline{a\cdot b}$
    - $\text{NAND}(\text{NAND}(a,b),\text{NAND}(a,b))$
    - $=\overline{\overline{a\cdot b}}$
    - $=a\cdot b$
4. OR
    - $\text{NAND}(a,a)=\overline{a}$
    - $\text{NAND}(b,b)=\overline{b}$
    - $\text{NAND}(\overline{a},\overline{b})$
	- $=\overline{\overline{a}\cdot\overline{b}}$
	- $=a+b$

b.
$f=(x_1\cdot\overline{x_2})+(x_2\cdot x_3)$
1. NOT
    - $n_1=\text{NAND}(x_2,x_2)=\overline{x_2}$
2. $x_1\cdot\overline{x_2}$
    - $t_{1n}=\text{NAND}(x_1,n_1)=\overline{x_1\cdot\overline{x_2}}$
    - $t_1=\text{NAND}(t_{1n},t_{1n})=x_1\cdot\overline{x_2}$
3. $x_2\cdot x_3$
    - $t_{2n}=\text{NAND}(x_2,x_3)=\overline{x_2\cdot x_3}$
    - $t_2=\text{NAND}(t_{2n},t_{2n})=x_2\cdot x_3$
4. OR
    - $o_1=\text{NAND}(t_1,t_1)=\overline{t_1}$
    - $o_2=\text{NAND}(t_2,t_2)=\overline{t_2}$
    - $f=\text{NAND}(o_1,o_2)=t_1+t_2$
