/**) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */


function medidor(altura1, altura2, taxa1, taxa2){

    let alt1 = parseInt(altura1)
    let alt2 = parseInt(altura2)
    let ano = 1
    while(alt1 < alt2) {
        alt1 = alt1 + (taxa1 * alt1)
        alt2 = alt2 + (taxa2 * alt2)
        ano++
    }
    console.log(`A Pessoa mais baixa passou a altura da mais alta em ${ano} anos. Com a altura de ${alt1.toFixed(2)}cm`)
    
}

medidor(150, 160, 0.008, 0.004)