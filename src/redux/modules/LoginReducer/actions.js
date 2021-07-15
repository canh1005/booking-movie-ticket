import api from "../../../API/api";
import { setHeader } from "../../../utils/setHeader/setHeader";
import * as actionType from './constances';

const actRequestLogin = () => {
    return { type: actionType.REQUEST_LOGIN };
}

const actSuccessLogin = (data) => {
    return { type: actionType.SUCCESS_LOGIN, payload: data };
}

const actFailedLogin = (err) => {
    return { type: actionType.FAILED_LOGIN, payload: err };
}
export const actLogout = (history) => {
    if(localStorage.getItem("user")){
        localStorage.removeItem("user");
    }
    history.push("/");
    return {type: actionType.LOGOUT}
}
export const actionLoginAPI = (user, history) => {
    return dispatch => {
        dispatch(actRequestLogin());
        api.post("/QuanLyNguoiDung/DangNhap", user)
            .then(
                result => {
                    dispatch(actSuccessLogin(result.data));
                    if (result.data.maLoaiNguoiDung === "KhachHang") {
                        setHeader(result.data.accessToken);
                        localStorage.setItem("user", JSON.stringify(result.data));
                        history.push("/");
                    }
                    else if (result.data.maLoaiNguoiDung === "QuanTri") {

                    } else {
                        return { response: { data: "Khong dung" } }
                    }

                }
            )
            .catch(
                err => {
                    dispatch(actFailedLogin(err));
                }
            )
            ;
    }
};