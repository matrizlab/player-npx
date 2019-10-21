import React, { Component } from "react";
import "./App.css";
import PlayerList from "./components/player_list";
import NavBar from "./components/navbar";
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
        players: res
      });
    });
  };

  componentDidMount() {
    this.searchPlayers("Lorenzo");
  }
  render() {
    return (
      <React.Fragment>
        <NavBar onSearchTerm={this.searchPlayers} />
        <div className="container">
          <h1>Players </h1>
          <PlayerList players={this.state.players} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
