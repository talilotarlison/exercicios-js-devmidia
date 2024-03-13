
//https://www.w3schools.com/jsref/jsref_split.asp
//========================================
let label_aluno = "Aluno";
let valor_aluno = "Edmilson";

let label_grau = "Grau de escolaridade"
let valor_grau = "Ensino Médio Completo";

console.log(label_aluno.padStart(20, " ") + ": " + valor_aluno);

console.log(label_grau.padStart(20, " ") + ": " + valor_grau);

//                Aluno: Edmilson
// Grau de escolaridade: Ensino Médio Completo

//==============================================
let label = "Email: ";
let email = "contato@email.com";

console.log( label.padEnd(20, ' ') + email );

// Email:              contato@email.com

//===========================================
let label_nome = "Nome:";
let valor_nome = "Jorge Luiz";

let label_profissao = "Profissão:";
let valor_profissao = "Professor";

let label_endereco = "Endereço:";
let valor_endereco = "Rua Cruzeiro do Sul";

console.log( label_nome + valor_nome );
console.log( label_profissao + valor_profissao );
console.log( label_endereco + valor_endereco );

// Nome:Jorge Luiz
// Profissão:Professor
// Endereço:Rua Cruzeiro do Sul

//=========================================
let label1_nome = "Nome:";
let valor1_nome = "Jorge Luiz";

let label1_profissao = "Profissão:";
let valor1_profissao = "Professor";

let label1_endereco = "Endereço:";
let valor1_endereco = "Rua Cruzeiro do Sul";

console.log( label1_nome.padEnd(25, '.') + valor1_nome );
console.log( label1_profissao.padEnd(25, '.') + valor1_profissao );
console.log( label1_endereco.padEnd(25, '.') + valor1_endereco );

// Nome:....................Jorge Luiz
// Profissão:...............Professor
// Endereço:................Rua Cruzeiro do Sul

//==============================================
let texto = "A linguagem PHP é muito poderosa";
let resultado = texto.replace("PHP", "JavaScript");

console.log(resultado); // A linguagem JavaScript é muito poderosa


let frase = "Estou aprendendo JavaScript na DevMedia";

let resultado = frase.substr(17, 10);

console.log(resultado); // JavaScript

let frase = "Ana é especialista em JavaScript";

let substring_1 = frase.substring(6, 12);

console.log(substring_1); // especi
//==================================================

let frase = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";
let posicao = frase.indexOf("sonho");

console.log(posicao); // 14

//========================================================
let frase = "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.";
let posicao = frase.indexOf("esperança");

console.log(posicao); // -1
//=======================================================
let expressao_proibida = "passaporte falso";

let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();

if ( comentario.indexOf(expressao_proibida) > -1 ){

    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");

} else {

    console.log("Seu comentário foi aprovado");

}

console.log(comentario); // venda de passaporte falso
//=========================================================
// tratar frase com palavrao

let expressao_proibida = "passaporte falso";

let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();

if ( comentario.indexOf(expressao_proibida) > -1 ){

    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");

} else {

    console.log("Seu comentário foi aprovado");

}

console.log(comentario); 
// venda de passaporte falso
//=====================================
// pegar primeiro nome da string

let nome_completo = "Ana Mendes da Silva";

let array = nome_completo.split(" ");

let nome = array[0];

console.log("Olá " + nome + ", seja bem vindo(a)"); // Olá Ana, seja bem vindo(a