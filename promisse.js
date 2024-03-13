const promise = (async () => {
    await new Promise(resolve => {
      setTimeout(resolve(console.log('Jeep - Teste de sorteio 01!!')), 0);
    });
   
  })();
  
  
  var carros = {
  
  claro : { nome: 'Corola-Ligth', ano: '2024'},
  
  escuro : { nome: 'Corola-Dark', ano: '2025'}
  }
  
  
  var sorteiaCarro = new Promise((resolve, reject)=>{
    resolve(carros)
  })
  
  console.log(sorteiaCarro);
  
  sorteiaCarro
  .then((resu)=>{
    console.log(carros.claro, 'Primeiro sorteio 01 ')
  })
  
  .then((resu)=>console.log(carros.claro.ano, 'ano carro do sorteio 01'))
  .catch((err)=>{
     console.error(err)
  })
  
  
  const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Camaro - Teste de sorteio 02!!');
    },300);
  });
  
  minhaPromise.then(resu=>console.log(resu))
  
  
  