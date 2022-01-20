import * as api from "../api"


export const getAllPokemon = () => async(dispatch) => {
    try {
        const data = await api.fetchData()
        
        dispatch({ type: "FETCH_DATA", payload: data.data.results }); 
        
    } catch (error) {
        console.log(error)
    }
}

export const getSearchPokemon = (name) => async (dispatch) => {
    try {
        const data = await api.fetchData()
        
        const searchData = [data.data.results.find((pokemon) => pokemon.name === name.toLowerCase())];
        
        dispatch({ type: "SEARCH_DATA", payload: searchData });
        
    } catch (error) {
        console.log(error)
    }
}