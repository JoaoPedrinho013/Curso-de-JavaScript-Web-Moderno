/**) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function lanchonete(codigo, unidade){
    switch(codigo){
        case 100:
            console.log(`Olá, você pediu ${unidade} cachorro quente, ele custa R$3,00 e ficou no total: R$${(3 * unidade).toFixed(2).replace('.', ',')}`)
            break
        case 200:
            console.log(`Olá, você pediu ${unidade} Hambúrguer Simples, ele custa R$4,00 e ficou no total: R$${(4 * unidade).toFixed(2).replace('.', ',')}`)
            break
        case 300:
            console.log(`Olá, você pediu ${unidade} Cheeseburguer(s), ele custa R$5,50 e ficou no total: R$${(5.5 * unidade).toFixed(2).replace('.', ',')}`)
            break
        case 400:
            console.log(`Olá, você pediu ${unidade} Bauru, ele custa R$7,50 e ficou no total: R$${(7.5 * unidade).toFixed(2).replace('.', ',')}`)
            break
        case 500:
            console.log(`Olá, você pediu ${unidade} Refrigerante, ele custa R$3,50 e ficou no total: R$${(3.5 * unidade).toFixed(2).replace('.', ',')}`)
            break
        case 600:
            console.log(`Olá, você pediu ${unidade} Suco, ele custa R$2,80 e ficou no total: R$${(2.8 * unidade).toFixed(2).replace('.', ',')}`)
            break

        default:
            console.log(`Esse produto não temos no estoque cod:${codigo}`)
    }
}

lanchonete(100, 3)
lanchonete(200, 3)
lanchonete(300, 3)
lanchonete(400, 3)
lanchonete(500, 3)
lanchonete(600, 3)

lanchonete(1010, 3)