import {AppBar,Toolbar,IconButton, Typography,Stack,Button} from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"

function Navbar(){
    return(
    <div>
        <AppBar position='fixed'>
            <Toolbar>
                <IconButton size='large' edge ='start' color='inherit' aria-label='logo'>
                    <RocketLaunchIcon />

                </IconButton>
                    <Typography variant='h6' component='div' sx={{flexGrow:1}}>Touch the Sky</Typography>

                    <Stack direction='row' spacing = {1}></Stack>
                    <Button color = 'inherit'>Home</Button>
                    <Button color = 'inherit'>About</Button> 
                    <Button color = 'inherit'>Checkout</Button>
            </Toolbar>
        </AppBar>
    </div>
         );
}

export default Navbar;