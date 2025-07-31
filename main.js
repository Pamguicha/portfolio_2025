 const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-container');

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('show');
  });