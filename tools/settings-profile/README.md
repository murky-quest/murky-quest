# Settings profile

> Currently, this section is only relevant if you are using VSCode, but might be expanded with other IDEs or editors in the future.

It is possible to commit the contributors' workspace settings profiles in the case of using the VSCode editor.

To apply the chosen custom profile (eg. `powd`), use:

```bash
npm run settings_profile apply powd
```

> In this example, the custom profile is `powd`, which maps to the `.vscode/settings.powd.json` file (included by Git). By running the `apply` subcommand, the `.vscode/settings.json` file (ignored by Git) will be (re)created from the template being the aforementioned `.vscode/settings.powd.json` file.

To apply the "default" profile, use:

```bash
npm run settings_profile apply
```

which is equivalent to:

```bash
npm run settings_profile apply default
```
