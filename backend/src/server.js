const express = require('express')
const routes = require('./routes/authRoute')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.get('/', (req, res)=> {
    res.send("Hellow world!")
})

app.listen(3000, ()=>{
    console.log("servidor rodando na port http://localhost:3000")
})