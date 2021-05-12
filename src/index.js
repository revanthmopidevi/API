// node modules
const express = require('express')
// routers 
const V1Router = require('./routers/V1')
const V2Router = require('./routers/V2')

const app = express()
const port = process.env.PORT || 3000

app.use(V1Router)
app.use(V2Router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
