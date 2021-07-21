import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProfilePage() {
    return (
        <div className="bg-gradient-to-r from-black-1 via-purple-3 to-purple-2 h-screen">
            {/* Back to Home */}
            <div className="flex text-white p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <NavLink to='/'>Home Page</NavLink>
            </div>
            <div className="">

            </div>
            <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 w-screen grid grid-cols-1 md:grid-cols-2 gap-2 p-5 bg-white bg-opacity-10 shadow-xl rounded-md backdrop-filter backdrop-blur-md border-white border-t-2 border-l-2">
                {/* User basic info */}
                <div className="flex flex-col justify-center items-center bg-blue-2 row-span-2 bg-white shadow-2xl rounded-md p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                    <p>Họ Tên:</p>
                    <button className="text-center rounded-md bg-purple-2 text-blue-1 py-2 w-32 mx-auto font-bold hover:bg-blue-2 hover:text-white">Sửa tài khoản</button>
                </div>
                {/* User details */}
                <div className="bg-purple-1 p-2 bg-white shadow-2xl rounded-md backdrop-filter backdrop-blur-md border-white border-t-2 border-l-2">
                    <p>Tài khoản: </p>
                    <p>Số điện thoại: </p>
                    <p>Email: </p>
                </div>
                {/* List of booked tickets */}
                <div className="bg-blue-1 p-2 bg-white shadow-2xl rounded-md backdrop-filter backdrop-blur-md border-white border-t-2 border-l-2">
                    <h2>Thông tin đặt vé</h2>
                </div>
            </div>
        </div>
    )
}
