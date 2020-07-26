const mongoose = require('mongoose')

const mongodbUrl = 'mongodb://yubikhadka:12tomhanks@ds029803.mlab.com:29803/projects'

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => {
    console.log('connected to database')
})