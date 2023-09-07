export default class initTabNav {
  constructor(menu, content) {
    this.tabmenu = document.querySelectorAll(menu);
    this.tabcontent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }
// ativa a tab de acordo com o index da mesma

  activetab(index) {
    this.tabcontent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabcontent[index].dataset.anime;
    this.tabcontent[index].classList.add(this.activeClass, direcao);
  }

  //adiciona os eventos as tabs
  addTabNavEvent() {
    this.tabmenu.forEach((itemmenu, index) => {
      itemmenu.addEventListener('click', () => this.activetab(index));
    });
  }

  init() {
    if (this.tabmenu.length && this.tabcontent.length) {
      //ativar primeiro item
      this.activetab(0);
      this.addTabNavEvent();
    }
  }
}
