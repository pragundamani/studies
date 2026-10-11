# MA 2034 Worksheet 2 Answers

## Part I — Understanding the Logistic Model

The model is

$$
\frac{dP}{dt}=0.75P\left(1-\frac{P}{1200}\right)
$$

### 1.

$r=0.75$ is the natural growth rate. When the population is small, it grows at about $75\%$ per year.

$K=1200$ is the carrying capacity.

$$
\therefore \text{ the environment can support about }1200\text{ alligators.}
$$

### 2.

$P(0)=300<1200$, so

$$
P'>0
$$

Therefore, the population increases and approaches $1200$ alligators.

### 3.

$P(0)=1400>1200$, so

$$
P'<0
$$

Therefore, the population decreases and approaches $1200$ alligators.

### 4.

The natural growth is greatest at half the carrying capacity.

$$
P=\frac{1200}{2}=600
$$

$$
\therefore \text{ maximum growth occurs at }600\text{ alligators.}
$$

---

# Part II — Constant Harvesting

The model is

$$
\frac{dP}{dt}=0.75P\left(1-\frac{P}{1200}\right)-h
$$

## 1. Equilibria

### a.

At equilibrium,

$$
\frac{dP}{dt}=0
$$

Therefore,

$$
0=0.75P\left(1-\frac{P}{1200}\right)-h
$$

$$
0=0.75P-\frac{P^2}{1600}-h
$$

Multiply by $-1600$:

$$
\boxed{P^2-1200P+1600h=0}
$$

### b.

Using the quadratic formula,

$$
P=\frac{1200\pm\sqrt{(-1200)^2-4(1)(1600h)}}{2}
$$

$$
\boxed{P=\frac{1200\pm\sqrt{1,\!440,\!000-6400h}}{2}}
$$

### c.

For two different equilibria, the discriminant must be positive.

$$
1,\!440,\!000-6400h>0
$$

$$
6400h<1,\!440,\!000
$$

$$
\boxed{h<225}
$$

---

## 2. Harvesting 45 Alligators per Year

### a.

Let $h=45$.

$$
P^2-1200P+1600(45)=0
$$

$$
P^2-1200P+72,\!000=0
$$

$$
P=\frac{1200\pm\sqrt{1,\!440,\!000-288,\!000}}{2}
$$

$$
P=\frac{1200\pm\sqrt{1,\!152,\!000}}{2}
$$

$$
P\approx63.34,\ 1136.66
$$

$$
\therefore \boxed{P\approx63\text{ and }P\approx1137}
$$

### b. Phase line

```text
      P'<0             P'>0                P'<0
  ←──────────●─────────────────●──────────────←
           63.34            1136.66
```

### c.

At $P=63.34$, the arrows point away.

$$
\therefore P=63.34\text{ is unstable.}
$$

At $P=1136.66$, the arrows point toward it.

$$
\therefore P=1136.66\text{ is stable.}
$$

### d.

$$
63.34<500<1136.66
$$

The phase-line arrow points right.

$$
\therefore P(t)\to1136.66
$$

The population increases toward about $1137$ alligators.

### e.

$$
50<63.34
$$

The phase-line arrow points left.

$$
\therefore \text{ the population decreases to extinction.}
$$

### f.

The smaller equilibrium is the minimum safe population.

If the population falls below about $63$ alligators, natural growth cannot replace the harvest.

$$
\therefore \text{ the population will collapse.}
$$

---

## 3. Harvesting 135 Alligators per Year

### a.

Let $h=135$.

$$
P^2-1200P+1600(135)=0
$$

$$
P^2-1200P+216,\!000=0
$$

$$
P=\frac{1200\pm\sqrt{1,\!440,\!000-864,\!000}}{2}
$$

$$
P=\frac{1200\pm\sqrt{576,\!000}}{2}
$$

$$
P\approx220.53,\ 979.47
$$

$$
\therefore \boxed{P\approx221\text{ and }P\approx979}
$$

