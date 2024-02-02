/**40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A */


const conceitos = notas => {
    if(notas >= 0.0 && notas <= 4.9) {
        console.log(`nota: ${notas} Conceito D`)
    } else if ( notas <= 6.9) {
        console.log(`nota: ${notas} Conceito C`)
    } else if ( notas <= 8.9) {
        console.log(`nota: ${notas} Conceito B`)
    } else if ( notas <= 10) {
        console.log(`nota: ${notas} Conceito A`)
    } else {
        console.log("Esse numero é sem conceito")
    }
}

conceitos(3)
conceitos(6)
conceitos(7)
conceitos(10)
conceitos(15)