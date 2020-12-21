import React from 'react'
import c from './Group.module.css'

const Group = (props) =>{
    return(
        <div className={c.all}>
            {props.group.map(el =>{
                return <div className={c.groupBlock}><h3>{el}</h3><div className={c.block}>
                    {props.allImg.map(item =>{
                        if(el === item.type){
                            return <div key={item.img} className={c.gif} onClick={() => props.setSelectedImg(item.type)}><img src={item.img} alt=""/></div>
                        }
                    })}
                </div></div>
            })}
        </div>
    )
}

export default Group