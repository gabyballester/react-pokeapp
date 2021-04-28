import "./Card.scss";

export default function Card({ pokemon, index }) {
  const typeColor = pokemon.types[0].type.name;

  return (
    <div className={`card ${typeColor}`}>
      <div className="card-img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="card-right">
        <div className="card-name">{pokemon.name}</div>
        <div className="card-types">
          {pokemon.types.map((type, subIndex) => {
            return (
              <div key={index + subIndex} className="card-type">
                {type.type.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
