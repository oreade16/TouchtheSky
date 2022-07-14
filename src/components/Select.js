import React from "react";
import { MenuItem,TextField,Grid } from '@mui/material';

function Selector() {
    return (
        <Grid xs={12} sm={6} item>
        <TextField label ='Select bank account type' select fullWidth required>
            <MenuItem value ="CH">Chequing</MenuItem>
            <MenuItem value ="SA">Savings</MenuItem>
        </TextField>
        </Grid>
       
    );
}


export default Selector;