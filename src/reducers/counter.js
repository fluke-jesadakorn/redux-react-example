import Action from '../actions'

var initialState = {
    counter: 0,
    text: ""
}

function counterReducer(state = initialState, action)  {
    switch (action.type) {
        case Action.INCREMENT:
            return {
                counter: state.counter + 1,
                text: action.text
            }
        case Action.DECREMENT:
            return {
                counter: state.counter - 1,
                text: action.text
            }
        default:
            return state
    }
}

export default counterReducer;