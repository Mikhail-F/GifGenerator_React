import React from 'react'
import {connect} from "react-redux";
import Imgs from "./Imgs";
import {setSelectedImg} from "../Redux/Imgs-reducer";

function ImgsComponent(props) {
    return (
        <Imgs {...props}/>
    )
}

const mapStateToProps = (state) =>{
    return{
        allImg: state.imgs.allImg
    }
}

export default connect(mapStateToProps, {setSelectedImg})(ImgsComponent)