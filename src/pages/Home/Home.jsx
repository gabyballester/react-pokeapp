import { useState, useEffect } from "react";
import { getAllPokemon } from "../../services/api";
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
      const {data} = await getAllPokemon(initialUrl);
      console.log(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="home">
      {loading ? <h1>Loading...</h1> : <h1>Datos recibidos</h1>}
    </div>
  );
}
