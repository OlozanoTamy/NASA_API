import React, { useEffect, useState } from "react";
import axios from "axios";

const NasaImage = () => {
  const [imageData, setImageData] = useState(null); // Inicializa como null para manejar mejor el estado de carga

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get("/nasa");
        setImageData(response.data); // Actualiza el estado con los datos obtenidos
      } catch (error) {
        console.error("Error fetching data from backend:", error);
      }
    };
    fetchImage();
  }, []);

  if (!imageData) {
    return <p>Loading...</p>; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  return (
    <div>
      <h2>{imageData.title}</h2>
      <img
        src={imageData.imageUrl}
        alt={imageData.title}
        style={{ width: "100%", height: "auto" }}
      />
      <p>{imageData.explanation}</p>
    </div>
  );
};

export default NasaImage;
