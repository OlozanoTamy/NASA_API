import express from "express";
import nasaService from "../services/nasaService.js";


const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await nasaService.getImage();
        const imageUrl = response.url;
        res.status(200).json({
            imageUrl: imageUrl,
            title: response.title,
            explanation: response.explanation
        })
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data from NASA API" });
    }
});


router.get("/asteroides", async (req, res) => {
    try {
        const { start_date, end_date } = req.query;
        console.log("Fechas recibidas:", start_date, end_date);
        const asteroidData = await nasaService.getAsteroides(start_date, end_date);
        res.status(200).json(asteroidData);
    } catch (error) {
        console.error("Error al obtener datos de asteroides:", error);
        res.status(500).json({ message: "Failed to fetch asteroid data" });
    }
});

export default router;
