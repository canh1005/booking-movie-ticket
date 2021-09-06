import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import EditProfile from '../../../components/HomeComponents/Profile/EditProfile'
import TicketList from '../../../components/HomeComponents/Profile/TicketList'
import { actProfile } from "../../../redux/modules/ProfileReducer/action"

function ProfilePage(props) {
    const [editOpen, setEditOpen] = useState(false)
    const userData = JSON.parse(localStorage.getItem("user"))
    const taiKhoan = {
        taiKhoan: userData.taiKhoan
    }
    
    useEffect(() => {
        if (taiKhoan) {
            props.fetchProfile(taiKhoan);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const { result } = props;
    if (result) {
        return (
            <div className="bg-gradient-to-r from-black-1 via-purple-3 to-purple-2 h-screen">
                {/* Back to Home */}
                <div className="flex text-white p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <NavLink className="hover:font-bold" to='/'>Home Page</NavLink>
                </div>
                <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 w-screen p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 bg-white bg-opacity-10 shadow-xl rounded-md backdrop-filter backdrop-blur-md border-white border-t-2 border-l-2">
                        {/* User basic info */}
                        <div className="flex flex-col justify-center items-center row-span-2 bg-white shadow-2xl rounded-md p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                            </svg>
                            <p>Họ Tên: {result.hoTen}</p>
                            <button className="btn btn-purple w-36 mx-auto disabled:opacity-50 disabled:bg-purple-1 disabled:text-blue-1 disabled:cursor-default" disabled={editOpen} onClick={() => { setEditOpen(true) }}>Sửa tài khoản</button>
                        </div>
                        {/* User details */}
                        <div className="bg-purple-1 p-2 bg-white shadow-2xl rounded-md">
                            <p>Tài khoản: {result.taiKhoan} </p>
                            <p>Số điện thoại: {result.soDT}</p>
                            <p>Email: {result.email}</p>
                        </div>
                        {/* List of booked tickets */}
                        <div className="bg-blue-1 p-2 bg-white shadow-2xl rounded-md">
                            <h2 className="text-center font-bold text-xl">Thông tin đặt vé</h2>
                            <TicketList />
                        </div>
                    </div>
                </div>
                {/* User edit popup */}
                {editOpen ? <EditProfile setEditOpen={setEditOpen} /> : ""}
            </div>
        )
    }
    else
        return <div></div>;


}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProfile: (taiKhoan) => {
            dispatch(actProfile(taiKhoan))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        result: state.ProfileReducer.data
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)