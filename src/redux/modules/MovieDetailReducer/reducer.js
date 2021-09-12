import * as actionType from "./constances";

let initialState = {
    data: null,
    err: null,
};

export const MVDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.MVDETAIL_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state };
        case actionType.MVDETAIL_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case actionType.MVDETAIL_FAILED:
            state.data = null;
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}