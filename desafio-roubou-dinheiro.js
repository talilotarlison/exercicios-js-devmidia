/*Durante a investigação, você descobre que uma carteira com 150 fulampos (o dinheiro da região) foram roubados. A vítima não lembra exatamente o que havia em sua carteira, mas sabe que existiam apenas duas notas.
Em pouquíssimo tempo, a polícia encontrou alguns suspeitos e acredita-se que o ladrão não tenha conseguido usar ou trocar o dinheiro roubado. Agora, você precisa descobrir quais deles poderiam ter roubado os 150 fulampos verificando a carteira de cada um deles.
Escreva uma função que recebe como parâmetro um array de números inteiros ordenados (referente às notas na carteira de um suspeito) e retorne, no menor tempo possível, se ele pode ter roubado os 150 fulampos da nossa vítima.
*/
function verificaSuspeito(notas) {
    // Inicializa dois ponteiros: um no início e outro no final da lista de notas
    let left = 0;
    let right = notas.length - 1;

    while (left < right) {
        // Soma as duas notas extremas
        const total = notas[left] + notas[right];

        if (total === 150) {
            // Encontramos um par de notas que soma 150
            return true;
        } else if (total < 150) {
            // A soma é menor que 150, movemos o ponteiro esquerdo para a direita
            left++;
        } else {
            // A soma é maior que 150, movemos o ponteiro direito para a esquerda
            right--;
        }
    }

    // Não encontramos um par de notas que soma 150
    return false;
}

// Exemplo de uso:
const suspeito1 = [50, 100];  // Notas do primeiro suspeito
const suspeito2 = [30, 40, 80];  // Notas do segundo suspeito

console.log(verificaSuspeito(suspeito1));  // Deve retornar true
console.log(verificaSuspeito(suspeito2));  // Deve retornar false



/*A **complexidade de algoritmos** é um tópico crucial na ciência da computação, relacionada à eficiência no uso de recursos computacionais. Ela estuda e define quanto eficiente é um algoritmo em relação ao número de operações (passos do algoritmo) necessárias para finalizar uma tarefa². Quando lidamos com grandes quantidades de dados, como milhões de registros, a otimização dos algoritmos se torna essencial para evitar problemas de performance e falhas no sistema¹. Algoritmos eficientes processam grandes volumes de dados de forma rápida e sem sobrecarregar o hardware.

Existem métricas que podemos utilizar para quantificar a complexidade de um algoritmo:

1. **Tempo de Execução**: Mede o tempo total que o algoritmo leva para processar a entrada e produzir a saída.
2. **Número de Operações**: Conta quantas operações primitivas o algoritmo executa em termos do tamanho da entrada.
3. **Taxa de Crescimento**: Analisa como o tempo de execução ou número de operações cresce à medida que o tamanho da entrada aumenta.

A **análise de complexidade algorítmica** é crucial para compreender o desempenho dos algoritmos em relação ao tamanho da entrada. Ela nos permite identificar quais algoritmos são mais eficientes para diferentes contextos. Uma forma padronizada de representar a complexidade algorítmica é através da **Notação Big O**, que especifica a taxa de crescimento¹. Por exemplo, a notação $$O(n^2)$$ indica que o algoritmo tem complexidade quadrática, enquanto $$O(n)$$ representa complexidade linear.
*/

