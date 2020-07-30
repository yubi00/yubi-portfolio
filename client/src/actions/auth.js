import axios from 'axios'

export const Login = (token) => {
    return {
        type: 'LOGIN',
        token
    }
}

export const startLogin = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/admins/login', {email, password})
            if( response.status === 201 ) {

                dispatch(Login(response.data.token))
                return response
            }
            else {
                throw new Error('just for testing')
            }
        } catch(error) {
            if(error.response && error.response.status === 400) {
                return Promise.reject(error.response.data.error)
            }
        }
    }
}

export const Logout = () => ({
    type: 'LOG_OUT'
})

export const startLogout = () => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/admins/logout')
            if(response.status === 200 ) {
                dispatch(Logout())
            }
            console.log(response)
        } catch(e) {
            console.log(e.response)
        }

    }
}