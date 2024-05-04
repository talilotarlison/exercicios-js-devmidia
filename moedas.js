
let conversor = 'euro';

let dolar = '5.00';
let valor_convertido;

if(conversor == 'real')
{
    valor_convertido = converteParaReal(dolar);
    valor_convertido = formataReal(valor_convertido);
}
else if(conversor == 'euro')
{
    valor_convertido = converteParaEuro(dolar);
    valor_convertido = formataEuro(valor_convertido);
}

console.log("Valor em Dólar: "+formataDolar(dolar));
console.log("Valor convertido: "+valor_convertido);

//arquivo 2

function converteParaReal(dolar)
{
    let taxa_conversao = 5.07;
    let real = dolar * taxa_conversao;

    return real;
}

function converteParaEuro(dolar)
{
    let taxa_conversao = 0.83;
    let euro = dolar * taxa_conversao;

    return euro;
}

// arquivo 3 
function formataDolar(dolar)
{
    let valor_formatado = '$ '+dolar;

    return valor_formatado;
}

function formataReal(real)
{
    let valor_formatado = 'R$ '+real;

    return valor_formatado;
}

function formataEuro(euro)
{
    let valor_formatado = '  '+euro;

    return valor_formatado;
}

// arquivo 4 

