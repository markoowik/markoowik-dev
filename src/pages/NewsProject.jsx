import { useParams } from "react-router-dom";
import { newsList } from "./../helpers/newsList";

import telegramIcon from "./../components/btnTelegram/telegramIcon.svg";

const NewsProject = () => {
  const { id } = useParams();
  const news = newsList[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <div className="news_content">
            <div className="news-details">
              <img src={news.imgBig} alt="" />
            </div>
            <div>
              <div className="project-details__desc">
                <p className="news-title"> {news.title}</p>
                <p className="news_desk"> {news.desk}</p>
              </div>
              <div className="inform">
                {/* <BtnTelegram className="btn" link="https://instagram.com" /> */}
                {news.telegramLink && (
                  <a
                    href={news.telegramLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                  >
                    <img src={telegramIcon} alt="" className="icon" />
                    Telegram
                  </a>
                )}
                <h2 className="news-data">Опубликовано {news.data}</h2>
              </div>
            </div>
          </div>

          {/* {news.gitHubLink && <BtnGitHub link="https://github.com" />} */}
        </div>
      </div>
    </main>
  );
};

export default NewsProject;
