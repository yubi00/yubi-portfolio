import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { startLogout } from '../actions/auth'

const Header = (props) => (
    <div>
        <h1>Yubi Portfolio</h1>
        <NavLink to="/dashboard" activeClassName="isActive">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="isActive">Create</NavLink>
        <button onClick= {props.startLogout}>Logout</button>
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout : () => dispatch(startLogout())
    }
}

export default connect(undefined, mapDispatchToProps) (Header)