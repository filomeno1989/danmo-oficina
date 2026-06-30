// nav.js — Danmo Oficina
// Injeção dinâmica da barra de navegação, seguindo o mesmo padrão do danmo-rh.
// Inclui este ficheiro em todas as páginas com: <script src="nav.js"></script>

(function () {
  const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'dashboard.html', label: 'Dashboard' },
    { href: 'ordens.html', label: 'Ordens de Serviço' },
    { href: 'equipamentos.html', label: 'Equipamentos' },
  ];

  const navHtml = `
    <nav class="navbar">
      <div class="navbar-brand">
        <span class="navbar-logo">Danmo</span>
        <span class="navbar-modulo">Oficina</span>
      </div>
      <div class="navbar-links">
        ${links
          .map(
            (l) => `
          <a href="${l.href}" class="navbar-link ${l.href === paginaAtual ? 'active' : ''}">
            ${l.label}
          </a>`
          )
          .join('')}
      </div>
      <div class="navbar-actions">
        <button id="btn-tema" class="btn-icon" title="Mudar tema">🌓</button>
      </div>
    </nav>
  `;

  document.addEventListener('DOMContentLoaded', () => {
    const alvo = document.getElementById('nav-container');
    if (alvo) {
      alvo.innerHTML = navHtml;
    } else {
      document.body.insertAdjacentHTML('afterbegin', navHtml);
    }

    const btnTema = document.getElementById('btn-tema');
    if (btnTema && typeof alternarTema === 'function') {
      btnTema.addEventListener('click', alternarTema);
    }
  });
})();
