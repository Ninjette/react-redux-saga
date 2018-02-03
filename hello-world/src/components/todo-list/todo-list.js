import 'fetch-polyfill';
import React, { Component } from 'react';
import { addTodo } from './actions';
import { connect } from 'react-redux';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todoInputVal: ''
        };
    }

    addTodo() {
        this.props.addTodo(this.state.todoInputVal);
        this.setState({todoInputVal: ''});
    }

    todoChange(e) {
        this.setState({
            todoInputVal: e.target.value
        });
    }

    //getDataFromAPI() {
    //    return fetch('https://jsonplaceholder.typicode.com/posts/1');
    //}

    render() {
        const todoInputVal = this.state.todoInputVal;
        const todoList = this.props.todo.todoList.map((item, index) =>
            <li key={index}>{item}</li>
        );

        return (
            <div>
                <span>todo list</span>
                <ul>
                    {todoList}
                </ul>
                <input onChange={this.todoChange.bind(this)} value={todoInputVal} type="text"/>
                <button onClick={this.addTodo.bind(this)}>add new item</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todo: state.todoReducer
});

const mapDispatchToProps = {
    addTodo,
};

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer;
