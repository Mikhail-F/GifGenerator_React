import React, {useState} from 'react'
import c from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import NavBarErrorMessage from "./NavBarErrorMessage";

const NavBar = (props) =>{

    let url = props.location.pathname.slice(1)

    const addNewImg = () =>{
        if(props.newInpText === 'delay'){
            changeInpErrText(false)
            props.setIsError(false)
            let interval = setInterval(() =>{
                let anyNumber = Math.floor(Math.random() * props.delayTags.length)
                props.getNewImg(props.delayTags[anyNumber])
            }, 1000)
            changeClearInter(interval)
        }
        else if(props.newInpText.includes(',')){
            changeInpErrText(false)
            props.setIsError(false)
            let text = props.newInpText.split(',')
            for(let i=0; i< text.length; i++){
                props.getNewImg(text[i])
            }
        }
        else{
            changeInpErrText(false)
            props.setIsError(false)
            props.getNewImg(props.newInpText)
        }
    }

    let [inpErrText, changeInpErrText] = useState(false)
    let [clearInter, changeClearInter] = useState(0)

    let changeText = (event) =>{
        let text = event.target.value

        for(let i in [...text]){
            if(!props.latynLetters.includes([...text][i])){
                changeInpErrText(true)
                props.setIsError(false)
                return
            }
        }
        changeInpErrText(false)
        props.setIsError(false)
        clearInterval(clearInter)
        props.setNewInpText(text)
    }

    let clearImgs = () =>{
        props.clearImgs()
        props.setNewInpText('')
        changeInpErrText(false)
        props.setIsError(false)
    }

    if(props.selectedImg){
        props.setNewInpText(props.selectedImg)
        props.setSelectedImg(false)
    }

    return(
        <div className={c.buttons}>
            <div className={c.buttonsInner}>
                <input type="text" className={c.inp} placeholder={'Введите тэг'} onChange={changeText} value={props.newInpText} required/>
                <NavBarErrorMessage {...props} inpErrText={inpErrText}/>
                {props.isFetching ? <button className={c.btn} disabled onClick={addNewImg}>Загрузка...</button> : <button className={c.btn} onClick={addNewImg}>Загрузить</button>}
                <button className={c.btn} onClick={clearImgs}>Очистить</button>
                {url !== 'group' ? <NavLink to={'/group'}><button className={c.btn}>Группировать</button></NavLink>
                    :
                    <NavLink to={'/all'}><button className={c.btn}>Разгруппировать</button></NavLink>}
            </div>
        </div>
    )
}

export default NavBar