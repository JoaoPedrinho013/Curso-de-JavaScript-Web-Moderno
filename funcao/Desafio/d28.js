//Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.


const lista = [12, 14, 11, 9, 7, 3, 16, 18]
let impar = 0
let par = 0
for(indice in lista) {

    if(lista[indice] % 2 === 0) {
        par++
    } else {
        impar++
    }
    
 
}
console.log(`Essa lista tem tantos numeros ${par} PAR e tantos numeros ${impar} IMPAR`)