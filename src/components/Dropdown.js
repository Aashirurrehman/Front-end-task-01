import React, { useState } from 'react'
import { MenuItems } from './MenuItems';
import { Link as LinkR } from "react-router-dom";

const DropDown = () => {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    
  return (
    <>
        <ul onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu" }>
            {MenuItems.map((item, index)=>{
                return(
                    <li key={index}>
                        <LinkR className={item.cName} to={item.path} onClick={() => setClick(false)}>
                            {item.title}
                        </LinkR>
                    </li>
                )
            })}

        </ul>
       
    </>
  )
}

export default DropDown