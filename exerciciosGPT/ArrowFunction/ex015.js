// 15 Desenvolva uma função que receba uma string e retorne a mesma string, mas com todas as vogais substituídas por '*'.

const substituir = string => {

    let nome = string.split('')
    
    for(indice in nome){
        switch(nome[indice]) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                nome[indice] = '*'
                break
        }

    }
    console.log(`A string é ${string} e sem vogais é ${nome.join('')}`)
}

substituir('joao')