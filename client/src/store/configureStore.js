import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import projectsReducer from '../reducers/projects'
import authReducer from '../reducers/auth'
import errorReducer from '../reducers/errors'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    projects: projectsReducer,
    auth: authReducer,
    error: errorReducer
})

const persistedReducer = persistReducer( persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer, 
        composeEnhancer(applyMiddleware(thunk))
    )
    let persistor = persistStore(store)

    return { store, persistor }
}