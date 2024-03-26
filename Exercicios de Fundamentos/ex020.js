/*Faça uma funcao que recebe a base e a altura de um triangulo e retorne a area desse triangulo.
A precisao devera ser de duas casas decimais, arredondando se necessario
OBS:formula- (  (base x altura) / 2   ) 

ex:
areaDoTriangulo(10, 15) // retornara 75.00 
areaDoTriangulo(7, 9) // retornara 31.50 
areaDoTriangulo(9.25, 13.1) // retornara 60.59 */

const areaDoTriangulo = (altura, base) => {
    let area = (base*altura) / 2
    console.log(area.toFixed(2))
}


areaDoTriangulo(10, 15) // retornara 75.00 
areaDoTriangulo(7, 9) // retornara 31.50 
areaDoTriangulo(9.25, 13.1) // retornara 60.59