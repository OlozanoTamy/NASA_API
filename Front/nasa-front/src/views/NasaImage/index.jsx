import React, { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./NasaImage.module.css";
const NasaImage = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`${process.env.VITE_API_URL}/nasa`);
        setImageData(response.data);
        console.log(imageData);
      } catch (error) {
        console.error("Error fetching data from backend:", error);
      }
    };
    fetchImage();
  }, []);

  if (!imageData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2>{imageData.title}</h2>
        <img
          src={imageData.imageUrl}
          alt={imageData.title}
          style={{ width: "100%", height: "auto" }}
        />
        <p>{imageData.explanation}</p>
      </div>
      <Footer />
    </div>
  );
};

export default NasaImage;
