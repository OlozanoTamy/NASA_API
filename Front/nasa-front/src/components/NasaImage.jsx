import React, { useEffect, useState } from "react";
import axios from "axios";

const NasaImage = () => {
  const [imageData, setImageData] = useState({});

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get("/nasa");
        setImageData(response.data);
      } catch (error) {
        console.error("Error fetching data from backend:", error);
      }
    };
    fetchImage();
  }, []);

  return (
    <div>
      {imageData.imageUrl ? (
        <div>
          <h2>{imageData.title}</h2>
          <img
            src={imageData.imageUrl}
            alt={imageData.title}
            style={{ width: "100%", height: "auto" }}
          />
          <p>{imageData.explanation}</p>
        </div>
      ) : (
        <p>Loading...</p> // Puedes añadir esto para manejar el estado de carga
      )}
    </div>
  );
};

export default NasaImage;
