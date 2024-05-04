//index.js

let peso = 78;
let altura = 1.72;

let mensagem;

let verificaPesoValido = validaPeso(peso);
let verificaAlturaValida = validaAltura(altura);

if(verificaPesoValido && verificaAlturaValida)
{
    let resultado = calculaIMC(peso, altura);
    let statusIMC = retornaStatusIMC(resultado);

    mensagem = `Seu IMC é ${resultado} e você está ${statusIMC}`
    console.log(mensagem);
}
else
{
    mensagem = "Peso e altura devem ser maiores que zero";
     console.log(mensagem);
}

//calculaimc.js

function calculaIMC(peso, altura)
{

    let imc = peso / (altura * altura);
    return formataIMC(imc);
}

function retornaStatusIMC(imc)
{
    let status;

    if(imc < 18.5)
    {
        status = 'abaixo do peso';
    }
    else if(imc > 18.5 && imc < 24.9)
    {
        status = 'peso normal';
    }
    else if(imc > 24.9 && imc < 30)
    {
        status = 'acima do peso';
    }
    else
    {
        status = 'obeso';
    }

    return status;
}

//valida dados.js

function validaPeso(peso)
{
    let pesoValido = false;

    if(peso > 0)
    {
        pesoValido = true;
    }

    return pesoValido;
}

function validaAltura(altura)
{
    let alturaValida = false;

    if(altura > 0)
    {
        alturaValida = true;
    }

    return alturaValida;
}


// formata imc
function formataIMC(imc){
  return imc.toFixed(2)

}
