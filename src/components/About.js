import React from 'react'
import './About.css'
import Navbar from './Navbar';

function About(){
return(
<div>
<Navbar />
<h1>About Us</h1>
<div className='info'>
    This App seeks to solve some of the payment issues regarding space travel. In order to do this, Rapyd Virtual Accounts API will be used.
    The app seeks to conduct transactions internationally: as a result bank payments in the payer's local currency would be accepted. 
    Lastly, there will be an initial deposit, after which the remaining amount can be paid off before the trip to space commences.  
    We have various objectives of this app. They include the following:
   <p>1. Incurring as low intercharge fees as possible.</p>  
   <p>2. Ensuring a seemless transaction without any form of hassle or friction.</p> 
    <p>3. Enabling international transfers to occur with convenience for the payer. </p>

</div>
</div>

);
}

export default About