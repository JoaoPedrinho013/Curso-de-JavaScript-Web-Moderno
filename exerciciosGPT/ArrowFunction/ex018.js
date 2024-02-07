// 18 Desenvolva uma arrow function que receba uma temperatura em Celsius e retorne a temperatura equivalente em Fahrenheit.
const conversorTemperatura = temperaruta => console.log(`Os ${temperaruta.toFixed(1).replace('.', ',')}°C ficam convertido para Fahrenheit = ${((temperaruta * 1.8) + 32).toFixed(1).replace('.', ',')}°F`)
conversorTemperatura(32)