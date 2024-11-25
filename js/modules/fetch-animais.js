import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.species}</h3>`;
    div.innerHTML += `<span data-numero>${animal.total}</span>`;
    return div;
  }

  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    document.querySelector(target).appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }
  
  async function criarAnimais() {
    try {
      const responseAnimais = await fetch(url);
      const jsonAnimais = await responseAnimais.json();

      jsonAnimais.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  return criarAnimais();
}
