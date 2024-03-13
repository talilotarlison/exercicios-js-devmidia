
/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/


// minha class pessoa==========================

class Pessoa{
    nome;
    peso;
    altura;
    
    constructor(nome,peso,altura){
      this.nome = nome;
      this.peso = peso;
      this.altura = altura;
    }
    
    // metodo calcular Imc=============================
  calculoImc(){
    let imc = this.peso / Math.pow(this.altura, 2);
    
    var dadosImc = {
      imc : imc.toFixed(2),
      nome: this.nome
    }
    return dadosImc;
  }
    // metodo verificar IMC===========================
  verificaIMC(dados){
    if(dados.imc < 18.5){
      console.log(`${dados.nome}, você esta abaixo do peso!`)
    }else if(dados.imc >= 18.5 && dados.imc < 25 ){
      console.log(`${dados.nome}, você esta com peso normal!`)
    }else if(dados.imc >= 25 && dados.imc < 30 ){
      console.log(`${dados.nome}, você esta com peso normal!`)
    }else if(dados.imc >= 30 && dados.imc < 40 ){
      console.log(`${dados.nome}, você esta com peso normal!`)
    }else{
      console.log(`${dados.nome}, você esta obeso!`)
    }
  }
  
  }
  
  
  
  // funçao principal main=================
  
  (function main(){
     console.log("==========Calculo IMC =============");
     console.log("Calculando IMC ...");
    // let nome = 'Maria';
    // let peso = 190;
    // let altura = 1.67;
   
     let usuario = new Pessoa('Maria', 40 , 1.67)  
     let imc = usuario.calculoImc();
     usuario.verificaIMC(imc);
     console.log("Fim do Programa!");
  })()
  
  
  