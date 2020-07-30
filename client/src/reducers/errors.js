const errorDefaultState = ''

export default (state=errorDefaultState, action) => {
    switch(action.type) {
        case 'SET_ERROR':
            return action.error
        default:
            return state
    }
}