import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: String,
    nombre: String,
    password: String,
})

export default mongoose.model('User', UserSchema, 'users');