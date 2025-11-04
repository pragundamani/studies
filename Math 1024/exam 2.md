---
id: exam 2
aliases:
  - exam 2
tags: []
---
# exam 2
Topics:
- [x] Differentiation rules:- (sum, product quotient power, chain)
- [x] derivatives library:- Library of functions exponents, trig, inverse trig, logs
- [x] differentiability:-
- [x] implicit:- (finding tangent line to a curve defined implicitly, find $y'$)
- [x] logarithmic differentiation find $f(x)^{g(x)}$
- [x] related rates
- [x] linear approx
- [x] max/min

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
	* for $e^{xy} \text{ the }\frac{d}{dx}=e^{xy}(x \frac{dy}{dx}+y)$
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
### Normal trig
*   $\frac{d}{dx}[\sin x] = \cos x$
*   $\frac{d}{dx}[\cos x] = -\sin x$
*   $\frac{d}{dx}[\tan x] = \sec^2 x$
*   $\frac{d}{dx}[\csc x] = -\csc x \cot x$
*   $\frac{d}{dx}[\sec x] = \sec x \tan x$
*   $\frac{d}{dx}[\cot x] = -\csc^2 x$
### Inverse trig
* $\frac{d}{dx}\sin ^{-1}(x)=\frac{1}{\sqrt{ 1-u^{2} }}\cdot \frac{du}{dx}$
* $\frac{d}{dx}\cos ^{-1}(x)=\frac{-1}{\sqrt{ 1-u^{2} }}\cdot \frac{du}{dx}$
* $\frac{d}{dx}\tan ^{-1}(x)=\frac{1}{1+u^{2}}\cdot \frac{du}{dx}$
* $\frac{d}{dx}\csc^{-1}=\frac{-1}{|u|\sqrt{ u^{2}-1 }}\cdot \frac{du}{dx}$
* $\frac{d}{dx}\sec^{-1}(x)=\frac{1}{|u|\sqrt{ u^{2}-1 }}\cdot \frac{du}{dx}$
* $\frac{d}{dx}\cot^{-1}(x)=\frac{-1}{1+u^2}\cdot \frac{du}{dc}$

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
### ferris wheel
1. **Given:** $R = \text{[Radius]}$, $\omega = \frac{d\theta}{dt} = \text{[Angular Speed]}$.
2. **Height Eq:** $h = R + R\sin\theta$.
3. **Differentiate:** $\frac{dh}{dt} = R\cos\theta \cdot \omega$.
4. **Find θ:** $\sin\theta = \frac{h - R}{R}$, so $\theta = \arcsin\left(\frac{h - R}{R}\right)$. (Choose the quadrant matching "rising" or "falling").
5. **Substitute:** $\frac{dh}{dt} = R \cdot \omega \cdot \cos\theta$.
6. **Final Answer:** $\frac{dh}{dt} = \text{[Number with units]}$.
### conical pile
1. **Given:** $\frac{dV}{dt} = \text{[Rate of volume change]}$, ratio $\frac{h}{r} = \text{[Constant]}$.
2. **Relation:** $r = k h$, where $k = \frac{r}{h}$.
3. **Volume Eq:** $V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi (k h)^2 h = \frac{1}{3}\pi k^2 h^3$.
4. **Differentiate:** $\frac{dV}{dt} = \pi k^2 h^2 \frac{dh}{dt}$.
5. **Solve for height rate:** $\frac{dh}{dt} = \frac{\frac{dV}{dt}}{\pi k^2 h^2}$.
6. **Final Answer:** $\frac{dh}{dt} = \text{[Number with units]}$.
### ladder sliding
1. **Given:** Ladder length $L = \text{[Constant]}$, $\frac{dx}{dt} = \text{[Rate bottom moves]}$.
2. **Relation:** $x^2 + y^2 = L^2$.
3. **Differentiate:** $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$.
4. **Solve for wall rate:** $\frac{dy}{dt} = -\frac{x}{y}\frac{dx}{dt}$.
5. **Find $y$:** $y = \sqrt{L^2 - x^2}$.
6. **Substitute:** $\frac{dy}{dt} = -\frac{x}{\sqrt{L^2 - x^2}}\frac{dx}{dt}$.
7. **Final Answer:** $\frac{dy}{dt} = \text{[Number with units]}$.
### spherical balloon
1. **Given:** $\frac{dV}{dt} = \text{[Rate of volume change]}$.
2. **Volume Eq:** $V = \frac{4}{3}\pi r^3$.
3. **Differentiate:** $\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$.
4. **Solve for radius rate:** $\frac{dr}{dt} = \frac{\frac{dV}{dt}}{4\pi r^2}$.
5. **Substitute values:** plug in given $\frac{dV}{dt}$ and $r$.
6. **Final Answer:** $\frac{dr}{dt} = \text{[Number with units]}$
### shadow
1. **Given:** Person height $h_p=\text{[person height]}$, lamp height $h_l=\text{[lamp height]}$, $\frac{dx}{dt}=\text{[person speed toward/away from lamp]}$ (positive away).
2. **Similar Triangles:** $\dfrac{h_l}{s+x}=\dfrac{h_p}{s}$ where $x$ = distance person from lamp base, $s$ = shadow length.
3. **Solve for }s{:} $s=\dfrac{h_p x}{h_l - h_p}$.
4. **Differentiate:** $\dfrac{ds}{dt}=\dfrac{h_p}{h_l-h_p}\cdot\dfrac{dx}{dt}$
5. **Interpret sign:** if $\dfrac{dx}{dt}>0$ the shadow lengthens (or shortens depending on heights).
6. **Final Answer:** $\displaystyle \frac{ds}{dt}=\text{[Number with units]}$.

## 3.10. Linear Approximations and Differentials
Using the tangent line to approximate function values.
*   **Linearization of $f$ at $x=a$:** $L(x) = f(a) + f'(a)(x - a)$
*   **Differential:** $dy = f'(x) dx$. Represents the change in the linear approximation.

## 3.11. Hyperbolic Functions
Their definitions and derivatives are very similar to trig functions.
*   $\sinh x = \frac{e^x - e^{-x}}{2}$, $\cosh x = \frac{e^x + e^{-x}}{2}$, $\tanh x = \frac{\sinh x}{\cosh x}$
*   **Derivatives:**
    *   $\frac{d}{dx}[\sinh x] = \cosh x$
    *   $\frac{d}{dx}[\cosh x] \sinh x$
    *   $\frac{d}{dx}[\tanh x] = \text{sech}^2 x$



## Assorted
- bound, periodic functions have max/min at boundries
- critical point is when $f'(x) = 0\text{ or }f'(x)=DNE$
- 