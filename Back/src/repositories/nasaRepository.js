import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables de entorno desde el archivo .env

const NASA_API_KEY = process.env.NASA_API_KEY; // Obtén la clave de API desde las variables de entorno

async function getImage() {
    try {
        // Realiza la solicitud a la API de la NASA usando la clave de API
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`);
        return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
        throw new Error('Failed to fetch data from NASA API'); // Lanza un error si ocurre una excepción
    }
}

export default {
    getImage
};
