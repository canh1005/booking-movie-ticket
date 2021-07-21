import * as actionType from './constances'
import api from "../../../API/api"
const actProfileRequest = () => {
    return { type: actionType.PROFILE_REQUEST };
}

const actProfileSuccess = (data) => {
    return { type: actionType.PROFILE_SUCCESS, payload: data };
}

const actProfileFailed = (err) => {
    return { type: actionType.PROFILE_FAILED, payload: err };
}

export const actProfile = (taiKhoan) => {
    return dispatch => {
        dispatch(actProfileRequest())
        api.post("/QuanLyNguoiDung/ThongTinTaiKhoan", taiKhoan)
            .then(
                result => {
                    dispatch(actProfileSuccess(result.data));
                }
            )
            .catch(
                err => {
                    dispatch(actProfileFailed(err));
                }
            )

    }
}



