//Define a variavel com o dia da semana (0 = Domingo, 1 = Segunda...)
var dia_semana = 5;

//Verifica a condição e define o resultado na variável 'status_loja'
var status_loja = (dia_semana == 0 || dia_semana == 6) ? "Funcionamos apenas de Segunda à Sexta" : "Loja aberta";

//Imprime o resultado no console
console.log(status_loja);


var nota = 10
var status = nota > 7 ? "Aprovado" : "Reprovado";
console.log(status);

var mes = 9
var mensagem = (mes == 11 || mes == 12) ? "Promoção" : "Preço normal";

console.log(mensagem);