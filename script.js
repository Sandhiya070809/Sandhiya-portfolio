// show current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
let navOpen = false;
menuToggle.addEventListener('click', () => {
  navOpen = !navOpen;
  if (navOpen) {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'fixed';
    nav.style.top = '64px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = '#fff';
    nav.style.padding = '14px 20px';
    nav.style.gap = '12px';
    nav.querySelectorAll('a').forEach(a => a.style.color = '#0A4DCC');
  } else {
    nav.style.display = '';
    nav.style.position = '';
    nav.style.background = '';
  }
});

// smooth scrolling and close mobile nav when link clicked
document.querySelectorAll('.navlink, .nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    if (!target) return;
    const headerH = document.querySelector('.topbar').offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - headerH - 10;
    window.scrollTo({ top, behavior: 'smooth' });

    if (window.innerWidth < 900) {
      nav.style.display = '';
      navOpen = false;
    }
  });
});

// Close mobile nav when resizing to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 900) {
    nav.style.display = '';
    navOpen = false;
  }
});
