import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/auth'

const Header = (props) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link to="/" className="header__title"><h1>Yubi Khadka</h1></Link>
                    { props.isAuthenticated ? 
                        <div>
                            <Link className="nav-link" to="/create" >Create</Link>
                            <Link className="nav-link" to="/" onClick= {props.logout}>Logout</Link>
                        </div> :
                        <div>
                            <a  href="https://github.com/yubi00"  
                                className="nav-link" 
                                target="_blank" rel="noopener noreferrer"
                            >Github</a>
                            <a  href="https://linkedin.com/in/ubrajkhadka"  
                                className="nav-link" 
                                target="_blank" rel="noopener noreferrer"
                            >Linkedin</a>
                        </div>
                    }
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