//https://www.w3schools.com/jsref/jsref_charat.asp
// acessa posição do caracter da string
var msg = "Hello, World!"

console.log(msg[0]);


let text = "HELLO WORLD";
let letter = text.charAt(10);

console.log(letter)

//switch com uso de template string 
let linguagem = "JavaScript";
let stack = "mobile";

switch (stack) {
  case "back-end":
    console.log(`Estude Node.js para programação ${ stack } em ${ linguagem }`);
    break;

  case "front-end":
    console.log(`Estude React para programação ${ stack } em ${ linguagem }`);
    break;

  case "mobile":
    console.log(`Estude React Native para programação ${ stack } em ${ linguagem }`);
    break;

  default:
    console.log(`Tecnologia indisponível para ${ stack }`);
    break;
}

// saber tamanho da string
let nome = "Isabela";
let frase = nome + " está aprendendo Javascript";

let tamanho_nome = nome.length;
let frase_nome = frase.length;

console.log(tamanho_nome); // 7
console.log(frase_nome); // 34

// validar tamanho de string para validar dados

let cep = "23010-090";

if ( cep.length != 9 ){

    console.log("O CEP deve ter 9 caracteres");

}

// Trabalhando com letras maiúsculas e minúsculas
let programador_10 = "Flávia";
let programador_20 = "Rogério";

console.log(programador_10.toUpperCase()); // FLÁVIA

console.log(programador_20.toLowerCase()); // rogério


//Variáveis com conteúdos iguais sendo consideradas diferentes

let programador_1 = "Flávia";
let programador_2 = "flávia";

if ( programador_1 == programador_2 ){
    console.log("iguais");
} else {
    console.log("diferentes");
}

// espaços normalmente são desnecessários, devem ser removidos deixando apenas o conteúdo da string
let nome1 = "   Diego     ";

let resultado = nome.trim();

console.log(resultado); // Diego


console.log("Tratamento de dados, clear string ->", nome1.toLowerCase().trim())


// tratamento de informações


let telefone_1 = "(99) 99999-9999";
let telefone_2 = "    (99) 99999-9999    ";

if ( telefone_1 == telefone_2 ){
    console.log("Os telefones são iguais");
} else {
    console.log("Os telefones são diferentes");
}

console.log(telefone_1); // (99) 99999-9999
console.log(telefone_2); //    (99) 99999-9999