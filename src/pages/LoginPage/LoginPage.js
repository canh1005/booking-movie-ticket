import React from 'react'
import { connect } from 'react-redux';
import { emptyValid } from '../../utils/validation/validation';
import { actionLoginAPI } from './../../redux/modules/LoginReducer/actions';
import sun from '../../assets/images/sun2.png'

function LoginPage(props) {
    const [emailActive, setEmailActive] = React.useState(false);
    const [passActive, setPassActive] = React.useState(false)
    const [accountInfo, setAccountInfo] = React.useState({
        taiKhoan: '',
        matKhau: '',
        err: { taiKhoan: "", matKhau: "" },
    })
    const handleOnChange = e => {
        const { name, value } = e.target;
        console.log(e.target);
        setAccountInfo({
            ...accountInfo,
            [name]: value,
        })
    }
    const handleBlur = () => {
        if (accountInfo.taiKhoan === '') {
            setEmailActive(false)
        } if (accountInfo.matKhau === '') {
            setPassActive(false)
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.fetchLogin(accountInfo, props.history)
    }

    const handleError = (e) => {
        const { name, value } = e.target;
        let mess = emptyValid(value);
        // console.log(mess);
        setAccountInfo({
            ...accountInfo
            , err: { ...accountInfo.err, [name]: mess }
        })
    }
    return (

        <div className="flex justify-center items-center relative min-h-screen bg-gradient-to-tl from-blue-2 via-light-blue to-white">
            <img className="absolute top-10 left-10 mix-blend-darken w-20 h-20" src={sun} alt="" />
            <form onSubmit={handleSubmit} className="flex items-center p-6 w-2/3 md:w-1/4 bg-white bg-opacity-10 shadow-md grid grid-rows-5 gap-4 rounded-lg border-white border border-opacity-20">
                <h2 className="text-center text-2xl text-white font-extrabold">Đăng nhập</h2>
                <div className="relative">
                    <label htmlFor="taiKhoan" className={emailActive ? "absolute text-sm text-white font-bold -top-5 left-0 transition-all duration-500" : "absolute text-white font-semibold top-0 transition-all duration-500"}>Tài khoản</label>
                    <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-10" type="text" id="taiKhoan" name="taiKhoan" onChange={handleOnChange} onFocus={() => setEmailActive(true)} onBlur={handleBlur} onKeyUp={handleError} />

                    {accountInfo.err.taiKhoan ? <div className="block text-red-500 font-bold">{accountInfo.err.taiKhoan}</div> : <div className="opacity-0">""</div>}
                </div>
                <div className="relative">
                    <label htmlFor="matKhau" className={passActive ? "absolute text-sm text-white font-bold -top-5 left-0 transition-all duration-500" : "absolute font-semibold text-white top-0 transition-all duration-500"}>Mật khẩu</label>
                    <input className="text-white border-b-2 border-gray-300 outline-none bg-transparent round-md w-full h-10" type="password" id="matKhau" name="matKhau" onChange={handleOnChange} onFocus={() => setPassActive(true)}
                        onBlur={handleBlur} onKeyUp={handleError} />
                    {/* <span className="absolute bottom-5 bg-white w-full h-8 rounded-sm block opacity-10"></span> */}
                    {accountInfo.err.matKhau ? <div className="block text-red-500 font-bold">{accountInfo.err.matKhau}</div> : <div className="opacity-0">""</div>}
                </div>

                <button className="rounded-md bg-white text-green-700 py-2 min-w-full mx-auto font-bold hover:bg-green-700 hover:text-white" type="submit">Đăng nhập</button>
                <button className="rounded-md bg-white text-blue-600 py-2 min-w-full mx-auto font-bold hover:bg-blue-600 hover:text-white" type="submit">Đăng ký</button>

            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLogin: (user, history) => {
            dispatch(actionLoginAPI(user, history));
        }
    }
}
export default connect(null, mapDispatchToProps)(LoginPage)


