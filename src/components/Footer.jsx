import logoNordteam from "../assets/images/logo_nordteam.png";
import logoNestwerk from "../assets/images/logo_nestwerk.png";
import { FacebookFill, InstagramFill } from "akar-icons";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logos">
        <img src={logoNordteam} alt="" />
        <a href="https://www.nestwerk.hagen-cux.net/" target="_blank">
          <img src={logoNestwerk} alt="" />
        </a>
      </div>
      <div className="links">
        <a
          href="https://www.instagram.com/nord.team.for.ua?igsh=MTZ6Zzd1bHdiNDdwag=="
          target="_blank"
        >
          <InstagramFill strokeWidth={2} size={52} />
        </a>
        <a
          href="https://www.facebook.com/nord.team.for.ua?mibextid=ZbWKwL"
          target="_blank"
        >
          <FacebookFill strokeWidth={2} size={52} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
