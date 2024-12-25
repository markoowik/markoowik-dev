import Project from "../components/Project/Project";
import TgProject from "../components/Project/tgProject";

import { projects } from "../helpers/projectsList";
import { tgprojects } from "../helpers/telegramList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
        </ul>
        <h2 className="title-1">Telegram Projects</h2>
        <ul className="projects">
          {tgprojects.map((project, index) => {
            return (
              <TgProject
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
