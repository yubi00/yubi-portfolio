import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import projectsReducer from '../reducers/projects'
import authReducer from '../reducers/auth'
import errorReducer from '../reducers/errors'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            projects: projectsReducer,
            auth: authReducer,
            error: errorReducer
            }),
            composeEnhancer(applyMiddleware(thunk))
    ) 
    return store
}