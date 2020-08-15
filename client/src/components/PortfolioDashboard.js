import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUser } from '../actions/auth'
import ProjectList from './ProjectList'
import Header from './Header'
import FooterPage from './FooterPage'

class PortfolioDashboard extends Component {
    componentDidMount() {
        this.props.loadUser()
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="aboutme">
                    <div className="aboutme-content">
                        <h1>Hi, I'm Yubi. </h1>
                        <h3>I am a Full Stack Developer</h3>
                        <a href="#myworks" className="nav-link">View my works</a>
                    </div>
                </div>
                <ProjectList/>
                <FooterPage/>
            </div>
        )
    }
}


export default connect(undefined, { loadUser })(PortfolioDashboard)