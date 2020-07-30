const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const projectRouter = require('./routers/projects')
const adminRouter = require('./routers/admins')

const app = new express()

app.use(cors())
app.use(express.json())
app.use(projectRouter)
app.use(adminRouter)

module.exports = app

