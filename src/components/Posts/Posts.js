import React from "react";

import { useSelector } from "react-redux";

import Post from "./Post/Post.js";


const Posts = ({ setCurrentPokemon }) => {
    const allpokemon = useSelector((state) => state.pokes)
    
    if (allpokemon[0] === undefined) {
        return (
        <div className="card" style={{display: "flex", textAlign: "center", justifyContent:"center", marginTop: "20px"}}>
            <h1>NO DATA ABOUT THIS POKEMON</h1>
        </div>
        )
    }
    
    return(
        <div className="card-scroll">
            <div class="card-grid">
                {allpokemon.map(pokemon=> (
                    <div key={pokemon.name}>
                        <Post pokemon={pokemon} setCurrentPokemon={setCurrentPokemon}/>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default Posts;