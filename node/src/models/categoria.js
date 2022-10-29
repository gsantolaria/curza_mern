import mongoose from 'mongoose';

export const CategoriaSchema = new mongoose.Schema({
    nombre: String,
})

export default mongoose.model('Categoria', CategoriaSchema, 'categorias');