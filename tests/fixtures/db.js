const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Admin = require('../../src/models/admin')
const Project = require('../../src/models/project')

const adminOneId = new mongoose.Types.ObjectId()
const adminTwoId = new mongoose.Types.ObjectId()

const adminOne = {
    _id: adminOneId,
    name: 'Buchu Basnet',
    email: 'buchubasnet@gmail.com',
    password: '12Buchu',
    tokens: [{
        token: jwt.sign({_id: adminOneId}, process.env.JWT_SECRET_KEY)
    }]
}

const adminTwo = {
    _id: adminTwoId,
    name: 'Pranjala Basnet',
    email: 'pranjalabasnet@gmail.com',
    password: '12Buchu122',
    tokens: [{
        token: jwt.sign({_id: adminTwoId}, process.env.JWT_SECRET_KEY)
    }]
}


const projectOneId = new mongoose.Types.ObjectId()
const projectTwoId = new mongoose.Types.ObjectId()

const projectOne = {
    _id: projectOneId,
    title: "Kryptovote",
    description: "A blockchain based voting system",
    github: "https://github.com/kryptovote",
    site: "https://kryptovote.com.au",
    createdAt: 134343434,
    completed: true
}

const projectTwo = {
    _id: projectTwoId,
    title: "Yubi messenger",
    description: "socket.io based chat app",
    github: "https://github.com/yubimessenger",
    site: "https://yubimessenger.com.au",
    createdAt: 134343434,
    completed: false
}


const setupDatabase = async () => {
    await Admin.deleteMany()
    await new Admin(adminOne).save()
    await new Admin(adminTwo).save()
    await Project.deleteMany()
    await new Project(projectOne).save()
    await new Project(projectTwo).save()
}

module.exports = {
    adminOne,
    adminOneId,
    adminTwo,
    adminTwoId,
    projectOne,
    projectTwo,
    projectOneId,
    projectTwoId,
    setupDatabase
}