---
id: exam 2
aliases:
  - exam 2
tags: []
---
# exam 2
Topics:
- [ ] Differentiation rules:- (sum, product quotient power, chain)
- [ ] derivatives library:- Library of functions exponents, trig, inverse trig, logs
- [ ] differentiability:-
- [ ] implicit:- (finding tangent line to a curve defined implicitly, find $y'$)
- [ ] logarithmic differentiation find $f(x)^{g(x)}$
- [ ] related rates
- [ ] linear approx
- [ ] max/min

# Calculus 1 Differentiation - A Refresher

## 3.1. Derivatives of Polynomials and Exponential Functions
This is the foundation. The derivative, $f'(x)$ or $\frac{dy}{dx}$, represents the **instantaneous rate of change** or the **slope of the tangent line**.

*   **Power Rule:** If $f(x) = x^n$, then $f'(x) = nx^{n-1}$.
    *   *Example:* $f(x) = x^4 \rightarrow f'(x) = 4x^3$
*   **Constant Multiple Rule:** $\frac{d}{dx}[cf(x)] = c f'(x)$.
    *   *Example:* $f(x) = 5x^2 \rightarrow f'(x) = 5 \cdot 2x = 10x$
*   **Sum/Difference Rule:** $\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$.
    *   *Example:* $f(x) = 3x^3 + 2x \rightarrow f'(x) = 9x^2 + 2$
*   **Exponential Function (base e):** $\frac{d}{dx}[e^x] = e^x$. (The function is its own derivative!)
*   **Constant Rule:** The derivative of a constant is 0.

## 3.2. The Product and Quotient Rules
These rules are for when you are multiplying or dividing two functions.

*   **Product Rule:** If $f(x)$ and $g(x)$ are both differentiable, then $\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$.
    *   *Mnemonic:* (First $\times$ Derivative of Second) + (Second $\times$ Derivative of First)
    *   *Example:* $f(x) = x^2 e^x \rightarrow f'(x) = (2x)(e^x) + (x^2)(e^x) = e^x(x^2 + 2x)$

*   **Quotient Rule:** If $f(x)$ and $g(x)$ are both differentiable, then $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$.
    *   *Mnemonic:* (Low $\times$ Derivative of High) - (High $\times$ Derivative of Low) / (Low)²
    *   *Example:* $f(x) = \frac{\sin x}{x} \rightarrow f'(x) = \frac{(\cos x)(x) - (\sin x)(1)}{x^2} = \frac{x \cos x - \sin x}{x^2}$

## 3.3. Derivatives of Trigonometric Functions
You need to memorize these.
*   $\frac{d}{dx}[\sin x] = \cos x$
*   $\frac{d}{dx}[\cos x] = -\sin x$
*   $\frac{d}{dx}[\tan x] = \sec^2 x$
*   $\frac{d}{dx}[\csc x] = -\csc x \cot x$
*   $\frac{d}{dx}[\sec x] = \sec x \tan x$
*   $\frac{d}{dx}[\cot x] = -\csc^2 x$

## 3.4. The Chain Rule
This is one of the most important rules. It's used for **composite functions** (functions within functions). If $y = f(g(x))$, then:
$$ \frac{dy}{dx} = f'(g(x)) \cdot g'(x) $$
*   *In words:* Derivative of the "outside" (with the inside plugged in) $\times$ Derivative of the "inside".
*   *Example:* $y = \sin(x^2)$. The "outside" is $\sin(\text{something})$ and the "inside" is $x^2$.
    *   $\frac{dy}{dx} = \cos(x^2) \cdot 2x = 2x \cos(x^2)$

## 3.5. Implicit Differentiation
Used when you can't easily solve for $y$ as an explicit function of $x$ (e.g., $x^2 + y^2 = 1$).
1.  Differentiate both sides of the equation with respect to $x$.
2.  Remember that $y$ is a function of $x$, so when you differentiate a term with $y$ in it, you must use the Chain Rule (multiply by $\frac{dy}{dx}$ or $y'$).
3.  Solve the resulting equation for $\frac{dy}{dx}$.
*   *Example:* Find $\frac{dy}{dx}$ for $x^2 + y^2 = 1$.
    *   Differentiate: $2x + 2y \frac{dy}{dx} = 0$
    *   Solve for $\frac{dy}{dx}$: $2y \frac{dy}{dx} = -2x \rightarrow \frac{dy}{dx} = -\frac{x}{y}$

## 3.6. Derivatives of Logarithmic Functions
*   **Natural Log:** $\frac{d}{dx}[\ln x] = \frac{1}{x}$, for $x > 0$.
*   **General Log:** $\frac{d}{dx}[\log_a x] = \frac{1}{x \ln a}$.
*   **Logarithmic Differentiation:** A powerful technique for complex functions, especially of the form $[f(x)]^{g(x)}$. Take the natural log of both sides, use log properties to simplify, then differentiate implicitly.

## 3.7. Rates of Change in the Natural and Social Sciences
This is the *application* of the derivative.
*   **Position, Velocity, Acceleration:** If $s(t)$ is position, then $v(t) = s'(t)$ is velocity and $a(t) = v'(t) = s''(t)$ is acceleration.
*   **General Interpretation:** In any context (biology, economics, etc.), $\frac{dy}{dx}$ tells you how the quantity $y$ changes with a one-unit change in $x$.

## 3.8. Exponential Growth and Decay
Models where the rate of change is proportional to the current amount.
*   **Equation:** $\frac{dy}{dt} = ky$
*   **Solution:** $y(t) = y_0 e^{kt}$
    *   If $k > 0$: Exponential Growth (e.g., population).
    *   If $k < 0$: Exponential Decay (e.g., radioactive material).

## 3.9. Related Rates
A classic application of the Chain Rule. You find the rate at which one quantity is changing by relating it to other quantities whose rates of change are known.
1.  Draw a diagram.
2.  Write down what you know and what you want to find.
3.  Find an equation that relates the variables.
4.  Differentiate both sides *with respect to time $t$*.
5.  Substitute the known values and solve for the unknown rate.

## 3.10. Linear Approximations and Differentials
Using the tangent line to approximate function values.
*   **Linearization of $f$ at $x=a$:** $L(x) = f(a) + f'(a)(x - a)$
*   **Differential:** $dy = f'(x) dx$. Represents the change in the linear approximation.

## 3.11. Hyperbolic Functions
Their definitions and derivatives are very similar to trig functions.
*   $\sinh x = \frac{e^x - e^{-x}}{2}$, $\cosh x = \frac{e^x + e^{-x}}{2}$, $\tanh x = \frac{\sinh x}{\cosh x}$
*   **Derivatives:**
    *   $\frac{d}{dx}[\sinh x] = \cosh x$
    *   $\frac{d}{dx}[\cosh x] = \sinh x$
    *   $\frac{d}{dx}[\tanh x] = \text{sech}^2 x$

---

## Quiz Time!

Try these problems.

**1. Find the derivative of $f(x) = 3x^4 - 2x^3 + \pi x - 10$.**

**2. Find the derivative of $g(x) = (x^2 + 1)(e^x - \cos x)$ using the Product Rule.**

**3. Find $\frac{dy}{dx}$ for $y = \sin(5x^3)$.**

**4. Use Implicit Differentiation to find $y'$ for the curve $x^3 + y^3 = 6xy$.**

**5. A 10-foot ladder is leaning against a wall. The bottom is sliding away at 1 ft/s. How fast is the top sliding down the wall when the bottom is 6 feet from the wall?**

**6. Find the linearization $L(x)$ of $f(x) = \sqrt{x}$ at $a = 25$. Use it to approximate $\sqrt{26}$.**




# Quiz answers
**1.**
$f'(x) = 12x^3 - 6x^2 + \pi$
*(Used Power Rule, Constant Multiple, and Sum/Difference Rules)*

**2.**
Let $f(x) = x^2+1$ and $g(x) = e^x - \cos x$.
$f'(x) = 2x$, $g'(x) = e^x + \sin x$.
Product Rule: $g'(x) = (2x)(e^x - \cos x) + (x^2+1)(e^x + \sin x)$.

**3.**
Outside function: $\sin(\text{something})$, derivative is $\cos(\text{something})$.
Inside function: $5x^3$, derivative is $15x^2$.
Chain Rule: $\frac{dy}{dx} = \cos(5x^3) \cdot 15x^2 = 15x^2 \cos(5x^3)$.

**4.**
Differentiate implicitly: $3x^2 + 3y^2 y' = 6y + 6x y'$.
Get terms with $y'$ on one side: $3y^2 y' - 6x y' = 6y - 3x^2$.
Factor out $y'$: $y'(3y^2 - 6x) = 6y - 3x^2$.
Solve for $y'$: $y' = \frac{6y - 3x^2}{3y^2 - 6x} = \frac{2y - x^2}{y^2 - 2x}$.

**5. (Related Rates)**
*   Known: $x=6$ ft, $\frac{dx}{dt} = 1$ ft/s. Ladder length $L=10$ ft (constant).
*   Relate variables: $x^2 + y^2 = 10^2$.
*   Differentiate w.r.t. $t$: $2x \frac{dx}{dt} + 2y \frac{dy}{dt} = 0$.
*   Find $y$ when $x=6$: $6^2 + y^2 = 100 \rightarrow y^2 = 64 \rightarrow y=8$ ft.
*   Substitute: $2(6)(1) + 2(8) \frac{dy}{dt} = 0 \rightarrow 12 + 16 \frac{dy}{dt} = 0$.
*   Solve: $\frac{dy}{dt} = -\frac{12}{16} = -0.75$ ft/s.
The top is sliding *down* at **0.75 ft/s**.

**6. (Linear Approximation)**
*   $f(x) = \sqrt{x}$, $a=25$.
*   $f(a) = \sqrt{25} = 5$.
*   $f'(x) = \frac{1}{2\sqrt{x}}$, so $f'(a) = \frac{1}{2\sqrt{25}} = \frac{1}{10} = 0.1$.
*   Linearization: $L(x) = 5 + 0.1(x - 25)$.
*   Approximate $\sqrt{26}$: $L(26) = 5 + 0.1(26 - 25) = 5 + 0.1 = 5.1$.
*(The actual value is about 5.099, so it's a good approximation.)*
 

