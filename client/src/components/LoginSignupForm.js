import React, { Component } from 'react'

export default class LoginSignupForm extends Component {
    state = {
        email: '',
        password: ''
    }

    onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState(() => ({
            [name] : value
        }))
    }
    
    onSubmit =  (e) => {
        e.preventDefault()
        const { email, password } = this.state
        const {  onSubmit } = this.props
        
        onSubmit({ email, password })
        
    }
    render() {
        const { buttonLabel } = this.props
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <label>email</label>
                    <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.onChange}/>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange}/>
                    <button>{ buttonLabel }</button>
                </form>
            </div>
        )
    }
}
