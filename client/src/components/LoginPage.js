import React from 'react'
import LoginSignupForm from './LoginSignupForm'
import RegisterPage from './RegisterPage'
import { connect } from 'react-redux'
import { clearErrors } from '../actions/errors'
import { startLogin } from '../actions/auth'
import { history } from '../routers/PortfolioRouter'

class LoginPage extends React.Component {
    state = {
        modalIsOpen: false,
        message: null
    }

    
    componentDidUpdate(prevProps) {
        const { error, isAuthenticated, clearErrors } = this.props
        if( error !== prevProps.error ) {
            if( error.id === 'LOGIN_FAIL' ) {
                this.setState({ message: error.message.message })
            } else {
                this.setState({ message: null })
            }
        }
        
        if ( isAuthenticated ) {
            clearErrors()
            history.push('/dashboard')
        }
    }
    
    onSubmit = ({ email, password }) => {
        const { startLogin } = this.props
        startLogin({ email, password })

    }

    openModal = () => {
        this.setState({ modalIsOpen: true })
    }
    
    closeModal = () => {
        this.setState({ modalIsOpen: false })
    }

    render() {
        const { modalIsOpen, message } = this.state
        return (
            <div>
                { message && <h3>{ message }</h3>}
                <LoginSignupForm buttonLabel="Login" onSubmit={this.onSubmit}/>
                <button onClick={this.openModal}>Register</button>
                <RegisterPage openModal={modalIsOpen} closeModal={this.closeModal}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.error,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { startLogin, clearErrors })( LoginPage )