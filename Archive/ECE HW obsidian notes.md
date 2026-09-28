---
subject: Intro to ECE
date: 2026-02-12
tags:
  - #homework
aliases: []
id: ECE HW obsidian notes
---
# 2.1 
## $e^{j\pi t}= x(t) =\cos(\pi t)+ j\sin(\sin t)$
(a) $|x(t)| = |e^{j \pi t}|=1$
(b) Period $T = \frac{2\pi}{\pi} = 2\text{seconds}$ 
(c) As time increases $x(t)$ goes counter clockwise
(d) Velocity is $\frac{dx}{dt}=j\pi e^{j\pi t}$
(e)

| Time | $\frac{dx}{dt}$ |
| ---- | --------------- |
| 0    | $j\pi$          |
| 0.5  | $-\pi$          |
| 1    | $-j\pi$         |
| 1.5  | $\pi$           |
# 2.2
## $y(t)=e^{j\theta}=\cos(\theta)+j\sin(\theta)$
(a) by multiplying $j$ $j\cdot y(t) = j \cdot ( e^{j\theta})$ 
$\text{magnitude remains unchanges since its 1}$
$\text{Angle gets increased by} \space +\frac{\pi}{2} \text{ coutner clockwise}$ 
for example: $\theta = 0, y = 1$
$j \cdot 1 = j$
(1,0) moves over to (0,1)

(b) derivative in 2.1 $\frac{d}{dt}e^{j\theta}=j\pi e^{j\pi t}=\pi(j(y(t)))$
so derivative is multiplying by factor j and scale by $pi$


# 2.3

## $H(\text{dB}) = 10\log_{10}(X)$

(a) $X = 5{,}600{,}000$  
$X = 5.6\times10^6$  
$H = 10(\log 5.6 + 6)$  
$H \approx 10(0.748 + 6)$  
$H \approx 67.5\text{ dB}$

(b) $X = 0.0004056$  
$X = 4.056\times10^{-4}$  
$H = 10(\log 4.056 - 4)$  
$H \approx 10(0.608 - 4)$  
$H \approx -33.9\text{ dB}$

(c) $-65\text{ dB}$  
$-65 = 10\log X$  
$-6.5 = \log X$  
$X = 10^{-6.5} \approx 3.16\times10^{-7}$

(d) $210.5\text{ dB}$  
$210.5 = 10\log X$  
$21.05 = \log X$  
$X = 10^{21.05} \approx 1.12\times10^{21}$ 
