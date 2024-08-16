const  Tarefa  = require('./tarefa.js')


const teste = new Tarefa()


teste.Listar_tarefas()
teste.AdicionarTarefa('Teste')
teste.AdicionarTarefa('Teste 2')
teste.AdicionarTarefa('Teste 3')
teste.Listar_tarefas()
teste.Remover('Teste 3')
teste.Listar_tarefas()



