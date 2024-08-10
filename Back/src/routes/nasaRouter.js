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

export default router;
