import { useParams } from "react-router-dom";
import "./ImgProductos.css";

const imagenesProductos = [
  "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=250&q=80",
];

function ImgProductos() {
  const { id } = useParams();
  const imagen = imagenesProductos[id] || imagenesProductos[0];
  const imagenDerecha = imagenesProductos[(+id + 1) % imagenesProductos.length];

  return (
    <div className="imgproductos-container">
      <div className="imgproductos-img-row">
        <div className="imgproductos-img-box">
          <img src={imagen} alt="Producto" className="imgproductos1" />
        </div>
        <div className="imgproductos-titulo">Imagen</div>

        <div className="imgproductos-img-box2">
          <img src={imagenDerecha} alt="Producto derecho" className="imgproductos2" />
        </div>
      </div>
      <div className="imgproductos-titulo2">Imagen</div>
    </div>
  );
}

export default ImgProductos;