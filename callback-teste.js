function showResultado(somaNumeros){
    var a = 1;
    var b = 2;
    // função de callback passada como parametro
    var resultado = somaNumeros(a,b);
    // mostra na tela
    console.log("O resultado é ", resultado);
  }
  
  function somaNumeros(n1,n2){
    var total = n1 + n2;
    return total;
  }
  
  showResultado(somaNumeros)