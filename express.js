const express = require('express')
const app = express()
const port = process.env.PORT||3000
const routes = require('./routes')
const mongoose = require('mongoose')
const User = require('./models/UserModel')

mongoose.connect('mongodb://localhost/users_db')

routes(app)
app.listen(port)