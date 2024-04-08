

// objeto array
cestaFrutas = new Array("banana", "maça","uva");
console.log(cestaFrutas);
cestaFrutas.push("pera");
console.log(cestaFrutas);

// verifica se fruta tem na cestaFrutas


var verificaSemtemFruta = (fruta)=>{
  taNaCesta = cestaFrutas.includes(fruta);
  
  if(taNaCesta){
    console.log("Fruta ja ta na Cesta!");
  }else{
      console.log("Fruta não tem na Cesta!");
      cestaFrutas.push(fruta);
      console.log("Fruta colocada na Cesta!");  
  }
  console.log(cestaFrutas);
}

verificaSemtemFruta("manga");


