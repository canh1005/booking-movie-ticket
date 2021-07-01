import React from 'react'
import { connect } from 'react-redux';

function LoginPage() {
    const [emailActive, setEmailActive] = React.useState(false);
    const [passActive, setPassActive] = React.useState(false)
    const [accountInfo, setAccountInfo] = React.useState({
        email: '',
        password: '',
    })
    const handleOnChange = e => {
        const { name, value } = e.target;
        setAccountInfo({
            ...accountInfo,
            [name]: value,
        })
    }
    const handleBlur = () => {
        if (accountInfo.email === '') {
            setEmailActive(false)
        } if (accountInfo.password === '') {
            setPassActive(false)
        }
    }
    return (

        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 via-green-300 to-green-500">
            <form className="flex flex-col justify-center items-center p-6 max-w-md bg-gradient-to-br from-white to-transparent bg-opacity-20 shadow-md rounded-md backdrop-blur-md grid grid-rows-3 gap-10">
                <h2 className="text-center text-2xl">Login</h2>
                <div className="relative">
                    <label htmlFor="email" className={emailActive ? "absolute -top-4 left-0" : "absolute top-0"}>Email</label>
                    <input className="border-b-2 border-gray-300 outline-none bg-transparent round-md h-10" type="text" id="email" name="email" value={accountInfo.email} onChange={handleOnChange} onFocus={() => setEmailActive(true)} onBlur={() => handleBlur()} />
                </div>
                <div className="relative">
                    <label htmlFor="password" className={passActive ? "absolute -top-4 left-0" : "absolute top-0"}>Password</label>
                    <input className="border-b-2 border-gray-300 outline-none bg-transparent round-md h-10" type="password" id="password" name="password" value={accountInfo.password} onChange={handleOnChange} onFocus={() => setPassActive(true)}
                        onBlur={() => handleBlur()} />
                </div>
                <button className="rounded-md bg-red-50 py-2 w-20 mx-auto" type="submit">Confirm</button>
            </form>
        </div>
    )
}
export default connect(null,null)(LoginPage)
