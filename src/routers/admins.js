const express = require('express')
const Admin = require('../models/admin')
const auth = require('../middleware/auth')

const adminRouter = express.Router()

adminRouter.post('/admins/register', async (req, res) => {
    const { email, password } = req.body
    
    try {
        if (!email || !password) {
            return res.status(400).send({
                message: "Email or password cannot be empty"
            })
        }
        const existingAdmin = await Admin.findOne( { email } )
        if( existingAdmin ) {
            return res.status(400).send({
                message: "Email already in use"
            })
        }

        const admin = new Admin({ email, password })
        await admin.save()
        const token = await admin.generateAuthToken()
        res.status(201).send({
            admin,
            token
        })
    } catch(e) {
        res.status(500).send({
            message: e.message
        })
    }
})

adminRouter.post('/admins/login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send({
                message: "Email or password cannot be empty"
            })
        }
        const admin = await Admin.findByCredentials(email, password)
        const token = await admin.generateAuthToken()
        res.status(201).send({
            admin,
            token
        })
    } catch(e) {
        res.status(400).send({
            message: e.message
        })
    }
})

adminRouter.post('/admins/logout',auth, async (req, res) => {
    try {
        req.admin.tokens = req.admin.tokens.filter((token) => token.token !== req.token)
        await req.admin.save()
        res.status(200).send({
            message: "logged out successfully"
        })
    }catch(e) {
        res.status(500).send({
            message: e.message
        })
    }
})

adminRouter.get('/admins/me', auth, (req, res) => {
    res.status(200).send({
        admin: req.admin
    })
})

adminRouter.patch('/admins/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ["email", "password"]
    const isValid = updates.every((update) => allowedUpdates.includes(update))
    if (!isValid) {
        return res.status(400).send({
            error: "Invalid updates!!"
        })
    }
    try {
       updates.forEach((update) => req.admin[update] = req.body[update])
       await req.admin.save()
       res.status(200).send(req.admin)
    } catch(e) {
        res.status(500).send(e)
    }
})

adminRouter.delete('/admins/me', auth, async (req, res) => {
    try {
        await req.admin.remove()
        res.status(200).send(req.admin)
    }catch (e) {
        res.status(500).send(e)
    }
})


module.exports = adminRouter