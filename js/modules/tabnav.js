export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    this.tabContent[index].classList.add(this.activeClass);

    const classeAnima = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(classeAnima);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }

    return this;
  }
}