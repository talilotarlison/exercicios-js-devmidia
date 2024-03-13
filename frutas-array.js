const frutas = ['Manga', 'Laranja','Tangerina','Banana'];

console.log("\nArray antes da ordenação:\n");
console.info(frutas);

frutas.sort();

console.log("\nArray depois da ordenação:\n");
console.info(frutas);
console.log("\n");


// script parte dois 

const numeros = [10,1,2];

console.log("\nArray antes da ordenação:\n");
console.info(numeros);

function ordenaNumeros(a, b){
    return a - b;
}

numeros.sort(ordenaNumeros);

console.log("\nArray depois da ordenação:\n");
console.info(numeros);
console.log("\n");