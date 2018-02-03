import { combineReducers, createStore } from 'redux';
import counterReducer from '../components/counter/reducer';
import todoReducer from '../components/todo-list/reducer';


// reducers
export const reducers = combineReducers({
    counterReducer,
    todoReducer
});

// store.js
export function configureStore(initialState = {}) {
    return createStore(
        reducers,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

const counterReducerInitialState = {
    count: 0,
    show: false
};

const todoReducerInitialState = {
    todoList: []
};

export const store = configureStore({
    counterReducer: counterReducerInitialState,
    todoReducer: todoReducerInitialState
});





//try to adopt saga
//import { combineReducers, createStore, applyMiddleware } from 'redux';
//import counterReducer from '../components/counter/reducer';
//import todoReducer from '../components/todo-list/reducer';
//
//import createSagaMiddleware from 'redux-saga';
//import rootSaga from './sagas';
//const sagaMiddleware = createSagaMiddleware();
//
//// reducers
//export const reducers = combineReducers({
//    counterReducer,
//    todoReducer
//});
//
//// store.js
//export function configureStore(initialState = {}) {
//    return createStore(
//        reducers,
//        initialState,
//        applyMiddleware(sagaMiddleware),
//    );
//}
//
//sagaMiddleware(rootSaga);
//
//const counterReducerInitialState = {
//    count: 0,
//    show: false
//};
//
//const todoReducerInitialState = {
//    todoList: []
//};
//
//export const store = configureStore({
//    counterReducer: counterReducerInitialState,
//    todoReducer: todoReducerInitialState
//});
//
//
//
//
//
//
////window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),