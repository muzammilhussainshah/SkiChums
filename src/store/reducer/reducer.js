import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    chums: [],
    mychums: []
}

export default (state = INITIAL_STATE, action) => {
    console.log(state, "STATES")
    switch (action.type) {
        case ActionTypes.CHUMS:
            return ({
                ...state,
                chums: action.payload
            })
        case ActionTypes.MYCHUMS:
            return ({
                ...state,
                mychums: action.payload
            })
        default:
            return state;
    }

}