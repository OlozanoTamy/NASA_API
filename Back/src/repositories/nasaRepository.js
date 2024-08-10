import axios from "axios";

export default {
    getImage
}

function getImage() {
    //Se genera una nueva promesa con el fin de obtener la imagen del dia
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=dIW9vbkMdfOG9TRQUMr6pVwU31U6MbBXUNmSpyyL`);
            resolve(response);  // Resuelve la promesa con los datos de la respuesta
        } catch (error) {
            reject(error);  // Rechaza la promesa con el error
        }
    });
}