let serieDoDia = retornaSerieDia();

console.log("Serie do dia: "+serieDoDia);


function retornaSerieDia()
{
    let diaSemana = retornaDiaSemana();
    let serie = retornaNomeSerie(diaSemana);

    return serie;
}

function retornaNomeSerie(dia)
{
  let listaSeries = ['Smallville', 'WandaVision', 'Loki', 'Gothan', 'Arrow', 'Flash', 'DC Legends'];

    return listaSeries[dia];
}



function retornaDiaSemana()
{
    let data = new Date();
    let dia = data.getDay();

    return dia;
}