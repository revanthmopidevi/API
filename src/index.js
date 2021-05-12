// node modules
const express = require('express')
// routers 
const V1Router = require('./routers/V1')
const V2Router = require('./routers/V2')

const app = express()
const port = process.env.PORT || 3000

// WEBEX TEAMS
const webex = require('webex/env')
const TOKEN = "YWI4NDJkMjktNGYwOS00MjY0LWE2NmQtYzMyZmE3YjIxYmViZjZlNjQxYmEtNzM3_PF84_93291e23-3b2a-45e1-b496-b695b04d0daa"
process.env.WEBEX_ACCESS_TOKEN = TOKEN

webex.rooms.create({
  title: 'My First Room!'
}).catch((e) => {
    console.log(e)
    // process.exit(1)
})

app.use(V1Router)
app.use(V2Router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
