// Curso desenvolvedor de sistemas
// operador relacional

var notaMedia = 0.6;
var reprovadoFaltas = false;

console.log(notaMedia > 0.2 && notaMedia < 0.8 );

// If ternario js

console.log(notaMedia >= 0.6 ?"Aprovado":"Reprovado");

// pre encremento de variavel

var numero = 5;
numero += 5;
console.log(numero);

// sorteio numero aleatorio com  Math.random()

console.log("Inicio do Programa:");

var n1 = Math.random();
var n2 = Math.random();

function sorteio(){
  n1 = Math.random(); 
  n2 = Math.random(); 
}
console.log("Primeriro sorteio");
console.log(n1, n2);


var contador = 0;
var margemErro = 0.0000001; // Defina uma margem de erro adequada


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

while (Math.abs(n1 - n2) > margemErro){
  contador++;
  sorteio();
}

console.log("Número de iterações:", contador);

console.log("Ultimo sorteio");
console.log(n1, n2);

console.log("Fim do programa!!");
