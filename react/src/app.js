import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Header from './views/header';
import Portada from './views/portada';
import Menu from './views/menu';
import { useDispatch } from "react-redux";
import Privado from "utils/privado";
import { initAuth } from 'actions/auth';

const App = () => {

    const { pathname } = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initAuth())
    }, [])

    return (
        <Box>
            { pathname !== '/' &&
                <Header />
            }
            <Routes>
                <Route path='/' element={<Portada />}/>
                <Route path='/menu' element={<Privado><Menu /></Privado>}/>
                <Route path='/carrito' element={<Typography variant='h1'>Carrito</Typography>}/>
                <Route path='*' element={<Typography variant='h3'>Oops!</Typography>}/>
            </Routes>
        </Box>
    )
}
export default App;