const path = require('path')

//шлях до поточного файлу
console.log(__filename)
//Назва файлу
console.log(path.basename(__filename))
//Назва директорії
console.log(path.dirname(__filename))
//розширення файла
console.log(path.extname(__filename))
//поверне dir, root, base, name, ext
console.log(path.parse(__filename))
//шлях до файлу 
console.log(path.join(__dirname, 'test', 'second.html'))
//шлях до файлу справа на ліво
console.log(path.resolve(__dirname, './test', 'second.html'))
