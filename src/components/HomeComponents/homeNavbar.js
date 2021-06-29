import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import T_logo from "../../assets/images/T_logo.png"

export default function HomeNavbar() {
    const [isOpen, setOpen] = useState("false")

    return (
        <div>
            <header className="flex justify-between bg-green-500 px-5 pt-3 items-center text-white">

                {/* Logo */}
                <div className="flex flex-1 space-x-3 items-center">
                    {/* icon */}
                    <div className="w-20 h-20" >
                        <img className="" src={T_logo}></img>
                    </div>
                    {/* Name-branch */}
                    <div className="text-2xl">
                        <p> ABCXYZ-cinema </p>
                    </div>
                </div>
                {/* Menu */}
                <div className=" space-x-3 text-xl xs:hidden md:block ">
                    {!isOpen ? (                    <div>
                        <a className=" transition duration-400  active:bg-gray-200  p-2 rounded-md hover:text-green-500 hover:bg-white" href="a">Home</a>
                        <a className="transition duration-400  active:bg-gray-200  p-2 rounded-md hover:text-green-500 hover:bg-white" href="b">Contact</a>
                    </div>) : <span></span>}


                </div>
                {/* Menu_icon */}
                <div className="md:hidden cursor-pointer ">
                    <button onClick={() => setOpen(!isOpen)} type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                </div>
            </header>
        </div>
    )
}
