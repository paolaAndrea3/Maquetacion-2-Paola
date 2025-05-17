import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function BuscarProducto() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/tarjetas-producto");
  };

  return (
    <div className="container">
      <form className="search-box" onSubmit={handleSubmit}>
        <input type="text" placeholder="ID" className="input-email" />
        <button type="submit" className="btn-buscar">Buscar</button>
        <Link to="/" className="link-producto">Buscar cliente</Link>
      </form>
      <h1 className="titulo">Buscar Producto</h1>
    </div>
  );
}

export default BuscarProducto;