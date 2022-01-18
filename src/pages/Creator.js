import React from "react";

import { Container, Grow, Grid} from "@material-ui/core"

import photo from "../assets/photo-with-piplup.png"



const Creator = () => {

    return(
        
        <Grow in>
            <Container>
                <h1 style={{color: "grey"}}>The Trainer:</h1>
                <Grid container justify="space-between" alignItems="strecth" spacing={3}>
                    <Grid item xs={12} sm={6} >
                    <div class="card-detail card-shadow">
                        <div class="card-header card-image">
                            <img src={photo}/>
                        </div>
                        <div class="card-body">
                            Hello! I'm Muhammad Reza Firhan, nice to meet you all!
                        </div>
                        <div class="card-body"><p>
                            I'm a Frontend Engineer with a Bachelor of Science degree.
                            Sometimes I dream about becoming a pokemon master like 
                            Ash Ketchum/Satoshi and finding a legendary pokemon such as Dialga
                            or Rayquaza so I can fly hehe. 
                            </p>
                        </div>
                        <div class="card-footer">
                            feel free to reach me at:
                            <h4>Phone: 081299086306</h4>
                            <h4>Email: ecafirhan@gmail.com</h4>
                        </div> 
                    </div>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                    <div class="card-detail card-shadow">
                        <div class="card-body">
                            other link:
                        </div>
                        <div class="card-body">
                            <ul>
                                <li><a href="https://drive.google.com/file/d/1F4JdXUw5e3FgID-LIxKhTYYY5xCzo1rb/view?usp=sharing">CV</a></li>
                                <li><a href="https://github.com/cafir">Github</a></li>
                                <li><a href="https://www.linkedin.com/in/reza-firhan-5aa837171/">Linkedin</a></li>
                                <li><a href="https://keychain-app.vercel.app/">Project: Password Management System</a></li>
                            </ul>
                        </div>
                    </div>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
            
        
    )
}

export default Creator;