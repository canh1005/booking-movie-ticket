import api from "../../../API/api";
import * as actionType from "./constances"
import { setHeader } from "../../../utils/setHeader/setHeader";

const actUserEditRequest = () => {
    return { type: actionType.USEREDIT_REQUEST }
}

const actUserEditSuccess = (data) => {
    return { type: actionType.USEREDIT_SUCCESS, payload: data }
}

const actUserEditFailed = (err) => {
    return { type: actionType.USEREDIT_FAILED, payload: err }
}

export const actUserEditAPI = (user, accessToken) => {
    return dispatch => {
        dispatch(actUserEditRequest());
        api.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", user, setHeader(accessToken))
        .then(
            result=>{
                dispatch(actUserEditSuccess(result.data))
                alert("Thay đổi thành công")
            }
        )
        .catch(
            err=>{
                dispatch(actUserEditFailed(err))
            }
        )
    }
}