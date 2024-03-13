
const numeros = [3, 6, 10, 12 ,15]
const triplo = numeros.map((numero) => numero * 3);

console.log(triplo);


function mutiplo(numero){
  return numero * 4
}

const triplo1 = numeros.map((numero) => mutiplo(numero));

console.log(triplo1);