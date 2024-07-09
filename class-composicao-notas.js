// https://www.w3schools.com/Js/js_classes.asp

class Curso {
  nome;
  disciplina;
  matricula; 
  constructor(nome, disciplina,matricula) {
    this.nome = nome;
    this.disciplina = disciplina;
    this.matricula = matricula;
  }
  
  statusAprovacaoAluno(notas){
    let aluno = new Notas(notas);
    let mediaNotas = aluno.calculaMedia();
    var status = mediaNotas >=6 ? "Aprovado": "Reprovado"
    console.log("Nota: ", mediaNotas," - ", status)
  }

}


class Notas {
  notas= [];
  constructor(notas) {
    this.notas= notas;

  }
  
  calculaMedia(){
    var soma = 0;
    for(var i = 0; i < this.notas.length; i++){
      soma += this.notas[i];
    }
    return (soma/this.notas.length);
  }

}


let aluno = new Curso("Joao", "Matematica", 214214)

aluno.statusAprovacaoAluno([6,6,6])







