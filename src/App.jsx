import { useRef, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import i18n from "./i18n/config";

function App() {
  const [btnText, setBtnText] = useState("UA");

  const changeLang = () => {
    const current = i18n.resolvedLanguage;
    if (current === "de") {
      i18n.changeLanguage("ua");
      setBtnText("DE");
    } else {
      i18n.changeLanguage("de");
      setBtnText("UA");
    }
  };

  return (
    <>
      <div className="wrapper">
        <button onClick={changeLang} className="translate-btn">
          {btnText}
        </button>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
