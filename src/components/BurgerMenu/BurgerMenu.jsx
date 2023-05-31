import './BurgerMenu.scss';
import { useContext } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';

export const BurgerMenu = ({ onClick, activeBurger }) => {
  const { theme } = useContext(GalleryContext);

  return (
    <div className="burger_button" onClick={onClick}>
      <div
        className={
          activeBurger
            ? 'burger_btn active'
            : 'burger_btn' && theme === 'light'
            ? 'burger_btn light'
            : 'burger_btn'
        }
      ></div>
    </div>
  );
};
