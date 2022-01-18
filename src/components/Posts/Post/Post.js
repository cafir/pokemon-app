import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Post = ({ pokemon, setCurrentPokemon }) => {
    const [currentObj, setCurrentObj] = useState(null);
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
        </div>
    ))
}

export default Post;