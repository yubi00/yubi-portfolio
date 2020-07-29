import React from 'react'
import { connect } from 'react-redux'
import Project from './Project'
import { startSetProjects } from '../actions/projects'

class ProjectList extends React.Component {
    componentDidMount() {
        this.props.startSetProjects()
    }

    render() {
        return  (
            <div>
                  { this.props.projects ?
                      this.props.projects.map((project, i) => 
                        <Project key={i} project={project}/>
                      )
                      : <p>No projects found</p>
                  } 
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { projects: state.projects }
}

const mapDispatchToProps =  (dispatch) => {  
    return {
        startSetProjects: () => dispatch(startSetProjects())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
