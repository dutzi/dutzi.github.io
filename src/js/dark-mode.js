// Dark mode toggle
function toggleDarkMode() {
  const isLight = !window.localStorage.getItem('light');

  if (isLight) {
    document.body.classList.remove('dark');
    document.documentElement.classList.remove('dark');
    window.localStorage.setItem('light', '1');
  } else {
    document.body.classList.add('dark');
    document.documentElement.classList.add('dark');
    window.localStorage.removeItem('light');
  }
}

// Initialize dark mode on page load
(function initDarkMode() {
  if (!window.localStorage.getItem('light')) {
    document.body.classList.add('dark');
    document.documentElement.classList.add('dark');
  }
})();
