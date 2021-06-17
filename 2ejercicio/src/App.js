import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react";

function Gatos() {
  const [gatos, setGatos] = useState([
    "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg",
    "https://www.fundacion-affinity.org/sites/default/files/el-gato-necesita-tener-acceso-al-exterior.jpg",
    "https://www.hola.com/imagenes/estar-bien/20210217184541/gatos-gestos-lenguaje-significado/0-922-380/gatos-gestos-m.jpg",
  ]);
  return gatos.map((gato, index) => {
    return <img src={gato} alt={index} />;
  });
}

function Perros() {
  const [perros, setPerros] = useState([
    "https://nfnatcane.es/blog/wp-content/uploads/2019/10/bodeguero-andaluz-paseando-por-la-calle.jpg",
    "https://www.elmira.es/media/elmira/images/2020/08/02/perro-ratonero-bodeguero-peticion-patrimonio-jerez-.jpg",
    "https://www.rodentia.es/blog/wp-content/uploads/2018/02/perro-ratonero-bodeguero-andaluz.jpg",
  ]);
  return perros.map((perro, index) => {
    return <img src={perro} alt={index} />;
  });
}

function App() {
  return (
    <BrowserRouter>
      <Link to="/gatos">Gatos</Link>
      <Link to="/perros">Perros</Link>
      <Route path="/gatos">
        <Gatos />
      </Route>
      <Route path="/perros">
        <Perros />
      </Route>
    </BrowserRouter>
  );
}

export default App;
