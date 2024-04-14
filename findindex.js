// Assuming you know the index of the user you want to remove
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

const indexToRemove = participantes.findIndex((participante) => participante.email === emailChekIn);
if (indexToRemove !== -1) {
    participantes.splice(indexToRemove, 1);
}