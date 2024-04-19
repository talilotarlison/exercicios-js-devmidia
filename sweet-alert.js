// Link da documentação:
// https://sweetalert.js.org/guides/#getting-started

//Para executar o código a partir da confirmação do usuário com a biblioteca SweetAlert, você pode modificar a função `alert2` para incluir uma ação que será realizada quando o usuário clicar no botão de confirmação. Aqui está um exemplo de como você pode fazer isso:


function alert() {
  swal({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
  });
}

function alert2(){
  swal("Are you sure you want to do this?", {
  buttons: ["Oh noez!", true],
});
}

function alert3(){
  swal({
    title: "Você tem certeza que deseja fazer isso?",
    buttons: ["Oh não!", "Sim"],
  }).then((willDelete) => {
    if (willDelete) {
      // Coloque aqui o código que será executado após a confirmação do usuário
      console.log("Ação confirmada pelo usuário!");
    } else {
      console.log("Ação cancelada pelo usuário.");
    }
  });
}


//Neste código, o método `.then()` é usado para lidar com a promessa retornada pela função `swal`. Se o usuário clicar em "Sim", a variável `willDelete` será `true` e o código dentro do bloco `if` será executado. Se o usuário clicar em "Oh não!", a ação será cancelada e o código dentro do bloco `else` será executado.

//Lembre-se de substituir os `console.log` pelas ações que você deseja realizar. Espero que isso ajude! Se tiver mais dúvidas ou precisar de mais assistência, estou à disposição.
