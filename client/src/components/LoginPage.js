import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'
import { setError } from '../actions/errors'
import { history } from '../routers/PortfolioRouter'
import LoadingPage from './LoadingPage'

class LoginPage extends React.Component {
    state = {
        email: '',
        password: '',
        loading: false
    }
    onemailChange = (e) => {
        const email = e.target.value
        this.setState(() => ({ email }))
    }

    onPasswordChange = (e) => {
        const password = e.target.value
        this.setState(() => ({ password }))
    }

    onSubmit =  (e) => {
        e.preventDefault()

        if(!this.state.email || !this.state.password) {
            return this.props.setError('Invalid username or password')
        }  
        this.setState(() => ({ loading: true}))
        this.props.startLogin(this.state.email, this.state.password)
        .then((res) => {
            if(history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
        .catch((e) => {
            this.props.setError(e)
            this.setState({ email: ''})
            this.setState({ password: ''})
            this.setState({ loading: false})
        })       
    }


    render() {
        const { error } = this.props
        return (
            <div>
                {error && <p>{error}</p>}
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
        token: state.auth.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: (email, password) =>  dispatch(startLogin(email, password)),
        setError: (error) => dispatch(setError(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)