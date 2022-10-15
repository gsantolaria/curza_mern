import { AppBar, Box, Button, Toolbar } from "@mui/material";

const Categorias = ({ categorias, setCatSelected }) => {
    return (
        <Box>
            <AppBar position='static'>
                <Toolbar sx={{display: 'flex',justifyContent: 'space-between'}}>
                    <Button onClick={() => {setCatSelected(0)}} sx={{color: '#fff'}}>Todas</Button>
                    { categorias && categorias.map((item, index) => {
                        return <Button key={index} onClick={() => {
                            setCatSelected(item.id);
                        }} sx={{color: '#fff'}}>{item.nombre}</Button>
                    })}
                </Toolbar>
            </AppBar>
        </Box>
    )
} 
export default Categorias;