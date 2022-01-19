import React from "react";

import { useNavigate } from "react-router-dom";

const MyPost = ({ pokemon, dispatch }) => {
    
    const navigate = useNavigate()
    const detail = () => {
        navigate(`/detail/${pokemon.pokemon.id}` , {state: {obj: pokemon.pokemon}})
    }

    console.log(pokemon)
    return (
        
        
        <div class="card">
            <div class="card-body">
            <img src={pokemon.pokemon.sprites.versions["generation-viii"].icons.front_default}/><div className="name">{pokemon.name}</div>
            </div>
            <div class="card-footer">
                <button class="btn" onClick={() => detail()}>Detail</button>
                <button class="btn btn-outline" onClick={() => dispatch({ type:"REMOVE_POKEMON", name: pokemon.name})}>Release</button>
            </div> 
        </div>
    )
}

export default MyPost;