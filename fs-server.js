const fs = require('fs')
const path = require('path')

//в консоль вивело created, в дереві створенна нова папка
fs.mkdir(path.join(__dirname, 'notes',), err =>{
    if (err) throw err
    console.log('created')
})
//Додавання данних в текст
fs.appendFile('testFile.txt', ' This line is beyond the end.', (err) => {
    if(err) throw err;
    console.log('Data has been added!');
});
//Перейменування файлу
fs.rename('testFile.txt', 'newTestFile.txt', (err) => {
    if(err) throw err;
    console.log('File renamed successfully!');
});
//Видалення файлу
fs.unlink('newTestFile.txt', (err) => {
    if(err) throw err;
    console.log('File deleted successfully!');
});