import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import style from "./About.module.css";
const About = () => {
  return (
    <div>
      <Navbar />
      <section className={style.aboutSection}>
        <div className={style.content}>
          <h2>Sobre el Explorador de la NASA</h2>
          <p>
            Este proyecto está diseñado para acercar al público general al vasto
            universo y los descubrimientos científicos que la NASA ha logrado a
            lo largo de los años. A través de una interfaz amigable, podrás
            explorar imágenes impactantes del espacio, conocer detalles sobre
            eventos astronómicos recientes, y acceder a información relevante
            sobre los objetos celestes que nos rodean.
          </p>
          <p>
            El objetivo principal es fomentar la curiosidad y el interés por la
            ciencia y la astronomía, ofreciendo acceso a datos e imágenes que
            normalmente estarían reservados para la comunidad científica.
            Queremos que cualquier persona, sin importar su edad o nivel de
            conocimiento, pueda experimentar la emoción del descubrimiento y
            aprender más sobre nuestro universo.
          </p>
          <p>
            Utilizando la API pública de la NASA, este explorador permite
            visualizar en tiempo real imágenes del día, así como datos sobre
            asteroides cercanos a la Tierra y otros fenómenos astronómicos.
            Además, buscamos destacar cómo la exploración espacial ha impactado
            nuestra comprensión del cosmos y el papel crucial que juega la NASA
            en este proceso.
          </p>
          <p>
            Ya sea que estés buscando inspiración para un proyecto, profundizar
            tu conocimiento en astronomía, o simplemente disfrutar de las
            maravillas del universo, el Explorador de la NASA está aquí para
            llevarte en un viaje a través de las estrellas.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default About;
