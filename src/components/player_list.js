import React from "react";

export default function playerList(props) {
  return (
    <ul>
      {props.players.map(player => (
        <li key={player.id}>{player.title.rendered}</li>
      ))}
    </ul>
  );
}
