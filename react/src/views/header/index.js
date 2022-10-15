import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Coffee } from '@mui/icons-material';

import { PAGES } from './constants';
import './style.css';

const Header = () => {
    const [pages, setPages] = React.useState(PAGES);
    return (
        <AppBar position="static">
        <Toolbar sx={{display: 'flex',justifyContent: 'space-between'}}>
            <Link to='/' style={{color: '#fff', textDecoration: 'none'}}>
                <Box sx={{display: 'flex'}}>
                    <Coffee sx={{mr:1,mt:0.5}} />
                    <Typography variant='h6'>Café CURZA</Typography>
                </Box>
            </Link>
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