const express = require('express')
const sendMessage = require('../modules/webex')

const router = new express.Router()

// POST alert
router.post('/alert', async (req, res) => {
    try {
        if (!req.body.text || !req.body.toPersonEmail) {
            return res.status(400).send("Message Text or Recipient Email Missing.")
        }
        await sendMessage(req.body.text, req.body.toPersonEmail)
        res.status(200).send({
            "text": req.body.text,
            "email": req.body.toPersonEmail
        })
    } catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router