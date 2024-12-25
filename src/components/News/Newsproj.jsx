import { NavLink } from "react-router-dom";

import "./style.css";

const NewsProj = ({ index, title, img, data }) => {
  return (
    <NavLink to={`/newslist/${index}`}>
      <li className="content-list-tg">
        <img src={img} alt="Project img" className="project__img" />
        <div className="news-content">
          <h3 className="project__title">{title}</h3>
          <p className="news__data">Опубликовано: {data}</p>
        </div>
      </li>
    </NavLink>
  );
};

export default NewsProj;
