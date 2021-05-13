const express = require('express')
const sendMessage = require('../modules/webex')

const router = new express.Router()

// POST alert
router.post('/alert', async (req, res) => {
    try {
        await sendMessage(req.body.text, req.body.toPersonEmail)
        res.status(200).send()
    } catch(e) {
        res.status(500).send({
            "error": `Message Not Delivered: ${e}`
        })
    }
})

module.exports = router