// Enhance existing Graph/Explorer/TOC only; never replace their data or renderer.
(() => {
  if (window.__tcdPanelsInstalled) return
  window.__tcdPanelsInstalled = true
  const preferenceKey = "tcd.panels.v1.graphMinimized"
  let minimized = false
  try {
    const saved = window.sessionStorage.getItem(preferenceKey)
    if (saved === "true" || saved === "false") minimized = saved === "true"
  } catch { /* Storage unavailable: keep the existing in-memory behavior. */ }
  function savePreference() {
    try { window.sessionStorage.setItem(preferenceKey, String(minimized)) }
    catch { /* Navigation and controls must continue when storage is unavailable. */ }
  }

  function setup() {
    if (!document.querySelector(".tcd-panels-enabled")) return
    const explorer = document.querySelector(".left.sidebar > .explorer")
    if (explorer && innerWidth <= 800) {
      explorer.classList.remove("collapsed")
      explorer.setAttribute("aria-expanded", "true")
      document.documentElement.classList.remove("mobile-no-scroll")
      const button = explorer.querySelector(".desktop-explorer")
      if (button) {
        button.onclick = () => queueMicrotask(() => {
          // The native toggle assumes an overlay; this layout is inline on mobile.
          if (innerWidth <= 800) document.documentElement.classList.remove("mobile-no-scroll")
        })
      }
    }
    const graph = document.querySelector(".right.sidebar > .graph")
    const right = document.querySelector(".right.sidebar")
    if (!graph || !right) return
    const local = graph.querySelector(".graph-outer")
    if (!local) return
    let bar = graph.querySelector(".tcd-graph-controls")
    if (!bar) {
      bar = document.createElement("div")
      bar.className = "tcd-graph-controls"
      const toggle = document.createElement("button")
      toggle.type = "button"
      toggle.className = "tcd-toggle-graph"
      local.id = "tcd-local-graph"
      toggle.setAttribute("aria-controls", local.id)
      const global = graph.querySelector(".global-graph-icon")
      bar.append(toggle)
      if (global) {
        global.textContent = "Grafo global"
        global.setAttribute("aria-label", "Abrir grafo global")
        bar.append(global)
      }
      graph.insertBefore(bar, local)
    }
    // Keep the same native canvas and its zoom state. No synthetic theme/nav events.
    function apply() {
      graph.dataset.tcdMinimized = String(minimized)
      const button = bar.querySelector(".tcd-toggle-graph")
      button.textContent = minimized ? "Restaurar grafo" : "Minimizar grafo"
      button.setAttribute("aria-expanded", String(!minimized))
      local.inert = minimized
    }
    bar.querySelector(".tcd-toggle-graph").onclick = () => { minimized = !minimized; savePreference(); apply() }
    apply()
    if (!document.querySelector(".tcd-panel-tools")) {
      const tools = document.createElement("div")
      tools.className = "tcd-panel-tools"
      const jump = document.createElement("button")
      jump.type = "button"
      jump.textContent = "Ir a grafo e índice"
      jump.addEventListener("click", () => {
        right.scrollIntoView({ behavior: "smooth", block: "start" })
      })
      tools.append(jump)
      document.querySelector(".center")?.prepend(tools)
    }
  }
  document.addEventListener("nav", setup)
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup, { once: true })
  else setup()
})()

;
// Experimental PG-01A: reserve wheel default action for the native graph only.
(() => {
  if (window.__tcdPg01aInstalled) return
  window.__tcdPg01aInstalled = true
  const bound = new WeakSet()

  function guardGraphWheel(event) {
    // Do not stop propagation: D3 must still receive the event and update zoom.
    if (event.cancelable) event.preventDefault()
  }

  function setupGraphWheelGuard() {
    if (!document.querySelector('.tcd-panels-enabled')) return
    for (const container of document.querySelectorAll(
      '.right.sidebar .graph-container, .right.sidebar .global-graph-container',
    )) {
      if (bound.has(container)) continue
      container.addEventListener('wheel', guardGraphWheel, { capture: true, passive: false })
      bound.add(container)
    }
  }

  document.addEventListener('nav', setupGraphWheelGuard)
  document.addEventListener('render', setupGraphWheelGuard)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupGraphWheelGuard, { once: true })
  } else setupGraphWheelGuard()
})()

