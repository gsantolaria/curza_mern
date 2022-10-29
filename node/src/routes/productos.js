import { Router } from 'express';
import Producto from '../models/producto.js';
import Categoria from '../models/categoria.js';
const router = Router();

router.get('/',(req, res) => {

    const { cat } = req.query;
    let filtro = {};
    if(cat) {
        filtro = { "cat._id": cat }
    }
    Producto.find(filtro,(err, productos) => {
        if(err){
            res.status(500);
            return res.send(err);
        }
        res.status(200);
        return res.send(productos);
    })
});

router.get('/:id',(req, res) => {
    const { id } = req.params;
    if(id) {
        Producto.findById(id,(err, producto) => {
            if(err){
                res.status(500);
                return res.send(err);
            }
            res.status(200);
            return res.send(producto);
        });
    } else {
        res.status(400);
        return res.send({
            status: 'error',
            error: "Debe especificar un id de producto."
        });
    }

});

router.post('/',(req, res) => {
    const producto = req.body;
    if(!producto.cat){
        res.status(400);
        return res.send({
            status: 'error',
            error: "Falta la categoría."
        });
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

    Categoria.findById(producto.cat,(err, categoria) => {
        
        if(err){
            res.status(500);
            return res.send(err);
        }

        const newProducto = new Producto({
            cat: categoria,
            nombre: producto.nombre,
            img: producto.img,
            precio: precio
        })

        newProducto.save((err) => {
            if(err) {
                res.status(500);
                return res.send(err);
            } 
            res.status(200);
            return res.send(newProducto);
        });
    });
})

router.delete('/:id',(req, res) => {
   const {id} = req.params;
   if(id) {
        Producto.findByIdAndDelete(id,(err, producto) => {
            if(err){
                res.status(500);
                return res.send(err);
            }
            if(!producto){
                res.status(404);
                return res.send({
                    status: 'error',
                    error: "El producto no existe"
                });
            }
            res.status(200);
            return res.send(producto);
        });
    } else {
        res.status(400);
        return res.send({
            status: 'error',
            error: "Falta el id de producto"
        });
    }
})

router.patch('/:id',(req, res) => {
    const { id } = req.params;
    let { cat, nombre, img, precio } = req.body;

    Categoria.findById(cat,(err, categoria) => {
        if(categoria) {
            cat = categoria;
        }
        Producto.findByIdAndUpdate(id, {
            cat,
            nombre,
            img,
            precio
        },{new:true},(err, producto) => {
            if(err){
                res.status(500);
                return res.send(err);
            }
            if(!producto){
                res.status(404);
                return res.send({
                    status: 'error',
                    error: "El producto no existe"
                });
            }
            res.status(200);
            return res.send(producto);
        });
    });
});

export default router;
