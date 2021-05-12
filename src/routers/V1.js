const express = require('express')

const router = new express.Router()

let hits = 0

router.get('/', (req, res) => {
    hits += 1
    res.status(200).send(`Sample API for SecureX. Number of hits = ${hits}`)
})

router.get('/hits', (req, res) => {
    res.send(`current hits = ${hits}`)
})

module.exports = router