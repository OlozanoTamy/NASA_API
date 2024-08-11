import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navBarContainer}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Sobre el Proyecto</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/nasa-image">Imagen del dia</Link>
        </li>
        <li>
          <Link to="/nasa-asteroides">Asteroides Cercanos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
