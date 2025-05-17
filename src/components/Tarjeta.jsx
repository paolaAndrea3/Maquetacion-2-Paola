
function Tarjeta({ titulo, imagen, onVerClick }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "50%" }} />
      <h3>{titulo}</h3>
      <button className="btn-buscarver" onClick={onVerClick}>Ver</button>
    </div>
  );
}
export default Tarjeta;