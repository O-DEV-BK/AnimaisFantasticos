import initanimanumeros from './anima-numeros.js';

export default function initfetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animasiresponse = await fetch(url);
      const animaisJSON = await animasiresponse.json();
      const numerosgrid = document.querySelector('.numero-grid');

      animaisJSON.forEach(animal => {
        const divanimal = createanimal(animal);
        numerosgrid.appendChild(divanimal);
      });

      initanimanumeros();
    } catch (erro) {
      console.log(Error(erro))
    }
  }

  function createanimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  fetchAnimais('./animaisApi.json');

}

