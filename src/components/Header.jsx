import logoNordteam from "../assets/images/logo_nordteam.png";
import logoNestwerk from "../assets/images/logo_nestwerk.png";
import logoKrochas from "../assets/images/logo_krochas.png";

import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="left">
        <img src={logoNordteam} alt="" />
        <a href="https://www.nestwerk.hagen-cux.net/" target="_blank">
          <img src={logoNestwerk} alt="" />
        </a>
      </div>
      <div className="right">
        <span>Design by</span>
        <a href="https://www.krochas.de/" target="_blank">
          <img src={logoKrochas} alt="" />
        </a>
      </div>
    </header>
  );
};

export default Header;
