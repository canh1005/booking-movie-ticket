import * as actionType from "./constances";

let initialState = {
    data: null,
    err: null,
};

export const UserEditReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.USEREDIT_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state };
        case actionType.USEREDIT_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case actionType.USEREDIT_FAILED:
            state.data = null;
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}