
var nome = "talilo";

var sobrenome ="tarlison";

var idade = 29;


console.log( {
  nome,
  sobrenome,
  idade
})

console.clear()

function show({nome, sobrenome, idade, curso}){
console.log( {
  nome,
  sobrenome,
  idade,
  curso
})

}

show({nome:"talilo",sobrenome:"araujo", idade:20});


console.log(nome);

var curso = {
  
  nome: "joao",
  sobrenome:"cardoso",
  idade: 29,
  curso:"ads"
}

var {nome, ... rest} = curso


console.log(nome)
