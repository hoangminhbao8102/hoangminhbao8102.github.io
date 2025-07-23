// Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-dark');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
}

// Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Typing Text (Trang chủ)
if (document.querySelector('.typing')) {
  new Typed('.typing', {
    strings: ["Full-Stack Developer", "Mobile Developer"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
  });
}

// Scroll Reveal
ScrollReveal().reveal('.fade-up', {
  distance: '40px',
  origin: 'bottom',
  duration: 800,
  delay: 100,
  easing: 'ease-out',
  interval: 100
});

// Page Transition
const transitionEl = document.querySelector('.page-transition');
document.querySelectorAll('a').forEach(link => {
  if (link.hostname === window.location.hostname) {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      transitionEl.classList.add('active');
      setTimeout(() => { window.location.href = href; }, 500);
    });
  }
});
window.addEventListener('load', () => {
  transitionEl.classList.remove('active');
});
