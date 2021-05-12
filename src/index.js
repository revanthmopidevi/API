// node modules
const express = require('express')
// routers 
const hitsRouter = require('./routers/hits')
const dataRouter = require('./routers/data')

const app = express()
const port = process.env.PORT || 3000

app.use(hitsRouter)
app.use(dataRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
