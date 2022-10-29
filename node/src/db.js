import mongoose from 'mongoose';

const DB_URI = 'mongodb://mongo:27017/curso';

export function connectDB() {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URI).then((res, err) => {
            if(err) return reject(err);
            console.log("Conectado a la base de datos con éxito");
            resolve();
        });
    })
}

export function closeDB() {
    return mongoose.disconnect();
}