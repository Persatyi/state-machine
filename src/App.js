import './App.css';
import { Component } from 'react';

import PokemonForm from 'components/PokemonForm';
import PokemonInfo from 'components/PokemonInfo';

export default class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
      </div>
    );
  }
}
