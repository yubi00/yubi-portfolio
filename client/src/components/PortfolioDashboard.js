import React, { Component } from 'react'
import ProjectList from './ProjectList'

class PortfolioDashboard extends Component {
    state = {
        projects: [
            {
                _id: 'project1',
                title: "Kryptovote",
                description: "A blockchain based voting system",
                github: "https://github.com/kryptovote",
                site: "https://kryptovote.com.au",
                createdAt: 134343434,
                completed: true
            },
            {
                _id: 'project2',
                title: "Yubi messenger",
                description: "socket.io based chat app",
                github: "https://github.com/yubimessenger",
                site: "https://yubimessenger.com.au",
                createdAt: 134343434,
                completed: false
            }
        ]
    }

    render() {
        return (
            <div>
                <h1>Portfolio Dashboard</h1>
                <ProjectList projects={this.state.projects}/>
            </div>
        )
    }
}

export default PortfolioDashboard