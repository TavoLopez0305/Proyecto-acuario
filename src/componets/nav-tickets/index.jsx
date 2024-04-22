import React from "react";
import './styels.css'

const Nav_tickes = ({precio, icon})=>{
    return(
        <>
            <li className="container-icon-buy" >
                <i>{icon} </i> <p>{precio} </p>
            </li>
        </>
    )
}
export{Nav_tickes}