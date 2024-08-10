import express from "express";
import nasaService from "../services/nasaService.js";


const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const imageData = await nasaService.getImage();
        const imageUrl = imageData.data.url;
        res.status(200).json({
            imageUrl: imageUrl,
            title: imageData.data.title,
            explanation: imageData.data.explanation
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data from NASA API" });
    }
});

export default router;
