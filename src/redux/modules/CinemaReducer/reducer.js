import * as actionType from "./constances"
let initialState = {
    data: null,
    err: null,
};

export const CinemaInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.REQUEST_CINEMAINFO:
            state.data = null;
            state.err = null;
            return { ...state };
        case actionType.SUCCESS_CINEMAINFO:
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case actionType.FAILED_CINEMAINFO:
            state.data = null;
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}