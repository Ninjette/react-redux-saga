import { INCREMENT, DECREMENT, TOGGLE_COUNTER, SET } from './constants';
const counterReducer = (state = {}, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case TOGGLE_COUNTER:
            return {
                ...state,
                show: !state.show
            };
        case SET:
            return {
                ...state,
                count: Number(action.payload)
            };
        default:
            return state;
    }
};

export default counterReducer;