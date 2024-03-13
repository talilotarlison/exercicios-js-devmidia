

class Carro{
    marca;
    cor;
    gastoMedioPorKm;
    
    constructor(marca,cor,gastoMedioPorKm){
      this.marca = marca;
      this.cor = cor;
      this.gastoMedioPorKm = gastoMedioPorKm.toFixed(3); 
    }
    calculoGastoNePercurso(distanciaEmKm, valorCombustivel){
      return  ((distanciaEmKm * this.gastoMedioPorKm) * valorCombustivel).toFixed(2);
    }
    
  }
  
  
  let uno = new Carro('Uno','Vermelho', (1/12))
  console.log(uno);
  console.log(uno.calculoGastoNePercurso(70, 5))
  
  let palio = new Carro('Palio','Prata', (1/10))
  console.log(palio);
  console.log(palio.calculoGastoNePercurso(70, 5))