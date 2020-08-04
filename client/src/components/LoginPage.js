import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'
import { clearErors } from '../actions/errors'
import { history } from '../routers/PortfolioRouter'
import LoadingPage from './LoadingPage'

class LoginPage extends React.Component {
    state = {
        email: '',
        password: '',
        loading: false,
        message: null
    }
    onemailChange = (e) => {
        const email = e.target.value
        this.setState(() => ({ email }))
    }

    onPasswordChange = (e) => {
        const password = e.target.value
        this.setState(() => ({ password }))
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props
        if( error !== prevProps.error ) {
            if ( error.id === 'LOGIN_FAIL' ) {
                this.setState({ message: error.message.message })
            } else {
                this.setState({ message: null })
            }
        }

        if( isAuthenticated ) {
            history.push('/dashboard')
        }
    }

    onSubmit =  (e) => {
        e.preventDefault()
        const { email, password } = this.state
        //attempt to login
        this.props.startLogin({ email, password })
        
    }


    render() {
        const { message } = this.state
        return (
            <div>
                { message && <h3> {message} </h3>}
                <form onSubmit={this.onSubmit} >
                    <label>email</label>
                    <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.onemailChange}/>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onPasswordChange}/>
                    <button>Login</button> {this.state.loading && <LoadingPage/>}
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        error: state.error,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, { startLogin, clearErors})(LoginPage)