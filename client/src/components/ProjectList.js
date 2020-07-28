import React from 'react'
import { connect } from 'react-redux'
import Project from './Project'

const ProjectList = (props) => (
    <div>
          { props.projects ?
              props.projects.map((project, i) => 
                <Project key={i} project={project}/>
              )
              : <p>No projects found</p>
          } 
    </div>
)

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(ProjectList)
