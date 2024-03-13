/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let precoEtiqueta = 100;
let formaDePAgamento = 2;

function calculoDoPagamento(formaDePAgamento, precoEtiqueta){
  if(formaDePAgamento==1){
    console.log('Valor a ser pago em R$: ', pagamentoAvistaDebitoDinheiroPix(precoEtiqueta,10).toFixed(2));
  }else if(formaDePAgamento==2){
     console.log('Valor a ser pago em R$: ', pagamentoAvistaDebitoDinheiroPix(precoEtiqueta,15).toFixed(2));
  }else if(formaDePAgamento == 3){
    console.log('Valor a ser pago em R$', pagamentoEmDuasVezez(precoEtiqueta).toFixed(2));
  }else{
  console.log('Valor a ser pago em R$:', pagamentoAcimaDeDuasVezes(precoEtiqueta, 10).toFixed(2));
  }
}

function pagamentoAvistaDebitoDinheiroPix(precoEtiqueta, taxa){
  return precoEtiqueta - (precoEtiqueta*(taxa/100));
}

function pagamentoEmDuasVezez(precoEtiqueta){
   return precoEtiqueta;
}

function pagamentoAcimaDeDuasVezes(precoEtiqueta, taxa){
   return precoEtiqueta + (precoEtiqueta*(taxa/100));
}


calculoDoPagamento(formaDePAgamento, precoEtiqueta);
console.log("Fim do programa.");