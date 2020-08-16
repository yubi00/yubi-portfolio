import React from 'react'
import { connect } from 'react-redux'
import ProjectForm from './ProjectForm'
import { startEditProject, startRemoveProject } from '../actions/projects'

class EditProject extends React.Component {
    state = {
        editing: true
    }

    editProject = (project) => {
        this.props.startEditProject(this.props.project._id, project)
        this.props.history.push('/')
    }

    removeProject = () => {
        this.props.startRemoveProject({id: this.props.project._id})
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="content-container">
               <h2 className="header__subtitle">Edit Project</h2> 
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

const mapDispatchToProps = (dispatch) => {
    return {
        startEditProject: (id, project) => dispatch(startEditProject(id, project)),
        startRemoveProject: (data) => dispatch(startRemoveProject(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProject)