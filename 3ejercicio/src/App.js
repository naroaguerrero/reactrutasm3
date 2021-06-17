import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Peliculas from "./Peliculas";
import catalogo from "./catalogo";

function App() {
  const [peliculas, setPeliculas] = useState(catalogo);

  let rutas = peliculas.map((pelicula, index) => {
    return (
      <Route path={"/" + pelicula.titulo}>
        <p>{pelicula.sinopsis}</p>
        <Link to="/">Volver</Link>
      </Route>
    );
  });

  return (
    <BrowserRouter>
      <Route exact path="/">
        <div id="catalogo">
          <Peliculas peliculas={peliculas} />
        </div>
      </Route>
      {rutas}
    </BrowserRouter>
  );
}

export default App;
