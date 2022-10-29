import { Router } from 'express';
import mongoose from 'mongoose';
import Categoria from '../models/categoria.js';
import Producto from '../models/producto.js';
const router = Router();

router.get('/',(req, res) => {
    Categoria.find({},(err, categorias) => {
        if(err){
            res.status(500);
            return res.send(err);
        }
        res.status(200);
        return res.send(categorias);
    })
});

router.get('/:id',(req, res) => {
    const { id } = req.params;
    if(id) {
        Categoria.findById(id,(err, categoria) => {
            if(err){
                res.status(500);
                return res.send(err);
            }
            res.status(200);
            return res.send(categoria);
        });
    } else {
        res.status(400);
        return res.send({
            status: 'error',
            error: "Debe especificar una categoria."
        });
    }

});

router.post('/',(req, res) => {
    const { nombre } = req.body;
    if(!nombre){
        res.status(400);
        return res.send({
            status: 'error',
            error: "Falta el nombre."
        });
    }

    const newCategoria = new Categoria({
        nombre
    })

    newCategoria.save((err) => {
        if(err) {
            res.status(500);
            return res.send(err);
        } 
        res.status(200);
        return res.send(newCategoria);
    });
})

router.delete('/:id',(req, res) => {
    const {id} = req.params;
    console.log(id);
    if(id) {
        Categoria.findByIdAndDelete(id,(err, categoria) => {
            if(err){
                res.status(500);
                return res.send(err);
            }
            if(!categoria){
                res.status(404);
                return res.send({
                    status: 'error',
                    error: "La categoría no existe"
                });
            }
            const catId = mongoose.Types.ObjectId(id);
            Producto.deleteMany({"cat._id": catId},(err) => {
                if(err) {
                    res.status(500);
                    return res.send(err);
                }
                res.status(200);
                return res.send(categoria);
            });
        });
    } else {
        res.status(400);
        return res.send({
            status: 'error',
            error: "Falta el id de categoria"
        });
    }
})

export default router;
