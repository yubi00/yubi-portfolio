import React from 'react'
import { connect } from 'react-redux'
import ProjectForm from './ProjectForm'
import { editProject, removeProject } from '../actions/projects'

class EditProject extends React.Component {
    state = {
        editing: true
    }

    editProject = (project) => {
        this.props.editProject(this.props.project._id, project)
        this.props.history.push('/dashboard')
    }

    removeProject = () => {
        console.log('testing')
        const remove = this.props.removeProject({id: this.props.project._id})
        console.log(remove)
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div>
               <h1>Edit Project</h1> 
                <ProjectForm 
                    onSubmit={this.editProject} 
                    project={this.props.project} 
                    editing={this.state.editing} 
                    handleRemove={this.removeProject} 
                />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        project: state.projects.find((project) => project._id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        editProject: (id, project) => dispatch(editProject(id, project)),
        removeProject: (data) => dispatch(removeProject(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProject)