
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
//import BuscarProducto from "./Pages/BuscarProducto";

function BuscarCliente() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/tarjetas");
  };

  return (
    <div className="container">
      <form className="search-box" onSubmit={handleSubmit}>
        <input type="email" placeholder="Correo" className="input-email" />
        <button  type="submit" className="btn-buscar">Buscar</button>
        <Link to="/producto" className="link-producto">Buscar producto</Link>
      </form>
      <h1 className="titulo">Buscar Cliente</h1>
    </div>
  );
}

export default BuscarCliente;