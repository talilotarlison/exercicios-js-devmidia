
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

(function main(){
    console.log("==========Calculo IMC =============");
    let nome = 'Maria';
    let peso = 190;
    let altura = 1.67;
    
    let dados ={
      nome:nome,
      peso:peso,
      altura:altura
    }
   let imc = calculoImc(dados);
   verificaIMC(imc);
   console.log("Fim do Programa!");
 })()
 
 
 function calculoImc(dados){
   let imc = dados.peso / Math.pow(dados.altura, 2);
   var dadosImc = {
     imc : imc.toFixed(2),
     nome: dados.nome
   }
   return dadosImc;
 }
 
 function verificaIMC(dados){
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
 