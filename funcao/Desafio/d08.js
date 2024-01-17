/**08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */



const stringPontuacoe = "10 20 20 8 25 3 0 30 10"
const pontuacao = stringPontuacoe.split(' ').map(Number)
let maior = pontuacao[0]
let menor = pontuacao[0]
let quebrouRecorde = [0, 0];

for(let indice = 1; indice < pontuacao.length; indice++){
    if(maior < pontuacao[indice]){
        maior = pontuacao[indice]
        quebrouRecorde[0]++;
    }else if (menor > pontuacao[indice]){
        menor = pontuacao[indice]
        quebrouRecorde[1] = indice + 1; 
    }
}
console.log(quebrouRecorde)

// CHAT GPT

/**
 * 
function analisarPontuacoes(stringPontuacoes) {
    // Convertendo a string de pontuações para um array de números
    const pontuacoes = stringPontuacoes.split(' ').map(Number) // map percorre array e substitui os valroes, por funcao ou etc

    let recordeMaximo = pontuacoes[0]
    let recordeMinimo = pontuacoes[0]
    let quebrouRecorde = [0, 0];  // [Número de vezes que bateu recorde máximo, Número do pior jogo]

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > recordeMaximo) {
            recordeMaximo = pontuacoes[i]
            quebrouRecorde[0]++
        } else if (pontuacoes[i] < recordeMinimo) {
            recordeMinimo = pontuacoes[i]
            quebrouRecorde[1] = i + 1  // Número do jogo começa do 1
        }
    }

    return quebrouRecorde
}

// Exemplo de uso:
const stringPontuacoes = "10 20 20 8 25 3 0 30 1"
const resultado = analisarPontuacoes(stringPontuacoes) 
console.log(resultado);  // Saída: [3, 7]
 */