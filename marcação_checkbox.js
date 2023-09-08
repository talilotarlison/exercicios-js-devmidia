// pegar value do input checkbox marcado

//https://pt.stackoverflow.com/questions/22726/como-esconder-mostrar-uma-div-em-html


const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var btnExcluir = document.getElementById("excluir");
  function dados() {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener("click", function () {
        if (checkboxes[i].checked) {
          console.log(checkboxes[i].value);
          var resu = checkboxes[i].value;

        }
      });
    }
  }

  window.onload = dados();
