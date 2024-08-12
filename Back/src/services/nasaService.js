import nasaRepository from "../repositories/nasaRepository.js";


async function getImage() {
    return await nasaRepository.getImage();
}

async function getAsteroides(start_date, end_date) {
    return await nasaRepository.getAsteroides(start_date, end_date);
}

export default {
    getImage,
    getAsteroides,
}