### b. Phase line

```text
      P'<0             P'>0               P'<0
  ←──────────●────────────────●──────────────←
          220.53            979.47
```

### c.

$$
\boxed{P=220.53\text{ is unstable}}
$$

$$
\boxed{P=979.47\text{ is stable}}
$$

### d.

$$
220.53<600<979.47
$$

The arrow points right.

$$
\therefore P(t)\to979.47
$$

The population increases toward about $979$ alligators.

### e.

$$
200<220.53
$$

The arrow points left.

$$
\therefore \text{ the population decreases to extinction.}
$$

### f.

When harvesting increases:

- the lower unstable equilibrium increases;
- the upper stable equilibrium decreases;
- the two equilibria become closer.

$$
\therefore \text{ the safe population range becomes smaller.}
$$

---

# Part III — Maximum Sustainable Harvest

The natural population growth is

$$
G(P)=0.75P\left(1-\frac{P}{1200}\right)
$$

## 1.

The maximum occurs at half the carrying capacity.

$$
P=\frac{1200}{2}
$$

$$
\boxed{P=600}
$$

## 2.

$$
G(600)=0.75(600)\left(1-\frac{600}{1200}\right)
$$

$$
G(600)=450\left(\frac12\right)
$$

$$
\boxed{G(600)=225}
$$

The maximum natural growth is $225$ alligators per year.

## 3.

The largest sustainable harvest equals the maximum natural growth.

$$
\boxed{h_{\max}=225\text{ alligators per year}}
$$

## 4.

When $h=225$,

$$
P'=0.75P\left(1-\frac{P}{1200}\right)-225
$$

This can be written as

$$
P'=-\frac{(P-600)^2}{1600}
$$

Therefore, $P'\le0$ on both sides of $600$.

```text
          P'<0                 P'<0
  ←────────────────●────────────────────←
                  600
```

$P=600$ is stable from above but unstable from below.

## 5.

If the population starts slightly above $600$, it decreases toward $600$.

$$
\therefore P(t)\to600
$$

## 6.

If the population starts slightly below $600$, it continues decreasing.

$$
\therefore \text{ the population eventually becomes extinct.}
$$

## 7.

Real populations are affected by disease, weather, food, and measurement errors.

A small decrease below $600$ would cause the population to collapse.

$$
\therefore \text{ harvesting exactly }225\text{ is too risky.}
$$

---

# Part IV — Bifurcation

The equilibrium formula is

$$
P^*(h)=\frac{1200\pm\sqrt{1,\!440,\!000-6400h}}{2}
$$

| $h$ | Lower equilibrium | Upper equilibrium |
|---:|---:|---:|
| $0$ | $0$ | $1200$ |
| $90$ | $135.24$ | $1064.76$ |
| $180$ | $331.67$ | $868.33$ |
| $225$ | $600$ | $600$ |

### Calculations

For $h=0$:

$$
P=\frac{1200\pm1200}{2}
$$

$$
P=0,\ 1200
$$

For $h=90$:

$$
P=\frac{1200\pm\sqrt{864,\!000}}{2}
$$

$$
P\approx135.24,\ 1064.76
$$

For $h=180$:

$$
P=\frac{1200\pm\sqrt{288,\!000}}{2}
$$

$$
P\approx331.67,\ 868.33
$$

For $h=225$:

$$
P=\frac{1200\pm0}{2}
$$

$$
P=600
$$

### Diagram

- Plot the upper equilibria with a solid curve.
- Plot the lower equilibria with a dashed curve.
- The two curves meet at $(225,600)$.

### a.

As $h$ increases, the lower equilibrium rises and the upper equilibrium falls.

They meet when

$$
\boxed{h=225,\quad P^*=600}
$$

For $h>225$, there are no equilibrium populations.

$$
\therefore P'<0\text{ for all }P
$$

Therefore, the population collapses.

---

# Part V — Fertilizer Runoff

## 1.

$$
\text{Rate in}=(10)(3)
$$

