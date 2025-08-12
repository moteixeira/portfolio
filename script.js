(function () {
  const btn = document.getElementById('theme-toggle');
  const body = document.body;

  // Lê preferencia salva ou usa a do sistema
  const saved = localStorage.getItem('theme'); // "light" | "dark" | null
  const systemPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  let current = saved ? saved : (systemPrefersLight ? 'light' : 'dark');

  apply(current);

  btn.addEventListener('click', function () {
    current = (current === 'light') ? 'dark' : 'light';
    apply(current);
    localStorage.setItem('theme', current);
  });

  // Atualiza DOM e botão
  function apply(mode) {
    if (mode === 'light') {
      body.classList.add('light');
      btn.setAttribute('aria-label', 'Mudar para tema escuro');
      btn.setAttribute('aria-pressed', 'true');
      btn.innerHTML = '<i class="ph ph-moon-stars" aria-hidden="true"></i>';
    } else {
      body.classList.remove('light');
      btn.setAttribute('aria-label', 'Mudar para tema claro');
      btn.setAttribute('aria-pressed', 'false');
      btn.innerHTML = '<i class="ph ph-sun-dim" aria-hidden="true"></i>';
    }
  }
})();
