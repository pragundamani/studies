# MA 2034 — Worksheet 3: Solutions

*Fall 2026 | Second-order linear DEs, damped motion, and resonance*

> All equations use **Obsidian inline MathJax** (`$...$`). Keep this note and the five `.png` images in the same Obsidian vault folder.

## Part A — Undamped Oscillations

### 1(a) Natural frequency

Given $x''+16x=0$, $x(0)=2$, and $x'(0)=0$.

The undamped mass–spring equation is $mx''+kx=0$. Here $m=1$, $k=16$, and $\omega_0=\sqrt{k/m}$. Thus **$\boxed{\omega_0=4\text{ rad/unit time}}$**. The period is $T=2\pi/4=\pi/2$.

### 1(b) Solve the IVP

The characteristic equation is $r^2+16=0$, giving $r=\pm4i$.

The general solution is $x(t)=C_1\cos(4t)+C_2\sin(4t)$.

Using $x(0)=2$ gives $C_1=2$. Differentiating yields $x'(t)=-4C_1\sin(4t)+4C_2\cos(4t)$. Since $x'(0)=0$, we have $4C_2=0$, so $C_2=0$.

**Answer: $\boxed{x(t)=2\cos(4t)}$.**

### 1(c) Computer graph, $0\le t\le10$

![[Part_A_Undamped.png]]

The amplitude stays constant at $2$. Without damping, the oscillations continue indefinitely.

## Part B — Damped Oscillations

### 2(a) Explicit solution

Given $x''+x'+16x=0$, $x(0)=2$, $x'(0)=0$.

The characteristic equation is $r^2+r+16=0$. By the quadratic formula, $r=(-1\pm\sqrt{1-64})/2=-1/2\pm i\sqrt{63}/2$.

Therefore $x(t)=e^{-t/2}\left[C_1\cos\left(\frac{\sqrt{63}}2t\right)+C_2\sin\left(\frac{\sqrt{63}}2t\right)\right]$.

From $x(0)=2$, $C_1=2$. Set $\omega_d=\sqrt{63}/2$. Differentiating and evaluating at zero gives $x'(0)=-C_1/2+\omega_dC_2=0$, so $C_2=C_1/(2\omega_d)=2/\sqrt{63}$.

**Answer: $\boxed{x(t)=e^{-t/2}\left[2\cos\left(\frac{\sqrt{63}}2t\right)+\frac{2}{\sqrt{63}}\sin\left(\frac{\sqrt{63}}2t\right)\right]}$.**

### 2(b) Computer graph

![[Part_B_Damped.png]]

### 2(c) How damping changes the motion

With no damping, the oscillation has constant amplitude. Adding $x'$ makes the amplitude decay exponentially; the damped angular frequency $\omega_d=\sqrt{63}/2\approx3.969$ is slightly smaller than the undamped frequency $4$. The motion remains oscillatory initially, but its displacement tends to equilibrium: **$\lim_{t\to\infty}x(t)=0$**.

### 2(d) Varying damping from $c=1$ through $c=4$

Consider $x''+cx'+16x=0$ with the same initial conditions. Each case is **underdamped** since $c<2\sqrt{16}=8$. Its oscillatory factor decays like $e^{-ct/2}$, and its frequency is $\omega_d=\sqrt{16-c^2/4}$.

| Damping $c$ | Decay factor | Damped frequency | Behavior |
|---|---|---|---|
| $1$ | $e^{-t/2}$ | $\sqrt{63}/2\approx3.969$ | Slow decay; many visible oscillations. |
| $2$ | $e^{-t}$ | $\sqrt{15}\approx3.873$ | Faster decay and slightly longer period. |
| $3$ | $e^{-3t/2}$ | $\sqrt{55}/2\approx3.708$ | Motion dies out even faster. |
| $4$ | $e^{-2t}$ | $\sqrt{12}\approx3.464$ | Fastest decay and longest period here. |

As $c$ increases, the oscillations decay faster and their frequency decreases. For every listed value, $x(t)\to0$ as $t\to\infty$.

## Part C — Forced Oscillations and Resonance

