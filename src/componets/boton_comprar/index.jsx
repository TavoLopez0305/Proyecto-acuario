import React from "react";
import './styels.css'
import { Link } from "react-router-dom";

const Comprar = () =>{
    return(
        <>
        <li className="boton-container">
            <Link to = "/Boletos">COMPRAR AHORA</Link>
        </li>
        </>
    )
}
export {Comprar}