import React, {useContext} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Coffee } from '@mui/icons-material';
import { PAGES } from './constants';
import AuthContext from 'contexts/auth/context';
import './style.css';

const Header = () => {
    const [pages] = React.useState(PAGES);
    const authContext = useContext(AuthContext);

    return (
        <AppBar position="static">
        <Toolbar sx={{display: 'flex',justifyContent: 'space-between'}}>
            <Link to='/' style={{color: '#fff', textDecoration: 'none'}}>
                <Box sx={{display: 'flex'}}>
                    <Coffee sx={{mr:1,mt:0.5}} />
                    <Typography variant='h6'>Café CURZA</Typography>
                </Box>
            </Link>
            { authContext.authenticated &&
                <>
                    <Typography variant='h6'>Bienvenido {authContext.user.nombre}</Typography>
                    <Button variant='contained' color='error' onClick={() => authContext.logout()} >Salir</Button>
                </>
            }


            <nav style={{display: 'flex'}}>
            { pages && pages.map((item, index) => {
                return (
                <Typography variant='h6' component='li' key={index} sx={{listStyle: 'none', ml:1}}>
                    <NavLink to={item.link} >{item.text}</NavLink>
                </Typography>
                )}
            )}
            </nav>

        </Toolbar>
    </AppBar>
    )
}
export default Header;