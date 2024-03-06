/** Crie uma função que receba um número (de 1 a 12) e retorne o mês correspondente como uma string. Por Exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o segundo mês.
//nomeDoMes(1) // retornara "Janeiro" */

const nomeDoMes = mes => {
    if (mes === 1) {

        console.log('janeiro')

    } else if (mes === 2) {

        console.log('Fevereiro')

    } else if(mes === 3) {

        console.log('Março')

    } else if (mes === 4) {

        console.log('Abril')

    } else if (mes === 5) {

        console.log('Maio')

    }  else if(mes === 6) {

        console.log('junho')

    } else if(mes === 7) {

        console.log('julho')

    } else if(mes === 8) {

        console.log('Agosto')

    } else if (mes === 9){

        console.log('Setembro')

    } else if(mes === 10) {

        console.log('Outubro')

    } else if (mes === 11){

        console.log('Novenbro')

    } else if ( mes === 12) {

        console.log('Dezembro')

    } else {
        console.log('Esse mes nao existe ' + mes )
    }
}
nomeDoMes(11)

const nomeDoMes2 = mes => {
    switch (mes) {
        case 1:
            console.log('Janeiro')
            break
        case 2:
            console.log('Fevereiro')
            break
        case 3:
            console.log('Março')
            break
        case 4:
            console.log('Abril')
            break
        case 5:
            console.log('Maio')
            break
        case 6:
            console.log('Junho')
            break
        case 7:
            console.log('Julho')
            break
        case 8:
            console.log('Agosto')
            break
        case 9:
            console.log('Setembro')
            break
        case 10:
            console.log('Outubro')
            break
        case 11:
            console.log('Novenbro')
            break
        case 12:
            console.log('Dezembro')
            break
        default:
            console.log(`Mês inválido ${mes}`)
    }
}
nomeDoMes2(12)