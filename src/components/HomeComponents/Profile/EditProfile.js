import React from 'react'

export default function EditProfile(props) {
    const handleClose = () => {
        props.setEditOpen(false);
    }
    return (
        <div className="glass max-w-md mx-auto text-red-1">
            <h1 className="text-center text-red font-bold text-xl">Thay đổi thông tin cá nhân</h1>
            <form className="grid grid-cols-1 gap-2 p-5 ">
                {/* Error Notification */}
                {/* Account */}
                <label htmlFor="account">Tài khoản</label>
                <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="text" id="account" name="taiKhoan" />
                {/* {RegisterInfo.err.taiKhoan ? <div className="text-red font-bold ">{RegisterInfo.err.taiKhoan}</div> : <div></div>} */}
                {/* Password */}
                <label htmlFor="password">Mật khẩu</label>
                <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="password" id="password" name="matKhau" />
                {/* {RegisterInfo.err.matKhau ? <div className="text-red font-bold ">{RegisterInfo.err.matKhau}</div> : <div></div>} */}
                {/* Email */}
                <label htmlFor="email">Email</label>
                <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="text" id="email" name="email" />
                {/* {RegisterInfo.err.email ? <div className="text-red font-bold ">{RegisterInfo.err.email}</div> : <div></div>} */}
                {/* Telephone */}
                <label htmlFor="phone">Số điện thoại</label>
                <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="text" id="phone" name="soDt" />
                {/* {RegisterInfo.err.soDt ? <div className="text-red font-bold ">{RegisterInfo.err.soDt}</div> : <div></div>} */}
                {/* Name */}
                <label htmlFor="customerName">Họ tên</label>
                <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="text" id="customerName" name="hoTen" />
                {/* {RegisterInfo.err.hoTen ? <div className="text-red font-bold ">{RegisterInfo.err.hoTen}</div> : <div></div>} */}
                <button className="btn btn-white-hover-blue text-blue-1 min-w-full mx-auto font-bold disabled:opacity-50 disabled:bg-white disabled:text-blue-1 disabled:cursor-default">Đồng ý</button>
                <button className="btn btn-red" onClick={handleClose}>Hủy</button>
            </form>
        </div>
    )
}