The physical bridge equation $1000x''+16000x=1000\cos(\omega t)$ simplifies to $x''+16x=\cos(\omega t)$.

### 3(a) Particular solution via MUC — show all work

We need a particular solution to $x''+16x=\cos(4t)$.

**Step 1 — Homogeneous equation.** The auxiliary equation $r^2+16=0$ has roots $\pm4i$, so $x_h=C_1\cos(4t)+C_2\sin(4t)$.

**Step 2 — Choose the correct trial.** Because $\cos(4t)$ and $\sin(4t)$ already solve the homogeneous equation, the standard trial overlaps with $x_h$. Multiply it by $t$:

$x_p=t\left(A\cos(4t)+B\sin(4t)\right)$.

**Step 3 — First derivative.** $x_p'=A\cos(4t)+B\sin(4t)+t\left(-4A\sin(4t)+4B\cos(4t)\right)$.

**Step 4 — Second derivative.** $x_p''=-8A\sin(4t)+8B\cos(4t)-16t\left(A\cos(4t)+B\sin(4t)\right)$.

**Step 5 — Substitute.** $x_p''+16x_p=-8A\sin(4t)+8B\cos(4t)=\cos(4t)$.

**Step 6 — Match coefficients.** $-8A=0\Rightarrow A=0$ and $8B=1\Rightarrow B=1/8$.

**Particular solution: $\boxed{x_p(t)=\frac t8\sin(4t)}$.** The complete solution is $x(t)=C_1\cos(4t)+C_2\sin(4t)+\frac t8\sin(4t)$.

### 3(b) Resonant frequency

The natural angular frequency is $\omega_0=\sqrt{16000/1000}=4$. The external force also uses $\omega=4$, so **$\boxed{\omega_{\mathrm{res}}=4\text{ rad/s}}$**.

### 3(c) Graph at resonance for $0\le t\le20$

With $x(0)=x'(0)=0$, the general solution gives $C_1=0$ and $4C_2=0$, so $C_2=0$.

**Answer: $\boxed{x(t)=\frac t8\sin(4t)}$.**

![[Part_C_Resonance.png]]

The amplitude envelope is $\pm t/8$, which grows linearly without bound in the ideal undamped model. This is exact resonance.

### 3(d) Beats when the forcing frequency is $4.5$

Now solve $x''+16x=\cos(4.5t)$ for $x(0)=x'(0)=0$ over $0\le t\le20$.

Since $4.5\ne4$, take $x_p=A\cos(4.5t)$. Substitution gives $(16-4.5^2)A\cos(4.5t)=\cos(4.5t)$, so $A=1/(16-20.25)=-4/17$.

Thus $x(t)=C_1\cos(4t)+C_2\sin(4t)-\frac4{17}\cos(4.5t)$. The initial conditions imply $C_1=4/17$ and $C_2=0$.

**Answer: $\boxed{x(t)=\frac4{17}[\cos(4t)-\cos(4.5t)]=\frac8{17}\sin(4.25t)\sin(0.25t)}$.**

![[Part_C_Beats.png]]

The fast oscillations alternately strengthen and weaken as the two nearby frequencies move into and out of phase. This is the **beats** phenomenon. The amplitude envelope is $\pm\frac8{17}|\sin(t/4)|$, so the amplitude stays bounded. The beat period is $T_{\mathrm{beat}}=2\pi/(4.5-4)=4\pi\approx12.57\text{ s}$.

## Part D — Conceptual Questions

### 1(a) Why damping is necessary

Damping removes vibrational energy, limits unwanted oscillations, reduces stresses and fatigue, and helps engineering systems return to stable operation after disturbances. Without sufficient damping, repeated vibrations can damage components, especially near resonance.

### 1(b) Two additional real-world examples

1. **Aircraft landing gear:** Hydraulic shock struts dissipate landing energy and limit bouncing after touchdown.
2. **Washing machines:** Drum dampers reduce shaking during the spin cycle, particularly with an unbalanced load.

### 2(a) What if damping is too high?

Excessive damping can make a system sluggish. If damping is above the critical value, the system is overdamped: it returns to equilibrium without oscillating and may do so slowly. High damping can also waste energy or hinder a system that needs to move quickly.

