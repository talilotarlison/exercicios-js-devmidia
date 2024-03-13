
// calcular area do triangulo
// area = base x (altura / 2 )

// funcao entrada de dados
function menu(){
    console.log("======== CALCULAR AREA TRINGULO ============");
    console.log("Inserir base do triangulo?");
    console.log("Inserir altura do triangulo?");
    console.log("Calculando...");
    var base = 50;
    var altura = 100;
    var resultadoFinal = calculoArea(base,altura);
    console.log(resultadoFinal)
    console.log("======== FIM DO PROGRAMA ============");
  }(menu())
  
  //funcao calcular a area
  function calculoArea(base,altura){
    var area = base * (altura/2);
    return `A área do triângulo (${base} * ${altura})/2 = ${area}`;
  }
  
  