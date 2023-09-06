import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion-animacao.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initToolTip from './modules/tooltip.js';
import initDropdownMenu from './modules/dopdown-menu.js';
import initiMenuMobile from './modules/menu-mobile.js';
import initfuncionamento from './modules/funcionamento.js';
import initfetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';

const scrollsuave = new ScrollSuave('[data-menu="suave"] a[href^="#"');
scrollsuave.init();

const accordion = new accordion('[data-anime="accordion"] dt')
accordion.init();


initAnimacaoScroll();
initTabNav();
initModal();
initToolTip();
initDropdownMenu();
initiMenuMobile();
initfuncionamento();
initfetchAnimais();
initFetchBitcoin();
