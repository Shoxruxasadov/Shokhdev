import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
import { PiArrowSquareInBold } from "react-icons/pi";
import { Link } from "react-router-dom";

import Linear from "../../images/SectionFour/linear.svg";

export default function SectionFour() {
  const [t, i18n] = useTranslation("global");
  const language = localStorage.getItem("lang");

  return (
    <section id="portfolio" className="section section-four">
      <h1 className="portfolio">
        {t("section-four.portfolio")} <span>&</span> {t("section-four.project")}{" "}
      </h1>
      <p className="all-project">
        <span>{t("section-four.seeall")}</span> <IoIosArrowForward />
      </p>
      <div className="projects">
        <div className="project">
          <img src={Linear} />
          <h1>OmenGames</h1>
          <p>{t("section-four.omengamesTitle")}</p>
          <Link to={"https://www.omengames.uz/"}>
            <PiArrowSquareInBold />
          </Link>
        </div>
        <div className="project">
          <img src={Linear} />
          <h1>Lorenzon</h1>
          <p>{t("section-four.lorenzonTitle")}</p>
          <Link to={"https://www.lorenzon.uz/"}>
            <PiArrowSquareInBold />
          </Link>
        </div>
        <div className="project">
          <img src={Linear} />
          <h1>2048 Puzzle</h1>
          <p>{t("section-four.puzzleTitle")}</p>
          <Link to={"https://2048puzzlegames.netlify.app/"}>
            <PiArrowSquareInBold />
          </Link>
        </div>
      </div>
    </section>
  );
}