$$
\boxed{\text{Rate in}=30\text{ tons/day}}
$$

## 2.

The lake contains $Q(t)$ tons in $500$ million gallons.

$$
\boxed{\text{Concentration}=\frac{Q(t)}{500}}
$$

The units are tons per million gallons.

## 3.

$$
\text{Rate out}=(10)\left(\frac{Q}{500}\right)
$$

$$
\boxed{\text{Rate out}=\frac{Q}{50}\text{ tons/day}}
$$

## 4.

Using

$$
\text{Rate of change}=\text{Rate in}-\text{Rate out}
$$

we get

$$
\boxed{\frac{dQ}{dt}=30-\frac{Q}{50}}
$$

## 5.

At equilibrium,

$$
Q'=0
$$

$$
0=30-\frac{Q}{50}
$$

$$
\frac{Q}{50}=30
$$

$$
\boxed{Q=1500\text{ tons}}
$$

## 6.

Initially, $Q(0)=200$.

$$
Q'(0)=30-\frac{200}{50}
$$

$$
Q'(0)=30-4=26
$$

Since $Q'(0)>0$,

$$
\therefore \text{ the fertilizer amount initially increases.}
$$

## 7.

Solve

$$
Q'=30-\frac{Q}{50}
$$

Rewrite:

$$
Q'+\frac{1}{50}Q=30
$$

The equilibrium solution is $Q=1500$, so

$$
Q(t)=1500+Ce^{-t/50}
$$

Use $Q(0)=200$:

$$
200=1500+C
$$

$$
C=-1300
$$

Therefore,

$$
\boxed{Q(t)=1500-1300e^{-t/50}}
$$

## 8.

As $t\to\infty$,

$$
e^{-t/50}\to0
$$

Therefore,

$$
\boxed{\lim_{t\to\infty}Q(t)=1500\text{ tons}}
$$

The lake approaches $1500$ tons because the fertilizer entering and leaving becomes equal.

---

# Reducing the Runoff

The new concentration entering the lake is $0.5$ tons per million gallons.

## a.

The new input rate is

$$
(10)(0.5)=5\text{ tons/day}
$$

Therefore,

$$
\boxed{Q'=5-\frac{Q}{50}}
$$

The initial condition is

$$
Q(0)=1500
$$

## b.

At equilibrium,

$$
0=5-\frac{Q}{50}
$$

$$
\frac{Q}{50}=5
$$

$$
\boxed{Q=250\text{ tons}}
$$

## c.

The lake initially contains $1500$ tons.

$$
1500>250
$$

Therefore, the fertilizer amount decreases toward $250$ tons.

## d.

The new solution is

$$
Q(t)=250+Ce^{-t/50}
$$

Use $Q(0)=1500$:

$$
1500=250+C
$$

$$
C=1250
$$

Therefore,

$$
Q(t)=250+1250e^{-t/50}
$$

At $t=25$:

$$
Q(25)=250+1250e^{-25/50}
$$

$$
Q(25)=250+1250e^{-0.5}
$$

$$
\boxed{Q(25)\approx1008.16\text{ tons}}
$$

Reducing the runoff does not immediately remove the existing pollution. The fertilizer leaves gradually with the outgoing water.

## e.

After $50$ days:

$$
Q(50)=250+1250e^{-1}
$$

$$
\boxed{Q(50)\approx709.85\text{ tons}}
$$

After $100$ days:

$$
Q(100)=250+1250e^{-2}
$$

$$
\boxed{Q(100)\approx419.17\text{ tons}}
$$

After $150$ days:

$$
Q(150)=250+1250e^{-3}
$$

$$
\boxed{Q(150)\approx312.23\text{ tons}}
$$

---

# Connecting the Two Models

In the alligator model, equilibrium means natural population growth equals the number harvested. In the lake model, equilibrium means the fertilizer input equals the fertilizer output. An equilibrium is not always good because it may represent a population close to collapse or a lake with too much pollution.
