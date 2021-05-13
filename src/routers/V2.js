const express = require('express')
const sendMessage = require('../modules/webex')

const router = new express.Router()

// POST alert
router.post('/alert', async (req, res) => {
    const toPersonEmail = "revanthmopidevi@gmail.com"
    const alerts = request.body.Alerts
    // Alert Status, End Date, Start Date
    try {
        await sendMessage(alerts, toPersonEmail)
        res.status(200).send({
            "text": req.body.Alerts,
            "email": toPersonEmail
        })
    } catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router
