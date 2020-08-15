import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/auth'

const Header = (props) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link to="/" className="header__title"><h1>Yubi Khadka</h1></Link>
                { props.isAuthenticated && <button className="button" onClick= {props.logout}>Logout</button>}
            </div>
        </div>
    </header>
)

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, { logout }) (Header)