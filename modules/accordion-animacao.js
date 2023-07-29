export default function initAccordion() {
  const accordionlist = document.querySelectorAll('[data-anime="accordion"] dt');
  if (accordionlist.length) {
    const ativo = 'ativo'
    accordionlist[0].classList.add(ativo)
    accordionlist[0].nextElementSibling.classList.add(ativo)

    function activeAccordion() {
      this.classList.toggle(ativo)
      this.nextElementSibling.classList.toggle(ativo)
    }

    accordionlist.forEach((item) => {
      item.addEventListener('click', activeAccordion)

    })
  }
}
