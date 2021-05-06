const express = require('express')

const app = express()
const port = process.env.PORT || 3000

let hits = 0
let data = [
    {"month":"January","revenue":2025},
    {"month":"Feb","revenue":1882},
    {"month":"March","revenue":1859},
    {"month":"April","revenue":2022},
    {"month":"May","revenue":2021},
    {"month":"June","revenue":2019},
    {"month":"July","revenue":2008},
    {"month":"August","revenue":2007},
    {"month":"September","revenue":1997},
    {"month":"October","revenue":2000},
    {"month":"November","revenue":2025},
    {"month":"December","revenue":2025}
]

app.get('/', (req, res) => {
    hits += 1
    res.status(200).send(`Sample API for SecureX. Number of hits = ${hits}`)
})

app.get('/status', (req, res) => {
    res.send(`current hits = ${hits}`)
})

app.get('/data', (req, res)=> {
    res.status(200).send(data)
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
