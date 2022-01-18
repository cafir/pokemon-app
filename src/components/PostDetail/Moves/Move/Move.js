import React, { useState, useEffect } from "react";
import axios from "axios";

const Move = ({ move }) => {
    const [currentMove, setCurrentMove] = useState(null);

    const fetchData = async () => {
        axios.get(`${move.move.url}`)
            .then((res) => {
                const { data } = res;
                setCurrentMove(data);
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    
    const typeColor = (type) => {
        if (type === "fire") {
            return {color: "white", backgroundColor: "#F08030", borderColor:"#9C531F"}
        } else if (type === "water") {
            return {color: "white", backgroundColor: "#6890F0", borderColor:"#445E9C"}
        } else if (type === "grass") {
            return {color: "white", backgroundColor: "#78C850", borderColor: "#4E8234"}
        } else if (type === "electric") {
            return {color: "white", backgroundColor: "#F8D030", borderColor: "#A1871F"}
        } else if (type === "psychic") {
            return {color: "white", backgroundColor: "#F85888", borderColor: "#A13959"}
        } else if (type === "ice") {
            return {color: "white", backgroundColor: "#98D8D8", borderColor: "#638D8D"}
        } else if (type === "dragon") {
            return {color: "white", backgroundColor: "#7038F8", borderColor: "#4924A1"}
        } else if (type === "dark") {
            return {color: "white", backgroundColor: "#705848", borderColor: "#49392F"}
        } else if (type === "fairy") {
            return {color: "white", backgroundColor: "#EE99AC", borderColor: "#9B6470"}
        } else if (type === "normal") {
            return {color: "white", backgroundColor: "#A8A878", borderColor: "#6D6D4E"}
        } else if (type === "fighting") {
            return {color: "white", backgroundColor: "#C03028", borderColor: "#7D1F1A"}
        } else if (type === "flying") {
            return {color: "white", backgroundColor: "#A890F0", borderColor: "#6D5E9C"}
        } else if (type === "poison") {
            return {color: "white", backgroundColor: "#A040A0", borderColor: "#C183C1"}
        } else if (type === "ground") {
            return {color: "white", backgroundColor: "#E0C068", borderColor: "#927D44"}
        } else if (type === "rock") {
            return {color: "white", backgroundColor: "#B8A038", borderColor: "#786824"}
        } else if (type === "bug") {
            return {color: "white", backgroundColor: "#A8B820", borderColor: "#6D7815"}
        } else if (type === "ghost") {
            return {color: "white", backgroundColor: "#705898", borderColor: "#493963"}
        } else if (type === "steel") {
            return {color: "white", backgroundColor: "#B8B8D0", borderColor: "#787887"}
        } else {
            return {color: "white", backgroundColor: "#68A090", borderColor: "#44685E"}
        }
    }

    return (
        !currentMove? <div>Loading</div> :(
        
        <div class="card-move" style={typeColor(currentMove.type.name)}>
            <div class="card-body">
                {/* <div class="card-type" style={typeColor(currentMove.type.name)}>{currentMove.type.name}</div> */}
                <div className="name">{move.move.name}</div>
            </div>
        </div>
    ))
}

export default Move;