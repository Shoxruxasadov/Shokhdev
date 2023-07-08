import { Link } from "react-router-dom";

import {
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoGithub,
  BiSolidCloudDownload,
} from "react-icons/bi";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="social"></div>
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
