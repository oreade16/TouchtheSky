
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { makeStyles, Select } from '@mui/material';
import CssBaseline from '@mui/material';
import createTheme from '@mui/material';
import ThemeProvider from '@mui/material';
import { ReactDOM } from 'react';
import SideMenu from './components/SideMenu';
import Selector from './components/Select';


import React, { Component } from 'react';
import FormUserDetails from './components/FormUserDetails';
import CheckoutForm from './components/CheckoutForm';

function App(){
  
  return(
    <>

     <CheckoutForm />
    
    </>
 
  );



}

export default App;
