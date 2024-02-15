function calcularForcaNecessaria(massaRocha, velocidadeRochaKmh, pesoPessoa) {
    // Converter a velocidade da rocha de km/h para m/s
    const velocidadeRochaMs = velocidadeRochaKmh / 3.6

    // Calcular a força necessária para parar a rocha em Newtons
    const forcaNecessariaNewton = massaRocha * (velocidadeRochaMs / 1) / 1

    // Converter a força de Newton para quilogramas
    const forcaNecessariaKg = forcaNecessariaNewton / 9.8

    // Calcular o tempo necessário para parar a rocha (assumindo que a pessoa está aplicando toda sua força)
    const tempoNecessario = forcaNecessariaNewton / pesoPessoa

    if (forcaNecessariaKg > 500) {
        console.log(`Força superior a 500kg!!! A pessoa foi esmagada pela força! ${forcaNecessariaKg.toFixed(2)}kg`)
    } else {
        console.log(`Para parar a rocha:`)
        console.log(`Força necessária em Newtons: ${forcaNecessariaNewton.toFixed(2)} N`)
        console.log(`Força necessária em quilogramas: ${forcaNecessariaKg.toFixed(2)} kg`)
        console.log(`Tempo necessário: ${tempoNecessario.toFixed(2)} segundos`)
    }
}

const massaRocha = 5000 // kg
const velocidadeRochaKmh = 0.3 // km/h
const pesoPessoa = 70 // kg

calcularForcaNecessaria(massaRocha, velocidadeRochaKmh, pesoPessoa)
