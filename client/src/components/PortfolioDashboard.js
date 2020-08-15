import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser } from '../actions/auth'
import ProjectList from './ProjectList'
import Header from './Header'

class PortfolioDashboard extends Component {
    componentDidMount() {
        this.props.loadUser()
    }

    render() {
        const { isAuthenticated } = this.props
        return (
            <div>
                <Header/>
                <div className="content-container">
                    <div className="nav-content">
                        <Link className="nav-link" to="/" >Dashboard</Link>
                        { isAuthenticated && <Link className="nav-link" to="/create" >Create</Link> }
                    </div>
                </div>
                <ProjectList/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { loadUser })(PortfolioDashboard)