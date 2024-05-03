console.log("Programa mostra dados!");

let mostrardados = (nome,idade, anoAtual,anoNascimento)=>{
  let pessoa= {
    nome: nome,
    idade: idade,
    data: anoNascimento(idade,anoAtual)
  }
  
  return pessoa;
  
}

let anoNascimento = (idade, anoAtual)=>{
  return anoAtual - idade

}

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getYear

let getAnoAtual = ()=>{
  let data =new Date()
  var anoAtual = data.getFullYear()
  return anoAtual 

}

console.log(mostrardados('talilo',29,getAnoAtual(),anoNascimento));