const anonimo = process.argv.indexOf('-a') !== -1


if(anonimo) {
    process.stdout.write("fala anonimo!\n")
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().trim()
       // const nome = data.toString().replace('\n', '') // éssa foi usada no mac e funfou, no windows pode bugar ai usa o trim que tira os espaços dos dois lados

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}