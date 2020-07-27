const express = require('express')
require('./db/mongoose')
const projectRouter = require('./routers/projects')
const adminRouter = require('./routers/admins')

const app = new express()

app.use(express.json())
app.use(projectRouter)
app.use(adminRouter)

module.exports = app

