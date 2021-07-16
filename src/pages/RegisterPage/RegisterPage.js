import React from 'react'
import moon from '../../assets/images/moon3.jpg'
import star from '../../assets/images/stars.png'

function RegisterPage() {
    return (
        <div className="flex justify-center items-center relative w-full min-h-screen bg-gradient-to-b from-purple-1 to-blue-1">
            <img className="absolute object-cover w-full h-full" src={star} alt="" />
            <img className="absolute mix-blend-screen w-3/12 h-3/12 sm:left-2/3 lg:left-2/3 top-0" src={moon} alt="" />
            <div className="text-white w-2/3 md:w-1/3">
                <form className="grid grid-cols-1 gap-2 bg-white bg-opacity-10 shadow-xl rounded-md backdrop-filter backdrop-blur-md border-white border-t-2 border-l-2 p-5 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute hidden lg:block -top-7 left-20 h-3/12 w-3/12 " viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                    <h1 className="text-center text-2xl text-white font-extrabold my-3">Đăng ký</h1>
                    {/* Account */}
                    <label htmlFor="account">Tài khoản</label>
                    <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="text" id="account" name="account" />
                    {/* Password */}
                    <label htmlFor="password">Mật khẩu</label>
                    <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="password" id="password" name="password" />
                    {/* Email */}
                    <label htmlFor="email">Email</label>
                    <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="text" id="email" name="email" />
                    {/* Telephone */}
                    <label htmlFor="phone">Số điện thoại</label>
                    <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="text" id="phone" name="phone" />
                    {/* Name */}
                    <label htmlFor="customerName">Họ tên</label>
                    <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-7" type="text" id="customerName" name="customerName" />
                    <button className="rounded-md bg-white text-blue-1 py-2 min-w-full mx-auto font-bold hover:bg-blue-2 hover:text-white">Đăng ký</button>
                    <button className="rounded-md bg-white text-blue-1 py-2 min-w-full mx-auto font-bold hover:bg-blue-2 hover:text-white">Đã có tài khoản ?</button>
                </form>
            </div>
        </div>
    )
}

export default (RegisterPage)