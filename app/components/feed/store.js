import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import appReducer from './reducers/appReducer'
import listReducer from './reducers/listReducer'
import menuReducer from './reducers/menuReducer'

const rootReducer = combineReducers({appReducer, listReducer, menuReducer})

const middleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(middleware))
middleware.run(saga)

export default store
