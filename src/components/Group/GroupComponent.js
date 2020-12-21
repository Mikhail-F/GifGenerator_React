import React from 'react'
import {connect} from "react-redux";
import Group from "./Group";
import {setSelectedImg} from "../Redux/Imgs-reducer";

function GroupComponent(props) {
    return (
        <Group {...props}/>
    )
}

const mapStateToProps = (state) =>{
    return{
        allImg: state.imgs.allImg,
        group: state.imgs.group
    }
}

export default connect(mapStateToProps, {setSelectedImg})(GroupComponent)