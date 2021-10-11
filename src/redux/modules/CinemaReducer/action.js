import api from "../../../API/api";
import * as actionType from './constances';

const actRequestCinemaInfo=()=>{
    return {type: actionType.REQUEST_CINEMAINFO}
}

const actSuccesCinemaInfo=(data)=>{
    return{type: actionType.SUCCESS_CINEMAINFO, payload: data};
}
const actFailedCinemaInfo=(err)=>{
    return{type: actionType.FAILED_CINEMAINFO, payload: err};
}

export const actCinemaInfoAPI=()=>{
    return dispatch=>{
        dispatch(actRequestCinemaInfo());
        api.post("/QuanLyRap/LayThongTinHeThongRap")
        .then(
            result =>{
                dispatch(actSuccesCinemaInfo(result.data));
            }
        )
        .catch(
            err=>{
                dispatch(actFailedCinemaInfo(err));
            }
        )
    }
}
