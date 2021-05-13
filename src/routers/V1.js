const express = require('express')

const router = new express.Router()

// initialised to 0 hits
let hits = 0

// hard-coded data
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

// GET hit
router.get('/', (req, res) => {
    hits += 1
    res.status(200).send(`Sample API for SecureX. Number of hits = ${hits}`)
})

// GET hits count
router.get('/hits', (req, res) => {
    res.send(`current hits = ${hits}`)
})

// GET data
router.get('/data', (req, res)=> {
    res.status(200).send(data)
})


module.exports = router