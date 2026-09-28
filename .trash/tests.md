# How To Use
Open a scratch note in Obsidian after changing the snippet file and complete this checklist. Reload Latex Suite or Obsidian if the plugin does not reload the module automatically.

# Test Plan

## Test Location
No automated test folder is needed: the selected validation scope is a manual Obsidian checklist. Use a temporary scratch note outside the snippet folder.

## Tests
- In `$...$`, type `,and`, `,tand`, `,all`, `,mem`, `,sube`, `,pow`, `,map`, `,N`, `,assume`, `,graph`, and `,choose`; confirm each expands to its described LaTex.
- Confirm `,set`, `,pow`, `,rel`, `,map`, `,ind`, `,cases`, `,choose`, and `,perm` put the cursor in the first tabstop; press Tab through all remaining tabstops.
- Confirm `,and` typed in normal prose does not expand.
- Confirm the induction and cases snippets render correctly in a `$$...$$` block.
- Confirm existing default snippets, especially `dm`, still work.

## How To Run
1. Run `node --check "03 Templates/latex suite/discrete-math.js"` from the vault root.
2. Complete the manual tests above in Obsidian.
3. Open Developer Tools with `Ctrl-Shift-I` if Latex Suite reports a load failure.

## Pass/Fail Criteria
Pass when the syntax check exits successfully, all tested triggers expand in math mode, none expands in prose, tab navigation works, and rendered math has no visible LaTex errors. Fail on any plugin load notice, incorrect replacement, trigger collision, or malformed rendering.

## Grading Rubric
- 4 points: all representative triggers expand accurately.
- 2 points: math-mode restriction prevents prose expansions.
- 2 points: tabstops and multiline templates work correctly.
- 2 points: no plugin load errors or regressions in default snippets.

An acceptable result is 9/10 or higher, with no plugin load error.
