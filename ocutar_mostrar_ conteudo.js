//função que mostre quando está escondido, e esconda quando está visível (ou seja, um toggle)

function toggleEstado(divid) {
    var div = document.getElementById(divid);
    var disp = div.style.display;
    div.style.display = disp == 'none' ? 'block' : 'none';
}
