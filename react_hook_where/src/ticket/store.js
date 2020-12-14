import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import reduces from './reduce';
import thunk from 'redux-thunk';
export default createStore(
    combineReducers(reduces), {},
    applyMiddleware(thunk)
)