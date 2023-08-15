import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
import { PiArrowSquareInBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

import Linear from "../../images/SectionFour/linear.svg";

export default function SectionFour() {
  const [t, i18n] = useTranslation("global");
  const language = localStorage.getItem("lang");
  const navigate = useNavigate()

  return (
    <section id="portfolio" className="section section-four">
      <h1 className="portfolio">
        {t("section-four.portfolio")} <span>&</span> {t("section-four.project")}{" "}
      </h1>
      <p onClick={()=>navigate("/project")} className="all-project">
        <span>{t("section-four.seeall")}</span> <IoIosArrowForward />
      </p>
      <div className="projects">
        <div className="project">
          
        </div>
        <div className="project">
        </div>
        <div className="project">
        </div>
      </div>
    </section>
  );
}
