import { useState, useEffect } from 'react';
import miaxios from 'utils/mi-axios';
import { AppBar, Box, Button, Toolbar } from "@mui/material";

const Categorias = ({ setCatSelected }) => {
    const [categorias, setCategorias] = useState([]);    
    const axios = miaxios();
    useEffect(() => {
        axios.get('http://localhost:8000/categorias').then((response)=>{
            setCategorias(response.data);
        }).catch((error)=>{});
    },[])

    return (
        <Box>
            <AppBar position='static'>
                <Toolbar sx={{display: 'flex',justifyContent: 'space-between'}}>
                    <Button onClick={() => {setCatSelected(0)}} sx={{color: '#fff'}}>Todas</Button>
                    { categorias && categorias.map((item, index) => {
                        return <Button key={index} onClick={() => {
                            setCatSelected(item["_id"]);
                        }} sx={{color: '#fff'}}>{item.nombre}</Button>
                    })}
                </Toolbar>
            </AppBar>
        </Box>
    )
} 
export default Categorias;