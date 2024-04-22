import React from "react";
import './styels.css'
import { Link } from "react-router-dom";
import Logo_Acuario from '../../multimedia/Logo-AcuarioMichin-Guadalajara-2023.png'
import '../Blog/DataBase.js';

import { Card } from "../../componets/Card/index.jsx";
import { Footer } from "../../componets/footer";
import { DataBase } from "../Blog/DataBase.js";


const Blog_ = () =>{

    return(
        <>
        <nav className="global-nav">
            <img src={Logo_Acuario} alt="Logo" className="golbal-logo_acuario"/>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/Boletos">Boletos</Link></li>
                <li><Link to="/Información">Contacto</Link></li>
            </ul>
        </nav>
        <article className="scroll">
            <section className="img-backgraund">
                <h1>¡Diviertete con Nosotros!</h1>
                <p>
                Ven a aprender, divertirte, en uno de
                los centros de conservación más
                modernos e innovadores.
                </p>
            </section>
            <section className="Section-two">
                <h1>Reviews</h1>
                <div className="Card-list">
                    {DataBase.map(element =>(
                        <Card img={element.img} month={element.month} day={element.day} head={element.head} paragrath={element.paragrath}/>
                    ))
                    } 
                </div>
            </section>
        </article>
        <footer>
            <Footer/>
        </footer>
        </>

    );
}
export {Blog_}