

function calculaMedia(notas) {
    var soma = 0 ; // Inicialize a variável soma com zero
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length; // Retorne a média das notas
}

var notas = [3, 5, 7];
console.log(calculaMedia(notas)); // Deve imprimir 5
