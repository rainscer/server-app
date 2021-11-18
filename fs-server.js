const fs = require('fs')
const path = require('path')

//в консоль вивело created, в дереві створенна нова папка
fs.mkdir(path.join(__dirname, 'notes',), err =>{
    if (err) throw err
    console.log('created')
})