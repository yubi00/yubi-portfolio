const authDefaultState = { token: localStorage.getItem('TOKEN') }

export default (state=authDefaultState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {...state, token: action.token}
        case 'LOG_OUT':
            return {}
        default:
            return state
    }
}