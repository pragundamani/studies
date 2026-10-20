---
tags:
  - flashcards/physics
  - quiz-5
  - homework-6
  - gauss-law
---
## Class Examples

### Example 1 — Gauss’s law
What is Gauss’s law?
?
For any closed surface, $\Phi_E=\oint \vec E\cdot d\vec A=\frac{Q_{\mathrm{enc}}}{\epsilon_0}$.
Only the net enclosed charge determines the net flux.
Charges outside the surface can change the local electric field but contribute zero net flux.

### Example 2 — Symmetry
When can Gauss’s law be used to find the electric field easily?
?
The charge distribution must have enough spherical, cylindrical, or planar symmetry to make the field magnitude constant on the useful part of the Gaussian surface.
Gauss’s law always gives net flux, but it does not always determine the field at each point.

### Example 3 — Infinite sheet
What is the electric field of one infinite sheet with surface charge density $\sigma$?
?
Its magnitude on either side is $E=\frac{|\sigma|}{2\epsilon_0}$.
The field points away from a positive sheet and toward a negative sheet.

### Example 4 — Infinite line charge
What is the electric field of an infinite line charge?
?
For enclosed line charge density $\lambda_{\mathrm{enc}}$, $E=\frac{|\lambda_{\mathrm{enc}}|}{2\pi\epsilon_0r}$.
The field is outward for positive $\lambda_{\mathrm{enc}}$ and inward for negative $\lambda_{\mathrm{enc}}$.

## Homework 6 Questions

### HW06 #1 — Flux through a sphere
A sphere encloses $q_2=1.05\,\mathrm{nC}$ and $q_3=-2.85\,\mathrm{nC}$, while $q_1$ is outside.
Find the net electric flux.
?
The enclosed charge is $Q_{\mathrm{enc}}=q_2+q_3=-1.80\,\mathrm{nC}$.
Thus $\Phi_E=\frac{-1.80\times10^{-9}}{8.854\times10^{-12}}=\boxed{-203\,\mathrm{N\,m^2/C}}$.

### HW06 #2 — Several Gaussian surfaces
The enclosed charges for $S_1,S_2,S_3,S_4$ are $-Q,0,-2Q,0$.
Find the flux through each surface.
?
By $\Phi_E=Q_{\mathrm{enc}}/\epsilon_0$, $\boxed{\Phi_{S_1}=-\frac{Q}{\epsilon_0}}$.
$\boxed{\Phi_{S_2}=0}$.
$\boxed{\Phi_{S_3}=-\frac{2Q}{\epsilon_0}}$.
$\boxed{\Phi_{S_4}=0}$.

### HW06 #3 — Charge inside a cube
A cube encloses $q_1=2.99\,\mathrm{nC}$, while $q_2$ is outside.
Find the net flux and state whether Gauss’s law determines the field on the cube.
?
The net flux is $\Phi_E=\frac{q_1}{\epsilon_0}=\boxed{338\,\mathrm{N\,m^2/C}}$.
No, because the charge arrangement does not have enough symmetry to make the field uniform or normal over the cube.

### HW06 #4 — Uniform fields and closed surfaces
Find the net flux through a sphere in a uniform field and through a cylinder whose two circular ends each have outward field $E$ and radius $R$.
?
The sphere has equal entering and leaving flux, so $\boxed{\Phi_{\mathrm{sphere}}=0}$.
The curved cylinder surface has zero flux, and each end contributes $E\pi R^2$.
Therefore, $\boxed{\Phi_{\mathrm{cylinder}}=2\pi R^2E}$.
The cylinder contains a positive net charge $\boxed{Q_{\mathrm{enc}}=2\pi\epsilon_0R^2E}$.

### HW06 #5 — Flux through one cube face
A cube contains $Q=4.90\,\mu\mathrm C$ and six symmetric charges of $q=-0.50\,\mu\mathrm C$.
Find the flux through one face.
?
The total enclosed charge is $Q_{\mathrm{enc}}=4.90+6(-0.50)=1.90\,\mu\mathrm C$.
Symmetry divides the total flux equally among six faces.
Thus $\Phi_{\mathrm{face}}=\frac{Q_{\mathrm{enc}}}{6\epsilon_0}=\boxed{35.8\,\mathrm{kN\,m^2/C}}$.

