// solução um:

function mostrarNome(nome){
    return  `Meu nome é ${nome}`;
  }
  
  function maiorDeIdade1(nome,idade){
    if(idade >= 18){
      console.log(`${mostrarNome(nome)}, maior de idade, pode dirigir.`)
    }else{
      console.log(`${mostrarNome(nome)}, menor de idade, não pode dirigir.`);
    }
  }
  
  maiorDeIdade1('Talilo', 26)
  
  
  // solução dois:
  
  
  function mostrarNome(nome){
    return `Meu nome é ${nome}`;
  }
  
  function maiorDeIdade(nome,idade){
    if(idade >= 18){
      console.log(`${nome}, maior de idade, pode dirigir.`)
    }else{
      console.log(`${nome}, menor de idade, não pode dirigir.`);
    }
  }
  
  maiorDeIdade(mostrarNome('Joao'), 16)
  