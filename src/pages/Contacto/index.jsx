import React from "react";
import './styels.css'
import Logo_Acuario from '../../multimedia/Logo-AcuarioMichin-Guadalajara-2023.png'

import { Footer } from "../../componets/footer";


import { Link } from "react-router-dom";


const Informacion = () =>{
    return(
        <>
        <body className="backgraund-contact">

        <nav className="global-nav-contac">
            <img src={Logo_Acuario} alt="Logo" className="golbal-logo_acuario"/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/Boletos">Boletos</Link></li>
            </ul>
        </nav>
        <main className="main">
            <article className="box-img-contact">
                <section className="seccion-one">
                    <h2>Horarios</h2>
                    <p >Estimado tripulante te esperamos con los brazos abiertos</p>

                    <p className="especial-text">¡No faltes!</p>
                    <div>
                        <i></i>
                        <p className="especial-text">Abrimos todos los días</p>
                    </div>
                    <div>
                        <i></i>
                        <p>Lunes a Jueves10:00h a 20:00h</p>
                    </div>
                    <p>Viernes 10:00h a 22:00h</p>
                    <p>Sábado a Domingo 09:00h a 20:00h</p>

                    <p className="text-footer">¡Abrimos los 365 días del año!</p>
                </section>
                <section className="seccion-two">
                    <h2>Contacto</h2>
                    <div>
                        <i>d</i>
                        <p className="">33 1644 9910</p>
                    </div>
                    <div>
                        <i>d</i>
                        <p className="">contactogda.michin@gmail.com</p>
                    </div>
                    <div>
                        <i>d</i>
                        <p className="">C. Mariano Bárcena 990, Zona Centro, 44260 Guadalajara, Jal.</p>
                    </div>
                    <div>
                        <i>d</i>
                        <p className="">@Acuario Michin Guadalajara </p>
                    </div>
                </section>
                
            </article>
            <Footer/>
        </main>

        </body>
        </>

    )
}
export {Informacion}