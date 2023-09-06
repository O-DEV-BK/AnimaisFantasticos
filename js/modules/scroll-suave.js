export default class ScrollSuave {
  constructor(links, options) {
    this.linksinternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.scrolltosection = this.scrolltosection.bind(this);
  }

  scrolltosection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksinternos.forEach((link) => {
      link.addEventListener('click', this.scrolltosection);
    });
  }

  init() {
    this.addLinkEvent();
    return this;
  }
}
