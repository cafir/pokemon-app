import React from "react";

import MyPost from "./MyPost/MyPost.js";


const MyPosts = ({ myPokemon, dispatch }) => {
    
    console.log(myPokemon)
    return(
        <div className="card-scroll">
            <div class="card-grid">
                {myPokemon.map(pokemon=> (
                    <div key={pokemon.name}>
                        <MyPost pokemon={pokemon} dispatch={dispatch}/>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default MyPosts;