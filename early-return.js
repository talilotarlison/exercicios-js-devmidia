console.log("Hello, World!");
//O return dentro do IF é early return. 
//https://dev.to/dicas_devon/dicas-para-o-uso-do-padrao-early-return-no-javascript-3bb7
let total=0;
const numbers = ['b',10,20,30];
numbers.forEach(number => {
  if( number === 20)return;
  total =+ number;
});
console.log(total);