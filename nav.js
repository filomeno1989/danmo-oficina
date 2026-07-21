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
    { id: 'colaborador_metricas',  label: 'Metrica',   href: 'colaborador_metricas.html' },
    { id: 'disponibilidade',  label: 'Disponibilidade',   href: 'disponibilidade.html' },
    { id: 'config',        label: '⚙️',         href: 'config.html' },
  ];

  nav.innerHTML = `
    <a href="dashboard.html" class="navbar-brand">
      <img src="DANMO.png" alt="Danmo" class="logo-box" />
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
      <span id="nav-relogio" class="nav-data-hora"></span>
      <span class="nav-divisor">|</span>
      <span id="nav-utilizador">${(typeof AUTH !== 'undefined' && AUTH.nome && AUTH.nome()) ? AUTH.nome() : 'Danmo Oficina'}</span>
    </div>
  `;

  atualizarRelogioNav();
  if (!window._navRelogioInterval) {
    window._navRelogioInterval = setInterval(atualizarRelogioNav, 60000);
  }
}

function atualizarRelogioNav() {
  const el = document.getElementById('nav-relogio');
  if (!el) return;
  const agora = new Date();
  const diaSemana = agora.toLocaleDateString('pt-PT', { weekday: 'long' });
  const dataFormatada = agora.toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const hora = agora.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
  const diaSemanaCap = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
  el.textContent = `${diaSemanaCap}, ${dataFormatada} · ${hora}`;
}
