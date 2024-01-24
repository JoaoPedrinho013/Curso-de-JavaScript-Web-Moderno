/**Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */


function anuidade(mes,aluguel){
    const valor = aluguel
    for(let indice = 1; indice <= mes; indice++){
        valorTotal =  0.05 * aluguel
        aluguel += valorTotal
    }
    console.log(`Do mês 1 até o mês ${mes} o valor de R$${valor.toFixed(2).replace('.',',')} com juros é R$${parseInt(aluguel).toFixed(2).replace('.',',')}`)
}

anuidade(10,800)
anuidade(7,1000)
anuidade(2,50)