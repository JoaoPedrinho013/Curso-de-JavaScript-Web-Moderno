/**28 Desenvolva uma função que receba um array de números e retorne um novo array com os números ordenados de forma decrescente. */

const decrescente = array => console.log(`Seu Array estava assim => [${array.join(', ')}] e eu deixei assim decrescente => [${array.sort((a, b) => b - a).join(', ')}]`)

decrescente([2, 4, 6, 1, 5, 8, 3, 8, 0, 9])