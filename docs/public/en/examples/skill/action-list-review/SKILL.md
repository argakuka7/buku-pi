---
name: action-list-review
description: Turn meeting notes into a checkable action list; used when a task asks for extracting owners, deadlines, deliverables, and constraints.
---

# Action list review

1. First confirm the input file and output file the user points to; if none has been given, ask
   first, do not guess on your own.
2. Read only the specified input; do not modify the original file.
3. Every action item must contain: the main work, the owner, the deadline, and the constraints or
   verification conditions.
4. Information that is not in the source is written as "not explained in the source"; do not add
   names or dates on your own.
5. After writing, read the input and output again, then check omissions, duplicates, and unfounded
   assumptions one by one.
6. At the end, report the paths read, the paths written, the number of action items, and anything
   that is still uncertain.
