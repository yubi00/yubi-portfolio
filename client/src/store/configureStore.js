import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import projectsReducer from '../reducers/projects'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            projects: projectsReducer
            }),
            composeEnhancer(applyMiddleware(thunk))
    ) 
    return store
}