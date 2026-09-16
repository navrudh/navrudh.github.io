// Theme Toggle Script with LocalStorage Persistence
(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // 1. Check saved preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    body.classList.remove('light');
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
  }

  // 2. Toggle listener
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('theme', 'light');
      } else {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }
})();
