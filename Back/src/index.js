import express from "express";
import dotenv from "dotenv";
import cors from "cors";  // Importa cors
import nasaRouter from "./routes/nasaRouter.js";  // Corrige la ruta

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Habilita CORS para todas las rutas

app.use('/nasa', nasaRouter);  // Usa nasaRouter para las rutas que comienzan con /nasa

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
