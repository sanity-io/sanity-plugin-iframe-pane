# sanity-plugin-iframe-pane

> This is a **Sanity Studio v3** plugin.
> For the v2 version, please refer to the [v2-branch](https://github.com/sanity-io/sanity-plugin-iframe-pane/tree/studio-v2).

Display any URL in a View Pane, along with helpful buttons to Copy the URL or open it in a new tab.

Accepts either a string or an async function to resolve a URL based on the current document.

![Iframe View Pane](https://user-images.githubusercontent.com/9684022/226924036-ef9122e6-e498-42aa-ad01-8c4acdc9e65e.png)

## Installation

```
npm install --save sanity-plugin-iframe-pane
```

or

```
yarn add sanity-plugin-iframe-pane
```

## Usage

This is designed to be used as a [Component inside of a View](https://www.sanity.io/docs/structure-builder-reference#c0c8284844b7).

The simplest way to configure views is by customizing the `defaultDocumentNode` setting in the `structureTool()` plugin.

```ts
// ./sanity.config.ts

export default defineConfig({
  // ...other config settings
  plugins: [
    structureTool({
      defaultDocumentNode,
      structure, // not required
    }),
    // ...other plugins
  ],
})
```

A basic example of a custom `defaultDocumentNode` function, to only show the Iframe Pane on `movie` type documents.

```ts
// ./src/defaultDocumentNode.ts

import {type DefaultDocumentNodeResolver} from 'sanity/structure'
import {urlSearchParamPreviewPerspective} from '@sanity/preview-url-secret/constants'
import {Iframe, UrlResolver} from 'sanity-plugin-iframe-pane'
import {type SanityDocument} from 'sanity'

// Customise this function to show the correct URL based on the current document and the current studio perspective
const getPreviewUrl: UrlResolver = (doc, perspective) => {
  return doc?.slug?.current
    ? `${window.location.host}/${doc.slug.current}?${urlSearchParamPreviewPerspective}=${perspective.perspectiveStack}`
    : `${window.location.host}`
}

// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  // Only show preview pane on `movie` schema type documents
  switch (schemaType) {
    case `movie`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: getPreviewUrl,
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
```

## Options

```js
// Required: Accepts an async function
url: (doc, {perspectiveStack, selectedPerspectiveName}) => resolveProductionUrl(doc),

// OR a string
url: `https://sanity.io`,

// OR a configuration for usage with `@sanity/preview-url-secret` and Next.js Draft Mode
url: {
  origin: 'https://sanity.io' // or 'same-origin' if the app and studio are on the same origin
  preview: (document, {perspectiveStack, selectedPerspective}) => document?.slug?.current ? `/posts/${document.slug.current}` : new Error('Missing slug'),
  draftMode: '/api/draft' // the route you enable draft mode, see: https://github.com/sanity-io/visual-editing/tree/main/packages/preview-url-secret#sanitypreview-url-secret
},

// Optional: Display the Url in the pane
showDisplayUrl: true // boolean. default `true`.

// Optional: Set the default size
defaultSize: `mobile`, // default `desktop`

// Optional: Add a reload button
reload: {
  button: true, // default `undefined`
},

// Optional: Pass attributes to the underlying `iframe` element:
// See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
attributes: {
  allow: 'fullscreen', // string, optional
  referrerPolicy: 'strict-origin-when-cross-origin', // string, optional
  sandbox: 'allow-same-origin', // string, optional
}
```

## License

MIT-licensed. See LICENSE.

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.

### Release new version

Run ["CI & Release" workflow](https://github.com/sanity-io/sanity-plugin-iframe-pane/actions/workflows/main.yml).
Make sure to select the `main` branch and check "Release new version".

Semantic release will only release on configured branches, so it is safe to run release on any branch.
