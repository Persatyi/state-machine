export default function PokemonDataView({ pokemon: { sprites, name } }) {
  return (
    <div>
      <h1>{name}</h1>
      <img
        src={sprites.other['official-artwork'].front_default}
        alt=""
        width="300"
      />
    </div>
  );
}
