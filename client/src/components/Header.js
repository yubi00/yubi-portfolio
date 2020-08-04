import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/auth'

const Header = (props) => (
    <div>
        <h1>Yubi Portfolio</h1>
        <NavLink to="/dashboard" activeClassName="isActive">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="isActive">Create</NavLink>
        <button onClick= {props.logout}>Logout</button>
    </div>
)

export default connect(undefined, { logout }) (Header)