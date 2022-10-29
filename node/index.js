import express from "express";
import cors from "cors";
const PORT = 8000;
const app = express();

import { PRODUCTOS, CATEGORIAS } from "./constants.js";

let productos = [].concat(PRODUCTOS);
let categorias = [].concat(CATEGORIAS);

app.use(express.json());
app.use(cors());

app.get('/productos',(req, res) => {

    const { cat } = req.query;

    let filtroProd = [].concat(productos);
    if(cat) {
        const categoria = categorias.find((item) => {
            return item.id == cat
        });
        if(!categoria){
            res.status(400);
            return res.send({
                status: 'error',
                error: "La categoría no existe."
            });
        }
        filtroProd = productos.filter((item)=>{
            return (item.cat == cat)
        })
    }
    res.status(200);
    return res.send(filtroProd);
});

app.get('/productos/:id',(req, res) => {
    const { id } = req.params;
    if(id) {
        const producto = productos.find((item) => {
            return item.id == id
        })
        if(producto) {
            res.status(200);
            return res.send(producto);
        } else {
            res.status(404);
            return res.send({
                status: 'error',
                error: "No se encontro el producto."
            });
        }
    }

});

app.post('/productos',(req, res) => {
    const producto = req.body;
    if(!producto.cat){
        res.status(400);
        return res.send({
            status: 'error',
            error: "Falta la categoría."
        });
    } else {
        const categoria = categorias.find((item) => {
            return item.id == producto.cat
        });
        if(!categoria){
            res.status(400);
            return res.send({
                status: 'error',
                error: "La categoría no existe."
            });
        }
    }
    if(!producto.nombre){
        res.status(400);
        return res.send({
            status: 'error',
            error: "Falta el nombre."
        });
    }
    if(!producto.img){
        res.status(400);
        return res.send({
            status: 'error',
            error: "Falta la imagen."
        });
    }

    let precio = 0;
    if(producto.precio){
        precio = producto.precio;
    }

    const newProducto = {
        id: (productos[productos.length -1].id) + 1,
        cat: producto.cat,
        nombre: producto.nombre,
        img: producto.img,
        precio: precio
    }

    productos = productos.concat(newProducto);
    res.status(200);
    return res.send(newProducto);

})

app.delete('/productos/:id',(req, res) => {
    const { id } = req.params;
    if(id) {
        const producto = productos.find((item) => {
            return item.id == id
        })
        productos = productos.filter((item)=>{
            return (item.id != id)
        })
    }
    res.status(200);
    return res.send(productos);
})

app.patch('/productos/:id',(req, res) => {
    const { id } = req.params;
    const { cat, nombre, img, precio } = req.body;
    if(id) {
        let updProducto = productos.find((item) => {
            return item.id == id
        });

        if(!updProducto){
            res.status(404);
            return res.send({
                status: 'error',
                error: "No se encontro el producto."
            });
        }

        if(cat){
            const categoria = categorias.find((item) => {
                return item.id == cat
            });
            if(!categoria){
                res.status(400);
                return res.send({
                    status: 'error',
                    error: "La categoría no existe."
                });
            } else {
                updProducto.cat = cat;
            }           
        }
        if(nombre){ updProducto.nombre = nombre }
        if(img){ updProducto.img = img }
        if(precio){ updProducto.precio = precio }

        const productoIndex = productos.findIndex((item)=>{
            return (item.id == id)
        })

        productos[productoIndex] = updProducto;

        res.status(200);
        return res.send(updProducto);
    }
    res.status(400);
    return res.send({
        status: 'error',
        error: "Falta el ID."
    });
});

app.listen(
    PORT,
    () => console.log("App corriendo en http://localhost:"+PORT));
