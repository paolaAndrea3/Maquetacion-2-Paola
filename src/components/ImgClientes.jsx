import { useNavigate, useParams } from "react-router-dom";
import "./ImgClientes.css";

const imagenesClientes = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
];

function ImgClientes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const imagen = imagenesClientes[id] || imagenesClientes[0];

  return (
    <div className="imgclientes-detalle-container">
      <div className="imgclientes-detalle-content">
        <div className="imgclientes-img-box">
          <img src={imagen} alt="Imagen" className="imgclientes-img" />
          <div className="imgclientes-titulo1">Imagen</div>
        </div>
        <div className="imgclientes-descripcion">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="imgclientes-btn-box">
        <button className="btn-buscarver" onClick={() => navigate("/tarjetas")}>
          Listado Clientes
        </button>
      </div>
    </div>
  );
}

export default ImgClientes;