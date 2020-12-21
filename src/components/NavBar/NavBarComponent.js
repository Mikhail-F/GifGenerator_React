import React from 'react'
import {connect} from "react-redux";
import NavBar from "./NavBar";
import {clearImgs, getNewImg, setIsError, setNewInpText, setSelectedImg} from "../Redux/Imgs-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


const NavBarComponent = (props) =>{
    return (
        <NavBar {...props}/>
    )
}

let mapStateToProps = (state) =>{
    return{
        isFetching: state.imgs.isFetching,
        allImg: state.imgs.allImg,
        selectedImg: state.imgs.selectedImg,
        latynLetters: state.imgs.latynLetters,
        delayTags: state.imgs.delayTags,
        newInpText: state.imgs.newInpText,
        isErrorSearch: state.imgs.isErrorSearch,
    }
}

export default compose(
    connect(mapStateToProps, {getNewImg, clearImgs, setSelectedImg, setNewInpText, setIsError}),
    withRouter
)(NavBarComponent)