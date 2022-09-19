const schedule = require('node-schedule')

// Tarefas agendadas
// 1
// Essa função recebe como parâmetro uma string de configuração no formato 'segundo minuto hora diaDoMês mês diaDaSemana', que indica quando uma função será executada.
const tarefa1 = schedule.scheduleJob('*/5 * 19 * * 1', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})// Executar de 5 em 5 segundos, as 19h de uma segunda-feira

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// 2
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [ new schedule.Range(1, 5) ] // executar de segunda a sexta
regra.hour = 19
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2 !', new Date().getSeconds())
})
