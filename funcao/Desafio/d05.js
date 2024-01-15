/*Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto). */

function moeda(moeda=1){
    console.log(`O valor em Real é = R$ ${moeda.toFixed(2).replace('.',',')}`)
    console.log(`O valor em Euro é = € ${moeda.toFixed(2).replace('.',',')}`)
    console.log(`O valor em Dolár é = $ ${moeda.toFixed(2).replace('.',',')}`)
    
}

moeda(13.30000004)