;
// Only expose native outer scrolling to the keyboard in low-height windows.
// No wheel or keyboard-event interception; PG-01A remains untouched.
(() => {
  if (window.__tcdPg01bInstalled) return
  window.__tcdPg01bInstalled = true
  const originals = new WeakMap()
  const attributes = ['tabindex', 'role', 'aria-label', 'data-pg01b-scroll-region']
  function setup() {
    const active = !!document.querySelector('.tcd-panels-enabled') && innerHeight <= 600
    for (const [selector, label] of [
      ['.left.sidebar', 'Panel de Explorer: desplazamiento exterior'],
      ['.right.sidebar', 'Panel de grafo e índice: desplazamiento exterior'],
    ]) {
      const node = document.querySelector(selector)
      if (!node) continue
      if (!originals.has(node)) originals.set(node, attributes.map(name => node.getAttribute(name)))
      const saved = originals.get(node)
      if (active) {
        node.setAttribute('tabindex', '0')
        node.setAttribute('role', saved[1] || 'region')
        node.setAttribute('aria-label', saved[2] || label)
        node.setAttribute('data-pg01b-scroll-region', 'true')
      } else {
        attributes.forEach((name, i) => saved[i] === null ? node.removeAttribute(name) : node.setAttribute(name, saved[i]))
      }
    }
  }
  document.addEventListener('nav', setup)
  document.addEventListener('render', setup)
  window.addEventListener('resize', setup)
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup, { once: true })
  else setup()
})()

