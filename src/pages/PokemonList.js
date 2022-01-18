import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { Container, Grow, Grid, AppBar, Button, TextField} from "@material-ui/core"

import { useNavigate } from "react-router-dom";

import { getAllPokemon, getSearchPokemon } from "../actions/poke-api.js";

import Posts from "../components/Posts/Posts"
import Picture from "../components/Picture/Picture"



const PokemonList = () => {
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const searchPokemon = () => {
        if (search.trim()) {
            dispatch(getSearchPokemon(search))
            navigate(`/pokemon/search?searchQuery=${search}`)
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPokemon()
        }
    }

    useEffect(() => {
        dispatch(getAllPokemon());
    }, [currentPokemon, dispatch])



    return(
        
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="strecth" spacing={3}>
                    <Grid item xs={12} sm={5}>
                    <div className="card-search">
                        <AppBar  position="static" color='inherit'>
                            <TextField 
                                name="search" 
                                variant='outlined' 
                                label='Seach Pokemon' 
                                fullWidth
                                onKeyPress={handleKeyPress} 
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Button onClick={searchPokemon} variant='contained' color='primary'>Search</Button>
                        </AppBar>
                    </div>
                        <Picture currentPokemon={currentPokemon} setCurrentPokemon={setCurrentPokemon}/>
                    </Grid>
                    <Grid item xs={12} sm={7} >
                        <Posts setCurrentPokemon={setCurrentPokemon}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
            
        
    )
}

export default PokemonList;