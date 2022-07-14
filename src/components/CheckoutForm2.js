import React from "react";
import {Typography,Card,CardContent,Grid, TextField, Button} from '@mui/material'
import './CheckoutForm.css'
import Navbar from "./Navbar";
import Select from '@mui/material/Select';
import {FormControl,InputLabel,MenuItem} from "@mui/material";






function CheckoutForm2(){



return(
    
    <div className="CheckoutForm">
        <Navbar />
        <Typography gutterBottom variant="h3" align="center">
        Checkout Form
        </Typography>

<Card style={{maxWidth:500, margin:"0 auto",padding:"20px 5px"}}>
    <CardContent>
    <Typography gutterBottom variant="h5">Enter the following details:</Typography>
    <form>
        <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
                <TextField label="Account Holder Name" placeholder="Enter the account holder name" variant="filled" fullWidth required>
                </TextField>
            </Grid>

            <Grid xs={12} sm={6} item>
                <TextField label="Account Type" placeholder="Enter the account type" variant="filled" fullWidth required>
                </TextField>
            </Grid>

            <Grid xs={12} item>
                <TextField label="Bank Name" placeholder="Enter bank name " variant="filled" fullWidth required>
                </TextField>
            </Grid>

            <Grid xs={12} sm={6} item>
                <TextField label="Bank number" placeholder="3 digits" variant="filled" fullWidth required>
                </TextField>
            </Grid>
        
            <Grid xs={12} sm={6} item>
                <TextField label="Transit number" placeholder="5 digits" variant="filled" fullWidth required>
                </TextField>
            </Grid>


            <Grid xs={12} sm={6} item>
                <TextField label="Account number" placeholder="7 digits" variant="filled" fullWidth required>
                </TextField>
            </Grid>

            <Grid xs={12} sm={6} item>
                <TextField label="Re-enter account number" placeholder="7 digits" variant="filled" fullWidth required>
                </TextField>
            </Grid>

            <p>

            </p>

            <Grid xs={12} item>
                <Button type="submit" variant="contained" color="secondary" align="center" fullWidth
                onClick={()=>console.log('you clicked me')}>Submit</Button>
           </Grid> 
            

        </Grid>
        </form> 

    </CardContent>
</Card>

    </div>
);
}

export default CheckoutForm2;