/*const auth = require('./auth.js')


let usuario = {
    login: 'usuario@gmail.com',
    senha: 'PaoComOvo'
}


let testeLogin = auth.login(usuario)
let testeLogout = auth.logout(usuario)

console.log(testeLogin)
console.log(testeLogout)
*/




const { login, logout } = require('./auth.js')

const usuario = {
    nome: 'admin',
    senha: '1234',
}

// Realiza o login
if (login(usuario)) {
    console.log('Usuário logado com sucesso!')
} else {
    console.log('Erro ao realizar o login.')
}

// Realiza o logout
logout()
