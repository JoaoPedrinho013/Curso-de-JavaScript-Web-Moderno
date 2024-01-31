// Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
const comparador = (string1, string2) => {
    const primeira = string1.toLowerCase()
    const segunda = string2.toLowerCase()
    if(primeira == segunda) {
        return true
    } else {
        return false
    }   
}
console.log(comparador('Ola, mundo', 'OLA, MUNDO'))
console.log(comparador('Ola, mundo', 'OLA, MUNDO!'))

