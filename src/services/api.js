import axios from 'axios';

export async function getDataApi(url) {
  return await axios.get(url)
}