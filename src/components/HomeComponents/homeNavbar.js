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
                    <div className="text-2xl lg:hidden">
                        <p> ABCXYZ-cinema </p>
                    </div>
                </div>
                {/* Menu on destop */}
                <div className="space-x-3 text-base md:text-lg">
                    <NavLink activeClassName="underline" className=" transition duration-400 active:bg-gray-200  p-2 rounded-md hover:text-green-500 hover:bg-white" to="a">Home</NavLink>
                    <NavLink activeClassName="underline" className="transition duration-400 active:bg-gray-200  p-2 rounded-md hover:text-green-500 hover:bg-white" to="b">Contact</NavLink>
                </div>
                {/* Menu_icon */}
                <button className="cursor-pointer md:hidden" onClick={() => setOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </header>
            {/* Menu on mobile */}
            <div className={!isOpen ? "flex flex-col text-white text-center p-5 bg-green-500" : "hidden"}>
                <NavLink activeClassName="underline" className="transition duration-400 p-2 rounded-md hover:underline" to="a">Home</NavLink>
                <NavLink activeClassName="underline" className="transition duration-400 p-2 rounded-md hover:underline" to="b">Contact</NavLink>
            </div>
        </div>
    )
}
const completeHomeNavbar = HomeNavbar;
export default withRouter(completeHomeNavbar);