import { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "../../services/api";
// styles
import "./Home.scss";

export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      // Trae listado de pokemon (nombre y url)
      const { data } = await getAllPokemon(initialUrl);
      console.log(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      await loadingPokemon(data.results)
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

    console.log(pokemonData);
  return (
    <div className="home">
      {loading ? <h1>Loading...</h1> : <h1>Datos recibidos</h1>}
    </div>
  );
}
