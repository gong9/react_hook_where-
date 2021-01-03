import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import reduces from './reduce';
import thunk from 'redux-thunk'
export default createStore(
    combineReducers(reduces), {
        from: '北京',
        to: '上海',
        isCitySelectorVisible: false,
        currentSelectingLeftCity: false, //由它决定数据是回显到左边还是右边

    },
    applyMiddleware(thunk)
)