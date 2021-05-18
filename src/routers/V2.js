const express = require('express')
const sendMessage = require('../modules/webex')

const router = new express.Router()

// POST alert
router.post('/alert', async (req, res) => {
    const alerts = req.body.Alerts
    // Alert Status, End Date, Start Date
    try {
        await sendMessage(alerts)
        res.status(200).send({
            "text": req.body.Alerts
        })
    } catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router
