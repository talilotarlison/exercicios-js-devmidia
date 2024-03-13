
// calculo de fatoria com node JSON

//funcao principal do codigo
function main(){
    console.log("Digite um numero para calcular fatorial:");
    var numEntrada = 5;
    var fat = fatorial(numEntrada);  
    console.log("O fatorial de " + numEntrada + ' é ' + fat);
  }(main())
  
  function fatorial(num){
    if(num==1 || num == 0){
      return 1
    }
    else{
      return num * fatorial(num - 1)
    }
  }
  
  