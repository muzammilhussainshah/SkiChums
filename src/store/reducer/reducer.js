import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    chums: []
}

export default (state = INITIAL_STATE, action) => {
    console.log(state, "STATES")
    switch (action.type) {
        case ActionTypes.CHUMS:
            return ({
                ...state,
                chums: action.payload
            })
        default:
            return state;
    }

}