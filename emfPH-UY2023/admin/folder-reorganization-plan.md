# Folder reorganization plan

Status: implemented on 2026-10-23 with no deletions, then updated on 2026-10-23. `Quiz 7 Revision.md` is now at the EMF top level; the PDF staging note remains in `guides/quiz-07/`. Source homework, PDFs, shared assets, and audit artifacts remain as recorded below. Gradescope PDFs were renamed only after their embedded quiz numbers were verified.

## Proposed structure

```text
emfPH-UY2023/
├── active/quiz-07/                 # only after current edits are finished
├── guides/quiz-07/
├── sources/
│   ├── exams/
│   ├── graded-quizzes/
│   └── homework/quiz-07/
├── archive/quiz-05/
│   ├── notes/
│   └── assets/
├── assets/quiz-07/
├── notes/concepts/
└── audit-artifacts/quiz-07/
    └── browser-captures/
```

## Proposed move map

Do not apply the first two moves while Quiz 7 work is active.

| Current path | Proposed path |
|---|---|
| `Quiz 7 Revision.md` | `active/quiz-07/Quiz 7 Revision.md` |
| `quiz7-pdf-quiz-section.md` (not present at audit time) | `active/quiz-07/quiz7-pdf-quiz-section.md` when it exists |
| `quiz7.md` | `sources/homework/quiz-07/quiz7.md` |
| `quiz7-assets/` | `assets/quiz-07/` |
| `quiz7-final-browser-audit.json` | `audit-artifacts/quiz-07/quiz7-final-browser-audit.json` |
| `quiz7-final-questions.json` | `audit-artifacts/quiz-07/quiz7-final-questions.json` |
| `.playwright-mcp/` | `audit-artifacts/quiz-07/browser-captures/` (or leave ignored in place if a tool requires this exact working path) |
| `2023X2aF25.pdf` | `sources/exams/2023X2aF25.pdf` |
| `2023X2aS25.pdf` | `sources/exams/2023X2aS25.pdf` |
| `fall 25 phys 2 midterm.pdf` | `sources/exams/fall 25 phys 2 midterm.pdf` |
| `Print Submission _ Gradescope.pdf` | `sources/graded-quizzes/quiz-02.pdf` |
| `Print Submission _ Gradescope_1.pdf` | `sources/graded-quizzes/quiz-01.pdf` |
| `Print Submission _ Gradescope_2.pdf` | `sources/graded-quizzes/quiz-03.pdf` |
| `Print Submission _ Gradescope_3.pdf` | `sources/graded-quizzes/quiz-04.pdf` |
| `Print Submission _ Gradescope_4.pdf` | `sources/graded-quizzes/quiz-05.pdf` |
| `Print Submission _ Gradescope_5.pdf` | `sources/graded-quizzes/quiz-06.pdf` |
| `Print Submission _ Gradescope_6.pdf` | `sources/graded-quizzes/quiz-09.pdf` |
| `Print Submission _ Gradescope_7.pdf` | `sources/graded-quizzes/quiz-12.pdf` |
| `Print Submission _ Gradescope_8.pdf` | `sources/graded-quizzes/quiz-13.pdf` |
| `HW05-and-Quiz05-flashcards.md` | top-level `HW05-and-Quiz05-flashcards.md` (restored from `archive/quiz-05/notes/` as the main Quiz 5 flashcard note) |
| `HW05-explained.md` | `archive/quiz-05/notes/HW05-explained.md` |
| `HW05-explained.docx` | `archive/quiz-05/notes/HW05-explained.docx` |
| `Quiz-05-short-solutions.md` | `archive/quiz-05/notes/Quiz-05-short-solutions.md` |
| `quiz-05-q1-diagram.png`, `quiz-05-q2-diagram.png` | `archive/quiz-05/assets/` |
| `webassign-figures-contact-sheet.jpg`, `webassign-q*-figure.*` | `archive/quiz-05/assets/` |
| `q7-figure.png`, `q8-figure.gif` | `archive/quiz-05/assets/duplicates-review/` pending duplicate review |
| `Fluid.md` | `notes/concepts/Fluid.md` |

The finalized flashcards note was later moved to the EMF top level as `Quiz 7 Revision.md`. The PDF staging note remains at `guides/quiz-07/quiz7-pdf-quiz-section.md`. The main Quiz 5 flashcard note is also at the top level as `HW05-and-Quiz05-flashcards.md`; its supplemental explained and short-solutions notes remain archived. No main Quiz 4 or Quiz 6 revision/flashcard Markdown notes were found in the EMF tree.

## Link updates required when moves are applied

- In the top-level `Quiz 7 Revision.md`, the seven asset embeds use `assets/quiz-07/...`.
- In `sources/homework/quiz-07/quiz7.md`, replace its ten Markdown image paths from `quiz7-assets/...` with `../../../assets/quiz-07/...`.
- In the three Quiz 5 Markdown notes, update image embeds from same-folder names to `../assets/<filename>`.
- `HW05-explained.md` and `Quiz-05-short-solutions.md` link to each other by Obsidian basename. Those links can remain unchanged because filenames stay unique; full-path links are safer if duplicate note names may appear later.
- No Markdown references to the PDF filenames were found under `/home/paragon/notes`, so the proposed PDF moves/renames require no known note edits.
- Moving `Fluid.md` should normally preserve a unique Obsidian wikilink by basename. Verify its two apparent vault-wide text references before applying the move.
- Apply note and asset moves in Obsidian, with automatic link updating enabled, or update and validate all links in the same change.

## Duplicate and temporary-file review (do not delete yet)

- Exact duplicates: `q7-figure.png` = `webassign-q7-figure.png`; `q8-figure.gif` = `webassign-q8-figure.gif`. The shorter-name copies appear unreferenced; keep them in `duplicates-review/` until visual and backlink checks are complete.
- `.playwright-mcp/` contains generated console logs and many timestamped page snapshots. At least two groups of snapshots are byte-identical. Treat the entire directory as temporary audit output, not study content.
- `quiz7-final-browser-audit.json` and `quiz7-final-questions.json` are audit/export artifacts, not note sources.
- `HW05-explained.docx` may be an export or source counterpart of `HW05-explained.md`; it is not byte-duplicate and should be retained until its role is confirmed.

## Safe execution order

1. Finish and save both active Quiz 7 notes; confirm whether the missing `quiz7-pdf-quiz-section.md` is created elsewhere.
2. Create destination folders.
3. Move assets and notes through Obsidian so links update.
4. Run a missing-embed/backlink check, then open each moved note and sample every image group.
5. Move and clearly rename PDFs using the verified quiz numbers above.
6. Quarantine duplicates and generated audit output. Delete nothing without a separate review and approval.
