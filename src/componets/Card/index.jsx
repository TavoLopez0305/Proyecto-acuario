import React from "react";
import './styels.css'


const Card= ({img , month, day, head, paragrath  }) =>{
    return(
        <>
        <div className="Container">
            <img src={img} alt="Image" className="img-card"/>
            <div className="data-container">
            <p className="data"> {month}-{day} </p>
            </div>
            <h6>{head} </h6>
            <p className="text"> {paragrath} </p>
        </div>
        </>
    )
}
export{Card}