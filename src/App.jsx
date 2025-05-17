
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuscarCliente from "./Pages/BuscarCliente";
import BuscarProducto from "./Pages/BuscarProducto";
import TarjetasCliente from "./components/TarjetasCliente";
import TarjetasProducto from "./components/TarjetasProducto";
import ImgClientes from "./components/ImgClientes";
import ImgProductos from "./components/ImgProductos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BuscarCliente />} />
        <Route path="/producto" element={<BuscarProducto />} />
         <Route path="/tarjetas" element={<TarjetasCliente />} />
        <Route path="/tarjetas-producto" element={<TarjetasProducto />} />
        <Route path="/cliente/:id" element={<ImgClientes />} /> 
        <Route path="/producto/:id" element={<ImgProductos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

