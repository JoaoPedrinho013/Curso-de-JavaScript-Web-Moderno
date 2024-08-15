// Crie um arquivo auth.js que exporta funções como login e logout.
// A função login deve aceitar um objeto Usuario e usar this para acessar métodos de verificação.
// Importe o módulo e use as funções em um outro arquivo.









/*
module.exports = {
    login(usuario) {
        if(usuario.login === 'usuario@gmail.com' && usuario.senha === 'PaoComOvo') {
            return 'Login efetuado com sucesso!'
        } else {
            return 'Login não efetuado!'
        }
    },
    logout(usuario){
        if(usuario.login === 'usuario@gmail.com') {
            return 'Logout efetuado'
        } else {
            return 'Você não está conectado para sair'
        }
    }
}
*/




class Auth {

    login(usuario) {
        if (this.verificarUsuario(usuario)) {
            //console.log('Login realizado com sucesso!')
            return true
        } else {
            //console.log('Falha no login: Usuário ou senha incorretos.')
            return false
        }
    }

    logout() {
        console.log('Logout realizado com sucesso!')
        return true
    }

    verificarUsuario(usuario) {
        // Método fictício de verificação do usuário
        // Exemplo: Pode adicionar uma lógica para verificar se o usuário existe e se a senha está correta
        return usuario.nome === 'admin' && usuario.senha === '1234'
    }
}

const auth = new Auth()

module.exports = {
    login: auth.login.bind(auth),
    logout: auth.logout.bind(auth)
}
