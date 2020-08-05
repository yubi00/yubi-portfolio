import axios from 'axios'
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './actionTypes'
import { returnErrors } from './errors'

export const loadUser = () => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_LOADING })
        const res = await axios.get('/admins/me', tokenConfig(getState))
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch(e) {
        dispatch(returnErrors(e.response.data, e.response.status))
        dispatch({ type: AUTH_ERROR})
    }
}

export const startRegister = ({ email, password }) => async (dispatch) => {
    try {
        const response = await axios.post('/admins/register', { email, password })
        dispatch({ type: REGISTER_SUCCESS, payload: response.data })
    } catch(e) {
        dispatch({ type: REGISTER_FAIL })
        dispatch(returnErrors(e.response.data, e.response.status, 'REGISTER_FAIL'))
    }
}

export const startLogin = ({ email, password }) => async (dispatch) => {
    try {
        const response = await axios.post('/admins/login', { email, password })
        dispatch({ 
            type: LOGIN_SUCCESS,
            payload: response.data
        })
    } catch(e) {
        dispatch({ type: LOGIN_FAIL })
        dispatch( returnErrors(e.response.data, e.response.status, 'LOGIN_FAIL'))
    }
}

export const logout = () => ( dispatch ) => {
    try {
        dispatch({ type: LOGOUT_SUCCESS })
    } catch(e) {
        console.log(e.response.data)
    }
}

export const tokenConfig = (getState) => {
    const config = {
        headers: {}
    }
    const token = getState().auth.token
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
}