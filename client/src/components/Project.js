import React from 'react'

const Project = ({ project }) => (
    <div>
        <div>
            <p>{project.title}</p>
            <p>{project.description}</p>
        </div>
    </div>
)

export default Project