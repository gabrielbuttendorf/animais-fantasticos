/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={633:(t,e,n)=>{var o=n(738).default;function r(){"use strict";t.exports=r=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var e,n={},i=Object.prototype,a=i.hasOwnProperty,s=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",h=c.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,n){return t[e]=n}}function d(t,e,n,o){var r=e&&e.prototype instanceof w?e:w,i=Object.create(r.prototype),a=new D(o||[]);return s(i,"_invoke",{value:C(t,n,a)}),i}function v(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=d;var p="suspendedStart",y="suspendedYield",m="executing",g="completed",b={};function w(){}function L(){}function E(){}var M={};f(M,u,(function(){return this}));var k=Object.getPrototypeOf,x=k&&k(k(q([])));x&&x!==i&&a.call(x,u)&&(M=x);var A=E.prototype=w.prototype=Object.create(M);function S(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(r,i,s,c){var u=v(t[r],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==o(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var r;s(this,"_invoke",{value:function(t,o){function i(){return new e((function(e,r){n(t,o,e,r)}))}return r=r?r.then(i,i):i()}})}function C(t,n,o){var r=p;return function(i,a){if(r===m)throw Error("Generator is already running");if(r===g){if("throw"===i)throw a;return{value:e,done:!0}}for(o.method=i,o.arg=a;;){var s=o.delegate;if(s){var c=O(s,o);if(c){if(c===b)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(r===p)throw r=g,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r=m;var u=v(t,n,o);if("normal"===u.type){if(r=o.done?g:y,u.arg===b)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(r=g,o.method="throw",o.arg=u.arg)}}}function O(t,n){var o=n.method,r=t.iterator[o];if(r===e)return n.delegate=null,"throw"===o&&t.iterator.return&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),b;var i=v(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,b;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function q(t){if(t||""===t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(a.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(o(t)+" is not iterable")}return L.prototype=E,s(A,"constructor",{value:E,configurable:!0}),s(E,"constructor",{value:L,configurable:!0}),L.displayName=f(E,h,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,f(t,h,"GeneratorFunction")),t.prototype=Object.create(A),t},n.awrap=function(t){return{__await:t}},S(T.prototype),f(T.prototype,l,(function(){return this})),n.AsyncIterator=T,n.async=function(t,e,o,r,i){void 0===i&&(i=Promise);var a=new T(d(t,e,o,r),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(A),f(A,h,"Generator"),f(A,u,(function(){return this})),f(A,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var o in e)n.push(o);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},n.values=q,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(o,r){return s.type="throw",s.arg=t,n.next=o,r&&(n.method="next",n.arg=e),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=t,i.arg=e,r?(this.method="next",this.next=r.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;_(n)}return r}}throw Error("illegal catch attempt")},delegateYield:function(t,n,o){return this.delegate={iterator:q(t),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=e),b}},n}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},738:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},756:(t,e,n)=>{var o=n(633)();t.exports=o;try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function o(t){var n=function(t){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:n+""}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,o(r.key),r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var a=function(){return i((function e(n,o){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===o?{behavior:"smooth",block:"start"}:o,this.scrollToSection=this.scrollToSection.bind(this)}),[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}])}();function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var c=function(){return i((function e(n){var o,r;t(this,e),this.sections=document.querySelectorAll(n),this.metadeWindow=.6*window.innerHeight,this.checkDistance=(o=this.checkDistance.bind(this),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];r&&clearTimeout(r),r=setTimeout((function(){o.apply(void 0,e),r=null}),25)})}),[{key:"getTopDistance",value:function(){var t,e=this;this.topDistances=(t=this.sections,function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var n=t.offsetTop;return{element:t,offset:Math.floor(n-e.metadeWindow)}}))}},{key:"checkDistance",value:function(){this.topDistances.forEach((function(t){window.scrollY>t.offset&&t.element.classList.add("ativo")}));var t=document.documentElement.offsetHeight;window.innerHeight+window.scrollY===t&&window.removeEventListener("scroll",this.checkDistance)}},{key:"setAnimaSectionEvent",value:function(){window.addEventListener("scroll",this.checkDistance)}},{key:"init",value:function(){return this.sections.length&&(this.getTopDistance(),this.setAnimaSectionEvent(),this.checkDistance()),this}}])}(),u=function(){return i((function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="ativo"}),[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}])}(),l=function(){return i((function e(n,o){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(o),this.activeClass="ativo"}),[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){t.classList.remove(e.activeClass)})),this.tabContent[t].classList.add(this.activeClass);var n=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(n)}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}])}(),h=function(){return i((function e(n,o,r){t(this,e),this.botaoAbrir=document.querySelector(n),this.botaoFechar=document.querySelector(o),this.containerModal=document.querySelector(r),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this)}),[{key:"toggleModal",value:function(){this.containerModal.classList.toggle("ativo")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"cliqueForaModal",value:function(t){t.target===this.containerModal&&this.toggleModal()}},{key:"addModalEvents",value:function(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueForaModal)}},{key:"init",value:function(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addModalEvents(),this}}])}(),f=function(){return i((function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this)}),[{key:"criarTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipBox=e}},{key:"onMouseOver",value:function(t){var e=t.currentTarget;this.criarTooltipBox(e),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseleave",this.onMouseLeave)}},{key:"onMouseMove",value:function(t){this.tooltipBox.style.top=t.pageY+20+"px",t.pageX+230>window.innerWidth?this.tooltipBox.style.left=t.pageX-180+"px":this.tooltipBox.style.left=t.pageX+20+"px"}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"addTooltipsEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipsEvent(),this}}])}();function d(t,e,n){var o=document.documentElement,r="data-outside";function i(a){t.contains(a.target)||(n(),e.forEach((function(t){o.removeEventListener(t,i)})),t.removeAttribute(r))}t.hasAttribute(r)||(e.forEach((function(t){setTimeout((function(){o.addEventListener(t,i)}),0)})),t.setAttribute(r,""))}var v=function(){return i((function e(n,o){t(this,e),this.dropdownMenus=document.querySelectorAll(n),this.activeClass="ativo",this.events=void 0===o?["click","touchstart"]:o,this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}),[{key:"activeDropdownMenu",value:function(t){var e=this,n=t.currentTarget;t.preventDefault(),n.classList.add(this.activeClass),d(n,this.events,(function(){n.classList.remove(e.activeClass)}))}},{key:"addDropdownMenuEvent",value:function(){var t=this;this.dropdownMenus.forEach((function(e){t.events.forEach((function(n){e.addEventListener(n,t.activeDropdownMenu)}))}))}},{key:"init",value:function(){return this.dropdownMenus.length&&this.addDropdownMenuEvent(),this}}])}(),p=function(){return i((function e(n,o,r){t(this,e),this.menuButton=document.querySelector(n),this.menuList=document.querySelector(o),this.activeClass="ativo",this.events=void 0===r?["click","touchstart"]:r,this.openMenu=this.openMenu.bind(this)}),[{key:"openMenu",value:function(){var t=this;this.menuButton.classList.add(this.activeClass),this.menuList.classList.add(this.activeClass),d(this.menuList,this.events,(function(){t.menuButton.classList.remove(t.activeClass),t.menuList.classList.remove(t.activeClass)}))}},{key:"addMenuMobileEvent",value:function(){var t=this;this.events.forEach((function(e){t.menuButton.addEventListener(e,t.openMenu)}))}},{key:"init",value:function(){return this.menuButton&&this.addMenuMobileEvent(),this}}])}(),y=function(){return i((function e(n){t(this,e),this.funcionamento=document.querySelector(n),this.activeClass="aberto"}),[{key:"dadosFuncionamento",value:function(){this.diasSemanaAberto=this.funcionamento.dataset.semana.split(",").map(Number),this.horarioAberto=this.funcionamento.dataset.horario.split(",").map(Number)}},{key:"dadosAgora",value:function(){this.dataAgora=new Date,this.diaAgora=this.dataAgora.getDay(),this.horaAgora=this.dataAgora.getUTCHours()-3}},{key:"estaAberto",value:function(){return this.isDiaSemanaAberto=-1!==this.diasSemanaAberto.indexOf(this.diaAgora),this.isHorarioAberto=this.horaAgora>=this.horarioAberto[0]&&this.horaAgora<this.horarioAberto[1],this.isDiaSemanaAberto&&this.isHorarioAberto}},{key:"addClassAberto",value:function(){this.estaAberto()&&this.funcionamento.classList.add(this.activeClass)}},{key:"init",value:function(){return this.dadosFuncionamento(),this.dadosAgora(),this.addClassAberto(),this}}])}();function m(t,e,n,o,r,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(o,r)}var g=n(756),b=n.n(g),w=function(){return i((function e(n,o,r){t(this,e),this.numeros=document.querySelectorAll(n),this.observerTarget=document.querySelector(o),this.observerClass=r,this.handleMutation=this.handleMutation.bind(this)}),[{key:"animaNumeros",value:function(){var t=this;this.numeros.forEach((function(e){return t.constructor.incrementarNumero(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}],[{key:"incrementarNumero",value:function(t){var e=+t.innerText,n=Math.floor(e/100),o=0,r=setInterval((function(){o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(r))}),25*Math.random())}}])}();new a('[data-menu="suave"] a[href^="#"]').init(),new u('[data-anime="accordion"] dt').init(),new l('[data-tab="menu"] li','[datatab="content"] section').init(),new h('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new f("[data-tooltip]").init(),new c('[data-anime="scroll"]').init(),new v("[data-dropdown]").init(),new p('[data-menu="button"]','[data-menu="list"]').init(),new y("[data-semana]").init(),function(){function t(t){var e=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.species,"</h3>"),e.innerHTML+="<span data-numero>".concat(t.total,"</span>"),e}(t);document.querySelector(".numeros-grid").appendChild(e)}function e(){var n;return n=b().mark((function e(){var n;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("./animais-api.json");case 3:return n=e.sent,e.next=6,n.json();case 6:e.sent.forEach((function(e){return t(e)})),new w("[data-numero]",".numeros","ativo").init(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(Error(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})),e=function(){var t=this,e=arguments;return new Promise((function(o,r){var i=n.apply(t,e);function a(t){m(i,o,r,a,s,"next",t)}function s(t){m(i,o,r,a,s,"throw",t)}a(void 0)}))},e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}(),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){var e=1e3/t.BRL.buy;document.querySelector(".btc-preco").innerText=e.toFixed(4)})).catch((function(t){console.log(Error(t))}))})()})();