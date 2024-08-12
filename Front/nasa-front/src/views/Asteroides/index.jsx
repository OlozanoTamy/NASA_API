import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import AsteroidItem from "../../components/AsteroidItem";
import styles from "./Asteroides.module.css";

const Asteroides = () => {
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [asteroidData, setAsteroidData] = useState({});

  const getAsteroidData = async () => {
    try {
      const response = await axios.get(
        `${process.env.VITE_API_URL}/nasa/asteroides`,
        {
          params: {
            start_date: dateStart,
            end_date: dateEnd,
          },
        }
      );
      setAsteroidData(response.data.near_earth_objects);
      console.log(response.data.near_earth_objects);
    } catch (error) {
      console.error("Error al obtener datos de asteroides:", error);
    }
  };

  const handleStart = (e) => {
    e.preventDefault();
    setDateStart(e.target.value);
  };

  const handleEnd = (e) => {
    e.preventDefault();
    setDateEnd(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <section className={styles.container}>
        <div className={styles.content}>
          <h2>
            ¿Quieres saber sobre Asteroides potencialmente peligrosos en una
            fecha específica?
          </h2>
          <input type="date" value={dateStart} onChange={handleStart} />
          <input type="date" value={dateEnd} onChange={handleEnd} />
          <button onClick={getAsteroidData}>Buscar</button>
          <div>
            <div>
              {Object.keys(asteroidData).map((date) => (
                <div key={date}>
                  <h3>Asteroides potencialmente peligrosos el {date}:</h3>
                  <ul>
                    {asteroidData[date].map((asteroid, index) => (
                      <AsteroidItem key={index} asteroid={asteroid} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Asteroides;
