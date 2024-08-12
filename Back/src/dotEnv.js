// testDotenv.js
import dotenv from 'dotenv';
dotenv.config();

console.log("NASA_API_KEY:", process.env.NASA_API_KEY);
