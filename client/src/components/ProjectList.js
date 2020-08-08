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
            <div className="content-container">
                <div className="list-body">
                    { this.props.projects ?
                        this.props.projects.map((project, i) => 
                        <Project key={i} project={project}/>
                        )
                        : <div>No projects found</div>
                    } 
                </div>    
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
