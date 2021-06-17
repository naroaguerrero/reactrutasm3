import Players from "./Players";
function Team(props) {
  const showPlayers = props.players.map((player, index) => {
    return <Players id={index} img={player.img} title={player.titulo} />;
  });
  return <>{showPlayers}</>;
}

export default Team;
