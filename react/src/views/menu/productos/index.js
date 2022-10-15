import { Box } from "@mui/material";
import { useState } from "react";
import ListaProductos from "./lista";
import Categorias from "./categorias";

import {
    CATEGORIAS,
    PRODUCTOS
} from './constants';

const Productos = () => {
    const [categorias] = useState(CATEGORIAS);
    const [productos] = useState(PRODUCTOS);
    const [catSelected, setCatSelected] = useState(0);
    
    return (
        <Box>
            <Categorias categorias={categorias} setCatSelected={setCatSelected} />            
            <ListaProductos productos={productos} catSelected={catSelected} />
        </Box>
    )
} 
export default Productos;