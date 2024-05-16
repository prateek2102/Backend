
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook', (req, res)=>{
  res.send('prateek2')
})
app.get('/twitter', (req, res)=>{
    res.send('twitter')
  })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})