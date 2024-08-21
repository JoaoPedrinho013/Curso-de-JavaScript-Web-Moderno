const combinar = require('./combinarArrays.js')

let inicial_fogo = ['Charmander']
let inicial_grama = ['Bulbassaur']
let inicial_agua = ['Squirtle']

let iniciais_de_kanto = combinar.combinar_arrays_sem_duplicados(inicial_fogo,inicial_agua,inicial_grama,inicial_fogo)

console.log(`Os iniciais de kanto são: ${iniciais_de_kanto}`)