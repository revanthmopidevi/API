const express = require('express')
// custom modules


// routers 
const V1Router = require('./routers/V1')
const V2Router = require('./routers/V2')

// Express app
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(V1Router)
app.use('/v2', V2Router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
