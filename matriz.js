//matriz de numeros
console.log('MATRIZ DE NUMEROS PRE DEFINIDOS!!')
var num = [[1,4,6],
           [4,'5',8],
           [4,5,4]];

//for para listar todosos itens da matriz

for(i=0;i<3;i++){
    for(j=0;j<3;j++){
      console.log(`[${num[i][j]}]`);
    }
}



console.log('MATRIZ DE NUMEROS ALEATORIOS!')
//conteudo de referencia:
//https://www.youtube.com/watch?v=241VQPFQtGA&t=1317s

//Matriz numeros aleatorios
var numeroSorte = [];

for(i=0;i<3;i++){
  numeroSorte[i]=[];
    for(j=0;j<3;j++){ 
      numeroSorte[i][j] = Math.floor(Math.random() * 10);
      console.log(`[${numeroSorte[i][j]}]`);

    }
}

