import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import productosRouter from "./routes/productos.js";
import categoriasRouter from "./routes/categorias.js";

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/productos',productosRouter);
app.use('/categorias',categoriasRouter);

connectDB().then(() => { 
    app.listen(
    PORT,
    () => console.log("App corriendo en http://localhost:"+PORT));
});

