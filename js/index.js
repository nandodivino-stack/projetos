let valor = Number(prompt('DIGITE UM NÚMERO: '))
let numeroEscolhido = document.getElementById('titulo')
let elemento = document.getElementById('texto');
let elemento2 = document.getElementById('texto-two');
let elemento3 = document.getElementById('texto-three');
let elemento4 = document.getElementById('texto-four');
let elemento5 = document.getElementById('texto-five');
let elemento6 = document.getElementById('texto-six');

/*elemento.innerHTML = valor;
elemento2.innerHTML = valor;
elemento3.innerHTML = valor;
elemento4.innerHTML = valor;
elemento5.innerHTML = valor;
elemento6.innerHTML = valor;*/

numeroEscolhido.innerHTML = valor;
elemento.innerHTML = `A raiz quadrada de ${valor} é ${valor ** 0.5}`;
elemento2.innerHTML = `${valor} é inteiro: ${Number.isInteger(valor)}`;
elemento3.innerHTML = `${valor} é NaN: ${Number.isNaN(valor)}`;
elemento4.innerHTML = `Arredondando para baixo: ${Math.floor(valor)}`;
elemento5.innerHTML = `Arredondando para cima: ${Math.ceil(valor)}`;
elemento6.innerHTML = `Com duas casas decimais: ${valor.toFixed(2)}`;


