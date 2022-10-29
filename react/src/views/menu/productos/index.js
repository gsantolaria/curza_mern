import { Box } from "@mui/material";
import { useState } from "react";
import ListaProductos from "./lista";
import Categorias from "./categorias";

import {CATEGORIAS} from './constants';

const Productos = () => {
    const [categorias] = useState(CATEGORIAS);
    const [catSelected, setCatSelected] = useState(0);

    return (
        <Box>
            <Categorias categorias={categorias} setCatSelected={setCatSelected} />            
            <ListaProductos catSelected={catSelected} />
        </Box>
    )
} 
export default Productos;