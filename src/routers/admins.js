const express = require('express')
const Admin = require('../models/admin')
const auth = require('../middleware/auth')

const adminRouter = express.Router()

adminRouter.post('/admins', async (req, res) => {
    const admin = new Admin(req.body)

    try {
        await admin.save()
        const token = await admin.generateAuthToken()
        res.status(201).send({
            message: "admin created",
            admin,
            token
        })
    } catch(e) {
        res.status(500).send(e)
    }
})

adminRouter.post('/admins/login', async (req, res) => {
    try {
        const admin = await Admin.findByCredentials(req.body.email, req.body.password)
        const token = await admin.generateAuthToken()
        res.status(201).send({
            message: "Successfully logged in",
            admin,
            token
    })
    } catch(e) {
        res.status(400).send({
            error: e.message
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
        res.status(500).send(e)
    }
})

adminRouter.get('/admins/me', auth, (req, res) => {
    res.status(200).send(req.admin)
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