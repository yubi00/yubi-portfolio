import React from 'react'
import {
    Router,
    Switch,
    Route
    } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import PortfolioDashboard from '../components/PortfolioDashboard'
import AddProject from '../components/AddProject'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import EditProject from '../components/EditProject'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

const PortfolioRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute exact path="/" component={LoginPage}/>
                <PrivateRoute path="/dashboard" component={PortfolioDashboard} />
                <PrivateRoute path="/create" component={AddProject}/>
                <PrivateRoute path="/edit/:id" component={EditProject}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default PortfolioRouter