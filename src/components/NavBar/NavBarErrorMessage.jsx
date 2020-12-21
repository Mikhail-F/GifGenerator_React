import React from 'react'
import c from './NavBar.module.css'

const NavBarErrorMessage = (props) =>{
    return (
            props.inpErrText || props.isErrorSearch ? <div className={c.errDiv}>
                <h5 className={c.errMessage}>{props.isErrorSearch ? 'По вашему запросу ничего не найдено' : 'Доступенн ввод только: a-z, A-Z, ","'}</h5>
            </div> : null
    )
}

export default NavBarErrorMessage