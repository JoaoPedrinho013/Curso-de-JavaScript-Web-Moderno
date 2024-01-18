/**13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

function DiaUtil(dia=0){
    switch(dia){
        case 1: case 7:
            console.log(`Fim de Semana, Dia ${dia}`)
            break

        case 2: case 3: case 4: case 5: case 6:
            console.log(`Dia Util, Dia ${dia}`)
            break
        default:
            console.log(`Data Invalida, Dia ${dia}`)
            break

    }
}

DiaUtil(5)