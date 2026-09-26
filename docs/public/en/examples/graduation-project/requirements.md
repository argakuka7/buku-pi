# CASE 08 · Graduation project requirements

## Project

- Practice repository: `https://github.com/your-account/buku-pi`
- Technology: VitePress
- How to work: work after cloning the repository locally; no deploy, no commit, no push.

## Objective

Add one new page, "Task completion checklist", to the reference handbook, so beginners can verify
the result of Pi's work themselves from three sides: real files, command output, and online status —
after Pi reports its task as complete.

## Files that may be changed

1. Create `docs/reference/task-completion-checklist.md`
2. Modify `docs/reference/index.md`
3. Modify `docs/.vitepress/config/navigation.mts`
4. Create or update `worklog/graduation-checkpoint.md`

Do not change other project files besides the paths above. `worklog/` is a local practice record and
must not be committed.

## Page requirements

`docs/reference/task-completion-checklist.md` must contain:

- VitePress frontmatter: `title` and `description`
- a level-one heading: `Task completion checklist`
- four level-two headings:
  - `Before you start`
  - `While working`
  - `After finishing`
  - `Failures and recovery`
- links to at least three existing pages:
  - `/guide/first-task`
  - `/guide/context-and-compaction`
  - `/guide/safety`
- explicitly state: "An Agent's completion report is only a hint, not proof of completion."

## Navigation requirements

- Add an entry for the new page in `docs/reference/index.md`.
- Add "Task completion checklist" to the handbook sidebar in
  `docs/.vitepress/config/navigation.mts`.
- Do not change the titles, order, and links of other pages.

## Verification requirements

1. `npm run check:content` and `npm run check` both pass.
2. The Git diff contains only the project files allowed by these requirements; dependency
   directories, build output, and caches must not enter the diff.
3. The new page can be reached from the home page and the handbook sidebar.
4. The three lesson links really resolve to the corresponding pages in the project.
5. The four stages are complete on the page; "Pi answered that it is done" is not written as final
   proof.

## Prohibitions

- Do not deploy the site.
- Do not run `git add`, `git commit`, or `git push`.
- Do not modify or read credential files.
- Do not install new Packages, Extensions, or system dependencies.
- Do not recover from an error by deleting, overwriting, or resetting the whole repository.

If the repository structure does not match these requirements, write the differences into the
checkpoint and then stop; do not expand the scope of changes on your own.
