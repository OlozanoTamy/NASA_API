import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "#fff" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
        <li>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>
            Sobre el Proyecto
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
            Contacto
          </Link>
        </li>
        <li>
          <Link
            to="/nasa-image"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Imagen del dia
          </Link>
        </li>
        <li>
          <Link
            to="/nasa-asteroides"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Asteroides Cercanos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
