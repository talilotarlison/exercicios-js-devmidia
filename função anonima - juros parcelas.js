// https://www.alura.com.br/artigos/convencoes-nomenclatura-camel-pascal-kebab-snake-case

(()=>{
    console.log("Calculo de juros no mes!");
  })();

(function(){
    console.log("Calculando...");
  })();


var emprestimo = ()=>{
  
  var valor_emprestimo = 200;// valor do emprestimo
  var taxa_juros = 0.03; // 3% de juros
  var num_parcelar = 6; 
  
  
  var contador = 1;  
  
  while(contador <= num_parcelar){
    var numero_parcelas = contador;
    var juros_emprestimos = valor_emprestimo * taxa_juros*numero_parcelas;
      console.log(`A taxa de juros no periodo ${numero_parcelas} meses em reais é ${juros_emprestimos}`);
      contador ++;
    }
  
  }
  
emprestimo();





