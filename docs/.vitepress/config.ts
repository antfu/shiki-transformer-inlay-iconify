import { presetIcons } from 'unocss'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { transformerInlayIconify } from '../../src'

export default defineConfig({
  title: 'Shiki Color Highlight',
  description: 'Shiki transformer to highlight color in code',
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/antfu/shiki-transformer-inlay-iconify' },
    ],
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    codeTransformers: [
      transformerInlayIconify(),
    ],
  },
  vite: {
    plugins: [
      UnoCSS({
        presets: [
          presetIcons(),
        ],
      }),
    ],
  },
})
