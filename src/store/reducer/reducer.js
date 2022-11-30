import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    chums: [],
    mychums: [],
    myChatRoom: [],
    myGroupChatRoom: [],
    messages: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.RESETREDUCER:
            return ({
                chums: [],
                mychums: [],
                myChatRoom: [],
                myGroupChatRoom: [],
                messages: [],
            })
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
        case ActionTypes.MYGROUPCHATROOM:
            return ({
                ...state,
                myGroupChatRoom: action.payload
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