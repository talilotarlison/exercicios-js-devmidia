
// script aula parte dois

const dataAtual = new Date();

console.log( dataAtual.getFullYear() );
console.log( dataAtual.getMonth() );
console.log( dataAtual.getDate() );
console.log( dataAtual.getHours() );
console.log( dataAtual.getMinutes() );
console.log( dataAtual.getSeconds() );
console.log( dataAtual.getMilliseconds() );
console.log( dataAtual.getDay() );


//===========================
console.log( dataAtual.getUTCFullYear() );
console.log( dataAtual.getUTCMonth() );
console.log( dataAtual.getUTCDate() );
console.log( dataAtual.getUTCHours() );
console.log( dataAtual.getUTCMinutes() );
console.log( dataAtual.getUTCSeconds() );
console.log( dataAtual.getUTCMilliseconds() );
console.log( dataAtual.getUTCDay() );



const dataAtual1 = new Date();

console.log( dataAtual1.getTime() );
console.log( dataAtual1.getTimezoneOffset() );
console.log( dataAtual1.valueOf() );