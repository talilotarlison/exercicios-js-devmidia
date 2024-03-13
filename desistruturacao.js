//https://www.freecodecamp.org/portuguese/news/como-usar-a-desestruturacao-de-arrays-e-objetos-em-javascript/

var btn = {

    claro : { nome: 'Ligth', ico: 'icone-claro'},
    
    escuro : { nome: 'Dark', ico: 'icone-dark'}
    }
    
    console.log(btn.escuro);
    
    
    var {nome, _} = btn.escuro
    
    
    console.log(nome);
    
    
    //=================================
    
    let pessoa = {nome: "Sarah", pais: "Nigéria", profissao: "Desenvolvedora"};
    let nome, pais, profissao;
    
    {nome, pais, profissao} = pessoa;
    
    console.log(nome);// Error : "Unexpected token ="
    
    
    //===============================
    
    function getArray() {
        return ["Olá", "eu", "sou" , "a", "Sarah"];
    } 
    let [saudacao,pronome] = getArray();
    
    console.log(saudacao);//"Olá"
    console.log(pronome);//"eu"
    
    
    //===============================
    
    let [saudacao,...apresentacao] = ["Olá", "eu" , "sou", "a", "Sarah"];
    
    console.log(saudacao);//"Olá"
    console.log(apresentacao);//["eu", "sou", "a", "Sarah"]
    
    
    //==================================
    
    let [,pronome,,,nome] = ["Olá", "eu" , "sou", "a", "Sarah"];
    
    console.log(pronome);//"eu"
    console.log(nome);//"Sarah"
    