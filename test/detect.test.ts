import { expect, it } from 'vitest'
import { detectIconUsage } from '../src'
import { fixture1 } from './fixture'

const re = /\b(?:i-)?(?:fluent-emoji-high-contrast|material-symbols-light|cryptocurrency-color|emojione-monotone|fluent-emoji-flat|heroicons-outline|icon-park-outline|icon-park-twotone|simple-line-icons|streamline-emojis|flat-color-icons|material-symbols|heroicons-solid|icon-park-solid|pepicons-pencil|cryptocurrency|pepicons-print|bitcoin-icons|devicon-plain|entypo-social|grommet-icons|pixelarticons|system-uicons|token-branded|circle-flags|fluent-emoji|icomoon-free|medical-icon|pepicons-pop|simple-icons|svg-spinners|vscode-icons|academicons|emojione-v1|fa6-regular|fluent-mdl2|healthicons|humbleicons|majesticons|radix-icons|rivet-icons|skill-icons|akar-icons|ant-design|catppuccin|fa-regular|fa6-brands|file-icons|foundation|game-icons|gravity-ui|lets-icons|lucide-lab|mono-icons|streamline|teenyicons|arcticons|dashicons|eos-icons|fa-brands|fa6-solid|fontelico|gridicons|heroicons|hugeicons|icon-park|iconamoon|mdi-light|meteocons|websymbol|zondicons|brandico|bytesize|emojione|fa-solid|flagpack|flowbite|fontisto|guidance|marketeq|mingcute|nonicons|openmoji|pepicons|si-glyph|clarity|codicon|devicon|feather|flat-ui|formkit|fxemoji|iconoir|line-md|noto-v1|octicon|pajamas|raphael|tdesign|topcoat|twemoji|carbon|circum|entypo|fluent|icons8|lucide|memory|mynaui|nimbus|subway|tabler|vaadin|basil|charm|covid|logos|prime|quill|solar|token|typcn|bpmn|flag|gala|iwwa|mage|maki|noto|ooui|unjs|weui|zmdi|bxl|bxs|cbi|cib|cif|cil|eva|fad|geo|gis|ion|jam|map|mdi|oui|uil|uim|uis|uit|uiw|whh|wpf|bi|bx|ci|ei|el|ep|et|f7|fa|fe|gg|ic|il|la|ls|mi|oi|ph|ps|ri|vs|wi)[:-][-\w.]+\b/g
it('detect', () => {
  expect(
    detectIconUsage(
      fixture1,
      re,
    ),
  ).toMatchInlineSnapshot(`
    [
      {
        "end": 25,
        "name": "i-carbon:car",
        "start": 13,
      },
      {
        "end": 60,
        "name": "i-ph:acorn-duotone",
        "start": 42,
      },
      {
        "end": 82,
        "name": "i-logos-vue",
        "start": 71,
      },
      {
        "end": 115,
        "name": "i-svg-spinners-clock",
        "start": 95,
      },
    ]
  `)
})
