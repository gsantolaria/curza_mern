import mongoose from 'mongoose';
import { CategoriaSchema } from './categoria.js';

const ProductoSchema = new mongoose.Schema({
    cat: CategoriaSchema,
    nombre: String,
    img: String,
    precio: Number
})

export default mongoose.model('Producto', ProductoSchema, 'productos');