export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    function animascroll() {
      sections.forEach((section) => {
        const sectiontop = section.getBoundingClientRect().top
        if (sectiontop < 550)
          section.classList.add('ativo');
        else if (section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      })
    }

    animascroll();

    window.addEventListener('scroll', animascroll);
  }
}
