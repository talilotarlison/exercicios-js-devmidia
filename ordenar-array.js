function sortfunction(a, b){
    return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
  }
  Data = [3,5,1,7,3,9,10];
  var resu = Data.sort(sortfunction); //resultado: [1, 3, 3, 5, 7, 9, 10]
  console.log(resu)
  
  // script parte dois
  
  let tabela = [
      {equipe: 'Time Azul', pontos: 25 },
      {equipe: 'Time Verde', pontos: 47 },
      {equipe: 'Time Amarelo', pontos: 39 },
      {equipe: 'Time Vermelho', pontos: 16 },
  ];
  
  function ordenaMaisPontos(a, b){
      return b.pontos - a.pontos;
  }
  
  tabela.sort(ordenaMaisPontos);
  
  for(let i = 0; i < tabela.length; i++)
  {
      let posicao = i+1;
      console.log(posicao+" | "+tabela[i].equipe+" - "+tabela[i].pontos+" pts");
  }