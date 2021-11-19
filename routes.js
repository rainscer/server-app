User = require('./models/UserModel')

module.exports = function(app){
    app.get('/', (req, res)=>{
        User.find((err, users)=>{
            if(err)
            res.sen(err)
            res.json(users);
        })        
    })

    app.post('/', (req, res)=>{
        res.json(users);
    })
}