import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Project = ({ project }) => (
        <div className="list-item">
            <Link to={`/edit/${project._id}`}><h2 className="list-item__title">{project.title}</h2></Link>
            <div className="list-item__desc">{project.description}</div>
            <div className="list-item__site">
                <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                <a href={project.site} target="_blank" rel="noopener noreferrer">Site</a>
            </div>
            <div className="list-item__date">Created at: { moment.unix(project.createdAt).format('MMM Do, YYYY')}</div>
        </div>
)

export default Project