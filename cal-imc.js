const {gets} = require("./funcaoAuxiliar.js");
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
  return this.peso / Math.pow(this.altura, 2);

}
  // metodo verificar IMC===========================
verificaIMC(){
  var imc = this.calculoImc();
  
  if(imc < 18.5){
    console.log(`${this.nome}, você esta abaixo do peso!`)
  }else if(imc >= 18.5 && imc < 25 ){
    console.log(`${this.nome}, você esta com peso normal!`)
  }else if(imc >= 25 && imc < 30 ){
    console.log(`${this.nome}, você esta com peso normal!`)
  }else if(imc >= 30 && imc < 40 ){
    console.log(`${this.nome}, você esta com peso normal!`)
  }else{
    console.log(`${this.nome}, você esta obeso!`)
  }
}

}



// funçao principal main=================

(function main(){
   console.log("==========Calculo IMC =============");
   console.log("Calculando IMC ...");
   
   let nome = gets();
   let peso = gets();
   let altura = gets();
   
   
   let usuario = new Pessoa(nome, peso, altura)  ;
   usuario.calculoImc();
   usuario.verificaIMC();
   
   console.log("Fim do Programa!");
})()


