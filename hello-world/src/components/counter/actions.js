import { INCREMENT, DECREMENT, TOGGLE_COUNTER, SET } from './constants';

export const increment = () => ({
    type: INCREMENT,
});

export const decrement = () => ({
    type: DECREMENT,
});

export const toggleCounter = () => ({
    type: TOGGLE_COUNTER
});

export const set = (payload) => ({
    type: SET,
    payload
});