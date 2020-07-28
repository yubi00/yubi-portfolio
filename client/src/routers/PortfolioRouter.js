import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
    } from 'react-router-dom'
import PortfolioDashboard from '../components/PortfolioDashboard'
import AddProject from '../components/AddProject'
import Header from '../components/Header'
import Contact from '../components/Contact'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'

const PortfolioRouter = () => (
    <Router>
        <Header/>
        <Switch>
            <Route  exact path="/" component={LoginPage}/>
            <Route path="/dashboard" component={PortfolioDashboard} />
            <Route path="/create" component={AddProject}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </Router>
)

export default PortfolioRouter