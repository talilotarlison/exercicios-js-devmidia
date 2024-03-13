
class Calcular {
    num1;
    num2;
    constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    }
    
      soma(){
      return this.num1 + this.num2;
    }
   //modifica o valor do atributo da class
    // modifica a a informação do atributo da class mudando seu valor
   set somaNovamente1(num1) {
     this.num1 = num1;
     //this.num2;
    }
     set somaNovamente2(num2) {
     this.num2 = num2;
    // this.num1;
    }
    //retorna valor do atributo da class
    // get pega a informação do atributo da class
    get retonorNumero(){
       return this.num2;
    }
  
  }
  
  
  var somar = new Calcular(1,1);
  console.log(somar.soma());
  console.log(somar.retonorNumero);
  console.log(somar.somaNovamente1 = 5, somar.somaNovamente2 = 5);
  console.log(somar.soma());
  
  //Herança JS onde a nova class herda atributos do class pai
  class Calcular2 extends Calcular {
    num3;
    constructor(num1,num2,num3) {
     super(num1,num2);
     this.num3 = num3;
    }
  
    somaTres() {
      return this.num1 + this.num2 + this.num3;
    }
  }
  
  var somaTest = new Calcular2(2,3,9);
  
  console.log("herança JS",somaTest.somaTres());