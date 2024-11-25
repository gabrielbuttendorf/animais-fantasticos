import outsideClick from './outside-click.js';

export default class DropdownMenu {
  constructor(menus, events) {
    this.dropdownMenus = document.querySelectorAll(menus);
    this.activeClass = 'ativo';

    events === undefined
      ? (this.events = ['click', 'touchstart'])
      : (this.events = events);

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    const element = event.currentTarget;
    event.preventDefault();
    element.classList.add(this.activeClass);

    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }

    return this;
  }
}
