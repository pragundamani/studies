---
tags:
  - flashcards/physics/quiz6
  - quiz-6
  - homework-6
  - gauss-law
---
## Quiz 6 Questions

### Quiz 6 #1 — Net flux through a spherical surface
The charges are $q_1=+3Q$, $q_2=-7Q$, and $q_3=+11Q$.
Determine the net electric flux $\oint \vec E\cdot d\vec A$ through the spherical surface shown.
Express the answer only in terms of $Q$, $\epsilon_0$, and constants of nature.
![[quiz-06-q1-gauss-law.png]]
?
The sphere encloses $q_2$ and $q_3$, while $q_1$ is outside.
Thus $Q_{\mathrm{enc}}=q_2+q_3=-7Q+11Q=4Q$.
By Gauss’s law, $\oint \vec E\cdot d\vec A=Q_{\mathrm{enc}}/\epsilon_0$.
Therefore, $\boxed{\Phi_E=\frac{4Q}{\epsilon_0}}$.
The positive sign means the net flux is outward.

### Quiz 6 #2 — Electric field between infinite sheets
Two infinite thin sheets have uniform surface charge densities $+\sigma$ on the upper sheet and $-\sigma$ on the lower sheet.
They are separated by a distance $d$.
Point $A$ is $d/5$ below the positive sheet, and point $B$ is $d/5$ above the negative sheet.
Determine the electric-field magnitude and direction at $A$ and $B$.
Express the answers using only $\sigma$, $d$, and constants of nature.
![[quiz-06-q2-infinite-sheets.png]]
?
Each infinite sheet produces a field of magnitude $\sigma/(2\epsilon_0)$ independent of distance.
Between the sheets, both contributions point from the positive sheet toward the negative sheet.
Thus the contributions add at both points.
Therefore, $\boxed{E_A=E_B=\frac{\sigma}{\epsilon_0}}$, directed downward.
The distance $d$ does not appear in the final answer.

## Homework 6 Questions

### HW06 #1 — Flux through a sphere
A spherical surface encloses $q_2=+1.05\,\mathrm{nC}$ and $q_3=-2.85\,\mathrm{nC}$, while $q_1=+2.18\,\mathrm{nC}$ is outside.
Find the net electric flux through the sphere.
![[webassign-hw06-q1.gif]]
?
By Gauss’s law, $\Phi_E=Q_{\mathrm{enc}}/\epsilon_0$.
The enclosed charge is $Q_{\mathrm{enc}}=q_2+q_3=1.05-2.85=-1.80\,\mathrm{nC}$.
The outside charge $q_1$ contributes zero net flux.
Thus $\Phi_E=\frac{-1.80\times10^{-9}}{8.854\times10^{-12}}=\boxed{-203\,\mathrm{N\,m^2/C}}$.

### HW06 #2 — Several Gaussian surfaces
The figure shows four closed surfaces $S_1$ through $S_4$ and charges $-2Q$, $+Q$, and $-Q$.
Find the electric flux through each surface.
![[webassign-hw06-q2.gif]]
?
For each closed surface, apply Gauss’s law, $\Phi_E=Q_{\mathrm{enc}}/\epsilon_0$.
A positive flux is net outward, and a negative flux is net inward.
$S_1$ encloses $-2Q+Q=-Q$, so $\boxed{\Phi_{S_1}=-\frac{Q}{\epsilon_0}}$.
$S_2$ encloses $Q-Q=0$, so $\boxed{\Phi_{S_2}=0}$.
$S_3$ encloses all three charges, whose sum is $-2Q$, so $\boxed{\Phi_{S_3}=-\frac{2Q}{\epsilon_0}}$.
$S_4$ encloses no charge, so $\boxed{\Phi_{S_4}=0}$.

### HW06 #3 — Charge inside a cube
A cube encloses $q_1=+2.99\,\mathrm{nC}$, while $q_2=7.54\,\mathrm{nC}$ is outside.
Find the net flux through the cube.
Can Gauss’s law determine the electric field on the cube’s surface?
![[webassign-hw06-q3.gif]]
?
Only $q_1$ is enclosed, so $\Phi_E=q_1/\epsilon_0=\boxed{338\,\mathrm{N\,m^2/C}}$.
No, because the charge arrangement does not have enough symmetry to make the field uniform or normal over the cube.
The outside charge can affect the local field even though it contributes zero net flux.

