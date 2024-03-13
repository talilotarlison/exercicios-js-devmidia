var pessoa = {};

pessoa.nome = 'Talilo';

pessoa.getNome = ()=>{
  //return this.nome;
   return pessoa.nome;
}
console.log(pessoa);
console.log(pessoa.getNome());

