const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    github: {
        type: String,
        trim: true
    },
    site: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Number,
        required: true,
        default: Math.floor(Date.now() / 1000)
    }
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project