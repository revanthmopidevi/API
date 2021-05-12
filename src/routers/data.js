const express = require('express')

const router = express.Router()

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

router.get('/data', (req, res)=> {
    res.status(200).send(data)
})

module.exports = router