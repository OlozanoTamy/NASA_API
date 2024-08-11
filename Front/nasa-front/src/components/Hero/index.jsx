import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.section}>
      <h1>Bienvenido al Explorador de la NASA</h1>
      <p>Explora el universo con imagenes e Informacion de la API de la NASA</p>
      <button className={styles.button}>Explora Ahora</button>
    </section>
  );
};

export default Hero;
