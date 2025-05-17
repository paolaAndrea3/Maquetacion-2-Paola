
import { Link, useNavigate } from "react-router-dom";
import Tarjeta from "./Tarjeta";
import "./TarjetasCliente.css"; // O tu CSS de tarjetas

const imagenesProductos = [
  "https://images.unsplash.com/photo-1513708927688-890fe41c3b6b?auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=250&q=80",
];

function TarjetasProducto() {
  const navigate = useNavigate();

  return (
    <div className="tarjetas-container">
      <div className="tarjetas-grid">
        {imagenesProductos.map((img, i) => (
          <Tarjeta
            key={i}
            titulo={`Producto ${i + 1}`}
            imagen={img}
            onVerClick={() => navigate(`/producto/${i}`)}
          />
        ))}
      </div>
      <div className="tarjetas-home">
        <Link to="/" className="btn-buscarhome">Home</Link>
      </div>
    </div>
  );
}

export default TarjetasProducto;