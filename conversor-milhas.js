//Conversor de Milhas para Quilômetros
import entradaDados from 'readline-sync';

console.log("Conversor de Milhas para Quilômetros: \n");

let mi = entradaDados.question("Informe o valor em Milhas: ");

let km = mi / 0.62137;

console.log(mi+"mi equivale a "+km+"km");



//Conversor de Celsius para Kelvin


import entradaDados from 'readline-sync';

console.log("Conversor de Celsius para Kelvin: \n");

let C = entradaDados.question("Informe o valor em Celsius: ");

let K = Number(C) + 273.15;

console.log(C+"ºC equivale a "+K+"K");

// Calculo area do triangulo

import entradaDados from 'readline-sync';

console.log("Área do triângulo: \n");

let base = entradaDados.question("Informe a base: ");
let altura = entradaDados.question("Informe a altura: ");

let area = (base * altura) / 2;

console.log("A área do triângulo é: "+area);