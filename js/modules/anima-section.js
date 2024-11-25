import debounce from './debounce.js';

export default class AnimaSection {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.metadeWindow = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 25);
  }

  getTopDistance() {
    this.topDistances = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.metadeWindow),
      };
    });
  }

  checkDistance() {
    this.topDistances.forEach((section) => {
      if (window.scrollY > section.offset) {
        section.element.classList.add('ativo');
      }
    });

    const alturaTotalWindow = document.documentElement.offsetHeight;
    const alturaAtual = window.innerHeight + window.scrollY;

    if (alturaAtual === alturaTotalWindow) {
      window.removeEventListener('scroll', this.checkDistance);
    }
  }

  setAnimaSectionEvent() {
    window.addEventListener('scroll', this.checkDistance);
  }

  init() {
    if (this.sections.length) {
      this.getTopDistance();
      this.setAnimaSectionEvent();
      this.checkDistance();
    }

    return this;
  }
}
