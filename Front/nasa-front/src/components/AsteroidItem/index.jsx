import React from "react";
import styles from "./AsteroidItem.module.css";

const AsteroidItem = ({ asteroid }) => {
  console.log(asteroid);
  const {
    name,
    estimated_diameter: { kilometers },
    close_approach_data,
    nasa_jpl_url,
  } = asteroid;

  const diameterMin = kilometers.estimated_diameter_min.toFixed(2);
  const diameterMax = kilometers.estimated_diameter_max.toFixed(2);
  const distance = close_approach_data[0].miss_distance.kilometers;
  const velocity = close_approach_data[0].relative_velocity.kilometers_per_hour;

  const isDangerous = parseFloat(distance) < 500000;

  return (
    <div
      className={`${styles.asteroidCard} ${
        isDangerous ? styles.dangerous : ""
      }`}
    >
      <div className={styles.asteroidName}>{name}</div>
      <div className={styles.asteroidDetails}>
        <p>
          Diámetro: {diameterMin} km - {diameterMax} km
        </p>
        <p>Distancia: {distance} km</p>
        <p>Velocidad: {velocity} km/h</p>
        <p>
          Fecha de aproximación: {close_approach_data[0].close_approach_date}
        </p>
        <p>
          <a href={nasa_jpl_url} target="_blank" rel="noopener noreferrer">
            Mas informacion
          </a>
        </p>
      </div>
    </div>
  );
};

export default AsteroidItem;
