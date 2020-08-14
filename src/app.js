const express = require('express')
const cors = require('cors')
const path = require('path')
require('./db/mongoose')
const projectRouter = require('./routers/projects')
const adminRouter = require('./routers/admins')

const app = new express()

app.use(cors())
app.use(express.json())
app.use(projectRouter)
app.use(adminRouter)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/../client/build' )))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '/../client', 'build', 'index.html'))
        
    })
}

module.exports = app

