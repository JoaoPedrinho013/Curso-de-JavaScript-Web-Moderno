/**) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function indentificar( nome, idade) {
    if (idade <= 0 || idade > 120) {
        console.log(`Essa idade nao existe ${idade}`)
    } else if (idade <= 10) {
        console.log(`${nome} tem ${idade} e vai pagar R$ 80,00.`)
    } else if (idade <= 30) {
        console.log(`${nome} tem ${idade} e vai pagar R$ 50,00.`)
    } else if(idade <= 60) {
        console.log(`${nome} tem ${idade} e vai pagar R$ 95,00.`)
    } else if (idade >= 60 && idade <=120){
        console.log(`${nome} tem ${idade} e vai pagar R$ 130,00.`)
    }
}
indentificar('Pedro', 123)
indentificar('Maria', 5)
indentificar('Carlos', 17)
indentificar('Tereza',55)
indentificar('Cleide',67)