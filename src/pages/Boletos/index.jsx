import React from "react";
import './styels.css'
import Logo_Acuario from '../../multimedia/Logo-AcuarioMichin-Guadalajara-2023.png'
import '../Boletos/Database.js';

import { Ticket } from "../../componets/ticket/";
import { Nav_tickes } from "../../componets/nav-tickets";
import { Footer } from "../../componets/footer";

import { DataBase } from "../Boletos/Database.js";
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
                        <nav className="nav-items">
                            <i>corazon </i>
                            <i> carrito</i>
                        </nav>
                        <section className="box-flex">
                                <section>
                                <aside>
                                    <div>
                                        <i></i>
                                        <p>Tags</p>
                                    </div>
                                    <ul>
                                        {DataBase.map(element =>(
                                         <Nav_tickes icon={element.icon} precio={element.precio} />
                                        ))}
                                    </ul>
                                </aside>
                                </section>
                                <section className="box-grid">
                                        {DataBase.map(element =>(
                                            <Ticket img={element.img} name={element.name} />
                                        ))}
                                </section>
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