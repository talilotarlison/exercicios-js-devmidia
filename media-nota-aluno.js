
/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/



// entrada de dados

(function main(){
    console.log('================= CALCULAR MEDIA DE NOTAS===============')
   // dados de entrada usario 
    var nome = 'Talilo';
    var nota_1 = 6;
    var nota_2 = 6;
    var nota_3 = 6;
    
    //obejeto com dados do usario
    let dadosAluno = {
        nome : nome,
        nota_1 : nota_1,
        nota_2 : nota_2,
        nota_3 : nota_3
    }
     var media = calculaMedia(dadosAluno);
     statusAluno(media)
     console.log('Fim do programa');
  })()
  
  
  
  function calculaMedia(aluno){
    let media = (aluno.nota_1 + aluno.nota_2 + aluno.nota_3) / 3;
    
    var mediaAluno = {
      nome: aluno.nome, 
      media: media  
    }
    //console.log(mediaAluno)
    return mediaAluno;
  }
  
  
  function statusAluno(aluno){
    if(aluno.media<5){
      console.log(`Aluno ${aluno.nome} esta reprovado, com media ${aluno.media.toFixed(2)}!`)
    }else if(aluno.media >= 5 && aluno.media <7 ){
      console.log(`Aluno ${aluno.nome} esta de recuperação, com media ${aluno.media.toFixed(2)}!`)
    }else{
      console.log(`Aluno ${aluno.nome} esta aprovado,com media ${aluno.media.toFixed(2)}!`)
    }
  }
  
  
  
  