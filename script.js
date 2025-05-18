function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById('theme-icon');
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  icon.src = isDark ? './assets/darkmode on.png' : './assets/darkmode off.png';
}
