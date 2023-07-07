import { useTranslation } from "react-i18next";
import shift from "../../images/SectionThree/shift.png";
import tuit from "../../images/SectionThree/tatu.png";
import upwork from "../../images/SectionThree/upwork.jpg";
import kwork from "../../images/SectionThree/kwork.jpg";

export default function SectionTwo() {
  const [t, i18n] = useTranslation("global");
  const language = localStorage.getItem("lang");

  return (
    <section className="section section-three">
      <div className="education">
        <p>Education</p>
        <div className="edu tuit">
          <img src={tuit} />
          <div className="edu-title">
            <h1>Tashkent University of Information Technology</h1>
            <h2>Software Engineering</h2>
            <h3>September 2022 - June 2026</h3>
          </div>
        </div>
        <div className="edu shift">
          <img src={shift} />
          <div className="edu-title">
            <h1>Shift Academy</h1>
            <h2>Full Stack Developer </h2>
            <h3>December 2022 - December 2023</h3>
          </div>
        </div>
      </div>
      <div className="experience">
        <p>Experience</p>
        <div className="exp upwork">
          <img src={upwork} />
          <div className="exp-title">
            <h1>Tashkent University of Information Technology</h1>
            <h2>Software Engineering</h2>
            <h3>June 2023 ...</h3>
          </div>
        </div>
        <div className="exp kwork">
          <img src={kwork} />
          <div className="exp-title">
            <h1>Tashkent University of Information Technology</h1>
            <h2>Software Engineering</h2>
            <h3>June 2023 ...</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
