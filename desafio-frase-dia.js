/* Quiz de Fatos Históricos
 *
 * Objetivo:
 *
 * A proposta desse projeto é criar uma aplicação de quiz de fatos históricos em JavaScript. Dessa forma você poderá colocar em prática os seguintes conceitos:
 * Manipular coleção de dados;
 * Uso de métodos de array;
 * Array.sort();
 * A *rray.slice();
 * Array.forEach();
 * Uso de funções JavaScript;
 * Conhecendo o projeto
 * O projeto que será criado tem como diferencial:
 *
 * Uso de uma coleção de dados para armazenar informações;
 * A utilização de métodos de array para exibir 10 perguntas aleatórias;
 * A criação de funções JavaScript para deixar o código organizado e fácil de ser reutilizado;
 * O projeto que será criado pode ser visto na Animação 1.
 */



var frases_do_dia = [
    "Sorte é o resultado de muito esforço, trabalho e dedicação",
    "Imagine uma nova história para sua vida e acredite nela",
    "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo",
    "Se existe uma forma de fazer melhor, descubra-a",
    "Seja a mudança que você deseja ver no mundo.",
    "Um objetivo nada mais é do que um sonho com limite de tempo",
    "Você precisa fazer aquilo que pensa que não é capaz de fazer",
    "A persistência é o caminho do êxito.",
    "Concentre-se naquilo que você é bom, delegue todo o resto",
    "A amizade duplica as alegrias e divide as tristezas",
    "O que quer que você lute, você fortalece, e o que você resiste, persiste",
    "Lembre-se: sua verdadeira força, vem de dentro",
    "Nada acontece a menos que sonhemos antes",
    "Para quem ama, qualquer sacrifício é alegria",
    "A paz é a única forma de nos sentirmos realmente humanos",
    "Não existe um caminho para a felicidade. A felicidade é o caminho",
    "O amor é a alegria acompanhada da ideia de uma causa exterior",
    "A criatividade é ilimitada, pois a arte só precisa de motivação",
    "Fé, duas letras que podem mudar sua vida, acredite",
    "Que a vontade de vencer seja minha maior motivação",
    "Nunca subestime o poder de sua visão para mudar o seu mundo",
    "Não coloque limites em seus sonhos. Coloque fé",
    "Tenho certeza de que se eu sorrisse menos teria menos amigos",
    "Não espere por uma crise para descobrir o que é importante em sua vida",
    "Quem sorri sem parar não é alegre, é falso",
    "A alegria de fazer o bem é a única felicidade verdadeira",
    "A alegria evita mil males e prolonga a vida",
    "Coloque fé onde falta coragem",
    "Levanta, sacode a poeira e dá a volta por cima",
    "O que vale a pena possuir, vale a pena esperar",
    "A esperança é o sonho do homem acordado"
];


var numerosSorteados = [];

/*
  MANEIRA 01
  CHAMA DE FUNÇÃO COM INVOCAÇÃO
*/

 function menu(){
    console.log('============SORTEIO DE 10 FRASES ALEATORIAS=============');
   console.log('============iNICIANDO SORTEIO=============');
   showTela();
   console.log('============FIM DO SORTEIO=============');
    console.log('============FIM DO PROGRAMA=============');
 }(menu())

  
/*
 * MANEIRA 02
 * CHAMA DE FUNÇÃO COM INVOCAÇÃO


(()=>{
  console.log('============SORTEIO DE 10 FRASES ALEATORIAS=============');
  console.log('============iNICIANDO SORTEIO=============');
  showTela();
  console.log('============FIM DO SORTEIO=============');
  console.log('============FIM DO PROGRAMA=============');
})()


 */  

function showTela(){
  sortear();
  numerosSorteados.forEach((item,i)=>{
    console.log(i , item)
  })
}

function sortear(){
  for(i=0; i<10;i++){
    var num = Math.floor(Math.random() * 31);
    numerosSorteados.push(frases_do_dia[num])
  }
   //console.log(numerosSorteados)
}

//menu();
