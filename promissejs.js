// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise

const promiseA = new Promise((resoluçãoFunc, rejeiçãoFunc) => {
  
    setTimeout(function() {console.log("certo 01")}, 100);
  
  });
  
  const promiseB = new Promise((resoluçãoFunc, rejeiçãoFunc) => {
    
    setTimeout(function() {console.log("certo 02")}, 10)
    
  });
  
  const promiseC = new Promise((resoluçãoFunc, rejeiçãoFunc) => {
    
    setTimeout(function() {console.log("certo 03")}, 50);
  
    
  });
  
  
  
  // Neste ponto, "promiseA" já está liquidado.
  promiseA.then((a)=>{console.log(a)});
  
  
  promiseB.then((b)=>{console.log(b)});
  
  promiseB.then((c)=>{console.log(c)});
  