import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Coffee } from '@mui/icons-material';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'actions/auth';
import { PAGES } from './constants';
import './style.css';

const Header = () => {
    const [pages] = React.useState(PAGES);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <AppBar position="static">
        <Toolbar sx={{display: 'flex',justifyContent: 'space-between'}}>
            <Link to='/' style={{color: '#fff', textDecoration: 'none'}}>
                <Box sx={{display: 'flex'}}>
                    <Coffee sx={{mr:1,mt:0.5}} />
                    <Typography variant='h6'>Café CURZA</Typography>
                </Box>
            </Link>
            { auth.authenticated &&
                <>
                    <Typography variant='h6'>Bienvenido {auth.user.nombre}</Typography>
                    <Button variant='contained' color='error' onClick={() => dispatch(logout())} >Salir</Button>
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