import { createStore, applyMiddleware } from 'redux';
//reducer import can be named anything you wish. Todd showed that he named his 'Reducer' Mine is named 'users'.
import reducer from './users'; 
import promiseMiddleware from 'redux-promise-middleware';

const middleware = applyMiddleware( promiseMiddleware() )

export default createStore(reducer, middleware);

