import nasaRepository from "../repositories/nasaRepository.js";


async function getImage() {
    return await nasaRepository.getImage();

}
export default {
    getImage,
}