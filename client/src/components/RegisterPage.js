import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearErrors } from '../actions/errors'
import { startRegister } from '../actions/auth'
import { history } from '../routers/PortfolioRouter'
import LoginSignupForm from './LoginSignupForm'
import Modal from 'react-modal'

class RegisterPage extends Component {
    state = {
        message: null
    }
    
    componentDidUpdate(prevProps) {
        const { error, isAuthenticated, clearErrors } = this.props
        if( error !== prevProps.error ) {
            if( error.id === 'REGISTER_FAIL' ) {
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
        const { startRegister } = this.props
        startRegister({ email, password })
    }

    render() {
        const { openModal, closeModal } = this.props
        const { message } = this.state

        return (
            <Modal
                isOpen={openModal}
                onRequestClose={closeModal}
                ariaHideApp={false}
                className="register-modal"
            >
                <h1 className="box-layout__title">Register</h1>
                { message && <p className="error-msg">{ message }</p>}
                <LoginSignupForm buttonLabel="Sign Up" onSubmit={this.onSubmit}/>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.error,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { startRegister, clearErrors })( RegisterPage )
