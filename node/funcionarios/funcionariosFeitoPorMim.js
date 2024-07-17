const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    // Filtrar para obter apenas as mulheres chinesas
    const mulheresChinesas = funcionarios.filter(funcionario => 
        funcionario.pais === 'China' && funcionario.genero === 'F'
    )

    // Encontrar a mulher chinesa com o menor salário
    const mulherChinesaMenorSalario = mulheresChinesas.reduce((menor, atual) => {
        return atual.salario < menor.salario ? atual : menor
    })
    
    console.log(mulherChinesaMenorSalario)
})
