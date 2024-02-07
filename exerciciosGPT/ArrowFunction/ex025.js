/**25 Desenvolva uma arrow function que receba um número e retorne a soma dos seus dígitos. */

const somaDigitos = numero => {
    let soma = 0
    let digitosSeparados = numero.toString().split('')
    for(indice in digitosSeparados){
        soma+= Number(digitosSeparados[indice])
    }
    
    console.log(`O numero passado como parametro foi int ${numero}, eu converti para um array e ficou ['${digitosSeparados.join("', '")}'], depois eu somei os digitos fazendo uma iteracao pelo array, so que transformando cada valor em number novamente = ${soma}`)
}


somaDigitos(12)