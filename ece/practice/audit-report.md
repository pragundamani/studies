# Midterm 1 practice-pack audit

**Scope:** `Midterm 1 - 200 Practice Questions.md` and all 300 SVGs referenced below `assets/midterm1` (50 each in A–D and 100 in E).

## Results

- All 300 image references resolve to distinct existing SVG files. All SVGs parse as XML.
- The section-A through section-D component identifiers in the prompts match the identifiers shown in their diagrams. Their numerical data are intentionally stated in the prompt/answer rather than repeated in the symbolic diagrams.
- The mixed-circuit diagrams show the requested named nodes. In particular, every one of the 100 section-E questions that requests $V_B$ and/or $V_C$ visibly labels both `B` and `C` in its SVG.
- The source values explicitly stated in the section-E prompts match a visible source-value label in the corresponding SVG.
- The routine KVL, KCL, source-power, and topology answer keys were checked against the stated values/topology. No answer-key mismatch was found.

## Corrections made

The 25 KCL-node diagrams for section B, questions 26–50 (`kcl-26.svg` through `kcl-50.svg`), previously showed an unlabeled central node even though the associated prompt called it node A or node B. Added a visible central `A` or `B` label to each SVG, matching its question. This removes ambiguity about the node at which KCL is requested.

No questions were removed.
