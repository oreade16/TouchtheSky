import React, { Component } from 'react'
import { renderMatches } from 'react-router-dom'
import {ThemeProvider,TextField,RaisedButton,createTheme} from '@mui/material/styles'
import AppBar from '@mui/material/AppBar';
import { orange } from "@mui/material/colors";


export class FormUserDetails extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    
    render(){ 
        const {values,handleChange}= this.props;

        const theme = createTheme({
            palette: {
              primary: {
                main: orange[500]
              }
            }
          });


        return(
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <AppBar position='static' title='Enter user details'/>
                    
            </React.Fragment>
        </ThemeProvider>
        );
        
    }
    
}

export default FormUserDetails