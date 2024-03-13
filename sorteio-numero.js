function menu(){
    // chamada funcao sorteia numeros aleatorio
    sorteiaNumeros();
   
    // opções de entrada do usuario
    console.log("=======SORTEIO DE NUMEROS ALEATORIOS!!=======");
    console.log('Escolha um das opções abaixo:');
    console.log('1 - Mostrar todos numeros sorteados.');
    console.log('2 - Mostrar todos numeros pares.');
    console.log('3 - Mostrar todos numeros impares.');
    console.log('3 - Mostrar todos numeros terminados com 0.');
    
    //numero escolhido pelo usuario na entrada de dados
    var escolhaOpcao = 2;
    mostrarNumeros(escolhaOpcao);
  }
  
  
  // inicialização do array
  var numerosAleatorios = [];
  
  // funcao sorteia os numeros aleatorios
  function sorteiaNumeros(){
    for(n=0; n <=10; n++){
      numerosAleatorios[n] = Math.floor(Math.random() * 50);
    }
  }
  
  // funcao mostrar dados na tela apartir da escolha do usuario
  function mostrarNumeros(escolhaOpcao){
    switch (escolhaOpcao) {
    case 1:
      //Instruções executadas quando o resultado da expressão for igual á valor1
      console.log('==================================');
      console.log('Lista de todos os numeros sorteados:');
      numerosAleatorios.forEach((num) => console.log('Numero =>',num));
      //console.log(numerosAleatorios);
      break;
    case 2:
      //Instruções executadas quando o resultado da expressão for igual á valor2
      //console.log(numerosAleatorios);
      console.log('==================================');
      console.log('Lista de todos os numeros pares sorteados:');
      numerosAleatorios.forEach((num) =>{
        if(num%2 ==0){
          console.log('Numero =>',num);
        }
      })
      break;
    case 3:
      //Instruções executadas quando o resultado da expressão for igual á valor3
         //console.log(numerosAleatorios);
         console.log('==================================');
      console.log('Lista de todos os numeros impares sorteados:');
      numerosAleatorios.forEach((num) =>{
        if(num%2 !==0){
          console.log('Numero =>',num);
        }
      })
      break;
       case 4:
      //Instruções executadas quando o resultado da expressão for igual á valor4
      //console.log(numerosAleatorios);
      var numerosTerminado = [];
      
      console.log('==================================');
      console.log('Lista de todos os numeros sorteados teminados com 0:');
      numerosAleatorios.forEach((num) =>{
        if(num.toString().endsWith("0")){
          console.log('Numero =>',num);
          numerosTerminado.push(num);
        }
      })
       if(numerosTerminado.length == 0){
             console.log('Nenhum numero foi sorteado.')
        }
      break;
    default:
      //Instruções executadas quando o valor da expressão é diferente de todos os cases
      console.log('==================================');
      console.log('Escolha invalida!!tente novamente.');
      break;
  }
  }
  // chamada funçao principal
  menu();
  
  
  
  