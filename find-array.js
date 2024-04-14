// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const inventory = [
    { name: "maças", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
  const result = inventory.find((fruit) => fruit.name === "cherries");
  
  console.log(result); // { name: 'cherries', quantity: 5 }
  
  let buscaFruta = inventory.find((fruta) => {
     return fruta.name === 'bananas' ? true : false;
  });
  
  console.log(buscaFruta)   