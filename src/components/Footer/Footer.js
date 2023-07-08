import { Link } from "react-router-dom";

import {
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoGithub,
  BiSolidCloudDownload,
} from "react-icons/bi";

import { IoCall, IoLocationSharp } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <h1 className="LetsWork">
          Have a Project? <br /> Let's Work Together
        </h1>
        <div className="footer-top">
          <div className="contacts">
            <div className="contact calllock">
              <div className="contact call">
                <IoCall />
                <span>+998 91 415 78 33</span>
              </div>
              <div className="contact location">
                <IoLocationSharp />
                <span>Tashkent, Uzbekistan</span>
              </div>
            </div>
            <div className="contact mail">
              <IoMdMailUnread />
              <span>Shoxruxasadov05@mail.ru</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social">
            <Link
              to={"https://www.instagram.com/Shokh.dev"}
              className="social instagram"
              target="_blank"
            >
              <BiLogoInstagramAlt /> <span>Instagram</span>
            </Link>
            <Link
              to={"https://github.com/ShoxruxAsadov"}
              className="social github"
              target="_blank"
            >
              <BiLogoGithub /> <span>GitHub</span>
            </Link>
            <Link
              to={"https://www.linkedin.com/in/shoxruxasadov/"}
              className="social linkedin"
              target="_blank"
            >
              <BiLogoLinkedin /> <span>LinkedIn</span>
            </Link>
            <Link
              className="social resume"
              to={"./resume.pdf"}
              download="Resume"
              target="_blank"
            >
              <BiSolidCloudDownload /> <span>Resume</span>
            </Link>
          </div>
          <div className="ooo">
            <p>Shoxrux Asadov © 2022-2024.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
