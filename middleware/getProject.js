const Project = require('../models/project')

const getProject = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id)
        if(!project) {
            return res.status(404).send({
                error: `project with the id ${req.params.id} not found`
            })
        }
        req.project = project
        next()
    }catch(e) {
        res.status(500).send(e)
    }
}

module.exports = getProject