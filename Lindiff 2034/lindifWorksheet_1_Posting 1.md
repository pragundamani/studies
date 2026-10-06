# Differential Equations Worksheet 1 — Exponential Models

## Question 1 — Alligator Population

Given $\frac{dP}{dt}=kP$, $P(0)=400$, and $P(5)=500$, where $t$ is years.

### (a) Interpretation

**Circle B and D** (D is understood to mean that the percentage *growth rate* is constant).

- **B:** $\frac{dP}{dt}=kP$ says the change rate is proportional to the current population.
- **D:** dividing by $P$ gives $\frac{1}{P}\frac{dP}{dt}=k$, so the relative (percentage) growth rate is constant.
- **A:** fixed growth would require $\frac{dP}{dt}=k$, not $\frac{dP}{dt}=kP$.
- **C:** $k$ is a rate constant, not a population value.
- **E:** if $k>0$ and $P>0$, then $\frac{dP}{dt}=kP>0$ for every positive $P$.

> [!note]
> Strictly, D says “percentage growth ... increases at a constant rate,” but this model makes the percentage growth rate constant. The expected worksheet interpretation is B and D.

### (b) Solve the differential equation

1. Start with $\frac{dP}{dt}=kP$.
2. Divide by $P$: $\frac{1}{P}\frac{dP}{dt}=k$.
3. Multiply by $dt$: $\frac{1}{P}\,dP=k\,dt$.
4. Integrate: $\int\frac{1}{P}\,dP=\int k\,dt$.
5. This gives $\ln|P|=kt+C_1$.
6. Exponentiate: $|P|=e^{kt+C_1}=e^{C_1}e^{kt}$.
7. Since $P>0$, let $C=e^{C_1}$; then $P(t)=Ce^{kt}$.
8. Apply $P(0)=400$: $400=Ce^{k(0)}=Ce^0=C$.

Therefore $P(t)=400e^{kt}$.

### (c) Determine $k$

1. Apply $P(5)=500$: $500=400e^{5k}$.
2. Divide by $400$: $\frac{500}{400}=e^{5k}$.
3. Simplify: $\frac54=e^{5k}$.
4. Take $\ln$ of both sides: $\ln\left(\frac54\right)=5k$.
5. Divide by $5$: $k=\frac{\ln(5/4)}5\approx0.04463\text{ yr}^{-1}$.

The particular solution is $P(t)=400e^{(\ln(5/4)/5)t}=400\left(\frac54\right)^{t/5}$.

### (d) Predict the population

1. Start with the exponential form: $P(15)=400e^{(\ln(5/4)/5)(15)}$.
2. Simplify the factor multiplying $\ln(5/4)$: $P(15)=400e^{(15/5)\ln(5/4)}=400e^{3\ln(5/4)}$.
3. Use $e^{\ln a}=a$: $P(15)=400\left(e^{\ln(5/4)}\right)^3=400\left(\frac54\right)^3$.
4. Cube the fraction and multiply: $P(15)=400\left(\frac{125}{64}\right)=781.25$.

Approximately **781 alligators** will be present after 15 years.

### (e) Doubling $k$

1. Replacing $k$ with $2k$ gives $P_{\text{new}}(t)=400e^{2kt}$. It has the same initial value, but it rises more rapidly and is steeper for $t>0$.
2. It is not twice the original population at every time, because $\frac{P_{\text{new}}(t)}{P(t)}=\frac{400e^{2kt}}{400e^{kt}}=e^{kt}$, which depends on $t$. The ratio is $2$ only when $e^{kt}=2$, or $t=\frac{\ln2}{k}$.

### (f) Long-term behavior

Since $k>0$, $e^{kt}\to\infty$ as $t\to\infty$. Thus $\lim_{t\to\infty}P(t)=\lim_{t\to\infty}400e^{kt}=\infty$. This is unrealistic because food, space, disease, and other environmental limits prevent unlimited growth.

---

## Question 2 — A Message from Space

Given $\frac{dS}{dt}=-kS$, $k>0$, $S(0)=80$, and $S(6)=50$, where $t$ is years.

### (a) Find the model

1. Begin with $\frac{dS}{dt}=-kS$.
2. Divide by $S$, then multiply by $dt$: $\frac{1}{S}\,dS=-k\,dt$.
3. Integrate: $\int\frac{1}{S}\,dS=\int-k\,dt$, so $\ln|S|=-kt+C_1$.
4. Exponentiate and let $C=e^{C_1}$: $S(t)=Ce^{-kt}$.
5. Apply $S(0)=80$: $80=Ce^{-k(0)}=C$, so $S(t)=80e^{-kt}$.
6. Apply $S(6)=50$: $50=80e^{-6k}$.
7. Divide by $80$: $\frac58=e^{-6k}$.
8. Take $\ln$: $\ln\left(\frac58\right)=-6k$.
9. Divide by $-6$: $k=-\frac16\ln\left(\frac58\right)=\frac16\ln\left(\frac85\right)\approx0.07833\text{ yr}^{-1}$.

