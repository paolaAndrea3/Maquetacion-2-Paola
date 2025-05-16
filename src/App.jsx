/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="container">
      <form className="search-box">
        <input type="email" placeholder="Correo" className="input-email" />
        <button type="submit" className="btn-buscar">Buscar</button>
        <a href="#" className="link-producto">Buscar producto</a>
      </form>
      <h1 className="titulo">Buscar Cliente</h1>
    </div>
  )
}

export default App
*/

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BuscarProducto from "./BuscarProducto";
import "./App.css";

function BuscarCliente() {
  return (
    <div className="container">
      <form className="search-box">
        <input type="email" placeholder="Correo" className="input-email" />
        <button type="submit" className="btn-buscar">Buscar</button>
        <Link to="/producto" className="link-producto">Buscar producto</Link>
      </form>
      <h1 className="titulo">Buscar Cliente</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BuscarCliente />} />
        <Route path="/producto" element={<BuscarProducto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

