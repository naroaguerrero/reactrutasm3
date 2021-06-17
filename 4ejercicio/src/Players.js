import {Link} from "react-router-dom"

function Players(props) {
  if (props.control) {
    return (
      <div key={props.id}>
        <h1>{props.titulo}</h1>
        <img src={props.img} alt={props.ttitulo} />
        <p>{props.height}</p>
        <p>{props.city}</p>
      </div>
    );
  } else {
    return (
      <div key={props.id}>
        <Link to={"/" + props.titulo}>
          <h1>{props.titulo}</h1>
        </Link>
        <img src={props.img} alt={props.titulo} />
      </div>
    );
  }
}
export default Players;
