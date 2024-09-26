import type { DecorationItem, ShikiTransformer } from '@shikijs/types'
import { defaultCollections } from './collections'

export { defaultCollections }

export interface TransformerColorHighlightOptions {
  /**
   * Additional class to be added to the inlay element
   * Ignored when `getElementProps` is provided
   *
   * @default 'shiki-inlay-iconify'
   */
  class?: string | string[]
  /**
   * The prefix of the icon name
   *
   * @default ['i-', '']
   */
  prefix?: string[]
  /**
   * The tag name of the inlay element
   *
   * @default 'span'
   */
  elementTag?: string
  /**
   * Custom function to get the element props (`class`, `style`, etc) for the inlay element.
   * Returns `undefined` to skip the inlay element.
   *
   * @param name The icon name, raw
   */
  getElementProps?: (name: string) => Record<string, string> | undefined | null
  /**
   * The collections to be matched
   *
   * By default, it uses all collections from `@iconify/collections`
   */
  collections?: string[]
}

export function transformerInlayIconify(
  options: TransformerColorHighlightOptions = {},
): ShikiTransformer {
  const {
    class: classes = 'shiki-inlay-iconify',
    elementTag = 'span',
    prefix = ['i-', ''],
    collections = defaultCollections,
    getElementProps = name => ({
      class: [name, ...(typeof classes === 'string' ? [classes] : classes)].join(' '),
    }),
  } = options

  const regex = new RegExp(
    `\\b(?:${prefix.sort((a, b) => b.length - a.length).join('|')})(?:${collections.sort((a, b) => b.length - a.length).join('|')})[:\-][-\\w.]+\\b`,
    'g',
  )

  return {
    name: 'shiki-transformer-inlay-iconify',
    preprocess(code) {
      const usages: IconUsage[] = detectIconUsage(code, regex)
      this.options.decorations ||= []
      this.options.decorations.push(
        ...usages
          .map((i) => {
            const properties = getElementProps(i.name)
            if (!properties)
              return undefined
            return <DecorationItem>{
              start: i.start,
              end: i.end,
              alwaysWrap: true,
              transform: (el) => {
                el.children.unshift({
                  type: 'element',
                  tagName: elementTag,
                  properties,
                  children: [],
                })
              },
            }
          })
          .filter(x => !!x),
      )
      return undefined
    },
  }
}

interface IconUsage {
  start: number
  end: number
  name: string
}

export function detectIconUsage(code: string, regex: RegExp): IconUsage[] {
  const usages: IconUsage[] = []

  for (const match of code.matchAll(regex)) {
    const name = match[0]
    const start = match.index
    const end = start + name.length
    usages.push({ start, end, name })
  }

  return usages
    .sort((a, b) => a.start - b.start)
}
