import { HomepageCategories } from "../../components/Homepage/HomepageCategories/HomepageCategories";
import { HomepageCharacters } from "../../components/Homepage/HomepageCharacters/HomepageCharacters";
import { HomepageInfo } from "../../components/Homepage/HomepageInfo/HomepageInfo";
import { HomepageNews } from "../../components/Homepage/HomepageNews/HomepageNews";
import "./MainPage.scss";

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
