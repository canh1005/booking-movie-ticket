import React, { useState } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moon from '../../assets/images/moon3.jpg'
import star from '../../assets/images/stars.png'
import { actionRegisterAPI } from '../../redux/modules/RegisterReducer/action';
import { emailValid, emptyValid } from '../../utils/validation/validation';

function RegisterPage(props) {
    const [RegisterInfo, setRegisterInfo] = useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        hoTen: "",
        err: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            hoTen: "",
        },
        formValid: false,
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setRegisterInfo({
            ...RegisterInfo,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        props.fetchRegister(RegisterInfo, props.history)
        console.log(RegisterInfo);
    }
    const handleError = (e) => {
        const { name, value } = e.target;
        let mess = emptyValid(value);
        switch (name) {
            case "email":
                mess = emailValid(RegisterInfo.email);
                if (value === "") {
                    mess = emptyValid(value);
                }
                break;
            default:
                break;
        }
        setRegisterInfo({
            ...RegisterInfo,
            err: { ...RegisterInfo.err, [name]: mess }
        })
        if (RegisterInfo.taiKhoan !== "" && RegisterInfo.matKhau !== "" && RegisterInfo.soDt !== "" && RegisterInfo.email !== "" && RegisterInfo.hoTen !== "") {
            setRegisterInfo({
                ...RegisterInfo,
                formValid: true,
                err: { ...RegisterInfo.err, [name]: mess }

            });
        }
    }

    const errorNoti=()=>{
        if(props.error){
            return <div className="text-white bg-red-1 font-bold">{props.error.response.data}</div>
        }
    }


    return (
        <div className="flex justify-center items-center relative w-full min-h-screen bg-gradient-to-b from-purple-1 to-blue-1">
            <img className="absolute object-cover w-full h-full" src={star} alt="" />
            <img className="absolute mix-blend-screen w-3/12 h-3/12 sm:left-2/3 lg:left-2/3 top-0" src={moon} alt="" />
            <div className="text-white w-2/3 md:w-1/3">
                <form onSubmit={onSubmit} className="grid grid-cols-1 gap-2 bg-white bg-opacity-10 shadow-xl rounded-md backdrop-filter backdrop-blur-md border-white border-t-2 border-l-2 p-5 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute hidden lg:block -top-7 left-20 h-20 w-20 " viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                    <h1 className="text-center text-2xl text-white font-extrabold my-3">Đăng ký</h1>
                    {/* Thong bao loi */}
                    {errorNoti()}
                    {/* Account */}
                    <label htmlFor="account">Tài khoản</label>
                    <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="text" id="account" name="taiKhoan" onChange={handleChange} onBlur={handleError} />
                    {RegisterInfo.err.taiKhoan ? <div className="text-red font-bold ">{RegisterInfo.err.taiKhoan}</div> : <div></div>}
                    {/* Password */}
                    <label htmlFor="password">Mật khẩu</label>
                    <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="password" id="password" name="matKhau" onChange={handleChange} onBlur={handleError} />
                    {RegisterInfo.err.matKhau ? <div className="text-red font-bold ">{RegisterInfo.err.matKhau}</div> : <div></div>}
                    {/* Email */}
                    <label htmlFor="email">Email</label>
                    <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="text" id="email" name="email" onChange={handleChange} onBlur={handleError} />
                    {RegisterInfo.err.email ? <div className="text-red font-bold ">{RegisterInfo.err.email}</div> : <div></div>}
                    {/* Telephone */}
                    <label htmlFor="phone">Số điện thoại</label>
                    <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="text" id="phone" name="soDt" onChange={handleChange} onBlur={handleError} />
                    {RegisterInfo.err.soDt ? <div className="text-red font-bold ">{RegisterInfo.err.soDt}</div> : <div></div>}
                    {/* Name */}
                    <label htmlFor="customerName">Họ tên</label>
                    <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="text" id="customerName" name="hoTen" onChange={handleChange} onBlur={handleError} />
                    {RegisterInfo.err.hoTen ? <div className="text-red font-bold ">{RegisterInfo.err.hoTen}</div> : <div></div>}
                    <button className="rounded-md bg-white text-blue-1 py-2 min-w-full mx-auto font-bold hover:bg-blue-2 hover:text-white disabled:opacity-50 disabled:bg-white disabled:text-blue-1 disabled:cursor-default" disabled={!RegisterInfo.formValid}>Đăng ký</button>
                    <NavLink className="text-center rounded-md bg-white text-blue-1 py-2 min-w-full mx-auto font-bold hover:bg-blue-2 hover:text-white" to="/login">Đã có tài khoản ?</NavLink>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRegister: (user, history) => {
            dispatch(actionRegisterAPI(user, history));
        }
    }
}
const mapStateToProps = (state) => {
    return {
        error: state.RegisterReducer.err,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)