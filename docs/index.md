# Shiki Transformer Inlay Iconify

A transformer for [Shiki](https://shiki.style) that renders [Iconify](https://iconify.design) icons in code blocks, similar to the [Iconify IntelliSense](https://github.com/antfu/vscode-iconify)

```html
<div class="i-carbon:car" />
<Icon name="i-ph:acorn-duotone" />
<span i-logos-vue />
<i icon="i-svg-spinners-clock" />
```

It will insert a `<span class="shiki-inlay-iconify {matched-icon-name}">` element before the matched icon name id. You can use solutions [UnoCSS Icons](https://unocss.dev/presets/icons) to render the icons.

## Install

```sh
npm i shiki-transformer-inlay-iconify
```

## Usage

You might also need some CSS to assist the styling, for example:

```css
.shiki-inlay-iconify {
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  vertical-align: sub;
}
```

Usages for some popular frameworks:

### Shiki

Here is an example of how to use the [transformer](https://shiki.style/guide/transformers) with Shiki:

```ts
import { createHighlighter } from 'shiki'
import { transformerInlayIconify } from 'shiki-transformer-inlay-iconify'

const shiki = await createHighlighter({
  themes: [/* ... */],
  langs: [/* ... */],
})

const html = shiki.codeToHtml(code, {
  lang: 'css',
  theme: 'nord',
  transformers: [
    transformerInlayIconify() // [!code hl]
  ],
})
```

### VitePress

In VitePress, you can use the transformer in the configuration file:

```ts [.vitepress/config.ts]
import { transformerInlayIconify } from 'shiki-transformer-inlay-iconify'
import { defineConfig } from 'vitepress'

export default defineConfig({
  markdown: {
    codeTransformers: [
      transformerInlayIconify(), // [!code hl]
    ],
  },
})
```

### Nuxt Content

In Nuxt Content, you can use the transformer by create a `mdc.config.ts` file as follows:

```ts [mdc.config.ts]
import { defineConfig } from '@nuxtjs/mdc/config'
import { transformerInlayIconify } from 'shiki-transformer-inlay-iconify'

export default defineConfig({
  shiki: {
    transformers: [
      transformerInlayIconify(), // [!code hl]
    ]
  }
})
```
