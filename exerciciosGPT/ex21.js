/**21 Crie uma arrow function que receba uma frase e retorne a mesma frase, mas com cada palavra invertida. */
console.log('------------------- Usando for para iterar -------------------')
const inverterFrase = frase => {
    const separarFrase = frase.split(' ')
    for (indice in separarFrase) {
        separarFrase[indice] = separarFrase[indice].split('').reverse().join('')
    }
    console.log(`Sua frase [${frase}] com cada palavra invertida fica: `)
    console.log(separarFrase.join(' '))
}

inverterFrase("Olá, mundo!")


console.log('------------------- Usando .map para iterar -------------------')
// Usando Map para iterar sobre o array que foi criado da frase, de vez o for

const inverterPalavras = frase => {
    const palavras = frase.split(' ') // Dividir a frase em palavras
    const palavrasInvertidas = palavras.map(palavra =>
        palavra.split('').reverse().join('') // Inverter cada palavra
    )
    console.log(`Sua frase [${frase}] com cada palavra invertida fica: `)
    return palavrasInvertidas.join(' ') // Juntar as palavras invertidas de volta em uma frase
}

// Exemplo de uso:


console.log(inverterPalavras("Olá, mundo!"))
