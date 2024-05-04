//https://pt.stackoverflow.com/questions/55867/calcular-quanto-tempo-demora-pra-executar-uma-fun%C3%A7%C3%A3o

var teste = [];
var inicio = performance.now();
for (var i = 1; i <= 305; i++) {
	for (var x = 1; x <= 305; x++) {
        if(x != i){
           teste.push(i+'|'+x);
        }
    }
}
   
var fim = performance.now();
console.log(teste)
console.log('Tempo de excução: ' + (fim - inicio));