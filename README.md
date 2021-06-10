# sanity-plugin-iframe-pane

Display any URL in a View Pane, along with helpful buttons to Copy the URL or open in a new tab.

Accepts either a string or an async function to resolve a URL based on the current document.

![Iframe View Pane](https://user-images.githubusercontent.com/9684022/121473207-3548de00-c9ba-11eb-88a0-7d6c748b3f00.png)

## Installation

```
sanity install iframe
```

This is designed to be used as a [Component inside of a View](https://www.sanity.io/docs/structure-builder-reference#c0c8284844b7).

```js
// ./src/deskStructure.js
import Iframe from 'sanity-plugin-iframe'

// ...all other list items

S.view
  .component(Iframe)
  .options({
    // Accepts an async function
    url: (doc) => resolveProductionUrl(doc),
    // OR a string
    url: `https://sanity.io`,
  })
  .title('Preview')
```

## License

MIT © Simeon Griggs
See LICENSE
