export default function initScrollSuave() {
  const linksinternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrolltosection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksinternos.forEach((link) => {
    link.addEventListener('click', scrolltosection);
  });
}
