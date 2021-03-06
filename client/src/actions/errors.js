import { GET_ERRORS, CLEAR_ERRORS } from './actionTypes'

export const returnErrors = (message, status, id = null ) => ({
    type: GET_ERRORS,
    payload: {
        message,
        status,
        id
    }
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})


