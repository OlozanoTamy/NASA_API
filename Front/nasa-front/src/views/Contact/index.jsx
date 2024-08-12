import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import style from "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <Navbar />
      <section className={style.contactSection}>
        <h2>Contáctanos</h2>
        <p>
          Si tienes alguna pregunta o comentario, no dudes en ponerte en
          contacto con nosotros. Aquí tienes nuestras principales formas de
          contacto:
        </p>
        <div className={style.contactInfo}>
          <div className={style.contactItem}>
            <h3>Dirección</h3>
            <p>Bogota, Colombia</p>
          </div>
          <div className={style.contactItem}>
            <h3>Teléfono</h3>
            <p>(+123) 456-7890</p>
          </div>
          <div className={style.contactItem}>
            <h3>Correo Electrónico</h3>
            <p>
              <a href="mailto:olozanodeveloper@gmail.com">
                olozanodeveloper@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
