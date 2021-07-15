import * as actionType from "./constances";

let initialState = {
    data: null,
    err: null,
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.REQUEST_LOGIN:
            state.data = null;
            state.err = null;
            return { ...state };
        case actionType.SUCCESS_LOGIN:
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case actionType.FAILED_LOGIN:
            state.data = null;
            state.err = action.payload;
            return { ...state };
        case actionType.LOGOUT:
            state.data = null;
            state.err = null;
            return { ...state };
        default:
            return { ...state };
    }
}