require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook',(req,res) => {
    res.send('roshan lama')
})

app.get('/login',(req,res) =>{
    res.send('<h1>please login here rn<h1>')
})

app.get('/youtube',(req,res) =>{
    res.send('<h2>yokouun<h2>')
})


app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})