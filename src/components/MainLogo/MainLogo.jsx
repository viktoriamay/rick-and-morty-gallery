import { Link } from "react-router-dom";
import Logo from "./img/Rick_and_Morty.png";
import "./MainLogo.scss";

export const MainLogo = () => {
  return (
    <Link to="/rick-and-morty-gallery">
      <img className="main__logo" src={Logo} alt="rick-and-morty-logo" />
    </Link>
  );
};
