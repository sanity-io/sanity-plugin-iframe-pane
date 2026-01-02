<!-- markdownlint-disable --><!-- textlint-disable -->

# 📓 Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.0.1](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v4.0.0...v4.0.1) (2026-01-02)

### Bug Fixes

- **deps:** allow studio v5 in peer deps ranges ([#135](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/135)) ([b8c3932](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/b8c3932881d98bf116bc98603ecc6a068b1143e1))

## [4.0.0](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v3.2.2...v4.0.0) (2025-08-07)

### ⚠ BREAKING CHANGES

- require sanity v4 or later
- require node v20.19 or later

### Features

- require sanity v4 or later ([c81da00](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/c81da00333db5580bead1cb83ff5c67ecc8ab588))

### Bug Fixes

- require node v20.19 or later ([36bc877](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/36bc877d58bfe592e74ac3aeaa4ae5c56eba8524))

## [3.2.2](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v3.2.1...v3.2.2) (2025-07-10)

### Bug Fixes

- **deps:** allow studio v4 in peer dep ranges + update main ([#129](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/129)) ([159eef7](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/159eef7cdb4861c60b5eb320dbcc8cfecc699b92))

## [3.2.1](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v3.2.0...v3.2.1) (2025-02-07)

### Bug Fixes

- support for release perspectives ([#118](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/118)) ([01726b6](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/01726b62e1ff942f77ccf2d314315cceb0c0eef3))

## [3.2.0](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v3.1.6...v3.2.0) (2025-01-28)

### Features

- add react 19 ([#119](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/119)) ([be06cbc](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/be06cbce881d48e9f0f3c43acdb89486d05c0ea2))

## [3.1.6](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v3.1.5...v3.1.6) (2024-03-19)

### Bug Fixes

- **deps:** Update dependency usehooks-ts to v3 ([#111](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/111)) ([7073a5b](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/7073a5b292733877d13f01f7fb128a20c169083e))
- make new linter rules pass ([feaa2cd](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/feaa2cd6b11a3036de4ac6aa61089218c2a89367))
- show error toast if URL failed to copy ([aa2d4d3](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/aa2d4d330311463176cd14cb3f0542476658a92d))

## [3.1.5](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v3.1.4...v3.1.5) (2024-03-18)

### Bug Fixes

- **deps:** Update dependency @sanity/ui to v2 ([#98](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/98)) ([a2a1a08](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/a2a1a089c1c95d6b5e75aceaca078d91d74f3db9))

## [3.1.4](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v3.1.3...v3.1.4) (2024-03-18)

### Bug Fixes

- `document` should never be `null` ([#92](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/92)) ([1c4cdd3](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/1c4cdd36b8abe2972ff4f78205c3350e33635066))

## [3.1.3](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v3.1.2...v3.1.3) (2023-12-08)

### Bug Fixes

- **deps:** update dependency @sanity/preview-url-secret to ^1.3.3 ([#95](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/95)) ([32c66d8](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/32c66d8a32cd656f4e298ecd8ed0db6d928a5a0e))

## [3.1.2](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v3.1.1...v3.1.2) (2023-11-23)

### Bug Fixes

- draft document default assignment ([#90](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/90)) ([ad862ec](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/ad862ec8fb59c0306494ee7080d6a74d96add6d5))

## [3.1.1](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v3.1.0...v3.1.1) (2023-11-17)

### Bug Fixes

- setting `key` no longer lags 1 render bind as you switch between multiple iframe panes on the same document ([973979f](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/973979f705ac6d84a09569a585e0d09c0801973e))

## [3.1.0](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v3.0.0...v3.1.0) (2023-11-17)

### Features

- add `key` for allowing multiple instances in the same pane ([c7b0afb](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/c7b0afb35ac5d5ca12ae2c40f97508272055c977)), closes [#82](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/82)

## [3.0.0](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.6.1...v3.0.0) (2023-11-17)

### ⚠ BREAKING CHANGES

- use `@sanity/preview-url-secret` to handle Draft Mode

### Features

- use `@sanity/preview-url-secret` to handle Draft Mode ([978bc0d](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/978bc0d54f2553d2ee98ab17673d5f27a4299c18))

## [2.6.1](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.6.0...v2.6.1) (2023-11-15)

### Bug Fixes

- **deps:** Update dependency styled-components to v6 ([#86](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/86)) ([1650b1e](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/1650b1ef906d64b10b197a6a1bc703a78efc3e0a))

## [2.6.0](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.5.8...v2.6.0) (2023-10-18)

### Features

- send `id` on url resolver ([d03546f](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/d03546f2615d71550a599b23da4ba6124666405d))
- use the new `RefreshIcon` ([4fd266c](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/4fd266c8c553e3c963811865b2de2496da15f91d))

## [2.5.8](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.5.7...v2.5.8) (2023-10-09)

### Bug Fixes

- change paste icon to copy ([#74](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/74)) ([0a21338](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/0a2133807de4d4069b4bedf6d9211949931cdda0))
- update minimum version of @sanity/ui ([#75](https://github.com/sanity-io/sanity-plugin-iframe-pane/issues/75)) ([12fc076](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/12fc0765edc2a21cc10ca4973676728a2da7bcc9))

## [2.5.7](https://github.com/sanity-io/sanity-plugin-iframe-pane/compare/v2.5.6...v2.5.7) (2023-09-04)

### Bug Fixes

- improve tooltip placement ([0b66d1b](https://github.com/sanity-io/sanity-plugin-iframe-pane/commit/0b66d1b39d3f78734c450d376f2399625daa5aa2))

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
