import "./main.css";

import image9 from "../assets/images/image_9.jpg";
import image12 from "../assets/images/image_12.jpg";
import image16 from "../assets/images/image_16.jpg";
import image20 from "../assets/images/image_20.jpg";
import logoKrochas from "../assets/images/logo_krochas.png";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();

  return (
    <main>
      <section className="main-image-section"></section>
      <section className="main-section">
        <h3>Nord.Team UA + Nestwerk</h3>
        <p>{t("main_hello")}</p>
        <div className="categories">
          <div className="cat">
            <div className="ellipse">
              <img src={image9} alt="" />
            </div>
            <p>{t("main_first")}</p>
          </div>
          <div className="cat">
            <div className="ellipse">
              <img src={image12} alt="" />
            </div>
            <p>{t("main_second")}</p>
          </div>
          <div className="cat">
            <div className="ellipse">
              <img src={image16} alt="" />
            </div>
            <p>{t("main_third")}</p>
          </div>
        </div>
      </section>
      <section className="divider-section">
        <div className="blue"></div>
        <div className="yellow"></div>
      </section>
      <section className="souvenir-section">
        <img src={image20} alt="" />
        <div className="text">
          <h2>{t("souvenirs")}</h2>
          <h2>{t("donations")}</h2>
        </div>
      </section>
      <section className="maps-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.3126012701223!2d8.643586499999998!3d53.3555602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b6cb6c4e1d998d%3A0xc75ff1fb010c77bd!2sAmtsdamm%2040%2C%2027628%20Hagen%20im%20Bremischen!5e0!3m2!1suk!2sde!4v1712852709026!5m2!1suk!2sde"
          width="100%"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="info">
          <h3>{t("date")}</h3>
          <h3>{t("time")}</h3>
          <h3>{t("place")}</h3>
          <a href="https://maps.app.goo.gl/Ltt6h4j1f8GRDmHT6" target="_blank">
            <button>{t("mapsBtn")}</button>
          </a>
        </div>
      </section>
      <p className="forget">{t("forget")}</p>
      <section className="krochas-section">
        <h3>Design by</h3>
        <a href="https://www.krochas.de/" target="_blank">
          <img src={logoKrochas} alt="" />
        </a>
      </section>
    </main>
  );
};

export default Main;
