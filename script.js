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


function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Optional: Add the dark mode toggle function if it's missing
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.getElementById('theme-icon');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeIcon.src = isDarkMode ? './assets/darkmode on.png' : './assets/darkmode off.png';
}