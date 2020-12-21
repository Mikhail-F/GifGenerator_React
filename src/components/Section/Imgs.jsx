import React from 'react'
import c from './Imgs.module.css'

const Imgs = (props) =>{

    return(
        <div className={c.all}>
            {props.allImg.map(el =>{
                return <div key={el.img} className={c.gif} onClick={() => props.setSelectedImg(el.type)}><img src={el.img} alt=""/></div>
            })}
        </div>
    )
}

export default Imgs