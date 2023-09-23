// objetivos como paramentos da funcao
function soma({a,b,c}){
  
  return a+b+c;
  
}

var resu = soma({
  a:5,
  b:7,
  c:3})


console.log(resu);


var arr =[3,6,9,8]

function somaArray(a,b,c,d){
  
  return a+b+c+d
  
  
}

//O spread operator é caracterizado pelos três pontos (…)

var resu = somaArray(...arr)

//https://horadecodar.com.br/passar-array-como-argumento-de-funcao-em-javascript/



console.log(resu)
