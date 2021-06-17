import "./App.css";
import Team from "./Team";
import { BrowserRouter, Route } from "react-router-dom";
import Players from "./Players";

function App() {
  let players = [
    {
      tittle: "Serena Williams",
      img: "https://fotos02.noticiasdegipuzkoa.eus/2020/09/10/690x278/serena-williams.jpg",
      height: 1.75,
      city: "EEUU",
    },
    {
      tittle: "Rafa Nadal",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Rafael_Nadal_%2812054444625%29_%28cropped%29.jpg",
      height: 1.85,
      city: "España",
    },
  ];

  const route = players.map((player) => {
    return (
      <Route exact path={"/" + player.titulo}>
        <Players
          id={player.index}
          img={player.img}
          height={player.height}
          city={player.city}
          titulo={player.titulo}
          control={true}
        />
      </Route>
    );
  });

  return (
    <>
      <BrowserRouter>
        <Route exact path="/">
          <Team players={players} />
        </Route>
        {route}
      </BrowserRouter>
    </>
  );
}

export default App;
