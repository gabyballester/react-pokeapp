import axios from 'axios';

export async function getAllPokemon(url) {
  return await axios.get(url)
}