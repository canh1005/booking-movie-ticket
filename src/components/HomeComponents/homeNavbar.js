import React, { useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import T_logo from "../../assets/images/T_logo.png"

function HomeNavbar() {
    const [isOpen, setOpen] = useState("false")
    return (
        <div>
            <header className="flex justify-between bg-green-500 px-5 pt-3 items-center text-white">
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
                    <NavLink activeClassName="bg-white text-green-500 " className=" transition duration-400 active:bg-gray-200 active:no-underline  p-2 rounded-md hover:text-green-500 hover:bg-white" to="a">Home</NavLink>
                    <NavLink activeClassName="bg-white text-green-500" className="transition duration-400 active:bg-gray-200  p-2 rounded-md hover:text-green-500 hover:bg-white" to="b">Contact</NavLink>
                </div>
                {/* Menu_icon */}
                <button className="cursor-pointer md:hidden p-2" onClick={() => setOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className=" font-bold border-l-2 hidden ">
                    <NavLink className="px-2 text-base hover:underline " to="login">Đăng nhập</NavLink>
                    <NavLink className="px-2  text-base hover:underline " to="signUp">Đăng ký</NavLink>
                </div>
                <div className="flex pl-4 hidden md:block border-l-2">
                    <NavLink className="flex pr-1" to="id_User">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="font-bold text-lg" > UserName</span>
                    </NavLink>
                </div>
            </header>
            {/* Menu on mobile */}
            {/* DIEU KIEN: state=false =>hidden */}
            <div className={!isOpen ? "flex flex-col text-white text-center p-5 bg-green-500 md:hidden" : "hidden"}>
                <NavLink className="font-bold text-lg" to="id_User"> UserName</NavLink>
                <NavLink activeClassName="bg-white text-green-500" className="transition duration-400 py-2 rounded-md hover:underline" to="a">Home</NavLink>
                <NavLink activeClassName="bg-white text-green-500" className="transition duration-400 py-2 rounded-md hover:underline" to="b">Contact</NavLink>
            </div>
        </div>
    )
}
const completeHomeNavbar = HomeNavbar;
export default withRouter(completeHomeNavbar);