### HW06 #4 — Uniform fields and closed surfaces
Find the net flux through the closed spherical surface in Figure a.
Find the net flux through the closed cylindrical surface in Figure b, whose two circular ends each have outward field $E$ and radius $R$.
State what can be concluded about the charges inside the cylinder.
![[webassign-hw06-q4.gif]]
?
Use $\Phi_E=\oint \vec E\cdot d\vec A$ and add the flux through every part of each closed surface.
For the sphere, the uniform field entering one side leaves the other side, so the contributions cancel and $\boxed{\Phi_{\mathrm{sphere}}=0}$.
For the cylinder, the field is parallel to the curved surface, so its curved-surface flux is zero.
Each circular end has area $\pi R^2$ and field normal to the surface, so each contributes $E\pi R^2$.
Therefore, $\boxed{\Phi_{\mathrm{cylinder}}=2\pi R^2E}$.
By Gauss’s law, $Q_{\mathrm{enc}}=\epsilon_0\Phi_E=\boxed{2\pi\epsilon_0R^2E}$, so the net enclosed charge is positive.

### HW06 #5 — Flux through one cube face
A cube of edge $L=0.100\,\mathrm m$ contains a central charge $Q=4.90\,\mu\mathrm C$ and six identical charges $q=-0.50\,\mu\mathrm C$ arranged symmetrically around it.
Find the electric flux through one face of the cube.
![[webassign-hw06-q5.gif]]
?
The total enclosed charge is $Q_{\mathrm{enc}}=4.90+6(-0.50)=1.90\,\mu\mathrm C$.
Symmetry divides the total flux equally among six faces.
Thus $\Phi_{\mathrm{face}}=\frac{Q_{\mathrm{enc}}}{6\epsilon_0}=\boxed{35.8\,\mathrm{kN\,m^2/C}}$.

### HW06 #6 — Two infinite sheets
Two very large parallel nonconducting sheets have surface charge densities $+\sigma$ on the left and $-\sigma$ on the right.
Find the magnitude and direction of the electric field to the left, between, and to the right of the sheets.
Then repeat when both sheets have surface charge density $+\sigma$.
![[webassign-hw06-q6.gif]]
?
One infinite sheet produces a field of magnitude $\sigma/(2\epsilon_0)$ on each side.
The field points away from a positive sheet and toward a negative sheet.
For $+\sigma$ on the left and $-\sigma$ on the right, the two fields oppose and cancel outside the sheets.
Between the sheets, both fields point to the right and add to $\sigma/(2\epsilon_0)+\sigma/(2\epsilon_0)=\sigma/\epsilon_0$.
Thus the fields from left to right are $\boxed{0}$, $\boxed{\sigma/\epsilon_0}$ to the right, and $\boxed{0}$.
For two $+\sigma$ sheets, both fields point left in the left region, oppose between the sheets, and point right in the right region.
Thus the fields from left to right are $\boxed{\sigma/\epsilon_0}$ to the left, $\boxed{0}$, and $\boxed{\sigma/\epsilon_0}$ to the right.

### HW06 #7 — Unequal positive sheets
The lower and upper sheets have $\sigma_A=3.00\times10^{-12}\,\mathrm{C/m^2}$ and $\sigma_B=2.00\times10^{-12}\,\mathrm{C/m^2}$.
Find the field between them, with upward positive.
![[webassign-hw06-q7.png]]
?
Each positive infinite sheet produces a field of magnitude $\sigma/(2\epsilon_0)$ directed away from the sheet.
Between the sheets, the lower sheet produces an upward field and the upper sheet produces a downward field.
Taking upward as positive gives $E=\frac{\sigma_A}{2\epsilon_0}-\frac{\sigma_B}{2\epsilon_0}=\frac{\sigma_A-\sigma_B}{2\epsilon_0}$.
Substituting the values gives $E=\frac{(3.00-2.00)\times10^{-12}}{2(8.85\times10^{-12})}=\boxed{+0.0565\,\mathrm{N/C}}$.
The positive sign means the net field points upward.

### HW06 #8 — Two cylindrical shells
Two infinite cylindrical shells have $R_1=2.00\,\mathrm m$, $\lambda_1=1.50\times10^{-9}\,\mathrm{C/m}$, $R_2=4.00\,\mathrm m$, and $\lambda_2=-2.50\times10^{-9}\,\mathrm{C/m}$.
Find the field at $r=1.00\,\mathrm m$, $3.00\,\mathrm m$, and $5.00\,\mathrm m$.
![[webassign-hw06-q8.png]]
?
Choose a coaxial Gaussian cylinder of radius $r$ and length $L$.
Cylindrical symmetry makes $E$ constant on the curved surface, while the end-cap flux is zero.
Gauss’s law gives $E(2\pi rL)=\lambda_{\mathrm{enc}}L/\epsilon_0$, so $E=|\lambda_{\mathrm{enc}}|/(2\pi\epsilon_0r)$.
At $r=1.00\,\mathrm m$, no charge is enclosed, so $\boxed{E=0}$ with no direction.
At $r=3.00\,\mathrm m$, $\lambda_{\mathrm{enc}}=\lambda_1=1.50\times10^{-9}\,\mathrm{C/m}$.
Thus $E=\frac{1.50\times10^{-9}}{2\pi(8.854\times10^{-12})(3.00)}=\boxed{8.99\,\mathrm{N/C}}$ outward.
At $r=5.00\,\mathrm m$, $\lambda_{\mathrm{enc}}=\lambda_1+\lambda_2=-1.00\times10^{-9}\,\mathrm{C/m}$.
Thus $E=\frac{1.00\times10^{-9}}{2\pi(8.854\times10^{-12})(5.00)}=\boxed{3.60\,\mathrm{N/C}}$ inward.

