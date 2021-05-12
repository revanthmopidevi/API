const express = require('express')
// custom modules
require('./modules/webex')

// routers 
const V1Router = require('./routers/V1')
const V2Router = require('./routers/V2')

// Express app
const app = express()
const port = process.env.PORT || 3000

app.use(V1Router)
app.use(V2Router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
