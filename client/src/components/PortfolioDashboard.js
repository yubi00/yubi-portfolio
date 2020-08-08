import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser } from '../actions/auth'
import ProjectList from './ProjectList'

class PortfolioDashboard extends Component {
    componentDidMount() {
        this.props.loadUser()
    }

    render() {
        return (
            <div>
                <div className="content-container">
                    <div className="nav-content">
                        <Link className="nav-link" to="/dashboard" >Dashboard</Link>
                        <Link className="nav-link" to="/create" >Create</Link>
                    </div>
                </div>
                <ProjectList/>
            </div>
        )
    }
}

export default connect(null, { loadUser })(PortfolioDashboard)