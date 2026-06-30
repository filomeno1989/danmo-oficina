// nav.js — Danmo Oficina
// Usa exatamente as classes definidas em style.css (.navbar, .navbar-brand,
// .navbar-menu, .navbar-user) — o mesmo padrão visual dos outros módulos Danmo.

function renderNavbarOficina(paginaActiva) {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  const paginas = [
    { id: 'dashboard',     label: 'Dashboard',      href: 'dashboard.html' },
    { id: 'ordens',        label: 'Ordens de Serviço', href: 'ordens.html' },
    { id: 'equipamentos',  label: 'Equipamentos',   href: 'equipamentos.html' },
    { id: 'config',        label: 'Config',         href: 'config.html' },
  ];

  nav.innerHTML = `
    <a href="dashboard.html" class="navbar-brand">
      <span class="logo-box">DM</span>
      <span>
        <div class="brand-name">Danmo</div>
        <div class="brand-sub">Oficina</div>
      </span>
    </a>
    <div class="navbar-menu">
      ${paginas
        .map(
          (p) => `<a href="${p.href}" class="${paginaActiva === p.id ? 'active' : ''}">${p.label}</a>`
        )
        .join('')}
      <button id="btn-tema-header" onclick="togglePainelTemas()">🎨</button>
    </div>
    <div class="navbar-user">
      <span>Oficina</span>
    </div>
  `;
}
