// Crie um arquivo conversor.js que exporta funções para converter temperaturas entre Celsius, Fahrenheit e Kelvin.
// Implemente a função converterParaFahrenheit, converterParaCelsius, e converterParaKelvin.
// Importe essas funções em outro arquivo e faça conversões.


module.exports = {
    converterParaFahrenheit(temperatura, uniMedida) {
        if(uniMedida){
            return (temperatura - 273.15) * 9/5 + 32
        } else {
            return temperatura * 1.8 + 32
        }
    }, 
    converterParaCelsius(temperatura, uniMedida) {
        if(uniMedida) {
            return temperatura - 273.15
        }
        return (temperatura - 32) * 5/9
    }, 
    converterParaKelvin(temperatura, uniMedida) {
        if(uniMedida) {
            return  (temperatura - 32) * 5/9 + 273.15 
        } else {
            return temperatura + 273.15
        }  
    }
}