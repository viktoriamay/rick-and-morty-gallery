import { MainLogo } from "../MainLogo/MainLogo";
import "./Footer.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <MainLogo />
          <nav className="footer__links">
            <Link to="/">About project</Link>
            <Link to="/">About RM</Link>
            <Link to="/">Accordion</Link>
          </nav>
          <div className="footer__icons_wrapper">
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
          </div>
        </div>
        <div className="footer__copyright">Made by virtoriamay</div>
      </div>
    </footer>
  );
};
