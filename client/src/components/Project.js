import React from 'react'
import moment from 'moment'

const Project = ({ project }) => (
    <div>
        <div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.github} target="_blank">Github</a>
        <a href={project.site} target="_blank">Site</a>
        <p>Created at: { moment.unix(project.createdAt).format('MMM Do, YYYY')}</p>
        </div>
    </div>
)

export default Project