import * as actionType from './constances'
import api from "../../../API/api"

const actMVDetailRequest = () => {
    return {
        type: actionType.MVDETAIL_REQUEST,
    }
}
const actMVDetailSuccess = (data) => {
    return {
        type: actionType.MVDETAIL_SUCCESS,
        payload: data
    }
}
const actMVDetailFailed = (err) => {
    return {
        type: actionType.MVDETAIL_FAILED,
        payload: err
    }
}
export const actMVDetailAPI = (id) => {
    return dispatch => {
        dispatch(actMVDetailRequest());
        api.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
            .then(rs => {
                dispatch(actMVDetailSuccess(rs.data))
            })
            .catch(err => {
                dispatch(actMVDetailFailed(err))
            })
    }
}