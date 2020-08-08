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
        this.props.clearErrors()
        this.setState({ modalIsOpen: true })
    }
    
    closeModal = () => {
        this.setState({ modalIsOpen: false })
    }

    render() {
        const { modalIsOpen, message } = this.state
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Yubi Portfolio</h1>
                    <div className="box-layout__body">
                        { message && <p className="error-msg">{ message }</p>}
                        <LoginSignupForm buttonLabel="Login" onSubmit={this.onSubmit}/>
                        <div className="register-box">
                            <p className="register-msg">Dont have an account?</p>
                            <button className="button--link" onClick={this.openModal}>Sign up</button>
                        </div>
                    </div>
                    <RegisterPage openModal={modalIsOpen} closeModal={this.closeModal}/>
                </div>
            </div>
        )
    }   
}

const mapStateToProps = (state) => ({
    error: state.error,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { startLogin, clearErrors })( LoginPage )