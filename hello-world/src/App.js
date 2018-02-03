import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list/todo-list';
import Counter from './components/counter/counter';

export class App extends Component {
    render() {
        return (
            <div>
                <Counter />
                <TodoList />
            </div>
        );
    }
}
export default App;

// ideas what to do next:
// why people started use redux-thunk for async?
// тулзовина для отматывания actions вперед и назад  (a time traveling debugger.) (link https://github.com/gaearon/redux-devtools)
// попробуй реализовать этот первый пример with try catch call , get https://engineering.universe.com/what-is-redux-saga-c1252fc2f4d1