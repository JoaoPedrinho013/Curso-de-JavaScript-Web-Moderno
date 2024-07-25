const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 18 * * 4', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})
// usando direto do  javascript
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)
// setImmediate
// setInterval



const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // dias da semana
regra.hour = 18 // horas
regra.second = 30  //segundos

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})