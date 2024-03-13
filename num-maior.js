const {gets, print} = require("./main.js");


let todosNumero = [];

for (var i = 0; i < 8; i++) {
  var num = gets();
  todosNumero.push(num)
  
}


print(todosNumero);


let numMaior = 0
for (var i = 1; i < todosNumero.length ; i++) {
  if(numMaior < todosNumero[i]){
    numMaior = todosNumero[i];
  } 
}
print(numMaior);