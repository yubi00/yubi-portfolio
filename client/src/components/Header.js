import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div>
        <h1>Yubi Portfolio</h1>
        <NavLink to="/dashboard" activeClassName="isActive">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="isActive">Create</NavLink>
        <NavLink to="/contact" activeClassName="isActive">Contact</NavLink>
    </div>
)

export default Header