import axios from "axios";


export const fetchData = () => axios.get("https://pokeapi.co/api/v2/pokemon?limit=890");
export const searchData = (name) => axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);