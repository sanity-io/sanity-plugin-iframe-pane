<!-- markdownlint-disable --><!-- textlint-disable -->

# 📓 Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.5.6](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.5.5...v2.5.6) (2023-09-04)

### Bug Fixes

- **edge:** handle race condition ([62aa705](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/62aa705bc6f5f7dff2e121575b3e34de02c98207))
- ensure CSM isn't returned ([4f3319c](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/4f3319cddb7906dc1116e8248b988b3188c25f60))

## [2.5.5](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.5.4...v2.5.5) (2023-08-16)

### Bug Fixes

- **app-router:** skip cache when validating the secret ([8af7a95](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/8af7a9529ea57484909114c84998a24a5740c9a7))

## [2.5.4](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.5.3...v2.5.4) (2023-08-09)

### Bug Fixes

- only throw on missing secret id in development ([35831eb](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/35831eb43d135eb212d285b1a045c3d8037f886f))

## [2.5.3](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.5.2...v2.5.3) (2023-08-09)

### Bug Fixes

- throw if no Secret in the dataset while validating ([8effd66](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/8effd66002862a31c0199366904b5d4cd5903ff9))

## [2.5.2](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.5.1...v2.5.2) (2023-08-09)

### Bug Fixes

- **types:** cleanup type exports ([5084ad6](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/5084ad6b27205f58372bf459fb7483a37f43ff4c))

## [2.5.1](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.5.0...v2.5.1) (2023-08-09)

### Bug Fixes

- **typings:** add `typesVersions` field ([b42a5ce](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/b42a5ceab173224f0953db84342efd5ba542ae48))

## [2.5.0](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.4.0...v2.5.0) (2023-08-09)

### Features

- add `defineUrlResolver` ([047abdf](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/047abdfd64e5312d7ae7edaaf67b9a9ee11aa166))
- add `isValidSecret` utility ([7357657](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/7357657402765973faf343174c5ce58a31927ed9))

## [2.4.0](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.3.1...v2.4.0) (2023-08-09)

### Features

- add url secret generation & improve design UX ([bcea5a1](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/bcea5a1e5d3523ea8dcbe26df447c88eb785959d))

### Bug Fixes

- add `node.module` export condition ([8e06900](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/8e06900ba31254e1c4947d7ddfed3ee7c52668a4))

## [2.3.1](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.3.0...v2.3.1) (2023-05-23)

### Bug Fixes

- **deps:** update dependencies (non-major) ([#36](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/36)) ([0573bfa](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/0573bfa8fe86ca450204ede1d8a08d105994cafc))
- **deps:** update dependency @sanity/plugin-kit to v3 ([743063b](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/743063b1a4e054d5471ec62ceafdc3f420163a1c))

## [2.3.0](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.2.0...v2.3.0) (2023-03-22)

### Features

- add option to hide iframe url ([#25](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/25)) ([8989db5](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/8989db54f621f036faa3890c6a236cbe6778ff5d))

### Bug Fixes

- **deps:** update dependencies (non-major) ([#26](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/26)) ([f2d82ed](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/f2d82ed4e202fa84cd8f84230a89f003570a9f00))

## [2.2.0](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.1.1...v2.2.0) (2023-03-01)

### Features

- add loading spinner option ([#20](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/20)) ([fe2fae9](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/fe2fae98f9fcef8cc1c04f12408c2a8ab039a1a8))

## [2.1.1](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.1.0...v2.1.1) (2022-11-25)

### Bug Fixes

- **deps:** sanity ^3.0.0 (works with rc.3) ([d38cf1e](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/d38cf1e37ab9d3e443a3684f2ca89fd5405d2ed3))

## [2.1.0](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.0.1...v2.1.0) (2022-11-22)

### Features

- add recent v2 updates to v3 ([469a45f](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/469a45f46c8d6db92717b867c69986725da39fd5))

## [2.0.1](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.0.0...v2.0.1) (2022-11-16)

### Bug Fixes

- version bump for npm ([cdbbb95](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/cdbbb9591efb6298b90bc6c4dd5fe6250c7c758b))

## [2.0.0](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v1.0.0...v2.0.0) (2022-11-16)

### ⚠ BREAKING CHANGES

- this version no longer works in Sanity Studio V2

### Features

- initial Sanity Studio V3 release ([cf5ea58](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/cf5ea589d3d05a0cc3b3bb225120e718342b73ef))

### Bug Fixes

- compiled for sanity 3.0.0-rc.0 ([934aeb2](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/934aeb22211080d2f5dab711188d30f15a1d6ac5))
- **deps:** compiled for sanity 3.0.0-rc.2 ([b1e4393](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/b1e4393e5bd6693a8e225387f514b750ea792abb))
- **deps:** pkg-utils & @sanity/plugin-kit ([0ba33f0](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/0ba33f011a254972cd3181b461d226a6096353ac))
- **release:** studio-v3 tag ([4598eec](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/4598eec573200fe701c221bbdaed7def24d5227c))

## [2.0.1-v3-studio.3](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.0.1-v3-studio.2...v2.0.1-v3-studio.3) (2022-11-04)

### Bug Fixes

- **deps:** pkg-utils & @sanity/plugin-kit ([0ba33f0](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/0ba33f011a254972cd3181b461d226a6096353ac))

## [2.0.1-v3-studio.2](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.0.1-v3-studio.1...v2.0.1-v3-studio.2) (2022-11-03)

### Bug Fixes

- compiled for sanity 3.0.0-rc.0 ([934aeb2](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/934aeb22211080d2f5dab711188d30f15a1d6ac5))

## [2.0.1-v3-studio.1](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.0.0...v2.0.1-v3-studio.1) (2022-10-31)

### Bug Fixes

- **release:** studio-v3 tag ([4598eec](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/4598eec573200fe701c221bbdaed7def24d5227c))
