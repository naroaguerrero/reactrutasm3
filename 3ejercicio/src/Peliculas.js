import {Link} from "react-router-dom"

function Pelicula(props) {
  return (
    <div key={props.index} className="card">
      <img src={props.cartel} alt={props.titulo} />
      <Link to={"/" + props.titulo}>
      <h1>{props.titulo}</h1>
      </Link>
    </div>
  );
}

function Peliculas(props) {
  return props.peliculas.map((pelicula, index) => {
    return (
      <Pelicula
        key={index}
        cartel={pelicula.cartel}
        titulo={pelicula.titulo}
        index={index}
      />
    );
  });
}
export default Peliculas;
