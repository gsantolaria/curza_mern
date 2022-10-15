import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Portada = () => {
    return (
        <Box sx={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems:'center',
            position: 'absolute',
            left: 0,
            width: '100%',
            top: 0,
            height: '100%',
        }}>
            <Link to='/menu'>
                <Button variant='contained'>Ingresar</Button>
            </Link>
        </Box>
    )
}
export default Portada;