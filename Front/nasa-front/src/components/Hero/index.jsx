import React from "react";

const Hero = () => {
  return (
    <section
      style={{
        padding: "50px",
        textAlign: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h1>Bienvenido al Explorador de la NASA</h1>
      <p>Explora el universo con imagenes e Informacion de la Api de la NASA</p>
      <button style={{ padding: "10px 20px", fontSize: "16px" }}>
        Explora Ahora
      </button>
    </section>
  );
};

export default Hero;
