//Uma expressão arrow function possui uma sintaxe mais curta em comparação com uma expressão de função tradicional.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

const saudacao = (nome) => {
    return `Olá, ${nome}!`;
};
console.log(saudacao("Maria")); // Saída: Olá, Maria!


const dobrarNumero = (num) => num * 2;
console.log(dobrarNumero(5)); // Saída: 10

const quadrado = x => x * x;
console.log(quadrado(3)); // Saída: 9


const calcularAreaRetangulo = ({ largura, altura }) => largura * altura;
console.log(calcularAreaRetangulo({ largura: 5, altura: 3 })); // Saída: 15
