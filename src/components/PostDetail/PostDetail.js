import React, {useReducer, useEffect, useState} from "react";
import axios from "axios";

import {  useLocation, useParams } from "react-router-dom";

import { Container, Grow, Grid, TextField, AppBar, Button, Modal, Box} from "@material-ui/core"

import { localStorageReducer } from "../../reducers/localStorageReducer";

import Moves from "./Moves/Moves";
import Info from "./Info/Info";
import Chart from "./Chart/Chart";



const test = Math.floor((Math.random() * 2) + 1);

const PostDetail = () => {
    let location = useLocation();

    const [name, setName] = useState('')
    let [pokemon, setPokemon] = useState(location.state.obj)
    const [myPokemon, dispatch] = useReducer(localStorageReducer, [], () => {
        const localData = localStorage.getItem('myPokemon');
        return localData ? JSON.parse(localData) : [];
    });
    

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: "ADD_POKEMON", pokemon: {name, pokemon}})
        setOpen(false);
        window.location.reload(false)
    }

    const [open, setOpen] = useState(false);

    const handleOpen = async() => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        window.location.reload(false)
    };
    
    useEffect(() => {
        localStorage.setItem('myPokemon', JSON.stringify(myPokemon))
    }, [myPokemon])

    console.log(myPokemon)

    return (
        
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="strecth" spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <div className="card card-shadow" style={{display: "flex", textAlign: "center", justifyContent:"center", marginTop: "20px"}}>
                            <p>Info</p>
                        </div>
                        <Info pokemon={pokemon}/>
                        <AppBar position="static" color='inherit'>

                            <Button onClick={handleOpen}>Try Catch!</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="parent-modal-title"
                                aria-describedby="parent-modal-description"
                            >
                                <Box style={{margin: "100px 20%"}}>
                                    
                                    {test === 1 ? <AppBar position="static" style={{marginTop: "100px", textAlign:"center", display:"flex", justifyContent:"center"}}><h1>{pokemon.forms[0].name} run away!</h1></AppBar> : 
                                    <div>
                                    <Info pokemon={pokemon}/>
                                    <AppBar  position="static" color='inherit'>
                                        <TextField 
                                            name="search" 
                                            variant='outlined' 
                                            label='Name your Pokemon' 
                                            fullWidth
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <Button onClick={handleSubmit} variant='contained' color='primary'>Submit</Button>
                                    </AppBar></div>
                                    }
                                        
                                    
                                </Box>
                            </Modal>
                        </AppBar>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <div className="card card-shadow" style={{display: "flex", textAlign: "center", justifyContent:"center", marginTop: "20px"}}>
                        <p>Status Chart</p>
                    </div>
                        <Chart allStats={pokemon.stats}/>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                    <div className="card card-shadow" style={{display: "flex", textAlign: "center", justifyContent:"center", marginTop: "20px"}}>
                        <p>Move</p>
                    </div>
                        <Moves allMove={pokemon.moves}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default PostDetail;