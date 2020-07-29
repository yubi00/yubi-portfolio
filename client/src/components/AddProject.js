import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProject } from '../actions/projects'
import ProjectForm from './ProjectForm'

class AddProject extends Component {
    onSubmit = (project) => {
        console.log(project.createdAt)
        this.props.addProject(project)
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
        addProject : (project) => dispatch(addProject(project))
    }
}

export default connect(undefined, mapDispatchToProps)(AddProject)