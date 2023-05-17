import { Link } from "react-router-dom";
import "./Card.scss";
import { useContext } from "react";
import { GalleryContext } from "../../utils/context/GalleryContext";

export const LocationCard = ({ location }) => {

  const {theme} = useContext(GalleryContext)

  const locationImage = (type) => {
    switch (type) {
      case "Planet":
        return "https://thumbs.dreamstime.com/b/original-exotic-fantasy-green-gas-giant-alien-planet-blue-r-rings-space-scene-environment-video-game-digital-cg-artwork-132260247.jpg";
      case "Cluster":
        return "https://i.ytimg.com/vi/UQQ6S9DxXBk/maxresdefault.jpg";
      case "Space station":
        return "https://i.imgur.com/b3l098L.png";
      case "Microverse":
        return "https://m.media-amazon.com/images/M/MV5BM2I0Nzg0YTktYTc2Zi00NTk4LWI5ZDQtMmVhYjBjZmRmNGM0XkEyXkFqcGdeQXVyNjg4ODczODM@._V1_.jpg";
      case "TV":
        return "https://nefariousreviews.files.wordpress.com/2016/04/rick-and-morty-pizza-ordering-humans.jpg";
      case "Resort":
        return "https://www.iamag.co/wp-content/uploads/2017/10/rick-morty-ca59-598x373.jpeg";
      case "Fantasy town":
        return "https://w0.peakpx.com/wallpaper/854/1020/HD-wallpaper-shroom-town-abstract-city-mushroom-psychedelia-trippy-thumbnail.jpg";
      case "Dream":
        return "https://cdn3.whatculture.com/images/2019/06/22b4de173d0f9d91-600x338.jpg";
      case "Dimension":
        return "https://www.nerdophiles.com/wp-content/uploads/2015/09/ram-stealy-470x264.jpg";
      case "Menagerie":
        return "https://y.yarn.co/b7d5cf22-bbf3-4787-9b09-f05917e29c40_screenshot.jpg";
      case "Game":
        return "https://i.imgur.com/xRbhJ5U.png";
      case "Customs":
        return "https://a-static.besthdwallpaper.com/rick-and-morty-family-cartoon-scenery-wallpaper-3554x1999-89899_53.jpg";
      case "unknown":
        return "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_645/cf8be27a94f3d2959b1f47407085fc2a.jpg";
      case "Mount":
        return "https://img1.hulu.com/user/v3/artwork/8ea2f528-1405-4c60-92af-91ce53625c63?base_image_bucket_name=image_manager&base_image=ddb073c0-a4b1-4b60-a139-99027b071a05&size=600x338&format=jpeg";
      case "Diegesis":
        return "https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/5b15b882-9d4b-44f5-932b-6e001da0d005/2022-10-10.png";
      case "Daycare":
        return "https://m.media-amazon.com/images/M/MV5BODU0OTRlMDUtYTQ3MC00MTYxLWFlOGEtZDk4YWNmZDczZTkyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";
      case "Dwarf planet (Celestial Dwarf)":
        return "https://y.yarn.co/ae3172af-6c6c-46e9-9ae8-f4c799599fe7_screenshot.jpg";
      case "Miniverse":
        return "https://m.media-amazon.com/images/M/MV5BZWFmMzFkNzUtY2I2OC00YmU1LWEzZTctMDQ0MDUxMGRmNDQ3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";
      case "Teenyverse":
        return "https://www.iamag.co/wp-content/uploads/2017/10/rick-morty-ca65-454x284.jpeg";
      case "Box":
        return "https://m.media-amazon.com/images/M/MV5BNGQyOWNhYzQtNTJhNy00NzFhLTkyYTgtYTM4MGI0NmYxMWJiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";
      case "Spacecraft":
        return "https://www.wallpaperflare.com/static/618/113/79/rick-and-morty-adult-swim-cartoon-gray-wallpaper.jpg";
      case "Asteroid":
        return "https://static.tvtropes.org/pmwiki/pub/images/destorying_the_meteor_rick_and_morty_0_11_screenshot.png";
      case "Acid Plant":
        return "https://www.gamespot.com/a/uploads/screen_kubrick/171/1712892/3672912-screen%20shot%202020-05-18%20at%202.13.56%20pm.png";
      case "Reality":
        return "https://thelma.com/wp-content/uploads/2015/08/rickort34.png";
      case "Death Star":
        return "https://static.tvtropes.org/pmwiki/pub/images/star_mort_rickturn_of_the_jerri.png";
      case "Base":
        return "https://imgix.bustle.com/uploads/image/2020/6/1/147ddbb3-c57a-4e0f-bc02-7be8e1cd38b4-ezzyyyau0amy8kh.jpeg";
      case "Liquid":
        return "https://images.immediate.co.uk/production/volatile/sites/3/2021/06/Screenshot-2021-06-20-at-09.53.44-0f75b96.jpg?resize=620,413";
      case "Space":
        return "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ae08e4b3b24f9ff1d0ef0c3e5c9e117c.png";
      case "Hell":
        return "https://www.nme.com/wp-content/uploads/2021/07/Rick_And_Morty_Amortycan_Grickfitti.jpg";
      case "Police Department":
        return "https://heavy.com/wp-content/uploads/2019/12/img_5324-e1576477691827.jpg";
      case "Country":
        return "https://www.pennlive.com/resizer/RRHo2ctZhcKsvrb383gd0ninJ6k=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/EIM2WOWVPBHA5LAVNKHRCOTVJU.png";

      default:
        return "https://mediacloud.theweek.com/image/private/s--xyDb7o_m--/v1608614622/p4pf7m.jpg";
    }
  };

  const parameter = (param, name) => {
    return param === 'unknown' ? param.replace('unknown', 'Unknown') + (name) : param;
  }
  return (
    <Link
      to={`/rick-and-morty-gallery/location/${location.id}`}
      className={`card ${theme}`}
    >
      <div className="card__img_wrapper card__cover_wrapper">
        <img
          className="card__img"
          src={locationImage(location.type)}
          // src="https://overmental.com/wp-content/uploads/2015/10/rick-and-morty-calaxia.jpg"
          alt="Location Cover"
        />
        <div className="card__cover_name_wrapper card__cover_name_wrapper_location">
          <span className="card__cover_name__location">{location.name}</span>
        </div>
      </div>
      <div className="card__info_wrapper">
        <p className="card__name card__name_location">
          Location #{location.id}
        </p>
        <p className={`card__info ${theme}`}>{parameter(location.type, " Type")}</p>
        <p className={`card__info ${theme}`}>{parameter(location.dimension, " Dimension")}</p>
        <p className={`card__info ${theme}`}>Residents: {location.residents.length}</p>
      </div>
    </Link>
  );
};
