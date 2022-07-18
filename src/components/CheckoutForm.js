import React, { useState } from "react";
import {Typography,Card,CardContent,Grid, TextField, Button} from '@mui/material'
import './CheckoutForm.css'
import Navbar from "./Navbar";
import Select from '@mui/material/Select';
import {FormControl,InputLabel,MenuItem} from "@mui/material";
import {useFormik} from "formik"

function CheckoutForm(){

    const formik = useFormik({
        initialValues :{
            name: "",
            type: "",
            bank_Name: "",
            bank_Number: "",
            bransit_Number: "",
            account_Number: "",
            account_Number2: "",
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
                <TextField id="Name" label="Account Holder Name" placeholder="Enter the account holder name" variant="filled"  name="name" value={formik.values.name} onChange={formik.handleChange} fullWidth required>
                </TextField>
            </Grid>

            <Grid xs={12} sm={6} item>
                <TextField id="Type" label="Account Type"  variant="filled"  name="type" value={formik.values.type} onChange={formik.handleChange} select fullWidth required>
                <MenuItem value ="CH">Chequing</MenuItem>
                <MenuItem value ="SA">Savings</MenuItem>
                </TextField>
            </Grid>

            <Grid xs={12} item>
                <TextField label="Bank Name" placeholder="Enter bank name " variant="filled" name="bank_Name" value={formik.values.bank_Name} onChange={formik.handleChange} fullWidth required>
                </TextField>
            </Grid>

            <Grid xs={12} sm={6} item>
                <TextField label="Bank number" placeholder="3 digits" variant="filled" name="bank_Number" values={formik.values.bank_Number} onChange={formik.handleChange} fullWidth required>


                </TextField>
            </Grid>
        
            <Grid xs={12} sm={6} item>
                <TextField label="Transit number" placeholder="5 digits" variant="filled"  name="transit_Number" values={formik.values.transit_Number} onChange={formik.handleChange} fullWidth required>
                </TextField>
            </Grid>


            <Grid xs={12} sm={6} item>
                <TextField label="Account number" placeholder="7 digits" variant="filled" name="account_Number" value={formik.values.account_Number} onChange={formik.handleChange} fullWidth required>
                </TextField>
            </Grid>

            <Grid xs={12} sm={6} item>
                <TextField label="Re-enter account number" placeholder="7 digits" name="account_Number2"  values={formik.values.account_Number2} onChange={formik.handleChange}   variant="filled" fullWidth required>
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

export default CheckoutForm;