import React, { useEffect, useReducer } from "react";

import { Container, Grow, Grid} from "@material-ui/core"

import { localStorageReducer } from "../reducers/localStorageReducer.js";

import MyPosts from "../components/MyPosts/MyPosts"



const MyPokemon = () => {
    const [myPokemon, dispatch] = useReducer(localStorageReducer, [], () => {
        const localData = localStorage.getItem('myPokemon');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('myPokemon', JSON.stringify(myPokemon))
    }, [myPokemon])

    return(
        
        <Grow in>
            <Container>
                <h1 style={{color: "grey"}}>My Pokemon:</h1>
                <Grid container justify="space-between" alignItems="strecth" spacing={3}>
                    <Grid item xs={12} sm={12} >
                        <MyPosts myPokemon={myPokemon} dispatch={dispatch}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
            
        
    )
}

export default MyPokemon;