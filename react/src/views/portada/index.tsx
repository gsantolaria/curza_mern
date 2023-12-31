import { Box, Button, Typography, Paper, TextField } from '@mui/material';
import { useState, useContext }  from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from 'contexts/auth/context';

const Portada = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const authContext:any = useContext(AuthContext);

    console.log("AUTHENTICATED", authContext.authenticated);

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
            { !authContext.authenticated ? 

                <Paper variant="elevation" elevation={2}>
                <Typography component='h1' variant='h5'>Ingresar al sitio</Typography>
                <form onSubmit={(e) => {e.preventDefault(); authContext.login({username, password})}}>
                    <TextField
                        type='text' 
                        placeholder='Usuario' 
                        variant='outlined' 
                        value={username} 
                        onChange={(event) => setUsername(event.target.value)}
                        required
                        autoFocus
                    />
                    <TextField
                        type='password' 
                        placeholder='Password' 
                        variant='outlined' 
                        value={password} 
                        onChange={(event) => setPassword(event.target.value)}
                        required
                        autoFocus
                    />
                    <Button type='submit'>Enviar</Button>
                </form>
                </Paper>
            :
                <Navigate to='/menu' />
            }



        </Box>
    )
}
export default Portada;