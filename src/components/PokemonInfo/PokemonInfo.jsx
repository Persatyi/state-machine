// import s from "./PokemonInfo.module.css"
import { Component } from 'react';
import pokemonAPI from 'services/pokemonAPI';

import PokemonDataView from './PokemonDataView';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      pokemonAPI
        .fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    // *** State machine ***

    if (status === 'idle') {
      return <p>Please type name of pokemon</p>;
    }

    if (status === 'pending') {
      return <Loader pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <ErrorMessage message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }

    // return (
    //   <div>
    //     {error && <p>{error.message}</p>}
    //     {loading && <p>Loading...</p>}
    //     {!pokemonName && <p>Please type name of pokemon</p>}
    //     {pokemon && (
    //       <div>
    //         <h1>{pokemon.name}</h1>
    //         <img
    //           src={pokemon.sprites.other['official-artwork'].front_default}
    //           alt=""
    //           width="300"
    //         />
    //       </div>
    //     )}
    //   </div>
    // );
  }
}
