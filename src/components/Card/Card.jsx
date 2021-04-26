import "./Card.scss";

export default function Card({ pokemon }) {
  // const items = pokemon.data;
  console.log(pokemon);

  return (
    <div className="card">
      
      <div className="card-img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      
      <div className="card-right">
      <div className="card-name">{pokemon.name}</div>
      <div className="card-types">
        {pokemon.types.map((type) => {
          return <div className="card-type">{type.type.name}</div>;
        })}
      </div>
      </div>
    </div>
  );
}
