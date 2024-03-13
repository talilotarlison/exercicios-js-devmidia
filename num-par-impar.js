// calcular se numero é par ou impar.

// funcao entrada de dados
function Menu(){
    console.log("=============VERIFICAR NUMERO===============.");
    console.log("Entre com um numero para verificar se é Par ou Impar.");
    console.log("Calculando...");
    console.log("===========================================");
    let verificaNumeroEntrada = 3;
    verificaNumero(verificaNumeroEntrada);
    console.log("======== FIM DO PROGRAMA ============");
  }(Menu())
  
  //funcao verifica o numero
  function verificaNumero(numero){
    if((numero % 2)=== 0){
     console.log(numero,"Numero escolhido é Par.");
  }else{
    console.log(numero,"Numero escolhido é Impar.");
  }
  
  }
  
  // programa 2
  var num = [1,5,3,6,9,8,7,4,44,88,965,412,7415,]
  
  for (var i = 0; i < num.length; i++) {
       if((num[i] % 2)=== 0){
         console.log(num[i],"Numero escolhido é Par.");
      }else{
    console.log(num[i],"Numero escolhido é Impar.");
  }
  }
  
  
  
  
  