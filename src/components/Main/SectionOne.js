import { useTranslation } from "react-i18next";
import Ellipse1 from "../../images/SectionOne/Ellipse1.png";
import Ellipse2 from "../../images/SectionOne/Ellipse2.png";
import Ellipse3 from "../../images/SectionOne/Ellipse3.png";
import Shokhdev from "../../images/SectionOne/Shokhdev.webp";

export default function SectionOne() {
  const [t, i18n] = useTranslation("global");
  return (
    <section className="section section-one">
      <div className="title">
        <h1>
          {t("section-one.frontend")} <br /> <span>&</span>{" "}
          {t("section-one.developer")} <br />
          {t("section-one.react")} <span>&</span>{" "}
          {t("section-one.redux")}
        </h1>
        <div>
          <button className="toContact">
            {t("section-one.toContact")}
          </button>
          <div className="dot">
            <img src={Ellipse1} />
            <img src={Ellipse2} />
            <img src={Ellipse3} />
          </div>
          <p>{t("section-one.available")}</p>
        </div>
      </div>
      <div className="image">
        <img src={Shokhdev} />
        <div className="top">
          <div className="rectangle1"></div>
          <div className="rectangle2"></div>
        </div>
        <div className="rectangle3"></div>
      </div>
    </section>
  );
}
