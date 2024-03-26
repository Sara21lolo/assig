const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000
mongoose.connect('mongodb://localhost:27017/test').then(()=>{
    app.listen(PORT, console.log(`listening on port ${PORT}`))
}).catch(err => console.log(err))

app.use(express.json())

const university_route = require('./routes/university')

app.use('/university',university_route)