### 2(b) What if damping is too low?

The system oscillates for a long time and may experience large overshoot, unwanted motion, vibrations near resonance, fatigue, and possible structural damage.

### 3(a) Why is undamped resonance dangerous?

When forcing and natural frequencies coincide, energy can be added in phase with the oscillation on every cycle. In the ideal model with zero damping, amplitude grows without bound. A real system may experience excessive displacement, repeated stress, material fatigue, fracture, or failure before reaching such extreme motion.

### 3(b) Historical example — London's Millennium Bridge (2000)

The bridge developed strong sideways movement shortly after opening. Pedestrians' gait and the bridge's lateral motion reinforced each other, leading to unexpectedly large sway. The bridge was closed and later fitted with additional damping devices. This is an example of dangerous dynamic amplification; technically, it involved pedestrian–structure feedback, not merely the textbook case of a fixed-frequency external force.

### 4. Damped motion with forcing at the undamped natural frequency

Consider $x''+0.2x'+9x=\cos(3t)$.

The undamped natural frequency is $\omega_0=\sqrt9=3$, equal to the external driving frequency. However, $c=0.2>0$ prevents unlimited growth of amplitude.

**Find the particular solution.** Assume $x_p=A\cos(3t)+B\sin(3t)$. Since $x_p''+9x_p=0$, the differential equation reduces to $0.2x_p'=0.6B\cos(3t)-0.6A\sin(3t)=\cos(3t)$. Comparing coefficients gives $A=0$ and $B=1/0.6=5/3$.

The homogeneous characteristic equation $r^2+0.2r+9=0$ has roots $r=-0.1\pm i\sqrt{8.99}$.

**General solution: $\boxed{x(t)=e^{-0.1t}\left[C_1\cos(\sqrt{8.99}\,t)+C_2\sin(\sqrt{8.99}\,t)\right]+\frac53\sin(3t)}$.**

The first term is the **transient** and tends to zero; the second is the **steady state**. Thus $x(t)$ approaches the bounded periodic response **$\boxed{x_{\mathrm{ss}}(t)=\frac53\sin(3t)}$**, with amplitude $5/3$ rather than increasing indefinitely.

**Optional graph.** Since this question does not specify initial values, the graph below illustrates the case $x(0)=x'(0)=0$. In this case, $C_1=0$, $C_2=-5/\sqrt{8.99}$, and $x(t)=\frac53\sin(3t)-\frac5{\sqrt{8.99}}e^{-0.1t}\sin(\sqrt{8.99}\,t)$.

![[Part_D_Forced_Damped.png]]

#### 4(a) Can resonance occur with damping?

Yes. **Damped resonance** means an amplified but finite response near a resonant frequency. Unlike exact resonance without damping, it cannot grow without bound. Here the drive is at the undamped natural frequency $3$, and the steady-state amplitude is $5/3$.

#### 4(b) How does changing damping affect the motion and its long-term behavior?

For the general equation $x''+cx'+9x=\cos(3t)$ with $c>0$, MUC gives $x_{\mathrm{ss}}(t)=\frac1{3c}\sin(3t)$. Therefore higher $c$ produces **smaller steady-state amplitude**, whereas lower $c$ produces **larger steady-state amplitude**. For any $c>0$, the transient eventually vanishes and the long-term solution remains periodic (not zero because the forcing continues). With $c=0$, resonance produces an unbounded term $\frac t6\sin(3t)$ instead. Very large damping may also make the transient overdamped and slow, even while reducing the steady-state oscillation.

#### 4(c) How do initial values affect the motion and its long-term behavior?

Changing $x(0)$ and $x'(0)$ changes the constants $C_1$ and $C_2$, hence the initial transient only. Since $e^{-0.1t}\to0$, the long-term response for every set of initial values is the same: $x(t)\to x_{\mathrm{ss}}(t)=\frac53\sin(3t)$ in the sense that $x(t)-x_{\mathrm{ss}}(t)\to0$. The displacement itself keeps oscillating and does not approach a single constant.
