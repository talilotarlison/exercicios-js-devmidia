import entradaDados from 'readline-sync';

console.log("Calculadora de soma entre x e y: \n")

let x = entradaDados.question("Informe o valor de x: ")
let y = entradaDados.question("Informe o valor de y: ")

let soma = Number(x) + Number(y);

console.log(x+" + "+y+" = "+soma);

// obejto que converter 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number#examples

const b = Number('121')
console.log(b+10)
