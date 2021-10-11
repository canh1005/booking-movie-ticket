import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Calendar from '../../../components/HomeComponents/MovieDetail/Calendar'
import Showtime from '../../../components/HomeComponents/MovieDetail/Showtime'
import T_logo from './../../../assets/images/T_logo.png'
import { actMVDetailAPI } from './../../../redux/modules/MovieDetailReducer/actions'
import CinemaLogo from '../../../components/HomeComponents/MovieDetail/CinemaLogo'
function MovieDetail(props) {
        const id = '8100'
        const { MVinfo } = props
        useEffect(() => {
            props.fetchMV(id)
        }, [])

        if (MVinfo) {
            return (
                <div className="p-10 bg-purple-1">
                    {/* Movie Info */}
                    <div className="relative w-full md:px-36">
                        <div className="relative w-full h-screen">
                            <img className="absolute top-0 left-0 w-full h-full object-fill md:object-cover" src={MVinfo.hinhAnh} alt="" />
                            <div className="absolute bottom-5 left-10 bg-black bg-opacity-70 rounded-md">
                                <p className="font-bold text-xl text-light-blue p-2">Đánh giá: {MVinfo.danhGia}/10</p>
                            </div>
                            <div className="absolute bg-black bg-opacity-70 text-white bottom-5 right-2 p-3 w-72 rounded-xl">
                                <h2 className="text-center font-bold text-xl">Nội dung</h2>
                                <p>{MVinfo.moTa}</p>
                            </div>
                        </div>
                    </div>
                    {/* Showtime Info */}
                    <div className="bg-black bg-opacity-70 border-white border-2 p-2 grid grid-cols-5 grid-rows-2 text-white mt-5 rounded-md">
                        <div className="row-span-2">Cụm rạp
                        <br/>
                        <CinemaLogo/>
                        </div>
                        <div className="col-span-4">
                            <Calendar />
                        </div>
                        <div className="col-span-4">
                            <Showtime />
                        </div>
                    </div>
                </div>
            )
        } else {
            return ""
        }
    }
const mapStateToProps = state => {
    return {
        MVinfo: state.MVDetailReducer.data,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchMV: id => {
            dispatch(actMVDetailAPI(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)