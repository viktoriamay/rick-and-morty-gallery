import { MainLogo } from "../MainLogo/MainLogo";
import "./Footer.scss";
import { Link } from "react-router-dom";
// import AiOutlineBorder from '@ant-design/icons';
// import { Fa500Px } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div>
            <MainLogo />
            <div className="footer__copyright">Made by viktoriamay</div>
          </div>
          <nav className="footer__links">
            <Link to="/">About project</Link>
            <Link to="/">About RM</Link>
            <Link to="/">Accordion</Link>
          </nav>
          <div className="footer__icons_wrapper">
            <Link to="" target="_blank">
              <FiGithub />
            </Link>
            <Link to="" target="_blank">
              <TbBrandTelegram />
            </Link>
            <Link to="" target="_blank">
              <MdAlternateEmail />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
