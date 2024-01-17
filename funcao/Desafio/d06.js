/**06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

function jurosSimples(capitalInicial=1, taxa=1, tempo=1) {
    return capitalInicial * (1 + taxa * tempo)
}
function jurosCompostos(capitalInicial=1, taxa=1, tempo=1) {
    return capitalInicial * (1 + taxa ) ** tempo
}
const inicial = 2000
console.log(
    `Seu valor inicial foi de R$${inicial.toFixed(2)} e seu rendimento em juros simples de 13% ao ano e em 15 anos foi de R$${jurosSimples(inicial, 0.13, 15).toFixed(2)}`
)
console.log(`Seu valor inicial foi de R$${inicial.toFixed(2)} e seu rendimento em juros compostos de 13% ao ano e em 15 anos foi de R$${jurosCompostos(inicial, 0.13, 15).toFixed(2)}`)
