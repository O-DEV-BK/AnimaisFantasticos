export default class Accordion {
  constructor(lista) {
    this.accordionlist = document.querySelectorAll(lista);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    this.classList.toggle(this.activeClass);
    this.nextElementSibling.classList.toggle(this.activeClass);
  }

//adiciona evento ao accordion

  addAccordionEvent() {
    this.accordionlist.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

// iniciar fução

  init() {
    if (this.accordionlist.length) {
      //ativar primeiro item
      this.toggleAccordion(this.accordionlist[0]);
      this.addAccordionEvent();
    }
  }

}
