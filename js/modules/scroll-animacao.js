export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  function animascroll() {
    sections.forEach((section) => {
      const sectiontop = section.getBoundingClientRect().top;
      if (sectiontop < 550) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    animascroll();
    window.addEventListener('scroll', animascroll);
  }
}
