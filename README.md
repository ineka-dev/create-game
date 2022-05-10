# Create a game project
> created by [create-create-app](https://github.com/uetchy/create-create-app).

<a href="https://www.npmjs.com/package/@ineka/create-game"><img alt="npm" src="https://img.shields.io/npm/v/@ineka/create-game?style=for-the-badge"></a>
<a href="https://github.com/ineka-dev/create-game/actions/workflows/release.yml"><img alt="GitHub Workflow Status Release" src="https://img.shields.io/github/workflow/status/ineka-dev/create-game/Release?logo=github&style=for-the-badge"></a>
<a href="https://github.com/ineka-dev/create-game/blob/master/LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/ineka-dev/create-game?color=black&style=for-the-badge"></a>
<a href="https://github.com/ineka-dev/create-game/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/ineka-dev/create-game?style=for-the-badge">
</a>
<a href="https://github.com/ineka-dev/create-game/pulls"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr-raw/ineka-dev/create-game?style=for-the-badge"></a>

Scaffolds a new game project with Ineka.

Ineka is a small and customizable game engine made as **a passion project** to learn more about game and web development.

**Find more:**

<a href="https://github.com/ineka-dev/engine"><img alt="Ineka Repository" src="https://img.shields.io/badge/-REPOSITORY-333DFF?style=flat-square&logo=github">
</a>
<a href="https://ineka-dev.github.io/engine/"><img alt="Ineka Documentation" src="https://img.shields.io/badge/-DOCUMENTATION-333DFF?style=flat-square&logo=gitbook&logoColor=white"></a>

## Usage
```bash
npx @ineka/create-game <name>
```

If you have **npm 6+** you can also use:
```bash
npm init @ineka/game <name>
# Or
npm create @ineka/game <name>
```

## Project commands

Inside you newly created game project you will have access to new npm scripts commands.

### `dev`

Watch your project for changes.
Build your game project and serves it to `localhost:1234`.

### `build`

Build your game project for production.

Those commands are provided by Parcel, we recommend looking at [the documentation](https://parceljs.org/docs/) for further uses.

## CI/CD Workflows

This project uses GitHub Actions for CI/CD jobs.

We have workflows to:
- Build and test the project on each pull request.
- Build, test and release the project.

## Contributing
Any help and contribution is welcome, feel free to submit issues and/or contribute to the project.

**Please read through the [contributing guidelines](./.github/CONTRIBUTING.md) for more details.**

## License

Copyright (c) 2021 Colin Espinas.

Ineka is distributed under the **MIT License**. See [the license](./LICENSE) for more details.