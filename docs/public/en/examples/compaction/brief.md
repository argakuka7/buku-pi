# Summary of the before & after compaction comparison experiment

## Current objective

Compare, before and after compaction, whether Pi can still restate the fixed constraints
without reading the files again; after that, recover from the checkpoint on disk.

## Six fixed pieces of information

- Project code: Paper Boat Biduk
- Current objective: arrange the observation order of the three colors
- Fixed order: blue → gold → grey
- Prohibited action: accessing the network
- The only next step: the reader checks the three notes manually
- Verification phrase: the boat docks

## Experiment boundaries

- Only two inputs inside the current experiment directory may be read.
- New experiment notes may only be created in `results/` inside the current experiment directory.
- Do not install plugins, do not access the network, do not modify the two inputs.
- Anything unknown or that cannot be established is written as "unknown"; do not guess.
