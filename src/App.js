import React from "react";

import { Container, } from "@material-ui/core"



//router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PokemonList from "./pages/PokemonList";
import PostDetail from "./components/PostDetail/PostDetail";
import Navbar from "./components/Navbar/Navbar";
import MyPokemon from "./pages/MyPokemon";
import Creator from "./pages/Creator";


const App = () => {

    return(
        <BrowserRouter>
            <Container maxidth="lg">
                <Navbar/>
                <Routes>
                    <Route path='/' exact element={ <PokemonList/>}/>
                    <Route path='/pokemon/search' exact element={ <PokemonList/>}/>
                    <Route path='/detail/:id' exact element={ <PostDetail/>}/>
                    <Route path='/mypokemon' exact element={ <MyPokemon/>}/>
                    <Route path='/creator' exact element={ <Creator/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App;