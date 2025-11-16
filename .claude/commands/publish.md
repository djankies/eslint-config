---
description: publish a new version of the package
argument-hint: major|minor|patch (default:patch)
---
## Objective
Publish a $ARGUMENTS version to NPM

## Steps

1. Check the latest published version of @djankies/eslint-config
2. update @package.json to the new version
3. review changes, commit and tag a release, then push.

Github actions will publish the update automatically. the user can view the status of the Workflow run in the repository [actions page](https://github.com/djankies/eslint-config/actions).
