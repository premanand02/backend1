require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) =>{
    res.send('i am prem')
})

app.get('/youtube',(req,res) =>{
    res.send('Chai our Code')
})


app.get('/login',(req,res) =>{
    res.send('<h1>login my account</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})