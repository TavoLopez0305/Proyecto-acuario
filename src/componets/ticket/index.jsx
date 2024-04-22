import React from "react";
import './styels.css'

const Ticket =({img, name}) =>{
    return (
        <>
            <div className="Container_img_ticket">
                <img src={img} alt="Img_ticket" className="img_ticket" />
                <p>{name} </p>
            </div>
        </>
    )
}
export {Ticket}