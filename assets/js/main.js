// Woodmart By Alif - Lightweight, clean website script

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Copy address button
  const copyBtn = document.getElementById('copy-addr-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const address = "Molvi Stop, near Hamdan Gas Agency, Lal Bazar, Srinagar, Jammu and Kashmir 190023";
      navigator.clipboard.writeText(address).then(() => {
        showToast("Address copied to clipboard");
      });
    });
  }
});

function showToast(text) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}
