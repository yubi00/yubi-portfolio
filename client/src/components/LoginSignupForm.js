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
                <form className="form" onSubmit={this.onSubmit} >
                    <input 
                        className="text-input"  
                        type="text"
                        name="email" 
                        placeholder="Your email" 
                        value={this.state.email} 
                        onChange={this.onChange}
                    />
                    <input 
                        className="text-input" 
                        type="password" 
                        name="password" 
                        placeholder="password" 
                        value={this.state.password} 
                        onChange={this.onChange}
                    />
                    <button className="button">{ buttonLabel }</button>
                </form>
        )
    }
}
