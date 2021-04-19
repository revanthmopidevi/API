const express = require('express')

const app = express()
const port = process.env.PORT || 3000

let hits = 0

app.get('/', (req, res) => {
    res.send
    res.status(200).send("Sample API for SecureX.")
})

app.get('/test', (req, res) => {
    hits += 1
    res.send(`number of hits = ${hits}`)
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})