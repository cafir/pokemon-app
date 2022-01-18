export const localStorageReducer = (state, action) => {
    switch(action.type) {
        case "ADD_POKEMON":
            return [...state, {
                name: action.pokemon.name,
                pokemon: action.pokemon.pokemon
            }]
        case "REMOVE_POKEMON":
            return state.filter(pokemon => pokemon.name !== action.name)
        default:
            return state;
    }
}