import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Project = ({ project }) => (
    <div>
        <div>
            <Link to={`/edit/${project._id}`}><h2>{project.title}</h2></Link>
            <p>{project.description}</p>
            <p><a href={project.github} target="_blank" rel="noopener noreferrer">Github</a></p>
            <p><a href={project.site} target="_blank" rel="noopener noreferrer">Site</a></p>
            <p>Created at: { moment.unix(project.createdAt).format('MMM Do, YYYY')}</p>
        </div>
    </div>
)

export default Project