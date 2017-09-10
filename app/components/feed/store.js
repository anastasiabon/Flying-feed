import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import appReducer from './reducers/appReducer'
import listReducer from './reducers/listReducer'

const rootReducer = combineReducers({appReducer, listReducer})

const middleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(middleware))
middleware.run(saga)

export default store
