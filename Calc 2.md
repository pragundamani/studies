---
tags:
  - #flashcards/math
aliases: []
id: Calc 2
---
# COMPLETE DERIVATIVE SET (Official 36)

## Algebra

$\frac{d}{dx}(c)$ :: $0$

$\frac{d}{dx}(x)$ :: $1$

$\frac{d}{dx}(cu)$ :: $c \space du$ 

$\frac{d}{dx}(u \pm v)$ :: $\space du \pm v'$

$\frac{d}{dx}(uv)$ :: $\space duv + uv'$

$\frac{d}{dx}\left(\frac{u}{v}\right)$ :: $\frac{v \space du - u v'}{v^2}$

$\frac{d}{dx}(u^n)$ :: $n u^{n-1} \space du$

---

## Exponential & Logarithmic

$\frac{d}{dx}(e^u)$ :: $e^u \space du$

$\frac{d}{dx}(a^u)$ :: $(\ln a)a^u \space du$

$\frac{d}{dx}(\ln u)$ :: $\frac{\space du}{u}$

$\frac{d}{dx}(\log_a u)$ :: $\frac{\space du}{(\ln a)u}$

$\frac{d}{dx}(\sqrt{u})$ :: $\frac{\space du}{2\sqrt{u}}$

---

## Trigonometric

$\frac{d}{dx}(\sin u)$ :: $(\cos u)\space du$

$\frac{d}{dx}(\cos u)$ :: $-(\sin u)\space du$

$\frac{d}{dx}(\tan u)$ :: $(\sec^2 u)\space du$

$\frac{d}{dx}(\cot u)$ :: $-(\csc^2 u)\space du$

$\frac{d}{dx}(\sec u)$ :: $(\sec u \tan u)\space du$

$\frac{d}{dx}(\csc u)$ :: $-(\csc u \cot u)\space du$

---

## Inverse Trig

$\frac{d}{dx}(\arcsin u)$ :: $\frac{\space du}{\sqrt{1-u^2}}$

$\frac{d}{dx}(\arccos u)$ :: $-\frac{\space du}{\sqrt{1-u^2}}$

$\frac{d}{dx}(\arctan u)$ :: $\frac{\space du}{1+u^2}$

$\frac{d}{dx}(\arccot u)$ :: $-\frac{\space du}{1+u^2}$

$\frac{d}{dx}(\arcsec u)$ :: $\frac{\space du}{|u|\sqrt{u^2-1}}$

$\frac{d}{dx}(\arccsc u)$ :: $-\frac{\space du}{|u|\sqrt{u^2-1}}$

---

## Hyperbolic

$\frac{d}{dx}(\sinh u)$ :: $(\cosh u)\space du$

$\frac{d}{dx}(\cosh u)$ :: $(\sinh u)\space du$

$\frac{d}{dx}(\tanh u)$ :: $(\sech^2 u)\space du$

$\frac{d}{dx}(\coth u)$ :: $-(\csch^2 u)\space du$

$\frac{d}{dx}(\sech u)$ :: $-(\sech u \tanh u)\space du$

$\frac{d}{dx}(\csch u)$ :: $-(\csch u \coth u)\space du$

---

## Inverse Hyperbolic

$\frac{d}{dx}(\sinh^{-1} u)$ :: $\frac{\space du}{\sqrt{u^2+1}}$

$\frac{d}{dx}(\cosh^{-1} u)$ :: $\frac{\space du}{\sqrt{u^2-1}}$

$\frac{d}{dx}(\tanh^{-1} u)$ :: $\frac{\space du}{1-u^2}$

$\frac{d}{dx}(\coth^{-1} u)$ :: $\frac{\space du}{1-u^2}$

$\frac{d}{dx}(\sech^{-1} u)$ :: $-\frac{\space du}{u\sqrt{1-u^2}}$

$\frac{d}{dx}(\csch^{-1} u)$ :: $-\frac{\space du}{|u|\sqrt{1+u^2}}$

---

# COMPLETE INTEGRATION SET (Official 18)

## Basic

$\int du$ :: $u + C$

$\int kf(u),du$ :: $k\int f(u),du$

$\int (f(u) \pm g(u)),du$ :: $\int f(u),du \pm \int g(u),du$

---

## Exponential & Log

$\int e^u,du$ :: $e^u + C$

$\int a^u,du$ :: $\frac{a^u}{\ln a} + C$

---

## Trigonometric

$\int \sin u,du$ :: $-\cos u + C$

$\int \cos u,du$ :: $\sin u + C$

$\int \tan u,du$ :: $-\ln|\cos u| + C$

$\int \cot u,du$ :: $\ln|\sin u| + C$

$\int \sec u,du$ :: $\ln|\sec u + \tan u| + C$

$\int \csc u,du$ :: $-\ln|\csc u + \cot u| + C$

$\int \sec^2 u,du$ :: $\tan u + C$

$\int \csc^2 u,du$ :: $-\cot u + C$

$\int \sec u \tan u,du$ :: $\sec u + C$

$\int \csc u \cot u,du$ :: $-\csc u + C$

---

## Inverse Forms

$\int \frac{du}{a^2 + u^2}$ :: $\frac{1}{a}\arctan\left(\frac{u}{a}\right) + C$

$\int \frac{du}{\sqrt{a^2 - u^2}}$ :: $\arcsin\left(\frac{u}{a}\right) + C$

$\int \frac{du}{u\sqrt{u^2 - a^2}}$ :: $\frac{1}{a}\sec^{-1}\left(\frac{|u|}{a}\right) + C$

---

# TRIGONOMETRIC IDENTITIES

$\sin^2 x + \cos^2 x$ :: $1$

$1 + \tan^2 x$ :: $\sec^2 x$

$1 + \cot^2 x$ :: $\csc^2 x$

$\tan x$ :: $\frac{\sin x}{\cos x}$

$\cot x$ :: $\frac{\cos x}{\sin x}$

$\sin(-x)$ :: $-\sin x$

$\cos(-x)$ :: $\cos x$

$\tan(-x)$ :: $-\tan x$

$\sin(2x)$ :: $2\sin x \cos x$

$\cos(2x)$ :: $\cos^2 x - \sin^2 x$

$\tan(2x)$ :: $\frac{2\tan x}{1-\tan^2 x}$

$\sin^2 x$ :: $\frac{1-\cos(2x)}{2}$

$\cos^2 x$ :: $\frac{1+\cos(2x)}{2}$

---

# FUNDAMENTAL THEOREM OF CALCULUS

$\frac{d}{dx}\left(\int_a^x f(t),dt\right)$ :: $f(x)$

$\frac{d}{dx}\left(\int_a^{g(x)} f(t),dt\right)$ :: $f(g(x))g'(x)$

$\int_a^b f(x),dx$ :: $F(b)-F(a)$ where $F'(x)=f(x)$

---

# IMPROPER INTEGRALS

$\int_a^\infty f(x),dx$ :: $\lim_{b\to\infty}\int_a^b f(x),dx$

$\int_{-\infty}^a f(x),dx$ :: $\lim_{b\to-\infty}\int_b^a f(x),dx$

If $f$ has vertical asymptote at $c$, $\int_a^b f(x),dx$ :: $\lim_{t\to c^-}\int_a^t f(x),dx + \lim_{t\to c^+}\int_t^b f(x),dx$

---

# U-SUBSTITUTION

$u$ :: $g(x)$

$du$ :: $g'(x),dx$

$\int f(g(x))g'(x),dx$ :: $\int f(u),du$

---

# INTEGRATION BY PARTS

$\int u,dv$ :: $uv - \int v,du$

ILATE priority :: Inverse, Log, Algebraic, Trig, Exponential

---

# TRIG SUBSTITUTION

For $\sqrt{a^2 - x^2}$, $x$ :: $a\sin\theta$ and $dx$ = $a\cos\theta,d\theta$

For $\sqrt{a^2 + x^2}$, $x$ :: $a\tan\theta$ $dx$ = $a\sec^2\theta,d\theta$

For $\sqrt{x^2 - a^2}$, $x$ :: $a\sec\theta$ $dx$ = $a\sec\theta\tan\theta,d\theta$

---

# NUMERICAL INTEGRATION

$\Delta x$ :: $\frac{b-a}{n}$

$L_n$ :: $\sum_{i=1}^{n} f(x_{i-1})\Delta x$

$R_n$ :: $\sum_{i=1}^{n} f(x_i)\Delta x$

$M_n$ :: $\sum_{i=1}^{n} f\left(\frac{x_{i-1}+x_i}{2}\right)\Delta x$

$T_n$ :: $\frac{\Delta x}{2}\left[f(x_0)+2\sum_{i=1}^{n-1}f(x_i)+f(x_n)\right]$

$S_n$ :: $\frac{\Delta x}{3}\left[f(x_0)+4\sum_{\text{odd}}f(x_i)+2\sum_{\text{even}}f(x_i)+f(x_n)\right]$

Simpson condition :: $n$ must be even

# Polynomial Division Cheat Sheet

---

## Method 1: Long Division (Algorithm)

Given:
$$ \frac{P(x)}{D(x)} $$

### Step 1
Write in descending powers.  
Insert missing terms (use 0 coefficients).

### Step 2
Divide leading terms:
$$ \frac{\text{lead}(P)}{\text{lead}(D)} $$

### Step 3
Multiply divisor by that result.

### Step 4
Subtract.

### Step 5
Bring down next term.

Repeat Steps 2–5 until:
$\deg(R) < \deg(D)$

### Final Form
$$
\frac{P(x)}{D(x)} = Q(x) + \frac{R(x)}{D(x)}
$$

---


## Method 2: Unknown Coefficients (ABCD Method)

If:
$$ \deg(P)=n, \quad \deg(D)=m $$

Then assume:
$\frac{P(x)}{D(x)} = Ax^{n-m}+Bx^{n-m-1}+\dots + \frac{\text{remainder (degree < m)}}{D(x)}$

### Step 1
Multiply both sides by $D(x)$.

### Step 2
Expand completely.

### Step 3
Match coefficients of equal powers.

### Step 4
Solve from highest power downward.

---

## Key Rules

- Quotient degree = $n-m$
- Remainder degree < divisor degree
- Long division = stepwise solving
- ABCD = system of equations solving
