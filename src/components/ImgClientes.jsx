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

const descripcionesClientes = [
  "Juan es un cliente frecuente que disfruta de la tecnología y los deportes. Siempre está buscando los últimos dispositivos electrónicos y le encanta asistir a partidos de fútbol los fines de semana. Además, Juan es conocido por su amabilidad y por recomendar nuestros servicios a sus amigos y familiares, lo que lo convierte en un cliente muy valioso para nuestra empresa. En su tiempo libre, Juan participa en comunidades tecnológicas en línea, donde comparte reseñas detalladas sobre los productos que adquiere. Su entusiasmo por aprender lo lleva a inscribirse en cursos y talleres relacionados con la innovación digital, y suele organizar reuniones para debatir sobre avances tecnológicos con otros entusiastas. Gracias a su actitud positiva y colaborativa, Juan ha ayudado a crear una red de clientes leales que confían en sus recomendaciones y en la calidad de nuestros productos y servicios.",
  "Pedro es apasionado por la lectura y la música clásica. Suele visitar nuestra tienda en busca de libros raros y ediciones especiales, y disfruta explorando nuevas obras literarias que amplían su perspectiva del mundo. Pedro también participa activamente en clubes de lectura locales, donde lidera discusiones profundas sobre autores y géneros diversos. Además, es un gran conocedor de música clásica, asiste regularmente a conciertos y apoya a jóvenes músicos de la comunidad. Su conocimiento y entusiasmo por la cultura enriquecen cada conversación que tenemos con él, y a menudo comparte reseñas y recomendaciones literarias en su blog personal, inspirando a otros a descubrir el placer de la lectura y la música.",
  "Luis es un viajero incansable y amante de la fotografía. Ha recorrido más de veinte países y documenta cada aventura con impresionantes fotografías que comparte en sus redes sociales y exposiciones locales. Luis suele adquirir cámaras y accesorios en nuestra tienda, confiando en la calidad y variedad de nuestros productos para capturar los mejores momentos de sus viajes. Además, organiza talleres de fotografía para principiantes y colabora con revistas de viajes, donde publica relatos y consejos para explorar destinos poco conocidos. Su espíritu aventurero y su pasión por la fotografía inspiran a muchos a salir de su zona de confort y descubrir la belleza del mundo.",
  "Carlos es chef profesional y fanático de la comida internacional. Le encanta experimentar con nuevas recetas y utiliza ingredientes de diferentes partes del mundo para crear platos únicos y deliciosos. Carlos frecuenta nuestra tienda para adquirir utensilios de cocina de alta calidad y siempre está dispuesto a dar recomendaciones culinarias a quienes lo rodean. Además, imparte clases de cocina en su restaurante y participa en eventos gastronómicos, donde comparte su conocimiento y pasión por la gastronomía. Su creatividad y dedicación lo han convertido en un referente en la escena culinaria local, y muchos clientes acuden a él en busca de consejos y nuevas experiencias gastronómicas.",
  "Miguel es ingeniero y le encanta el ciclismo de montaña. En su tiempo libre, participa en competencias y organiza excursiones para grupos de amigos, explorando rutas desafiantes y paisajes impresionantes. Miguel valora la calidad y durabilidad de los productos que compra, y suele elegir nuestras bicicletas y accesorios por su excelente rendimiento en terrenos difíciles. Además, colabora con organizaciones ambientales para promover el uso responsable de los recursos naturales y fomenta la práctica del ciclismo como una forma de vida saludable y sostenible. Su compromiso con el deporte y el medio ambiente lo convierte en un ejemplo a seguir para la comunidad.",
  "Andrés es diseñador gráfico y coleccionista de arte moderno. Su creatividad se refleja tanto en su trabajo como en su hogar, donde exhibe piezas únicas de artistas emergentes y consagrados. Andrés visita nuestra tienda en busca de materiales de arte y tecnología de diseño, siempre en busca de herramientas innovadoras que le permitan llevar sus proyectos al siguiente nivel. Además, organiza exposiciones y talleres para jóvenes artistas, brindándoles la oportunidad de mostrar su talento y aprender nuevas técnicas. Su pasión por el arte y el diseño lo ha llevado a colaborar con galerías y museos, contribuyendo al desarrollo cultural de la ciudad y dejando una huella positiva en la comunidad artística."
];

function ImgClientes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const imagen = imagenesClientes[id] || imagenesClientes[0];
  const descripcion = descripcionesClientes[id] || descripcionesClientes[0];

  return (
    <div className="imgclientes-detalle-container">
      <div className="imgclientes-detalle-content">
        <div className="imgclientes-img-box">
          <img src={imagen} alt="Imagen" className="imgclientes-img" />
          <div className="imgclientes-titulo1">Imagen</div>
        </div>
        <div className="imgclientes-descripcion">
          <p>{descripcion}</p>
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