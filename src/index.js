const express = require('express')

const app = express()
const port = process.env.PORT || 3000

let hits = 0

app.get('/', (req, res) => {
    hits += 1
    res.status(200).send(`Sample API for SecureX. Number of hits = ${hits}`)
})

app.get('/status', (req, res) => {
    res.send(`current hits = ${hits}`)
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
