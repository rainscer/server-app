const os = require('os');

//повертає ім'я хоста ОС
console.log(os.hostname())
//повертає архітектуру ЦП ОС
console.log(os.arch())
//масив об'єктів, інофрмація про кожне ядро
console.log(os.cpus())
//об'єм вільної системної пам'яті в байтах
console.log(os.freemem())
//об'єм загальний системної пам'яті в байтах
console.log(os.totalmem())