
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
import CarouselPage from "./components/CarouselPage"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"

import React, { Component } from 'react';
import FormUserDetails from './components/FormUserDetails';
import CheckoutForm from './components/CheckoutForm';
import Navbar2 from './components/Navbar2';
import CountdownTimer from './components/CountdownTimer';
import Footer from './components/Footer';
import BookSpaceTravel from './components/BookSpaceTravel';
import CountrySelect from './components/CountrySelect';
import ContactUs from "./components/ContactUs"
import BuyPage from "./components/BuyPage"
import Deposit from "./components/Deposit"

function App(){
  
  return(
    <>
    <div className='App'>
      <Navbar />
     <Deposit />
      
     </div>
     
    
    </>
 
  );



}

export default App;
