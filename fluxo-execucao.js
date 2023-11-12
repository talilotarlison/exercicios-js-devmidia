var i = 5

const a = ()=>{
  if(i<=3){
  console.log("certo")
  // controle de fluxo dentro da função com return
  return
}

console.log("certo2")
console.log("certo3")
}

a();


var i = 2;

(()=>{
  if(i<=3){
  console.log("errado")
  // controle de fluxo dentro da função com return
  return
}

console.log("errado2")
console.log("errado3")
})()

//https://www.freecodecamp.org/news/how-to-use-the-javascript-require-function/
