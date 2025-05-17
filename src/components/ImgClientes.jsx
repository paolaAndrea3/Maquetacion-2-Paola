import { useParams } from "react-router-dom";
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
  const imagen = imagenesClientes[id] || imagenesClientes[0];
  const imagenDerecha = imagenesClientes[(+id + 1) % imagenesClientes.length]; // Siguiente imagen

  return (
    <div className="imgclientes-container">
      <div className="imgclientes-img-row">
        <div className="imgclientes1">
          <img src={imagen} alt="Imagen" className="imgclientes-img" />
        </div>
     <div className="imgclientes-titulo1">Imagen</div>

        <div className="imgclientes2">
          <img src={imagenDerecha} alt="Imagen derecha" className="imgclientes-img" />
        </div>
      </div>
      <div className="imgclientes-titulo">Imagen</div>
    </div>
  );
}

export default ImgClientes;