import { Box } from "@mui/material";
import { useState } from "react";
import ListaProductos from "./lista";
import Categorias from "./categorias";


const Productos = () => {
    const [catSelected, setCatSelected] = useState(0);

    return (
        <Box>
            <Categorias setCatSelected={setCatSelected} />            
            <ListaProductos catSelected={catSelected} />
        </Box>
    )
} 
export default Productos;