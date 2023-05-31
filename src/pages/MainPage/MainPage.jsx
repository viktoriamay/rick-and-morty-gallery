import './MainPage.scss';
import { HomepageInfo } from '../../components/Homepage/HomepageInfo/HomepageInfo';
import { HomepageCategories } from '../../components/Homepage/HomepageCategories/HomepageCategories';
import { HomepageCharacters } from '../../components/Homepage/HomepageCharacters/HomepageCharacters';
import { HomepageNews } from '../../components/Homepage/HomepageNews/HomepageNews';

export const MainPage = () => {
  return (
    <div className="main_page">
      <HomepageInfo />
      <HomepageCategories />
      <HomepageCharacters />
      <HomepageNews />
    </div>
  );
};