;
// Isolated geometry/backlinks/drawers only; native graph, wheel guard and PG-02 unchanged.
(() => {
 if(window.__pdInstalled)return;window.__pdInstalled=true;
 let backlinksExpanded=false,opener=null;const priorInert=new Map();
 const scope=()=>!!document.querySelector('.tcd-panels-enabled');
 const narrow=()=>innerWidth<1200;
 const leftPresentationTitles=new WeakMap();
 function alignLeftPresentation(){
  const body=document.body,portal=!!document.querySelector('.tcd-left-layout');
  const title=document.querySelector('.left.sidebar .desktop-explorer h2');
  if(!portal||innerWidth<1200){delete body.dataset.tcdLeftLayout;if(title&&leftPresentationTitles.has(title)){title.textContent=leftPresentationTitles.get(title);leftPresentationTitles.delete(title);}return;}
  const grid=document.querySelector('#quartz-body');if(!grid)return;
  body.style.setProperty('--pd-left',grid.getBoundingClientRect().left+'px');body.dataset.tcdLeftLayout='desktop';
  if(title){if(!leftPresentationTitles.has(title))leftPresentationTitles.set(title,title.textContent);title.textContent='EXPLORADOR';}
 }

 function align(){alignLeftPresentation();const grid=document.querySelector('#quartz-body');if(!grid||!scope())return;const r=grid.getBoundingClientRect();document.body.style.setProperty('--pd-left',r.left+'px');document.body.style.setProperty('--pd-right',(r.right-280)+'px');if(!narrow())close(false);}
 function close(returnFocus=true){delete document.body.dataset.pdOpen;for(const [e,value]of priorInert)e.inert=value;priorInert.clear();for(const b of document.querySelectorAll('.pd-toolbar button[data-panel]'))b.setAttribute('aria-expanded','false');if(returnFocus&&opener?.isConnected)opener.focus({preventScroll:true});}
 function open(side,button){if(document.body.dataset.pdOpen===side){close();return;}close(false);opener=button;document.body.dataset.pdOpen=side;button.setAttribute('aria-expanded','true');const panel=document.querySelector('.'+side+'.sidebar');for(const e of document.querySelectorAll('.center, footer, .left.sidebar, .right.sidebar')){priorInert.set(e,e.inert);e.inert=e!==panel;}panel?.focus({preventScroll:true});}
 function setup(){
  alignLeftPresentation();
  if(!scope()){document.querySelector('.pd-toolbar')?.remove();document.querySelector('.pd-backdrop')?.remove();close(false);return;}
  const left=document.querySelector('.left.sidebar'),right=document.querySelector('.right.sidebar');if(!left||!right)return; const graphTitle=right.querySelector('.graph>h3');if(graphTitle)graphTitle.textContent='VISTA GRAFO';const tocTitle=right.querySelector('.toc>button h3');if(tocTitle)tocTitle.textContent='TABLA DE CONTENIDOS'; const explorerTitle=left.querySelector('.desktop-explorer h2');if(explorerTitle)explorerTitle.textContent='EXPLORADOR';
  left.id='pd-explorer-panel';right.id='pd-right-panel';for(const [e,name]of [[left,'Explorer'],[right,'Grafo, índice y enlaces a esta página']]){e.tabIndex=0;e.setAttribute('role','region');e.setAttribute('aria-label',name);}
  for(const [e,name]of [[left.querySelector('.explorer-content'),'Lista Explorer'],[right.querySelector('.toc-content'),'Secciones de la nota']])if(e){e.tabIndex=0;e.setAttribute('aria-label',name);}
  const box=right.querySelector('.backlinks'),list=box?.querySelector('ul'),title=box?.querySelector('h3');
  if(box&&list&&title){let head=box.querySelector('.pd-back-head');if(!head){head=document.createElement('div');head.className='pd-back-head';title.textContent='ENLACES A ESTA PÁGINA';box.prepend(head);head.append(title);const button=document.createElement('button');button.type='button';button.setAttribute('aria-controls','pd-backlinks-list');head.append(button);}list.id='pd-backlinks-list';list.tabIndex=0;list.setAttribute('aria-label','Enlaces entrantes reales');const button=head.querySelector('button');const apply=()=>{box.dataset.pdMinimized=String(!backlinksExpanded);button.textContent=backlinksExpanded?'Minimizar':'Maximizar';button.setAttribute('aria-expanded',String(backlinksExpanded));list.inert=!backlinksExpanded;};button.onclick=()=>{if(backlinksExpanded&&list.contains(document.activeElement))button.focus({preventScroll:true});backlinksExpanded=!backlinksExpanded;apply();};apply();}
  if(!document.querySelector('.pd-toolbar')){const toolbar=document.createElement('nav');toolbar.className='pd-toolbar';toolbar.setAttribute('aria-label','Paneles de navegación');for(const [side,label,id]of [['left','Explorer','pd-explorer-panel'],['right','Grafo e índice','pd-right-panel']]){const b=document.createElement('button');b.type='button';b.dataset.panel=side;b.textContent=label;b.setAttribute('aria-controls',id);b.setAttribute('aria-expanded','false');b.onclick=()=>open(side,b);toolbar.append(b);}const portal=document.createElement('a');portal.href='/mapa-tcd';portal.textContent='Portal Vivo';portal.className='internal';toolbar.append(portal);document.body.append(toolbar);const backdrop=document.createElement('div');backdrop.className='pd-backdrop';backdrop.setAttribute('aria-hidden','true');backdrop.onclick=()=>close();document.body.append(backdrop);}
  align();
 }
 document.addEventListener('keydown',e=>{if(!document.body.dataset.pdOpen)return;if(document.querySelector('.global-graph-outer.active'))return;if(e.key==='Escape'){e.preventDefault();close();return;}if(e.key!=='Tab')return;const panel=document.querySelector('.'+document.body.dataset.pdOpen+'.sidebar');const focusable=[...panel.querySelectorAll('a[href],button,[tabindex="0"],input')].filter(x=>!x.inert&&!x.closest('[inert]')&&x.getClientRects().length);const first=focusable[0],last=focusable.at(-1);if(e.shiftKey&&(document.activeElement===first||document.activeElement===panel)){e.preventDefault();last?.focus({preventScroll:true});}else if(!e.shiftKey&&(document.activeElement===last||document.activeElement===panel)){e.preventDefault();first?.focus({preventScroll:true});}});
 document.addEventListener('click',e=>{const a=e.target.closest?.('.right.sidebar .toc-content a');if(!a||!narrow()||!document.body.dataset.pdOpen)return;const h=document.getElementById(decodeURIComponent(a.hash.slice(1)));close(false);if(h){const previous=h.getAttribute('tabindex');h.setAttribute('tabindex','-1');h.focus({preventScroll:true});h.addEventListener('blur',()=>{if(previous===null)h.removeAttribute('tabindex');else h.setAttribute('tabindex',previous);},{once:true});}});document.addEventListener('nav',()=>{close(false);setup();});document.addEventListener('render',setup);window.addEventListener('resize',align);
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});else setup();
})();



