import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Project = ({ project }) => (
        <div className="list-item"> 
            <Link className="list-item__title" to={`/edit/${project._id}`}><h2>{project.title}</h2></Link>
            <div className="list-item__date">{ moment.unix(project.createdAt).format('MMM Do, YYYY')}</div>
            <div className="list-item__desc">{project.description}</div>
            <div className="list-item__site">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="site-link">Github</a>
                <a href={project.site} target="_blank" rel="noopener noreferrer" className="site-link">Site</a>
            </div>
        </div>
)

export default Project