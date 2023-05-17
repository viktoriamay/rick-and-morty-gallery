import { useLocation, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./BackButton.scss";
import { useContext } from "react";
import { GalleryContext } from "../../utils/context/GalleryContext";

export const BackButton = () => {

  const {theme} = useContext(GalleryContext)
  const navigate = useNavigate();

  const location = useLocation();


  const loo = () => {

    navigate('/rick-and-morty-gallery/explore/characters', { state: { from: '/rick-and-morty-gallery/explore' } });
  } 

  console.log(window.location.pathname === '/rick-and-morty-gallery/explore');

  const prev = location.pathname === '/rick-and-morty-gallery/explore/characters' 

  const pathBack = () => {
    if (location.pathname === '/rick-and-morty-gallery/explore/characters' ) {
      navigate(-2)
      console.log(-2);
    } else {
      
      navigate(-1)
      console.log(-1);
    
    }
  }

  return (
    <div onClick={() => pathBack()} className={`back_button ${theme}`}>
      Назад
    </div>
  );
};
