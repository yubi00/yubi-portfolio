const express = require('express')
const Project = require('../models/project')
const projectRouter = express.Router()
const getProject = require('../middleware/getProject')
const auth = require('../middleware/auth')

projectRouter.get('/projects', async (req, res) => {
    try {
         const projects = await Project.find({}).limit(parseInt(req.query.limit)).skip(parseInt(req.query.skip)).exec()
        res.status(200).send({ projects })
    } catch (e) {
        res.status(500).send(e.message)
    }
   
 })
 
 projectRouter.get('/projects/:id', getProject, async (req, res) => {
    res.status(200).send(req.project)
 })
 
 projectRouter.post('/projects', auth, async (req, res) => {
    
    const project = new Project(req.body)

     try {
        await project.save()
         res.status(201).send(project)    
     } catch(e) {
        res.status(400).send({
            error: "Creation of new project failed"
        })
     }
 })
 
 projectRouter.patch('/projects/:id', auth, getProject, async (req, res) => {
     const updates = Object.keys(req.body)
     const allowedUpdates = ['title', 'description', 'github', 'site', 'createdAt']
     const isValid = updates.every((update) => allowedUpdates.includes(update))

     if(!isValid) {
         return res.status(400).send({
             error: "Invalid updates"
         })
     }

     try {
        updates.forEach((update) => req.project[update] = req.body[update])
        await req.project.save()

        res.status(200).send(req.project)
     } catch(e) {
         res.status(500).send(e)
     }
 
 })
 
 projectRouter.delete('/projects/:id', auth, getProject, async (req, res) => {
     try {
        await req.project.deleteOne()
        res.status(200).send(req.project)
     }catch(e) {
         res.status(500).send(e)
     }

 })
 

module.exports = projectRouter