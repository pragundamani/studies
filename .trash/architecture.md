
Keep `03 Templates/latex suite/discrete-math.js` as the single Latex Suite source. In math mode, type comma-prefixed triggers such as `,and` or `,choose`.

# Discrete Math Latex Suite

## What And Why
Build a fast, collision-resistant Latex Suite snippet collection for common discrete-mathematics notation. Comma prefixes allow automatic expansion without replacing ordinary prose or existing default snippets.

## Core Features
- Logic symbols and text forms, quantifiers, sets, relations, functions, and common number sets.
- MathJax-compatible proof-writing scaffolds, induction outline, and cases template.
- Essential graph theory and combinatorics notation.
- Cursor tabstops for expressions that require arguments.

## User Flow
1. Enter inline or display math in Obsidian.
2. Type a comma-prefixed trigger.
3. Latex Suite expands it automatically and places the cursor at the first tabstop where applicable.
4. Press Tab to advance through remaining tabstops or leave the expression.

## Technical Approach
The module uses Latex Suite's JavaScript default export and snippet objects with `mA`: math-mode-only, automatic expansion. No runtime functions or external dependencies are used. Proof templates avoid the unsupported `proof` environment and use MathJax-compatible `\\text{}` and `cases` output.

## Files
- `03 Templates/latex suite/discrete-math.js`: snippet module.
- `.obsidian/plugins/obsidian-latex-suite/data.json`: points Latex Suite at the module.
- `tests.md`: manual verification procedure.

## Build Order
1. Create the standalone snippet module.
2. Configure Latex Suite to load that exact file.
3. Syntax-check the module.
4. Run the manual trigger and rendering checklist in Obsidian.

## Dependencies And Assumptions
- Obsidian Latex Suite 1.9.8 remains enabled.
- Obsidian's MathJax renderer supports the emitted LaTex commands.
- Snippet expansion remains automatic and math-mode-only.

## Risks
- Snippet files execute JavaScript, so only trusted local code should be kept in the configured path.
- Automatic triggers can conflict with user-defined snippets that use the same comma-prefixed triggers.
- The induction outline is best used in display math because it inserts line breaks.

## Definition Of Done
The plugin loads without a syntax notice, every documented trigger expands only in math mode, tabstops advance correctly, and the rendered output is readable in Obsidian.
