# Circuit Analysis Flowcharts

Use the first chart to choose a method. Then follow the matching procedure.

## Choose a method

```mermaid
flowchart TD
    A[Start: identify the requested voltage or current] --> B{Linear circuit and source separation would help?}
    B -- Yes --> SP[Use superposition]
    B -- No --> C{Are node voltages simplest or is the circuit nonplanar?}
    C -- Yes --> D{Voltage source between two nonreference nodes?}
    D -- Yes --> SN[Use a supernode]
    D -- No --> N[Use nodal analysis]
    C -- No --> E{Is the circuit planar with clear meshes?}
    E -- No --> K[Use direct KCL and KVL]
    E -- Yes --> F{Current source shared by two meshes?}
    F -- Yes --> SM[Use a supermesh]
    F -- No --> M[Use mesh analysis]
```

## KCL and KVL

```mermaid
flowchart TD
    A[Mark current directions and voltage polarities] --> B[Choose one KCL sign convention]
    B --> C[At each needed node, write currents leaving minus currents entering equals zero]
    C --> D[Choose a loop direction and one KVL convention]
    D --> E[Write the signed voltage changes around each needed loop]
    E --> F[Use Ohm's law to connect voltage and current]
    F --> G[Solve the simultaneous equations]
    G --> H[Interpret negative signs as reversed directions or polarities]
    H --> I[Check KCL, KVL, units, and total power]
```

For KCL, a branch current from node A to node B is $I_{A\to B}=(V_A-V_B)/R$. For KVL, keep the chosen rise or drop convention for the entire loop.

## Nodal analysis

```mermaid
flowchart TD
    A[Choose the reference node] --> B[Label every unknown node voltage]
    B --> C[Choose currents leaving or currents entering as positive]
    C --> D[Write each resistor current as a node-voltage difference divided by resistance]
    D --> E[Write KCL at every unknown node]
    E --> F{Floating voltage source present?}
    F -- No --> G[Solve the node equations]
    F -- Yes --> H[Use the supernode procedure]
    G --> I[Find requested branch quantities]
    I --> J[Check KCL and power]
```

## Supernode analysis

```mermaid
flowchart TD
    A[Find a voltage source between two nonreference nodes] --> B[Enclose both nodes and the source]
    B --> C[Write one KCL equation for currents crossing the boundary]
    C --> D[Exclude branches entirely inside the supernode]
    D --> E[Write the source constraint from its marked polarity]
    E --> F[Add KCL equations for other unknown nodes]
    F --> G[Solve all equations together]
    G --> H[Recover source current if requested]
    H --> I[Check the constraint, KCL, and power]
```

If the source polarity is positive at A and negative at B, use $V_A-V_B=V_s$.

## Mesh analysis

```mermaid
flowchart TD
    A[Confirm that the circuit is planar] --> B[Assign one clockwise current to each mesh]
    B --> C{Current source on an outer edge?}
    C -- Yes --> D[Set that mesh current from the source arrow]
    C -- No --> E{Current source shared by two meshes?}
    D --> F[Write the remaining mesh equations]
    E -- Yes --> G[Use the supermesh procedure]
    E -- No --> F
    F --> H[Use current differences in shared resistors]
    H --> I[Solve and convert to branch currents]
    I --> J[Check the original KVL equations and total power]
```

For a resistor shared by clockwise currents $i_1$ and $i_2$, its drop in mesh 1 is $R(i_1-i_2)$.

## Supermesh analysis

```mermaid
flowchart TD
    A[Find a current source shared by adjacent meshes] --> B[Assign mesh currents]
    B --> C[Trace one outer path around the combined meshes]
    C --> D[Write KVL around the outer path]
    D --> E[Do not cross the internal current-source branch]
    E --> F[Write the current-source constraint from its arrow]
    F --> G[Add equations for any other meshes]
    G --> H[Solve all equations together]
    H --> I[Recover the current-source voltage if requested]
    I --> J[Check the constraint, KVL, and power]
```

Derive the constraint from the arrow. It can be $i_1-i_2=I_s$ or $i_2-i_1=I_s$.

## Superposition

```mermaid
flowchart TD
    A[Define one reference direction or polarity for the response] --> B[Keep one independent source active]
    B --> C[Replace other ideal voltage sources with shorts]
    C --> D[Replace other ideal current sources with opens]
    D --> E[Keep dependent sources active]
    E --> F[Find the signed contribution]
    F --> G{Any independent sources left?}
    G -- Yes --> B
    G -- No --> H[Add all signed contributions]
    H --> I[Use the total voltage or current to calculate power]
    I --> J[Check against a direct circuit solution]
```

Do not superpose power. First find the total voltage or current, then use $P=VI$, $P=I^2R$, or $P=V^2/R$.

## Final checks

```mermaid
flowchart TD
    A[Substitute the answers into the original equations] --> B{Equation residuals are zero within rounding?}
    B -- No --> C[Recheck signs, shared branches, and source constraints]
    C --> A
    B -- Yes --> D[Confirm units and requested direction or polarity]
    D --> E[Apply the passive sign convention]
    E --> F[Verify total absorbed power equals total delivered power]
```
