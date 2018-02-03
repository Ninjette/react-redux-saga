import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, set, toggleCounter } from './actions';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counterInputVal: ''
        };
    }

    set() {
        this.props.set(this.state.counterInputVal);
        this.setState({counterInputVal: ''});
    }

    inputChange(e) {
        this.setState({
            counterInputVal: e.target.value
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.props.toggleCounter}>Toggle counter</button>
                {this.props.counter.show &&
                    <div>
                        <button onClick={this.props.increment}> + </button>
                        <button onClick={this.props.decrement}> - </button>
                        <div>
                            <input onChange={this.inputChange.bind(this)} value={this.state.counterInputVal} type="number"/>
                            <button onClick={this.set.bind(this)}>set number</button>
                        </div>
                        <span>result: {this.props.counter.count}</span>
                    </div>
                }
                <br/>
                <br/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counterReducer,
});

const mapDispatchToProps = {
    increment,
    decrement,
    set,
    toggleCounter
};

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;