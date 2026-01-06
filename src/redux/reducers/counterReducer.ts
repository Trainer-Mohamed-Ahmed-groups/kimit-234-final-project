import { DECREMENT, INCREMENT } from "../actions/types";


function counterReducer(state = { counter: 0 }, action) {
    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + 1 };
        case DECREMENT:
            return { counter: state.counter - 1 };
        case 'ADD_BY_AMOUNT':
            return { counter: state.counter + action.payload };
        case 'DECREASE_BY_AMOUNT':
            return { counter: state.counter - action.payload };
        default:
            return state
    }
}

export default counterReducer;
