import { useParams } from "react-router-dom";
import { tgprojects } from "../helpers/telegramList";
import BtnTelegram from "../components/btnTelegram/BtnTelegram";

const ProjectTg = () => {
  const { id } = useParams();
  const tgproject = tgprojects[id]; // Преобразование id в число
  // console.log("Received id:", id); // Логирование id
  // console.log("Parsed projectId:", tgproject); // Логирование projectId

  // if (isNaN(tgproject)) {
  //   console.error("Invalid projectId:", tgproject); // Логирование ошибки
  // }
  // const tgp = tgprojects.find((proj) => proj.id === tgproject); // Поиск проекта по id
  // console.log("Retrieved tgproject:", tgp); // Логирование tgproject
  if (!tgproject) {
    console.error("Project not found:", tgproject); // Логирование ошибки
    return <p>Неверный id проекта</p>; // Обработка неверного id
  }

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{tgproject.title}</h1>
          <div className="service-details__desc">
            <p>{tgproject.desk}</p>
          </div>
          <img
            src={tgproject.imgBig}
            alt={tgproject.title}
            className="project-details__cover"
          />
          <div className="project-details__desc">
            <p>Skills: {tgproject.skills}</p>
          </div>
          {/* <div className="project-details__desc">
            <p>
              {tgproject.support}
              <a href="https://t.me/markoowik">telegram</a>
            </p>
          </div> */}
          {tgproject.telegramLink && (
            <BtnTelegram link={tgproject.telegramLink} />
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectTg;
