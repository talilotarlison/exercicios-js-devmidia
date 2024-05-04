let serie = ['Smallville', 'WandaVision', 'Loki', 'Gothan', 'Arrow', 'Flash', 'DC Legends'];

function retornaSerieDia(indexSerie)
{
    return serie[indexSerie];
}


let data = new Date();
let diaSemana = data.getDay();

let serieDoDia = retornaSerieDia(diaSemana);

console.log("Serie do dia: "+serieDoDia);