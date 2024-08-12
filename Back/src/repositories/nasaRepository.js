import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables de entorno desde el archivo .env

const NASA_API_KEY = process.env.NASA_API_KEY; // Obtén la clave de API desde las variables de entorno

async function getImage() {
    try {
        console.log(NASA_API_KEY)
        // Realiza la solicitud a la API de la NASA usando la clave de API
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
        return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
        throw new Error('Failed to fetch data from NASA API'); // Lanza un error si ocurre una excepción
    }
}

async function getAsteroides(start_date, end_date) {
    try {
        console.log(start_date, end_date)
        const response = await axios.get(
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${NASA_API_KEY}`
        )
        // Aquí iría la lógica para obtener los datos de los asteroides
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data from NASA API/Asteroides');
    }
}

export default {
    getImage, getAsteroides
};
