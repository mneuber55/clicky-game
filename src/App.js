import React, { Component } from "react";
import PokeCard from "./components/PokeCard";
import Wrapper from "./components/Wrapper";
import Cardbox from "./components/Cardbox";
import Title from "./components/Title";
import GameMessage from "./components/gamemessage";
import pokemon from "./pokemon.json";
import "./App.css";

class App extends Component {

  state = {
    pokemon: pokemon,
    selectedIds: [],
    gameMsg: null
  };

  gameOver = () => {
    console.log("Game Over");
    this.setState({gameMsg: "GAME OVER... CLICK TO RESET"});
  }

  shufflePokemon = () => {
    console.log("shuffling");
    let array = pokemon;
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    //Set new state with shuffled array
    this.setState({ pokemon: array });
  }

  handleClick = event => {

    //Grab ID of selected pokemon
    let itemid = event.target.id;
    this.setState({ selectedIds: [...this.state.selectedIds, itemid] });
    console.log(this.state.selectedIds);

    //End Game if value has already been selected
    for (let i = 0; i < this.state.selectedIds.length; i++) {
      if (itemid === this.state.selectedIds[i]) {
        this.gameOver();
      }
    }
    this.shufflePokemon();
  }

  resetGame = () => {
    this.setState({
      pokemon: pokemon,
      selectedIds: [],
      gameMsg: null})
  }

  render() {
    return (
      <Wrapper>
        <Title>Click a character, but don't click the same one twice!</Title>
        <Cardbox>
          {this.state.pokemon.map(pokemon => (
            <PokeCard
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              onClick={this.handleClick}
            />
          ))}
        </Cardbox>
        {this.state.gameMsg ? (
            <GameMessage msg={this.state.gameMsg} resetClicked={this.resetGame} />
          ) : (
              false
            )}
      </Wrapper>
    );
  }
}

export default App;