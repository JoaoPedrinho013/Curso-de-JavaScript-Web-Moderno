// Crie um arquivo tarefa.js que define uma classe Tarefa com métodos para adicionar, remover e listar tarefas.
// Use module.exports para exportar a classe e this para acessar tarefas.
// Implemente o sistema de tarefas em um outro arquivo.


class Tarefa {
    constructor() {
        this.tarefas = []
        
    }


    AdicionarTarefa(tarefa) {
        this.tarefas.push(tarefa)
    }

    Remover(tarefa){
        const remover_posicao = this.tarefas.indexOf(tarefa)
        if(remover_posicao < 0) {
            console.log('Não existe essa tarefa na lista!')
        } else {
            this.tarefas.splice(remover_posicao,1)
        }

    }

    Listar_tarefas(){
        if(!this.tarefas.length){
            console.log(`A lista ta vazia`)
        }else {
            console.log(this.tarefas)
        }
    }
}
/*
const teste = new Tarefa()

teste.Listar_tarefas()
teste.AdicionarTarefa('Teste')
teste.AdicionarTarefa('Teste 2')
teste.AdicionarTarefa('Teste 3')
teste.Listar_tarefas()
teste.Remover('Teste 6')
teste.Listar_tarefas()
*/


module.exports = Tarefa






