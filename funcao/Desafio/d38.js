/*Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

const imprimir= (inicio=0, fim=100) => {
    const impares = []
    console.log(`Esses São os numeros impares de ${inicio} até ${fim}:`)
    if(inicio >= fim) {
        console.log('e impossivel comecar com numero maior que o fim')
        let correcao = inicio 
        inicio = fim 
        fim = correcao
    }
    while(inicio <= fim) {
        if(inicio % 2 == 1) {
            impares.push(inicio)
        }
        inicio++
    }
    console.log(impares)
}
imprimir(0, 80)
