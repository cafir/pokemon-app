import React from "react"

import { useNavigate } from "react-router-dom";

const Picture = ({currentPokemon}) => {
    const navigate = useNavigate();

    const detail = () => {
        navigate("/detail", {state: {obj: currentPokemon}})
    }
    

    return (
        !currentPokemon? 
        <div className="card" style={{display: "flex", textAlign: "center", justifyContent:"center", marginTop: "20px"}}>
            <h1>EMPTY POKEMON IMAGE</h1>
        </div> : (
        
        <div class="card card-shadow">
            <div class="card-header card-image">
                <img src={currentPokemon.sprites.front_default}/>
            </div>
            <div class="card-body">
                {currentPokemon.forms[0].name}
            </div>
            <div class="card-footer">
                <button class="btn" onClick={() => detail()}>Detail</button>
            </div> 
        </div>
    ))
}

export default Picture;