import axios from "axios";

const getAstronomyPicture = async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from NASA API' });
    }
};

module.exports = {
    getAstronomyPicture,
};