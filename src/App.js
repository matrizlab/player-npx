import React, { Component } from "react";
import "./App.css";
import { APIURL_PLAYERS } from "./environment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      totalCount: 0
    };
  }

  fetchPlayers = (search = "") => {
    return fetch(APIURL_PLAYERS).then(res => res.json());
  };
  searchPlayers = (term = "") => {
    if (term.length < 3) {
      return;
    }
    this.fetchPlayers(term).then(res => {
      console.log(this);
      this.setState({
        players: res,
        totalCount: res.totalResults
      });
    });
  };

  componentDidMount() {
    this.searchPlayers("buffon");
  }
  render() {
    return (
      <div className="App">
        <h1>Players </h1>
        <ul>
          {this.state.players.map(player => (
            <li key={player.id}>{player.title.rendered}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
