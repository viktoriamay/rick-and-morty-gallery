import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RickMortyApi from "../../utils/api/rickMortyApi";
import "./ArticlePage.scss";
import { BackButton } from "../../components/BackButton/BackButton";

export const ArticlePage = () => {
  const [articlePageInfo, setArticlePageInfo] = useState({});
  const params = useParams();

  useEffect(() => {
    RickMortyApi.getPostByID(params.articleID)
      .then((data) => setArticlePageInfo(data))
      .catch((error) => console.log(error));
  }, [params.articleID]);
  return (
    <div className="container">
      <div className="article">
      <BackButton />
        <span className="article__id">Article #{articlePageInfo?.id}</span>
        <h1 className="article__title">{articlePageInfo?.title}</h1>
        <p className="article__created">
          {new Date(articlePageInfo?.published_at).toLocaleString("ru-ru")}
        </p>
        <div className="article__image_container">
          <img
            className="article__image"
            src={articlePageInfo?.image_url}
            alt=""
          />
        </div>
        {articlePageInfo?.summary && (
          <p className="article__summary">{articlePageInfo?.summary}</p>
        )}
        <Link
          to={articlePageInfo?.url}
          target="_blank"
          className="article__source"
        >
          {articlePageInfo?.news_site}
        </Link>
      </div>
    </div>
  );
};
