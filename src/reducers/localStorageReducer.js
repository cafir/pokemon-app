export const localStorageReducer = (state, action) => {
    switch(action.type) {
        case "ADD_POKEMON":
            return [...state, {
                name: action.pokemon.name,
                pokemon: action.pokemon.pokemon,
                id: state.length + 1
            }]
        case "REMOVE_POKEMON":
            return state.filter(pokemon => pokemon.id !== action.id)
        default:
            return state;
    }
}