import * as actionType from "./constances";

let initialState = {
    data: null,
    err: null,
};

export const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.REGISTER_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state };
        case actionType.REGISTER_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case actionType.REGISTER_FAILED:
            state.data = null;
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}