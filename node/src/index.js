import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import productosRouter from "./routes/productos.js";
import categoriasRouter from "./routes/categorias.js";
import usersRouter from "./routes/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from './models/user.js';

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
    const data = req.body;

    if(!data.username){
        res.status(400);
        return res.send({
            status: 'error',
            error: "Falta nombre de usuario"
        });
    }

    if(!data.password){
        res.status(400);
        return res.send({
            status: 'error',
            error: "Debe especificar un password"
        });
    }

    User.findOne({ "username": data.username }, (err, user) => {
        if(err){
            res.status(500);
            return res.send({error: "Error inesperado"});
        }

        if(!user){
            res.status(404);
            return res.send({error: "No se encontro el usuario"});
        }

        bcrypt.compare(data.password, user.password).then((iguales) => {
            if(!iguales){
                res.status(403);
                return res.send({error: "Password incorrecto"});
            }

            const userData = {
                _id: user._id,
                username: user.username,
                nombre: user.nombre
            }

            jwt.sign({user: userData}, "secretKey", (err, token) => {
                res.status(200);
                return res.send({token, userData});
            })


        })
    });


})

app.use('/users', usersRouter);
app.use('/productos',productosRouter);
app.use('/categorias',categoriasRouter);

connectDB().then(() => { 
    app.listen(
    PORT,
    () => console.log("App corriendo en http://localhost:"+PORT));
});

