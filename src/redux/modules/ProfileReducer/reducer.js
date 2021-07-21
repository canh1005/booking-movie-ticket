import * as actionType from "./constances";

let initialState = {
    data: null,
    err: null,
};

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.PROFILE_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state };
        case actionType.PROFILE_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case actionType.PROFILE_FAILED:
            state.data = null;
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}