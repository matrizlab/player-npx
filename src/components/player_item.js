import React from "react";

export default function playerItem({ player }) {
  return (
    <div className="card col-md-3">
      {/* <img
        className="card-img-top"
        src={player.img}
        alt={player.title.rendered}
      /> */}
      <div className="card-body">
        <h5 className="card-title">{player.title.rendered}</h5>
        <button className="btn btn-primary">view detail</button>
      </div>
    </div>
  );
}
