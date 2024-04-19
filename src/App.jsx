import React from "react"
import { Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { Blog_ } from "./pages/Blog"
import { Boletos } from "./pages/Boletos"
import { Contact } from "./pages/Contacto"
import { Not_found } from "./pages/Not_found"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/Blog" element={<Blog_/>} />
        <Route path="/Boletos" element={<Boletos/>}/>
        <Route path="/Contacto" element={<Contact/>}/>
        <Route path="/*" element={<Not_found/>}/>
      </Routes>
    </>
  );
}

export default App;
