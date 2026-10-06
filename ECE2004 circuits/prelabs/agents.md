# ECE2004 Circuits Work Guide

## Scope

This folder contains ECE2004 circuit homework, labs, reference material, and source PDFs.
Work in the matching Markdown file unless the user names another output file.

## Browser and Notes Context

- The user may have Brave running with Chrome DevTools remote debugging on port `9222`.
- Connect to that browser when browser context helps solve the task, such as reviewing course pages, downloads, tabs, or note-related research.
- Use the browser to understand the user's notes and relevant source context before drafting or changing answers.
- Treat open tabs and browser content as user context. Do not close tabs, submit forms, download files, or change browser state unless the user asks.
- Prefer the local Markdown notes and course source files when they answer the question. Use web research only when needed.

## Source and File Rules

- Treat PDFs, textbook files, and supplied figures as source material. Do not modify them.
- Preserve existing answers unless the user asks to revise them.
- Do not overwrite a homework file with a partial solution. Add or replace only the requested problem sections.
- Keep supporting plots and diagrams as separate files. Embed them with Obsidian links such as `![[file.svg]]`.
- Use clear, descriptive filenames for new files.

## Solving Circuit Problems

1. Read the full prompt and identify given values, units, polarity marks, current directions, and what the problem asks for.
2. State assumptions only when needed. Do not silently invent missing circuit details.
3. Use the standard sign conventions:
   - Passive sign convention: power is absorbed when current enters the labeled positive terminal.
   - State whether a source absorbs or delivers power.
   - Define reference directions before applying KCL, KVL, nodal analysis, mesh analysis, or dependent-source relations.
4. Show the key equation substitutions and unit conversions. Keep routine algebra brief.
5. Check the result with units, signs, limiting behavior, and conservation laws when applicable.
   - For power problems, verify total supplied power equals total absorbed power.
   - For KCL/KVL problems, include a quick balance check when practical.
6. Round only at the end unless the prompt requires a stated precision.

## Markdown and Math Style

- Use `## <problem number>` for each homework problem.
- For question-based work, use `## Q1`, `## Q2`, etc. Do not repeat the question text unless the user asks.
- Use `a.`, `b.`, etc. for subparts.
- Put equations in LaTex math: `$...$` inline and `$$...$$` for important multi-line work.
- Always include units, with a space before the unit: `$12\ \Omega$`, `$3.2\ \mathrm{mA}$`.
- Use SI prefixes correctly. Convert explicitly where it prevents errors.
- Put the final numerical result in a short sentence or bold it when useful.
- Match the concise style already used in the homework files.

## Writing Style

- Use short, direct sentences and common technical words.
- Give the answer first when the question is simple. Then show enough work to verify it.
- Do not add filler, generic theory, or a long recap.
- Explain lab questions in plain language. Keep the explanation technically correct.
- If a diagram, value, or wording is unclear in a source PDF, flag the uncertainty and ask instead of guessing.

## Before Finishing

- Confirm every requested subpart has an answer.
- Check circuit labels, signs, units, significant figures, and notation against the prompt.
- Confirm Markdown links point to files that exist in this folder.
