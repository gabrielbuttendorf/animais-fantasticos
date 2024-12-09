import ScrollSuave from './modules/scroll-suave.js';
import AnimaSection from './modules/anima-section.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import HorarioFunc from './modules/horario-func.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import NavSlide from './modules/slide.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[datatab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const animaSection = new AnimaSection('[data-anime="scroll"]');
animaSection.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new HorarioFunc('[data-semana]');
funcionamento.init();

const slide = new NavSlide('.slide', '.slide-wrapper');
slide.init();
slide.addControl();

fetchAnimais('./animais-api.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
