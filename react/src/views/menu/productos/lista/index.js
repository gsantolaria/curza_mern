import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const ListaProductos = ({ catSelected }) => {
    const [productos, setProductos] = useState([]);    

    useEffect(() => {
        if(catSelected) {
            axios.get('http://localhost:8000/productos?cat='+catSelected).then((response)=>{
                setProductos(response.data);
            }).catch((error)=>{});
        } else {
            axios.get('http://localhost:8000/productos').then((response)=>{
                setProductos(response.data);
            }).catch((error)=>{});
        }
    },[catSelected])


    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            { productos.map((prod, index) => {
                return (
                <Card key={index} sx={{width: '300px', minWidth: '200px', m:2}}>
                    <CardMedia 
                        component="img"
                        height="140"
                        image={prod.img}
                        alt={prod.nombre}
                        sx={{objectFit: 'contain', padding: 2, boxSizing: 'border-box'}}
                    />
                    <CardContent sx={{textAlign: 'center'}}>
                        <Typography variant='h5' component='div'>{prod.nombre}</Typography>
                    </CardContent>
                </Card>
                )
            })}
        </Box>
    )
} 
export default ListaProductos;