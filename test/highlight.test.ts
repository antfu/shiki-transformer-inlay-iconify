import { createHighlighter } from 'shiki'
import { expect, it } from 'vitest'
import { transformerInlayIconify } from '../src'
import { fixture1 } from './fixture'

it('case1', async () => {
  const shiki = await createHighlighter({
    langs: ['html'],
    themes: ['vitesse-dark'],
  })

  const result = shiki.codeToHtml(fixture1, {
    lang: 'html',
    theme: 'vitesse-dark',
    transformers: [
      transformerInlayIconify(),
    ],
  })

  expect(result).toMatchFileSnapshot('./output/case1.html')
})
