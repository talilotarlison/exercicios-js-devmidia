// metodo 1 teste:

const lodash = require('lodash');
const arr = [3, 6, 1, 5, 8];
const sum = lodash.sum(arr);

console.log("A soma dos elementos é:", sum);

// metodo 2 teste:

const numeros = [2, 5, 7, 9, 10];
const soma = numeros.reduce((total, elemento) => total + elemento, 0);

console.log("A soma dos elementos é:", soma);

// metodo 3 teste:

var numerosTeste = [2,3,4,9,45,50,48,36];

function somaNumeros(numeros){
  
  const soma = numeros.reduce((total, elemento) => total + elemento, 0);
  
  console.log('Total é: ',soma);
}

somaNumeros(numerosTeste);

// metodo 4 teste:


function somaNumerosDinamica(...numeros){
  
  const soma = numeros.reduce((total, elemento) => total + elemento, 0);
  
  console.log('Total é: ',soma);
}

somaNumerosDinamica(2,3,4,9,45,50,48,36);
