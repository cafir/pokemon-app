import React from "react";
import Logo from "../../assets/1280px-International_Pokémon_logo.png"
import { useNavigate } from "react-router-dom";



const Navbar = () => {
    const navigate = useNavigate();

    const handlePokemonList = () => {
        navigate('/')
    }

    const handleMyPokemon = () => {
        navigate('/mypokemon')
    }

    const handleCreator = () => {
        navigate('/creator')
    }
    

    return (
        <div class="navbar">
            <div class="navbar-menu">
                <div class="navbar-logo">
                    <img src={Logo}/>
                </div>
                <div class="navbar-links">
                    <ul>
                        <li><div onClick={() =>handlePokemonList()}>Pokemon List</div></li>
                        <li><div onClick={() =>handleMyPokemon()}>My Pokemon</div></li>
                        <li><div onClick={() =>handleCreator()}>Creator</div></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;