const conversor = require('./conversor')

console.log(`Converter 82°F para Celsius é ${conversor.converterParaCelsius(82).toFixed(2)}°C`)
console.log(`Converter 82°K para Celsius é ${conversor.converterParaCelsius(82, true).toFixed(2)}°C`)

console.log('--------------------------------------------')

console.log(`Converter 82°C para Fahrenheits é ${conversor.converterParaFahrenheit(82).toFixed(2)}°F`)
console.log(`Converter 82°K para Fahrenheits é ${conversor.converterParaFahrenheit(82, true).toFixed(2)}°F`)

console.log('--------------------------------------------')

console.log(`Converter 82°C para Kelvin é ${conversor.converterParaKelvin(82).toFixed(2)}°K`)
console.log(`Converter 82°F para Kelvin é ${conversor.converterParaKelvin(82, true).toFixed(2)}°K`)

console.log(conversor)


