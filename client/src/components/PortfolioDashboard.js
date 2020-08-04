import React, { Component } from 'react'
import ProjectList from './ProjectList'
import { connect } from 'react-redux'
import { loadUser } from '../actions/auth'

class PortfolioDashboard extends Component {
    componentDidMount() {
        this.props.loadUser()
    }

    render() {
        return (
            <div>
                <ProjectList/>
            </div>
        )
    }
}

export default connect(null, { loadUser })(PortfolioDashboard)