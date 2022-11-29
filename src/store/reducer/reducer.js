import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    chums: [],
    mychums: [],
    myChatRoom: [],
    messages: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.RESETREDUCER:
            return INITIAL_STATE
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
        case ActionTypes.MYCHATROOM:
            return ({
                ...state,
                myChatRoom: action.payload
            })
        case ActionTypes.MESSAGES:
            return ({
                ...state,
                messages: action.payload
            })
        default:
            return state;
    }

}