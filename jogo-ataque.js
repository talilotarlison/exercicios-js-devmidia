class Heroi {
    nome;
    idade;
    tipo;
    constructor(nome, idade, tipo){
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    
    tipoAtaque(){
       //Metodo que verifica ataque do Heroi
       if(this.tipo == "Mago"){
          return  "MAGIA";
       }else if(this.tipo == "Guerreiro"){
           return  "ESPADA";
       }else if(this.tipo  == "Monge"){
           return "ARTES MARCIAIS";
       }else{
          return "Shuriken";
       }
    }
      
    get atacar(){
      return `o ${this.tipo} atacou usando`;
    }
    
  }
  
   var player = new Heroi("joao","18","Monge");
   
   console.log(player.atacar, player.tipoAtaque())