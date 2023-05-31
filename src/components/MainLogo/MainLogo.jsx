import './MainLogo.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';
import Logo from './img/Rick_and_Morty.png';

export const MainLogo = () => {
  const {
    updatePageNumberCharacters,
    updateStatus,
    updateGender,
    updateSpecies,
  } = useContext(GalleryContext);

  const clearCharacters = () => {
    updatePageNumberCharacters(1);
    updateStatus('');
    updateGender('');
    updateSpecies('');
  };
  return (
    <Link to="/" onClick={() => clearCharacters()}>
      <img className="main__logo" src={Logo} alt="Rick and Morty Logo" />
    </Link>
  );
};
