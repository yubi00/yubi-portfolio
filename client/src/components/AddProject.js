import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startAddProject } from '../actions/projects'
import ProjectForm from './ProjectForm'

class AddProject extends Component {
    onSubmit = (project) => {
        this.props.startAddProject(project)
        this.props.history.push('/dashboard')
    }

    render(){
        return (
            <div>
                <h1>Add project page</h1>
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