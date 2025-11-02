---
id: Calc 1
aliases: []
tags: []
---
$d/dx(x^n)=nx^{n-1}$
$y=x^n$
$\ln y=n\ln x$
$\frac{y'}{y}=n\cdot \frac{1}{x}$
$y'=n\times \frac{y}{x}$


if $y=3^{\sin x}$

$\frac{d}{du}(3^u) \to \frac{d}{dx}=3^u\cdot \cos x\cdot \ln_{3} \text{ when constant is base ln(constant) is multiplied}$ 

if $y=\sin x^{3}$
$\frac{d}{dx}(\sin x)^{3} \to 3\sin^2(x)\cos x$

if $y=\text{function of x} \text{  use logarithmic derivative}$
$y=x^{\sin x}$
$\ln y=\sin x\ln x$
$\frac{y'}{y}=\frac{d}{dx}\sin x\ln x \to \frac{d}{dx}\sin x \cdot \ln x +\frac{d}{dx}\ln x\cdot \sin x$ 


##### Practice
a) $\frac{d}{dx}=((1+\sqrt{x})^{(3x-1)})$
b) $ \frac{d}{dx}(x^{(x^{x})}) \text{note} (x^{(x^{x})}) \neq (x^x)^{x}$ 
:
###### solving
a) $y=(3x-1)\ln(1+\sqrt{ x })$ 
$\frac{y'}{y}=3\ln(1+\sqrt{ x })+\frac{(3x-1)\cdot\left( \frac{1}{2\sqrt{ x }} \right)}{1+\sqrt{ x }}$
$y'=\frac{(1+\sqrt{ x })^{(3x-1)}\cdot 3\ln(1+\sqrt{ x })\cdot(3x-1)}{2\sqrt{ x }(1+\sqrt{ x })}$

b) $y=x^{(x^x )} \to \ln y = x^{x}\ln x$
$\frac{y'}{y}=\frac{d}{dx}(x^x\cdot \ln x)$
$\frac{du}{dx}\cdot \ln x+\frac{x^x}{x}$
$u=x^x \to \ln u=x\ln x$
$\frac{du}{dx}=x^{x}\cdot (\ln x+1)$
$\frac{y'}{y}=x^{x}\cdot (\ln x+1)\cdot \ln x+\frac{x^x}{x}$
$y'=x^{(x^{x})}\cdot x^{x}\cdot (\ln x+1)\cdot \ln x+\frac{x^x}{x}$



## Application of derivatives
