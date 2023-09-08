// pegar value do input checkbox marcado


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
