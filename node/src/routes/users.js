import { Router } from 'express';
import User from '../models/user.js';
import bcrypt from 'bcrypt';
const router = Router();

router.post('/', (req, res) => {
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

    bcrypt.hash(data.password, 10).then((hashedPassword) => {

        const newUser = new User({
            username: data.username,
            password: hashedPassword,
            nombre: data.nombre
        })


        newUser.save((err) => {
            if(err){
                res.status(500);
                return res.send(err);
            }

            res.status(200);
            return res.send(newUser);
        })
    })
})
export default router;