# Dicty

Learn vocabulary and read books with ease!

## Tech assumptions

- Multi-project repo
  - Differences from the "classic" monorepo?
    - Different `package.json` fles, projects are truly independent and "draggable out"
  - Simple _npm workspaces_ feature used
    - Sticking to the "core" solutions should ensure stability (hopefully) and simplicity (nx monorepos look cool, but they seem to add more complexity and require steeper learning curve)
    - Also solves other two practical problems:
      1. If the main `package.json` was not used, the imports within modules, going outside their directories (`../`) would not be possible due to npm limitations (even with _symlinks_). Hence, "inverting" frameworks to libraries also would not be possible (business code would have to live inside the framework code).
      - For the deployment process, an app bundle can be generated from the framework directory, even if it imports file above!
      - We can add many framework directories, switch between them, and generate bundles like that (express, nest, next, etc)!
      2. TODO: What was it?
- Contrived directory structure for the sake of this
  - Keep as low levels as possible
  - Ugly naming, but (time will tell) pragmatism-oriented
    - Don't proliferate the number of modules, but create each one whenever:
      - a new `package.json` is needed or convenient (ie. to separate the framework-specific files)
      - runtimes differ (backend vs frontend),
      - given files will go to given bundles (backend vs frontend)
- Mixed style possible
  - Monolithic apps (each launched `<module>.<platform>` imports many modules, eg. `<module-a>.be`, `<module-b>.be`)
  - Microservices (each launched `<module>.<platform>` imports exactly one `<module>.be`)
- Double-inversed: frameworks as libraries
  - Instead of level-above, at least level-equal, ideally level-below
- Strong boundaries
  - Deep imports disallowed
- Thin shared modules
  - Discourage from (over)using them
  - Although it seems to be a bit crazy to completely give them up

> _TODO_: Move tech assumptions to ADRs?

## Explore

Modules:

- Suggestions:
  - [Chats Backend](./modules/chats.backend/README.md)
  - [Suggestions Backend](./modules/suggestions.backend/README.md)
  - [Suggestions Frontend](./modules/suggestions.frontend/README.md)
- Users:
  - ... (TODO: Maybe add in the future)

Shared:

- [Common](./shared/common/README.md)
- [Testing](./shared/testing/README.md)
