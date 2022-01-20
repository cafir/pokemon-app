import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { localStorageReducer } from "../../../reducers/localStorageReducer";
import { useNavigate } from "react-router-dom";

const Post = ({ pokemon, setCurrentPokemon }) => {
    const [currentObj, setCurrentObj] = useState('');
    const navigate = useNavigate()

    const fetchData = async () => {
        axios.get(`${pokemon.url}`)
            .then((res) => {
                const { data } = res;
                setCurrentObj(data);
            }).catch((err) => {
                console.log(err.message)
            })
    }

    const [myPokemon, dispatch] = useReducer(localStorageReducer, [], () => {
        const localData = localStorage.getItem('myPokemon');
        return localData ? JSON.parse(localData) : [];
    });
    
    const myPokemonID = myPokemon.map(p => p.pokemon.id);

    const ownedPokemon = myPokemonID.filter(p => p === currentObj.id).length

    const handleClick = () => {
        setCurrentPokemon(currentObj)
        navigate('/')
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        !currentObj? <div>Loading</div> : (
        
        <div class="card"
        onClick={() => handleClick()}>
            <div class="card-body">
            <img src={currentObj.sprites.versions["generation-viii"].icons.front_default}/><div className="name">{pokemon.name}</div>
            </div>
            <div class="card-body">
                <div className="name">owned: {ownedPokemon}</div>
            </div>
        </div>
    ))
}

export default Post;