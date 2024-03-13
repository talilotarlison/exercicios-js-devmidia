//https://www.freecodecamp.org/portuguese/news/como-usar-a-desestruturacao-de-arrays-e-objetos-em-javascript/#:~:text=Desestrutura%C3%A7%C3%A3o%20de%20objetos%201%20Desestrutura%C3%A7%C3%A3o%20b%C3%A1sica%20de%20objetos,Rest%20em%20desestrutura%C3%A7%C3%A3o%20de%20objetos%20...%20More%20items

var arr = []

var car = {
  nome: 'fusca',
  ano: 2014,
  placa:'wrw-5512'
}

var resu = arr.push(car)
console.log(arr[0]);

var {nome, ano, placa} = arr[0] ;

console.log(nome);

var [n,_] = nome

console.log(n);