The particular solution is $S(t)=80e^{-(\ln(8/5)/6)t}$.

### (b) Signal strength of 10 units

1. Set $S(t)=10$: $10=80e^{-kt}$.
2. Divide by $80$: $\frac18=e^{-kt}$.
3. Take $\ln$: $\ln\left(\frac18\right)=-kt$.
4. Since $\ln(1/8)=-\ln8$, $-\ln8=-kt$.
5. Divide by $-k$: $t=\frac{\ln8}{k}$.
6. Substitute $k=\frac{\ln(8/5)}6$: $t=\frac{6\ln8}{\ln(8/5)}\approx26.55$ years.

### (c) Reducing the decay constant

1. A $50\%$ reduction gives $k_{\text{new}}=k-0.50k=\frac{k}{2}$. Hence $S_{\text{new}}(t)=80e^{-(k/2)t}$. It decreases more slowly and lies above the original curve for $t>0$.
2. For the original half-life, set $40=80e^{-kt}$, so $\frac12=e^{-kt}$, $\ln(1/2)=-kt$, and $t_{1/2}=\frac{\ln2}{k}$. The new half-life is $\frac{\ln2}{k/2}=\frac{2\ln2}{k}=2t_{1/2}$. It doubles.

### (d) Long-term behavior

Because $k>0$, $e^{-kt}\to0$ as $t\to\infty$. Therefore $\lim_{t\to\infty}S(t)=0$. It never equals zero at finite time because $80e^{-kt}>0$ for every finite $t$.

---

## Question 3 — A Meteorite in the Laboratory

Given $\frac{dT}{dt}=k(20-T)$, $k>0$, $T(0)=-20^\circ\mathrm{C}$, and $T(30)=0^\circ\mathrm{C}$, where $t$ is minutes.

### (a) Find the model

1. Start with $\frac{dT}{dt}=k(20-T)$.
2. Divide by $20-T$, then multiply by $dt$: $\frac{1}{20-T}\,dT=k\,dt$.
3. Integrate: $\int\frac{1}{20-T}\,dT=\int k\,dt$.
4. Since the derivative of $20-T$ is $-1$, this gives $-\ln|20-T|=kt+C_1$.
5. Multiply by $-1$: $\ln|20-T|=-kt+C_2$.
6. Exponentiate: $20-T=Ce^{-kt}$.
7. Solve for $T$: $T(t)=20+C_3e^{-kt}$.
8. Apply $T(0)=-20$: $-20=20+C_3e^0=20+C_3$, so $C_3=-40$.
9. Thus $T(t)=20-40e^{-kt}$.
10. Apply $T(30)=0$: $0=20-40e^{-30k}$.
11. Subtract $20$ and divide by $-40$: $\frac12=e^{-30k}$.
12. Take $\ln$: $\ln(1/2)=-30k$.
13. Since $\ln(1/2)=-\ln2$, $-\ln2=-30k$.
14. Divide by $-30$: $k=\frac{\ln2}{30}\approx0.02310\text{ min}^{-1}$.

The particular solution is $T(t)=20-40e^{-(\ln2/30)t}$.

### (b) Reach $15^\circ\mathrm{C}$

1. Set $T(t)=15$: $15=20-40e^{-kt}$.
2. Subtract $20$: $-5=-40e^{-kt}$.
3. Divide by $-40$: $\frac18=e^{-kt}$.
4. Take $\ln$: $\ln(1/8)=-kt$.
5. Replace $\ln(1/8)$ with $-\ln8$: $-\ln8=-kt$.
6. Divide by $-k$: $t=\frac{\ln8}{k}$.
7. Substitute $k=\frac{\ln2}{30}$: $t=\frac{30\ln8}{\ln2}$.
8. Since $\ln8=3\ln2$, $t=\frac{30(3\ln2)}{\ln2}=90$ minutes.

### (c) Increasing $k$

A larger positive $k$ makes $e^{-kt}$ decrease faster. Therefore $T(t)=20-40e^{-kt}$ rises more quickly, has a steeper initial slope, and approaches $20^\circ\mathrm{C}$ sooner. Since $e^{-kt}\to0$, $\lim_{t\to\infty}T(t)=20-40(0)=20^\circ\mathrm{C}$, so the eventual temperature does not change.

### (d) Changing the room temperature

At $25^\circ\mathrm{C}$, the model is $\frac{dT}{dt}=k(25-T)$. The meteorite approaches the new room temperature, so $\lim_{t\to\infty}T(t)=25^\circ\mathrm{C}$.

### (e) Mathpad sketches

Each line below produces one graph: part (a), part (c), then part (d). Here $x$ is time in minutes.

```mathpad
plot(20-40*exp(-(log(2)/30)*x),20,[0,150],[-30,30])
plot(20-40*exp(-(log(2)/30)*x),20-40*exp(-(log(2)/15)*x),20,[0,150],[-30,30])
plot(20-40*exp(-(log(2)/30)*x),25-45*exp(-(log(2)/30)*x),20,25,[0,150],[-30,35])
```
