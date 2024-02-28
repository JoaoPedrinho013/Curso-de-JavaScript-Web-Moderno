const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')// add no final da lista
console.log(pilotos)

pilotos.shift()// remove o primeiro da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // add no comeco da lista
console.log(pilotos)

// splice pode add e remover elemntos do array

//add

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover 

pilotos.splice(3,1) // tirando 1 elemento a partir do indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)// novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)// novo array a partir do indice 1 ate o 4 mas nao pega o ultimo
console.log(algunsPilotos2)