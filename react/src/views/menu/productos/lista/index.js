import { useEffect, useContext, useCallback } from "react";
import { Box, Card, CardContent, CardMedia, CardActions, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ProductosContext from "contexts/productos/context";

const ListaProductos = ({ catSelected }) => {
    const productosContext = useContext(ProductosContext);
    const carrito = [];

    useEffect(() => {
        productosContext.getProductos(catSelected);
    },[catSelected])

    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            { productosContext.productos.map((prod, index) => {

                let count = 0;
                if(carrito[prod._id]) {
                    count = carrito[prod._id].count;
                }

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
                    <CardActions disableSpacing>
                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                            <AddIcon onClick={() => productosContext.addProductoCarrito(prod)} sx={{cursor: 'pointer'}} />
                            <Box>
                                {count}
                            </Box>
                            <RemoveIcon />
                        </Box>
                    </CardActions>
                </Card>
                )
            })}
        </Box>
    )
} 
export default ListaProductos;