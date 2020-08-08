import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/auth'

const Header = (props) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link to="/dashboard" className="header__title"><h1>Yubi Khadka</h1></Link>
                <button className="button" onClick= {props.logout}>Logout</button>
            </div>
        </div>
    </header>
)

export default connect(undefined, { logout }) (Header)