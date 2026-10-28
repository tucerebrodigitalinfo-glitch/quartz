// Native Search lifecycle support: one index preparation, a body-hosted modal, and cleanup per DOM instance.
let tcdIndexPromise, tcdIndexState = 'loading', tcdIndexError = null;
const tcdSearchBindings = new Set();
let tcdSearchIdentity = null;
function tcdSetIndexState(state, error = null) {
  tcdIndexState = state; tcdIndexError = error;
  for (const binding of tcdSearchBindings) binding.update();
}
function tcdMountSearch(container, button, input, close) {
  const origin = container.parentNode, next = container.nextSibling;
  button.setAttribute('aria-label', 'Buscar en TCD Explorer');
  const label = button.querySelector('p'); if(label && document.querySelector('.tcd-panels-enabled')) label.textContent = 'Buscar en TCD';
  input.placeholder = 'Buscar notas, temas o etiquetas…';
  input.setAttribute('aria-label', 'Buscar en TCD Explorer');
  const host = document.createElement('div'); host.className = 'search tcd-search-host';
  document.body.append(host); host.append(container);
  container.setAttribute('role', 'dialog'); container.setAttribute('aria-modal', 'true');
  container.setAttribute('aria-label', 'Buscar en TCD Explorer');
  const status = document.createElement('p'); status.className = 'tcd-search-status';
  status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite');
  input.after(status);
  const launcher = document.createElement('button'); launcher.type = 'button';
  launcher.className = 'tcd-search-launcher'; launcher.setAttribute('aria-label', 'Buscar en TCD Explorer');
  launcher.setAttribute('aria-expanded', 'false');
  const icon = button.querySelector('svg'); if (icon) launcher.append(icon.cloneNode(true));
  launcher.onclick = () => button.click();
  const placeLauncher = () => {
    const toolbar = document.querySelector('.pd-toolbar');
    if (document.querySelector('.tcd-panels-enabled') && toolbar) {
      if (launcher.parentNode !== toolbar) toolbar.prepend(launcher);
    } else launcher.remove();
  };
  placeLauncher();
  const observer = new MutationObserver(placeLauncher);
  observer.observe(document.body, {childList: true});
  let lastState = null;
  const binding = {
    update() {
      const changed = lastState !== tcdIndexState; lastState = tcdIndexState;
      host.dataset.searchState = tcdIndexState;
      input.setAttribute('aria-busy', String(tcdIndexState === 'loading'));
      container.setAttribute('aria-busy', String(tcdIndexState === 'loading'));
      status.hidden = tcdIndexState === 'ready';
      status.textContent = tcdIndexState === 'error'
        ? 'No se pudo preparar el índice. Recarga la página para volver a intentarlo.'
        : 'Preparando el buscador…';
      if (changed && tcdIndexState === 'ready' && container.classList.contains('active')) input.focus();
    },
    open() {
      placeLauncher(); launcher.setAttribute('aria-expanded', 'true');
      binding.update();
      input.focus({preventScroll:true});
    },
    closed() {
      launcher.setAttribute('aria-expanded', 'false');
      if ((!button.getClientRects().length || button.closest('[inert]')) && launcher.isConnected) launcher.focus({preventScroll:true});
    }
  };
  container.__tcdSearchBinding = binding; tcdSearchBindings.add(binding); binding.update();
  const keys = event => {
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(); }
    else if (event.key === 'Tab') event.stopPropagation(); // native input/result navigation runs first; drawer trap must not capture it
  };
  container.addEventListener('keydown', keys);
  return () => {
    container.classList.remove('active'); button.setAttribute('aria-expanded','false');
    observer.disconnect(); container.removeEventListener('keydown', keys);
    launcher.remove(); status.remove(); tcdSearchBindings.delete(binding);
    delete container.__tcdSearchBinding;
    // SPA may already have supplied a fresh native container. Never append the retired one beside it.
    if (origin.isConnected && !origin.querySelector('.search-container')) origin.insertBefore(container, next?.parentNode === origin ? next : null);
    else container.remove();
    host.remove();
    origin.querySelectorAll('.ghost-text,.tag-suggestions').forEach(node => node.remove());
  };
}
function tcdOpenSearch(container) { container.__tcdSearchBinding?.open(); }
function tcdCloseSearch(container) { container.__tcdSearchBinding?.closed(); }
function tcdSearchFailure(error) { console.error('[TCD Search]', error); tcdSetIndexState('error', String(error)); }
