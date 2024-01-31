// 5 Crie uma função arrow que receba um número e verifique se ele é par. Retorne true se for par, false se for ímpar.

const imparPar = (numero) => {
    if (numero % 2 ===0) {
        return 'PAR'
    } else {
        return 'IMPAR'
    }
}

console.log(`O numero falado é ${imparPar(4)}`)