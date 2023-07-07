import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { HiMenuAlt3 } from "react-icons/hi";
import Rodal from "rodal";

export default function Header() {
  const [lang, setLang] = useState(false);
  const [rodal, setRodal] = useState(false);
  const [t, i18n] = useTranslation("global");
  const language = localStorage.getItem("lang");
  const handleChangeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  useEffect(() => {
    handleChangeLanguage(language);
  }, [lang]);

  return (
    <>
      <Rodal visible={rodal} onClose={() => setRodal(false)}>
        <h3>Shoxrux Asadov</h3>
        <hr />
      </Rodal>
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <h3>Shokh.dev</h3>
            </Link>
          </div>
          <div className="list">
            <ul className="listUl">
              <NavLink
                to="*home"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className="list">{t("header.home")}</div>
              </NavLink>
              <NavLink
                to="*about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className="list">{t("header.about")}</div>
              </NavLink>
              <NavLink
                to="*resume"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className="list">{t("header.resume")}</div>
              </NavLink>
              <NavLink
                to="*projects"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className="list">{t("header.project")}</div>
              </NavLink>
              <NavLink
                to="*contact"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className="list">{t("header.contact")}</div>
              </NavLink>
            </ul>
            <HiMenuAlt3 onClick={() => setRodal(true)} className="menu" />
            <div className="lang">
              <div onClick={() => setLang(!lang)} className="badge">
                <span>
                  {language === null && "English"}
                  {language === "en" && "English"}
                  {language === "ru" && "Russian"}
                  {language === "uz" && "Uzbek"}
                </span>
                <IoIosArrowDown
                  style={
                    lang
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                />
              </div>
              <ul style={lang ? { opacity: 1 } : { opacity: 0 }}>
                <li
                  onClick={() => {
                    localStorage.setItem("lang", "en");
                    setLang(false);
                  }}
                >
                  English
                </li>
                <li
                  onClick={() => {
                    localStorage.setItem("lang", "ru");
                    setLang(false);
                  }}
                >
                  Russian
                </li>
                <li
                  onClick={() => {
                    localStorage.setItem("lang", "uz");
                    setLang(false);
                  }}
                >
                  Uzbek
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
