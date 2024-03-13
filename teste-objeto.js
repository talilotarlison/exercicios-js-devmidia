
var turma = {
  
    aluno : "talilo",
    idade : 28,
    curso: {
      ano:2019,
      id : 263738
    }
  }
  
  //https://www.freecodecamp.org/portuguese/news/como-funciona-o-operador-de-ponto-de-interrogacao-em-javascript/
  
  //encadeamento opcional
  
  var resu = turma.curso.anoo;
  
  console.log(resu);
  
  //operador de coalescencia
  
  var nome = undefined || "jose"
  
  var number = null ?? 88
  
  var verificar = false ?? "consulta"
  
  
  console.log(nome)
  console.log(number)
  console.log(verificar)
  