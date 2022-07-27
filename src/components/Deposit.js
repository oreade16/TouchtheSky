import {useState}from "react";
import {Typography,Card,CardContent,Grid, TextField, Button} from '@mui/material'
import BuyPage from "./BuyPage";
import ContactUs from "./ContactUs";
import CheckoutForm from "./CheckoutForm";
import { Stack } from '@mui/material';
import "./Deposit.css"

function Deposit(){
    const [amount, setAmount] = useState(100000);
    const [name,setName] = useState("Arabanko");
    const [address,setAddress] = useState("Your mom's room");
    return(
        <>
        <Stack>
       <Typography variant="h2" align="center">DEPOSIT PENDING</Typography>

       
       <Typography variant="h5" align="center">${amount}</Typography>

       <Typography variant="h5">Beneficiary (CAD)</Typography>

       <Typography variant="h5">Name: {name}</Typography>

       <Typography variant="h5" >Address: {address}</Typography> 
       </Stack>
       
        

        
     



        
        
        
        </>
    );
}

export default Deposit;