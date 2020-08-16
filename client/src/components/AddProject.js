import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startAddProject } from '../actions/projects'
import ProjectForm from './ProjectForm'

class AddProject extends Component {
    onSubmit = (project) => {
        this.props.startAddProject(project)
        this.props.history.push('/')
    }

    render(){
        return (
            <div className="content-container">
                <h2 className="header__subtitle">Add Project</h2>
                <ProjectForm onSubmit = {this.onSubmit}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddProject : (project) => dispatch(startAddProject(project))
    }
}

export default connect(undefined, mapDispatchToProps)(AddProject)