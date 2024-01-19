/**14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console. */



function Feirinha(fruta=''){
    switch(fruta.toLowerCase()){
        case 'maca': case 'maçã':
            console.log(`Não vendemos essa tal fruta ${fruta}`)
            break
        case 'kiwis': case 'kiwi':
            console.log(`Estamos com escassez de ${fruta}`)
            break
        case 'melancia':
            (console.log(`Aqui está, são 3 reais o quilo da ${fruta}`))
            break
        default:
            console.log(`Erro`)
            break

    }
}

Feirinha('Maçã')
Feirinha('Kiwi')
Feirinha('Melancia')
Feirinha('Acerola')