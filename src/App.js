import React, { Component } from "react";
import PokeCard from "./components/PokeCard";
import Wrapper from "./components/Wrapper";
import Cardbox from "./components/Cardbox";
import Title from "./components/Title";
import pokemon from "./pokemon.json";
import "./App.css";

class App extends Component {

  state = {
    pokemon
  };

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
            />
          ))}
        </Cardbox>
      </Wrapper>
    );
  }
}

export default App;
