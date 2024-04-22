import React from "react";
import './styles.css'
import { Link } from "react-router-dom";

const Nav_home =() =>{
    return(
        <>
            <ul className="nav_home">
                <li><Link to ="/Blog">Blog</Link></li>
                <li><Link to="/Boletos">Boletos</Link></li>
                <li><Link to="/Información">Contacto</Link></li>
            </ul>
        </>
     )
}

export {Nav_home}