import React from "react";
import './styels.css'
import Logo_Acuario from '../../multimedia/Logo-AcuarioMichin-Guadalajara-2023.png'

import { Footer } from "../../componets/footer";


import { Link } from "react-router-dom";

const Boletos = () =>{
    return(
        <>
            <body className="Body-tickets">
                <nav className="global-nav-contac">
                    <img src={Logo_Acuario} alt="Logo" className="golbal-logo_acuario"/>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/Boletos">Boletos</Link></li>
                    </ul>
                </nav> 
                <main>
                    <article className="img-backgraund-tickets">
                        <div className="box-blue">
                            <h1>Entradas</h1>
                        </div>
                    </article>
                    <article className="backgraund-color-white">
                        <nav>
                            <i>corazon </i>
                            <i> carrito</i>
                        </nav>
                            <section>
                                <ul>
                                    <div>
                                        <i></i>
                                        <p>Tags</p>
                                    </div>
                                    <li><i></i> <p>$299.00</p></li>
                                    <li><i></i> <p>$359.00</p></li>
                                    <li><i></i> <p>Pase Anual</p></li>
                                </ul>
                            </section>
                            <section className="box-grid">
                                mapeo
                            </section>
                    </article>
                </main>
                <footer className="box-footer-blue">
                    <Footer/>
                </footer>
            </body>
  
        </>

    )
}
export {Boletos}