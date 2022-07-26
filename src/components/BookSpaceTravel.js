import React, { useState,useMemo } from "react";
import {Typography,Card,CardContent,Grid, TextField, Button} from '@mui/material'
import Navbar from "./Navbar";
import Select from '@mui/material/Select';
import {FormControl,InputLabel,MenuItem} from "@mui/material";
import {useFormik} from "formik"





function BookSpaceTravel(){

    const formik = useFormik({
        initialValues :{
            first_name: "",
            last_name: "",
            email: "",
            address: "",
            ticket_quantity: "",
         
        },
        onSubmit: (values) => {
        console.log(JSON.stringify(values));
        },
    });
return(
    <div className="CheckoutForm">
        <Navbar />
        <Typography gutterBottom variant="h3" align="center">
        Checkout Form
        </Typography>

<Card style={{maxWidth:500, margin:"0 auto",padding:"20px 5px"}}>
    <CardContent>
    <Typography gutterBottom variant="h5">Enter the following details:</Typography>
    <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
                <TextField id="Name" label="First Name" placeholder="Oh na-na, what's your name :)" variant="filled"  name="first_name" value={formik.values.first_name} onChange={formik.handleChange} fullWidth required>
                </TextField>
            </Grid>

            <Grid xs={12} sm={6} item>
                <TextField id="Surname" label="Last Name" placeholder="Enter your surname" variant="filled" name="last_name" value={formik.values.last_name} onChange={formik.handleChange} fullWidth required>
                </TextField>
            </Grid>

            <Grid xs={12} sm={6} item>
                <TextField label="Email" placeholder="Enter your email" variant="filled" name="email" values={formik.values.email} onChange={formik.handleChange} fullWidth required>
                </TextField>
            </Grid>
        
            <Grid xs={12} sm={6} item>
                <TextField label="Address" placeholder="Enter your address" variant="filled"  name="address" values={formik.values.address} onChange={formik.handleChange} fullWidth required>
                </TextField>
            </Grid>


            <Grid xs={12} item>
                <TextField label="Ticket quantity" placeholder="How many tickets" variant="filled" name="ticket_quantity" value={formik.values.ticket_quantity} onChange={formik.handleChange} fullWidth required>
                </TextField>
            </Grid>

           

          

            <p>

            </p>

            <Grid xs={12} item>
                <Button type="submit" variant="contained" color="secondary" align="center" fullWidth
                onClick={()=>console.log('Submitted')}>Submit</Button>
           </Grid> 
            

        </Grid>
        </form> 

    </CardContent>
</Card>

    </div>
);
}

export default BookSpaceTravel;