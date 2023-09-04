export default function initAccordion() {
  const accordionlist = document.querySelectorAll('[data-anime="accordion"] dt');
  const ativo = 'ativo';

  function activeAccordion() {
    this.classList.toggle(ativo);
    this.nextElementSibling.classList.toggle(ativo);
  }
  if (accordionlist.length) {
    accordionlist[0].classList.add(ativo);
    accordionlist[0].nextElementSibling.classList.add(ativo);

    accordionlist.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
