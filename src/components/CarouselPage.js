import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import "./CarouselPage.css"
import Navbar2 from './Navbar2';
import Navbar from './Navbar';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"

function Example(props)
{
    var items = [
        {
            image_source :"/images/space_wallpaper1.jpeg",
            name: "Random Name #1",
            description: ""
        },
        {
            image_source : "/images/space_wallpaper2.jpeg",
            name: "Random Name #2",
            description: ""
        },
        {
          image_source : "/images/space_wallpaper3.jpeg",
          name: "Random Name #3",
          description: "" 
        }
    ]

    return (
      
      
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        
    )
}

function Item(props)
{
    return (
        <Paper>

            <Router>
            <Navbar />     
            </Router>

            <img src={props.item.image_source} className="wallpaper"></img>

          
            
           
            <p className='centered'>{props.item.description}</p>

        </Paper>
    )
}


export default Example;