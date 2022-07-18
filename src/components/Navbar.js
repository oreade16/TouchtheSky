import {AppBar,Toolbar,IconButton, Typography,Stack,Button, ThemeProvider} from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import Theme from './Theme';
import {createTheme} from '@mui/material';
import { purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
        main: '#121212'
      },
      secondary: {
        main: '#f44336',
      },
    },
  });

function Navbar(){
    return(
    <div>
    <ThemeProvider theme={theme}>
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge ='start' color='inherit' aria-label='logo'>
                    <RocketLaunchIcon />

                </IconButton>
                    <Typography variant='h6' component='div' sx={{flexGrow:1}}>Touch the Sky</Typography>

                    <Stack direction='row' spacing = {1}></Stack>

                    
                    <Button color = 'inherit'>
                        <Link>
                        About
                        </Link>
                        
                    </Button> 

                    <Button color = 'inherit'>Checkout</Button>
                    <Button color = 'inherit'>Contact Us</Button> 

            </Toolbar>
        </AppBar>
        </ThemeProvider>
    </div>
         );
}

export default Navbar;