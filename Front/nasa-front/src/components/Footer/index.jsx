import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <p>&copy; 2024 NASA Explorer. All rights reserved.</p>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <li>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Terms of Service
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
