import React from 'react'
import { connect } from 'react-redux';
import { actCinemaInfoAPI } from "./../../../redux/modules/CinemaReducer/action"
function CinemaLogo(props) {
    const { CinemaInfo } = props;

    if (CinemaInfo) {
        return (
            <div className="w-100">
                {/* <img src={cinema_logo.logo}></img> */}
                {CinemaInfo.tenHeThongRap}
            </div>
        )
    }
    else {
        return ""
    }

}

const mapStateToProps = (state) => {
    return {
        CinemaInfo: state.CinemaInfoReducer.data,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getCinemaInfo: () => {
            dispatch(actCinemaInfoAPI())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CinemaLogo)
