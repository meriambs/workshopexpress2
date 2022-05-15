
const express = require('express')
const userRouter = require('./route/user')
const app = express();

const port = 4000;
//hedhi juste bich ynejem yb3th w yrj3 bil jason 
app.use(express.json())
//remarque give a nae related to the collection ,
// we gave a variable 
app.use('/api/user',userRouter)


app.listen(port,(err)=>{
    err?console.log(err):console.log(`go to the port number ${port}`)
})


//this one try it 