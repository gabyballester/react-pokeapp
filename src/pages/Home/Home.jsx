import { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "../../services/api";
// Components
import Card from "../../components/Card";
// styles
import "./Home.scss";

export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      // Trae listado de pokemon (nombre y url)
      const { data } = await getAllPokemon(initialUrl);
      await loadingPokemon(data.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  // Trae detalle de cada pokemon
  const loadingPokemon = async (data) => {
    const _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <div className="home">
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="grid-container">
          {pokemonData.map((pokemon, index) => {
            return <Card key={index} index={index} pokemon={pokemon.data} />;
          })}
        </div>
      )}
    </div>
  );
}
