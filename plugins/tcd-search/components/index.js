import { Search as NativeSearch } from '@quartz-community/search/components'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'

// Reuse the installed native renderer, CSS and FlexSearch engine. Fail closed if upstream changes.
const expected = 'ec880d1576c45263a404dcf4730af91227383e0d107e374f1cc382362cce24e6'
const patches = [
  [
    "async function wi(){",
    "function wi(){"
  ],
  [
    "T=()=>{n.classList.remove(\"active\")",
    "T=()=>{n.classList.remove(\"active\");tcdCloseSearch(n)"
  ],
  [
    "n.classList.add(\"active\"),r.setAttribute(\"aria-expanded\",\"true\"),i.focus()",
    "n.classList.add(\"active\"),r.setAttribute(\"aria-expanded\",\"true\"),tcdOpenSearch(n),i.focus()"
  ],
  [
    "nt=async _=>{let E=_.target.value;",
    "nt=async _=>{const tcdQuery = (i.__tcdQuery = (i.__tcdQuery || 0) + 1); if(!Rt)return;let E=_.target.value;"
  ],
  [
    "await z(he.slice(0,kn));",
    "if(tcdQuery!==i.__tcdQuery||!i.isConnected)return;await z(he.slice(0,kn));"
  ],
  [
    "i.addEventListener(\"input\",nt),Ft(()=>i.removeEventListener(\"input\",nt))",
    "(()=>{const tcdInput=event=>{nt(event).catch(tcdSearchFailure)};i.addEventListener(\"input\",tcdInput);Ft(()=>i.removeEventListener(\"input\",tcdInput))})()"
  ],
  [
    "let jn=xn(n,T);Ft(jn)",
    "let jn=xn(n,T);Ft(jn);Ft(tcdMountSearch(n,r,i,T))"
  ],
  [
    "async function Ti(){Rt||(Z=await bi(),await ki(),Rt=!0)}",
    "function Ti(){if(!tcdIndexPromise)tcdIndexPromise=(async()=>{try{Z=await bi();if(!Z||typeof Z!==\"object\"||Array.isArray(Z)||!Object.values(Z).every(v=>v&&typeof v===\"object\"&&typeof v.title===\"string\"))throw Error(\"Invalid content index\");await ki();Rt=true;tcdSetIndexState('ready');for(const n of document.querySelectorAll('.tcd-search-host .search-container.active input.search-bar'))n.dispatchEvent(new Event('input'));}catch(error){tcdSearchFailure(error);throw error;}})();return tcdIndexPromise;}"
  ],
  [
    "async function Mn(){Ai(),await Ti(),await wi(),Li()}document.addEventListener(\"nav\",Mn);document.addEventListener(\"render\",Mn);",
    "function Mn(){const button=document.querySelector('.search:not(.tcd-search-host) .search-button');const host=document.querySelector('.tcd-search-host');if(button&&tcdSearchIdentity===button&&host)return;Ai();tcdSearchIdentity=button;try{wi()}catch(error){console.error('[TCD Search binding]',error)}Ti().catch(()=>{});try{Li()}catch(error){console.warn('[TCD Search navigation]',error)}}document.addEventListener(\"nav\",Mn);document.addEventListener(\"render\",Mn);if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',Mn,{once:true});else Mn();"
  ]
]
export function Search(options) {
  const native = NativeSearch(options)
  let script = native.afterDOMLoaded
  if (typeof script !== 'string' || createHash('sha256').update(script).digest('hex') !== expected) throw new Error('TCD Search: upstream script changed; review adaptation before building')
  for (const [before, after] of patches) {
    if (script.split(before).length !== 2) throw new Error('TCD Search: non-unique upstream anchor')
    script = script.replace(before, after)
  }
  native.afterDOMLoaded = readFileSync(new URL('./lifecycle.inline.js', import.meta.url), 'utf8') + '\n' + script
  native.css += '\n' + readFileSync(new URL('./search.css', import.meta.url), 'utf8')
  const Component = props => {
    const node = native(props), data = props.fileData ?? {}, slug = data.slug ?? ''
    const bases = slug === 'km-0---inicio-del-atlas/{km-0}---inicio-del-atlas.base'
    const panelPage = !['','index','mapa-tcd','404'].includes(slug) && !slug.endsWith('.base') && !/(^|\/)altavoces(?:\/|$)/i.test(slug) && !data.frontmatter?.password && !data.unlisted
    if (bases || panelPage) {
      const button = node.props.children.find(child => child?.props?.class === 'search-button')
      const caption = button?.props.children.find(child => child?.type === 'p')
      if (!caption) throw Error('Native Search caption changed')
      caption.props.children = 'Buscar en TCD'
      button.props['aria-label'] = 'Buscar en TCD Explorer'
    }
    return node
  }
  Object.assign(Component,native)
  return Component

}