### HW06 #6 — Two infinite sheets
For a left sheet $+\sigma$ and a right sheet $-\sigma$, find the field to the left, between, and to the right.
Then repeat when both sheets have $+\sigma$.
?
For $+\sigma$ and $-\sigma$, the fields are $\boxed{0}$, $\boxed{\sigma/\epsilon_0}$ to the right, and $\boxed{0}$.
For two $+\sigma$ sheets, the fields are $\boxed{\sigma/\epsilon_0}$ to the left, $\boxed{0}$, and $\boxed{\sigma/\epsilon_0}$ to the right.
Each sheet contributes $\sigma/(2\epsilon_0)$, so use superposition.

### HW06 #7 — Unequal positive sheets
The lower and upper sheets have $\sigma_A=3.00\times10^{-12}\,\mathrm{C/m^2}$ and $\sigma_B=2.00\times10^{-12}\,\mathrm{C/m^2}$.
Find the field between them, with upward positive.
?
Between the sheets, the lower sheet points upward and the upper sheet points downward.
Thus $E=\frac{\sigma_A-\sigma_B}{2\epsilon_0}=\boxed{+0.0565\,\mathrm{N/C}}$.

### HW06 #8 — Two cylindrical shells
Two infinite cylindrical shells have $R_1=2.00\,\mathrm m$, $\lambda_1=1.50\times10^{-9}\,\mathrm{C/m}$, $R_2=4.00\,\mathrm m$, and $\lambda_2=-2.50\times10^{-9}\,\mathrm{C/m}$.
Find the field at $r=1.00\,\mathrm m$, $3.00\,\mathrm m$, and $5.00\,\mathrm m$.
?
At $r=1.00\,\mathrm m$, no charge is enclosed, so $\boxed{E=0}$.
At $r=3.00\,\mathrm m$, only $\lambda_1$ is enclosed, so $\boxed{E=8.99\,\mathrm{N/C}}$ outward.
At $r=5.00\,\mathrm m$, $\lambda_{\mathrm{enc}}=\lambda_1+\lambda_2=-1.00\times10^{-9}\,\mathrm{C/m}$, so $\boxed{E=3.60\,\mathrm{N/C}}$ inward.

### HW06 #9 — Line charge inside an insulating shell
A positive line charge $\lambda$ lies on the axis of an insulating cylindrical shell with density $\rho$, inner radius $a$, and outer radius $b$.
Find the field in all three radial regions.
?
For $r<a$, $\boxed{E=\frac{\lambda}{2\pi\epsilon_0r}}$ outward.
For $a<r<b$, $\boxed{E=\frac{\lambda+\rho\pi(r^2-a^2)}{2\pi\epsilon_0r}}$ outward when the numerator is positive.
For $r>b$, $\boxed{E=\frac{\lambda+\rho\pi(b^2-a^2)}{2\pi\epsilon_0r}}$ outward when the numerator is positive.
The density that makes the outside field zero is $\boxed{\rho=-\frac{\lambda}{\pi(b^2-a^2)}}$.

### HW06 #10 — Uniformly charged solid sphere
A solid insulating sphere of radius $a$ has uniform charge and total charge $Q$.
Find the electric flux as a function of Gaussian radius $r$.
?
For $r<a$, the enclosed fraction of the charge is $r^3/a^3$.
Thus $\boxed{\Phi_E=\frac{Qr^3}{\epsilon_0a^3}}$ for $r<a$.
For $r\ge a$, all charge is enclosed, so $\boxed{\Phi_E=\frac{Q}{\epsilon_0}}$.
The graph rises cubically to $Q/\epsilon_0$ at $r=a$ and then remains constant.

### HW06 #11 — Proton orbit outside a charged shell
A charge of $-60.0\,\mathrm{nC}$ is at the center of a shell with $r_1=0.200\,\mathrm m$, $r_2=0.290\,\mathrm m$, and $\rho=-1.15\,\mu\mathrm{C/m^3}$.
Find the speed of a proton orbiting just outside the shell.
?
The shell charge is $Q_{\mathrm{shell}}=\rho\frac{4\pi}{3}(r_2^3-r_1^3)=\boxed{-78.95\,\mathrm{nC}}$.
The total enclosed charge is $Q_{\mathrm{tot}}=\boxed{-138.95\,\mathrm{nC}}$.
Just outside the shell, the field magnitude is $E=\frac{k_e|Q_{\mathrm{tot}}|}{r_2^2}=1.48\times10^4\,\mathrm{N/C}$ inward.
Set the electric force equal to the centripetal force: $eE=m_pv^2/r_2$.
Therefore, $v=\sqrt{\frac{k_ee|Q_{\mathrm{tot}}|}{m_pr_2}}=\boxed{6.42\times10^5\,\mathrm{m/s}}$.
