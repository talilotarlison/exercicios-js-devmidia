// loop nos botoes  pegando o id do elemento clicado

async function botao() {
      var btn = document.getElementsByClassName("btns")
      for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', e => {
          var idMusic = e.target.value;
          console.log(idMusic)
          info(idMusic)
        })
      }
    }