### HW06 #9 — Line charge inside an insulating shell
A positive line charge with density $\lambda$ lies on the axis of an insulating cylindrical shell with volume charge density $\rho$, inner radius $a$, and outer radius $b$.
Find the field for $r<a$, $a<r<b$, and $r>b$.
Find the value of $\rho$ that makes the electric field zero for $r>b$.
?
Choose a coaxial Gaussian cylinder of radius $r$ and length $L$.
Gauss’s law gives $E(2\pi rL)=Q_{\mathrm{enc}}/\epsilon_0$.
For $r<a$, only the line charge is enclosed, so $Q_{\mathrm{enc}}=\lambda L$ and $\boxed{E=\frac{\lambda}{2\pi\epsilon_0r}}$ outward.
For $a<r<b$, the enclosed shell volume is $\pi(r^2-a^2)L$.
Thus $Q_{\mathrm{enc}}=\lambda L+\rho\pi(r^2-a^2)L$ and $\boxed{E=\frac{\lambda+\rho\pi(r^2-a^2)}{2\pi\epsilon_0r}}$.
For $r>b$, the entire shell volume $\pi(b^2-a^2)L$ is enclosed.
Thus $Q_{\mathrm{enc}}=\lambda L+\rho\pi(b^2-a^2)L$ and $\boxed{E=\frac{\lambda+\rho\pi(b^2-a^2)}{2\pi\epsilon_0r}}$.
The field is outward when the numerator is positive and inward when it is negative.
For zero field outside, set the numerator equal to zero and obtain $\boxed{\rho=-\frac{\lambda}{\pi(b^2-a^2)}}$.

### HW06 #10 — Uniformly charged solid sphere
A solid insulating sphere of radius $a$ has uniform charge and total charge $Q$.
Find the electric flux as a function of Gaussian radius $r$.
![[webassign-hw06-q10-c1.gif]]
![[webassign-hw06-q10-c2.gif]]
![[webassign-hw06-q10-c3.gif]]
![[webassign-hw06-q10-c4.gif]]
?
Uniform volume charge density makes enclosed charge proportional to enclosed volume.
For $r<a$, $Q_{\mathrm{enc}}=Q\frac{(4\pi/3)r^3}{(4\pi/3)a^3}=Q\frac{r^3}{a^3}$.
Gauss’s law gives $\Phi_E=Q_{\mathrm{enc}}/\epsilon_0$, so $\boxed{\Phi_E=\frac{Qr^3}{\epsilon_0a^3}}$ for $r<a$.
For $r\ge a$, the Gaussian sphere encloses all the charge, so $Q_{\mathrm{enc}}=Q$ and $\boxed{\Phi_E=\frac{Q}{\epsilon_0}}$.
The flux rises cubically from zero to $Q/\epsilon_0$ at $r=a$ and then remains constant.
Therefore, the correct choice is $\boxed{\text{Figure C.4}}$.

### HW06 #11 — Proton orbit outside a charged shell
A charge of $-60.0\,\mathrm{nC}$ is at the center of a nonconducting spherical shell with $r_1=0.200\,\mathrm m$, $r_2=0.290\,\mathrm m$, and $\rho=-1.15\,\mu\mathrm{C/m^3}$.
Find the speed of a proton orbiting just outside the shell.
![[webassign-hw06-q11.gif]]
?
The shell charge is $Q_{\mathrm{shell}}=\rho\frac{4\pi}{3}(r_2^3-r_1^3)=\boxed{-78.95\,\mathrm{nC}}$.
The total enclosed charge is $Q_{\mathrm{tot}}=\boxed{-138.95\,\mathrm{nC}}$.
Just outside the shell, the field magnitude is $E=\frac{k_e|Q_{\mathrm{tot}}|}{r_2^2}=1.48\times10^4\,\mathrm{N/C}$ inward.
Set the electric force equal to the centripetal force: $eE=m_pv^2/r_2$.
Therefore, $v=\sqrt{\frac{k_ee|Q_{\mathrm{tot}}|}{m_pr_2}}=\boxed{6.42\times10^5\,\mathrm{m/s}}$.
