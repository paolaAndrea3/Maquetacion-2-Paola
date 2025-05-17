
import { Link, useNavigate } from "react-router-dom";
import Tarjeta from "./Tarjeta";
import "./TarjetasCliente.css";

const imagenesClientes = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
];

function TarjetasCliente() {
  const navigate = useNavigate();

  return (
    <div className="tarjetas-container">
      <div className="tarjetas-grid">
        {imagenesClientes.map((img, i) => (
          <Tarjeta
            key={i}
            titulo={`Cliente ${i + 1}`}
            imagen={img}
            onVerClick={() => navigate(`/cliente/${i}`)}
          />
        ))}
      </div>
      <div className="tarjetas-home">
        <Link to="/" className="btn-buscarhome">Home</Link>
      </div>
    </div>
  );
}
export default TarjetasCliente;