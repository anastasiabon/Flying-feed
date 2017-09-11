import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import reducer from './reducer';

const middleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(middleware));
middleware.run(saga);

export default store;