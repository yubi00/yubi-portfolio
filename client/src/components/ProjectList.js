import React from 'react'
import Project from './Project'

const ProjectList = (props) => (
    <div>
        <h1>ProjectList</h1>
        {
            props.projects.map((project, i) => 
                <Project key={i} project={project}/>
            )
        }
    </div>
)

export default ProjectList
