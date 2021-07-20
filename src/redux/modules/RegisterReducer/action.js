import api from "../../../API/api";
import * as actionType from "./constances"

const actRegisterRequest = () => {
    return { type: actionType.REGISTER_REQUEST }
}

const actRegisterSuccess = (data) => {
    return { type: actionType.REGISTER_SUCCESS, payload: data }
}

const actRegisterFailed = (err) => {
    return { type: actionType.REGISTER_FAILED, payload: err }
}

export const actionRegisterAPI = (user, history) => {
    return dispatch => {
        dispatch(actRegisterRequest());
        api.post("/QuanLyNguoiDung/DangKy", user)
            .then(
                result=>{
                    dispatch(actRegisterSuccess(result.data));
                    alert("Đăng ký thành công");
                    history.push("/login");
                }
            ).catch(
                err=>{
                    dispatch(actRegisterFailed(err));
                }
            )
    }
}