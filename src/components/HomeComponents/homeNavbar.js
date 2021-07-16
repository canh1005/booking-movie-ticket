import React, { useState } from 'react'
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import T_logo from "../../assets/images/T_logo.png"
import { actLogout } from '../../redux/modules/LoginReducer/actions';

function HomeNavbar(props) {
    const [isOpen, setOpen] = useState("false")
    const loginRender = () => {
        if (localStorage.getItem("user")) {
            return (
                <div className="flex items-end pl-4 md:block border-l-2" >
                    <NavLink className=" pr-1" to="id_User">
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {/* user is key */}
                        <div className="font-bold text-lg" > {localStorage.getItem('user') ? `${JSON.parse(localStorage.getItem('user')).hoTen}` : "UserName"}</div>
                    </NavLink>
                    {/* LOGOUT BUTTON */}
                    <button onClick={() => { props.fetchLogout(props.history) }} className=" ml-5 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-8 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </button>
                </div>)

        } else {
            return (<div className=" font-bold border-l-2 ">
                <NavLink className="px-2 text-base hover:underline " to="/login">Đăng nhập</NavLink>
                <NavLink className="px-2  text-base hover:underline " to="/register">Đăng ký</NavLink>
            </div>)

        }
    }
    return (
        <div>
            <header className="flex flex-auto justify-between bg-gradient-to-r from-gray to-gray-1 px-5 pt-3 items-center text-white">
                {/* Logo */}
                <div className="flex flex-1 space-x-3 items-center">
                    {/* icon */}
                    <div className="w-20 h-20" >
                        <img className="" src={T_logo} alt=""></img>
                    </div>
                    {/* Name-branch */}
                    <div className="text-2xl">
                        <p> ABCXYZ-cinema </p>
                    </div>
                </div>

                {/* Menu on destop */}
                <div className=" mr-3 space-x-3 text-base md:text-lg hidden md:block">
                    <NavLink activeClassName="bg-white text-green-500 " className=" transition duration-400 active:bg-gray-200 active:no-underline  p-2 rounded-md hover:text-blue-2 hover:bg-white" to="a">Home</NavLink>
                    <NavLink activeClassName="bg-white text-green-500" className="transition duration-400 active:bg-gray-200  p-2 rounded-md hover:text-blue-2 hover:bg-white" to="b">Contact</NavLink>
                </div>
                {/* Menu_icon */}
                <NavLink className="font-bold text-lg md:hidden" to="id_User"> UserName</NavLink>
                <button className="cursor-pointer md:hidden p-2" onClick={() => setOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                {loginRender()}


            </header>
            {/* Menu on mobile */}
            {/* DIEU KIEN: state=false =>hidden */}
            <div className={!isOpen ? "flex flex-col text-white text-center p-5 bg-green-500 md:hidden" : "hidden"}>
                <NavLink activeClassName="bg-white text-green-500" className="transition duration-400 py-2 rounded-md hover:underline" to="a">Home</NavLink>
                <NavLink activeClassName="bg-white text-green-500" className="transition duration-400 py-2 rounded-md hover:underline" to="b">Contact</NavLink>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLogout: (history) => {
            dispatch(actLogout(history));
        }
    }
}
const completeHomeNavbar = connect(null, mapDispatchToProps)(HomeNavbar);
export default withRouter(completeHomeNavbar);