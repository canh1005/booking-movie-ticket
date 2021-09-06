import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import { actUserEditAPI } from '../../../redux/modules/UserEditReducer/action';
function EditProfile(props) {
    const [editUser, setEditUser] = useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "",
        maLoaiNguoiDung: "",
        hoTen: ""
    })
    const { profile } = props; // Sử dụng props của ProfilePage cha truyền vào là profile
    const { maLoaiNguoiDung, accessToken } = JSON.parse(localStorage.getItem("user"));

    const handleClose = () => {
        props.setEditOpen(false);
    }
    const handleChange =(event)=>{
        const {name,value} = event.target;
        setEditUser({
            ...editUser,
            [name]: value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.fetchEditUser(editUser, accessToken);
        props.setEditOpen(false);
    }

    if (editUser.taiKhoan !== profile.taiKhoan) {
        setEditUser({
            ...editUser,
            taiKhoan: profile.taiKhoan,
            matKhau: profile.matKhau,
            email: profile.email,
            soDt: profile.soDT,
            maNhom: profile.maNhom,
            hoTen: profile.hoTen,
            maLoaiNguoiDung: maLoaiNguoiDung,
        })
    }
    console.log(editUser);

    return (
        <div className="bg-black backdrop-filter backdrop-blur-md max-w-md mx-auto text-white rounded-md px-2 py-5">
            <h1 className="text-center text-white font-bold text-xl">Thay đổi thông tin cá nhân</h1>
            <form className="grid grid-cols-1 gap-2 p-5 " onSubmit={handleSubmit}>
                {/* Error Notification */}
                {/* Account */}
                <label htmlFor="account">Tài khoản</label>
                <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="text" id="account" name="taiKhoan" disabled defaultValue={editUser.taiKhoan} />
                {/* {RegisterInfo.err.taiKhoan ? <div className="text-red font-bold ">{RegisterInfo.err.taiKhoan}</div> : <div></div>} */}
                {/* Password */}
                <label htmlFor="password">Mật khẩu</label>
                <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="password" id="password" name="matKhau" defaultValue={editUser.matKhau} onChange={handleChange}/>
                {/* {RegisterInfo.err.matKhau ? <div className="text-red font-bold ">{RegisterInfo.err.matKhau}</div> : <div></div>} */}
                {/* Email */}
                <label htmlFor="email">Email</label>
                <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="text" id="email" name="email" defaultValue={editUser.email} onChange={handleChange}/>
                {/* {RegisterInfo.err.email ? <div className="text-red font-bold ">{RegisterInfo.err.email}</div> : <div></div>} */}
                {/* Telephone */}
                <label htmlFor="phone">Số điện thoại</label>
                <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="text" id="phone" name="soDt" defaultValue={editUser.soDt} onChange={handleChange}/>
                {/* {RegisterInfo.err.soDt ? <div className="text-red font-bold ">{RegisterInfo.err.soDt}</div> : <div></div>} */}
                {/* Name */}
                <label htmlFor="customerName">Họ tên</label>
                <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="text" id="customerName" name="hoTen" defaultValue={editUser.hoTen} onChange={handleChange}/>
                {/* {RegisterInfo.err.hoTen ? <div className="text-red font-bold ">{RegisterInfo.err.hoTen}</div> : <div></div>} */}
                <button className="btn btn-white-hover-blue text-blue-1 min-w-full mx-auto font-bold disabled:opacity-50 disabled:bg-white disabled:text-blue-1 disabled:cursor-default mt-5" onClick={handleSubmit}>Đồng ý</button>
                <button className="btn btn-red" onClick={handleClose}>Hủy</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEditUser: (user, accessToken) => {
            dispatch(actUserEditAPI(user, accessToken))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.UserEditReducer.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
