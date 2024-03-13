let login = 'Talilo';
let senha = 12321;

let usuario = {
  user : login,
  pass : senha
}


let altenticaUser = {
 login({user,pass}){
    console.log('login :', user, 'senha:', pass);
  }
};


altenticaUser.login(usuario);

// função de callback em JS
// https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function
function greeting(name) {
  console.log("Olá " + name);
};

function processUserInput(callback, name) {
  //var name = 'Meu nome é Talilo!';
  callback(name);
};

processUserInput(greeting, 'Meu nome é Talilo!');

// estou de pilha 

//https://codelogica.wordpress.com/2018/12/25/estouro-de-pilha/