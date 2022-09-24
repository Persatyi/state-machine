import PokemonDataView from 'components/PokemonInfo/PokemonDataView';
import pendingImage from 'images/pokemon';

export default function Loader({ pokemonName }) {
  //  *** React Skeleton ***
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };
  return (
    <div>
      <p>Loading...</p>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
