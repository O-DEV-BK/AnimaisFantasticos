import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownmenus = document.querySelectorAll('[data-dropdown');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  dropdownmenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userevent) => {
      menu.addEventListener(userevent, handleClick);
    });
  });

  function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if (!element.hasAttribute(outside)) {
      events.forEach((userevent) => {
        html.addEventListener(userevent, handleOutsideClick);
      });
      element.setAttribute(outside, '');
    }

    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        events.forEach((userevent) => {
          html.removeEventListener(userevent, handleOutsideClick);
        });
        callback();
      }
    }
  }
}
