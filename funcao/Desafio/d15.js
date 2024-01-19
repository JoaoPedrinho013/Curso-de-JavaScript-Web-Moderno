/**15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
 */

function Carro(modelo=''){
    switch(modelo.toLowerCase()){
        case 'hatch':
            console.log(`A compra do seu ${modelo} foi efetuada com sucesso`)
            break
        case 'sedans': case 'sedan': case 'motocicleta': case 'motocicletas': case 'caminhonete': case 'caminhonetes':
            console.log(`Tem certeza que gostaria desse modelo? ${modelo}`)
            break
        default:
            console.log(`Não trabalhamos com esse modelo ${modelo}`)
            break
   
    }
}

Carro('Hatch')
Carro('Sedan')
Carro('Motocicleta')
Carro('Caminhonete')
Carro('Onix')
