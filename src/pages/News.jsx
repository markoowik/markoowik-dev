import { newsList } from "../helpers/newsList";
import NewsProj from "../components/News/Newsproj";

const News = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Новости</h2>
        <ul className="projects">
          {newsList.map((news, index) => {
            return (
              <NewsProj
                key={index}
                title={news.title}
                img={news.img}
                data={news.data}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default News;
