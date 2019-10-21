import React from "react";
import PlayerItem from "./player_item";

export default function playerList({ players }) {
  if (!players) {
    return null;
  }
  return (
    <div className="row">
      {players.map(player => (
        <PlayerItem key={player.id} player={player} />
      ))}
    </div>
  );
}
