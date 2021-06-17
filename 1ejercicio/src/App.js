import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  let [nombres, setNombres] = useState(["Lala", "Lele", "Lili"]);

  return (
    <BrowserRouter>
      <Route exact path="/">
        <h1>Rutas en React</h1>
      </Route>
      <Route exact path="/nombres">
        {nombres.map((nombre, index) => {
          return <li>{nombre}</li>;
        })}
      </Route>
    </BrowserRouter>
  );
}

export default App;
