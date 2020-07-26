const express = require('express')
require('./db/mongoose')
const projectRouter = require('./routers/projects')
const adminRouter = require('./routers/admins')

const port = process.env.PORT || 3000

const app = new express()

app.use(express.json())
app.use(projectRouter)
app.use(adminRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})