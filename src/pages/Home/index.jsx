import React from "react";
import './styels.css'
import Logo_Acuario from '../../multimedia/Logo-AcuarioMichin-Guadalajara-2023.png'


import { Nav_home } from "../../componets/nav_home";
import { Comprar } from "../../componets/boton_comprar";
import { Footer } from "../../componets/footer";

const Home = () =>{
    return(
        <>
        <body className="img_box">
            <nav className="box_nav_home">
                <img src={Logo_Acuario} alt="Logo" className="logo_acuario"/>
                <Nav_home/>
            </nav>
            <main className="main-box">
                <aside className="tittle-box"> 
                <h2 className="part-one">Bienvenido al Nuevo  </h2>
                <h2 className="part-two"> Acuario Guadalajara </h2>
                </aside>
                <ul>
                    <Comprar/>
                    <li> <i></i> <a href="#"> VER VIDEO</a></li>
                </ul>
            </main>
            <footer>
                <Footer/>
            </footer>
        </body>
        </>

    )
}
export {Home}